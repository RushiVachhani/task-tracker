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
            reminder: "true"
        },
        {
            id: 2,
            text: "finish node crash course",
            day: "tomorrow",
            reminder: "true"
        },
        {
            id: 3,
            text: "finish express crash course",
            day: "day after tomorrow",
            reminder: "false"
        },
    ]
  )
  
  const deleteTask = (id) => {
    //console.log('delete', id);
    setTasks(tasks.filter( 
      (task) =>task.id!=id
    ))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
