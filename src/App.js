import {useState} from 'react'

import Header from './components/header'
import Tasks from './components/tasks'

const App = () => {
  
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: "do finish react project",
            day: "today",
            reminder: true
        },
        {
            id: 2,
            text: "finish node crash course",
            day: "tomorrow",
            reminder: false
        },
        {
            id: 3,
            text: "finish express crash course",
            day: "day after tomorrow",
            reminder: false
        },
    ]
  )
  
  const deleteTask = (id) => {
    //Delete tasks
    setTasks(tasks.filter( 
      (task) =>task.id!=id
    ))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id ? { ...task, reminder: !task.reminder } : task
    ))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
