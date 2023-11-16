import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RecordAudio from './components/RecordAudio'
import PushNotifications from './components/PushNotifications'
import InstallButton from './components/InstallButton'
import NewButton from './components/NewButton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    

  },[])


  return (
    <>
      <RecordAudio />
      <PushNotifications />
      <InstallButton/>
      <NewButton />
      <button  id="install">instal</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vit titulo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
