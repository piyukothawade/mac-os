import { useState } from 'react'

import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
// import MacWindow from './components/window/MacWindow'
import Github from './components/window/Github'
import Note from './components/window/Note'
import Resume from './components/window/Resume'
import Spotify from './components/window/Spotify'
import Cli from './components/window/Cli'

function App() {
 
  const [windowsState, setWindowsState] = useState({
    github: false,
    spotify: false,
    cli: false,
    note: false,
    resume: false,
  })

  return (
   <main>
    <Nav/>
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      { windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      { windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      { windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
      { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      { windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
      
   </main>
  )
}

export default App
