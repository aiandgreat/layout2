import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="main-container">
        <div className="top-section">
            <div className="box peach"></div>
            <div className="center-boxes">
                <div className=" box-top pink"></div>
                <div className=" box-top pink"></div>
            </div>
            <div className="box peach"></div>
        </div>

        <div className="middle-section">
            <div className="large-box lred"></div>
            <div className="right-boxes">
                <div className="lred"></div>
                <div className="lred"></div>
            </div>
        </div>

        <div className="bottom-section">
            <div className="box large-left purple"></div>
            <div className="box small-center peach"></div>
            <div className="box small-center peach"></div>
            <div className="box large-right purple"></div>
        </div>
    </div>
  )
}

export default App
