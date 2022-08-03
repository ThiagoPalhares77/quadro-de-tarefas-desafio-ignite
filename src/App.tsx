import { useState } from 'react'

import style from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Board } from './components/Board'

import "./global.css"

function App() {
  
return (
  <div>
  <Header />
  <Input />
  <Board />
  </div>
)
}

export default App
