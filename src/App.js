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
  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
