import React from 'react'

import './App.css'
import './App.scss'

import Board from './components/Board'
import Button from './components/Button'
import TitleTab from './components/TitleTab'

function App() {

  return (<div className={`w-per-19 h-per-19 flex f-column m-3 a-items-c`}>

    <div className='w-per-8 flex h-fix-3 mb-5'>

      <TitleTab c={'light'} cusMain={`w-per-18 bg-c-dark`} m={'m-0'} value={'Memory Game'} />
      <div className='w-per-2 flex j-content-r'> <Button w={`w-per-13 h-per-20`} value={'Restart'} /> </div>

    </div>

    <Board />

  </div>)
}

export default App
