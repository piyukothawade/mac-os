import React from 'react'
import "./dock.scss" 

const Dock = ({ windowsState, setWindowsState}) => {
  return (
    <footer className='dock'>
        <div onClick={(e) => {const icon = e.currentTarget; icon.classList.remove("bounce"); void icon.offsetWidth; 
        icon.classList.add("bounce");
        setWindowsState(state => ({ ...state, github: true })); }} className={`icon github ${windowsState.github ? "active" : ""}`}><img src="/doc-icons/github.svg" alt="" /></div>
        <div onClick={(e) => {const icon = e.currentTarget;icon.classList.remove("bounce");void icon.offsetWidth; // force reflow
        icon.classList.add("bounce");
        setWindowsState(state => ({ ...state, note: true })); }} className={`icon note ${windowsState.note ? "active" : ""}`}><img src="/doc-icons/note.svg" alt="" /></div>
        <div onClick={(e) => {const icon = e.currentTarget;icon.classList.remove("bounce");void icon.offsetWidth; // force reflow
        icon.classList.add("bounce");
        setWindowsState(state => ({ ...state, resume: true })); }} className={`icon pdf ${windowsState.pdf ? "active" : ""}`}><img src="/doc-icons/pdf.svg" alt="" /></div>
        <div onClick={()=>{ window.open("https://calendar.google.com/", "_blank") }} className={`icon calender ${windowsState.calender ? "active" : ""}`}><img src="/doc-icons/calender.svg" alt="" /></div>
        <div onClick={(e) => {const icon = e.currentTarget;icon.classList.remove("bounce");void icon.offsetWidth; // force reflow
        icon.classList.add("bounce");
        setWindowsState(state => ({ ...state, spotify: true }));}} className={`icon spotify ${windowsState.spotify ? "active" : ""}`}><img src="/doc-icons/spotify.svg" alt="" /></div>
        <div onClick={()=>{window.open("mailto:piyukothawade789@gmail.com", "_blank")}} className={`icon mail ${windowsState.mail ? "active" : ""}`}><img src="/doc-icons/mail.svg" alt="" /></div>
        <div onClick={()=>{ window.open("https://www.linkedin.com/in/piyukothawade-7217171b7/", "_blank")}} className={`icon link ${windowsState.link ? "active" : ""}`}><img src="/doc-icons/link.svg" alt="" /></div>
        <div onClick={(e) => { const icon = e.currentTarget; icon.classList.remove("bounce"); void icon.offsetWidth; // force reflow
        icon.classList.add("bounce");
        setWindowsState(state => ({ ...state, cli: true })); }} className={`icon cli ${windowsState.cli ? "active" : ""}`}><img src="/doc-icons/cli.svg" alt="" /></div>

    </footer>

  )
}

export default Dock