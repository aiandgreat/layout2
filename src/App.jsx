import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BottomSection() {
  return <div className="bottom-section">
    <SideBoxes/>
    <SmallCenterBoxes text="C-PCIT9"/>
    <SmallCenterBoxes text="IT3A"/>
    <SideBoxes/>
  </div>
}

function SideBoxes () {
    return <div className="box large-left purple"></div>
}

function SmallCenterBoxes (props) {
    return <div className="box small-center peach">{props.text}</div>
}

function CenterBoxes() {
  return <div className="center-boxes">
    <TopBoxes name="Aian Jae"/>
    <TopBoxes name="Garcia"/>
  </div>;
}

function TopBoxes(props) {
  return <div className="box-top pink">{props.name}</div>;
}

function App() {

  return (
    <div className="main-container">
        <div className="top-section">
            <div className="box peach"></div>
            <CenterBoxes/>
            <div className="box peach"></div>
        </div>

        <div className="middle-section">
            <div className="large-box lred"></div>
            <div className="right-boxes">
                <div className="lred"></div>
                <div className="lred"></div>
            </div>
        </div>

        <BottomSection/>
    </div>
  )
}

export default App
