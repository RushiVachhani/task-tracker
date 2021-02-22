import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route}from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])
  
  useEffect( () => {
    
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
    
  }, [])

  //fetch data from json-server
  const fetchTasks = async () => {
    const result = await fetch('http://localhost:5000/tasks');
    const data = await result.json();
    console.log(data);

    return data;
  }

  //fetch single task from json-server
  const fetchTask = async (id) => {
    const result = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await result.json();
    console.log(data);

    return data;
  }

  //Add Task
  const addTask = async (task) => {
    const result = await fetch(`http://localhost:5000/tasks`,
      {
        method: "POST",
        headers: {
          "content-type": 'application/json'
        },
        body:JSON.stringify(task)
      }
    )

    const data = await result.json();
    setTasks([...tasks, data]);
  }

  //Delete tasks
  const deleteTask = async (id) => {
    
    await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: "DELETE"
      }
    )
    
    setTasks(tasks.filter( 
      (task) =>task.id!=id
    ))
  }

  //toggle reminder
  const toggleReminder = async (id) => {
    
    const taskToToggle = await fetchTask(id);
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const updateTaskInDb = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(updatedTask)
      }
    )
    
    const data = await updateTaskInDb.json();

    setTasks(tasks.map(
      (task) => task.id === id ? { ...task, reminder: data.reminder } : task
    ))
  }

  return (
    <Router>
      <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
        <Route 
          path='/' 
          exact
          render={ (props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
              <Footer />
            </>
          )} 
        /> 
        <Route path='/about' component={About}/>
      </div>
    </Router>
  );
}

export default App;
