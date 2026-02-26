import React, { useState } from 'react'

import './App.css'
import './App.scss'

import Board from './components/Board'
import Button from './components/Button'
import TitleTab from './components/TitleTab'

function App() {
  const [useRefresh, setRefresh] = useState(false);

  return (<div className={`w-per-19 h-per-19 flex f-column m-3 a-items-c`}>

    <div className='w-per-8 flex h-fix-3 mb-5'>

      <TitleTab f_s={8} c={'dark-green'} cus={`w-per-17 flex a-items-c pr-5`} m={'m-0'} value={'Memory-Game'} />
      <Button c={'light'} bg_c={'dark-red'} b_c={'dark-red'} r={'r-3'} w={`w-per-3`} h={'h-per-20'} value={'Restart'}
        asClick={() => setRefresh(!useRefresh)} />

    </div>

    <Board asRefresh={useRefresh} />

  </div>)
}

export default App
