import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function TopBoxes(props) {
  return <div className="box-top pink">{props.name}</div>;
}
function BottomBoxes(props) {
  return <div className="box small-center peach">{props.text}</div>;
}

function App() {

  return (
    <div class="main-container">
        <div class="top-section">
            <div class="box peach"></div>
            <div class="center-boxes">
                <TopBoxes name="Aian Jae"/>
                <TopBoxes name="Garcia"/>
            </div>
            <div class="box peach"></div>
        </div>

        <div class="middle-section">
            <div class="large-box pink"></div>
            <div class="right-boxes">
                <div class="pink"></div>
                <div class="pink"></div>
            </div>
        </div>

        <div class="bottom-section">
            <div class="box large-left purple"></div>
            <BottomBoxes text="C-PCIT9"/>
            <BottomBoxes text="IT3A"/>
            <div class="box large-right purple"></div>
        </div>
    </div>
  )
}

export default App
