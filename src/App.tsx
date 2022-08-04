import { useState } from 'react'

import style from './App.module.css'
import { Header } from './components/Header'

import { Board } from './components/Board'

import "./global.css"

function App() {
  
return (
  <div>
  <Header />
  
  <Board />
  </div>
)
}

export default App
