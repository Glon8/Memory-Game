import { useState } from 'react'

import './App.css'
import './App.scss'

import Board from './components/Board'
import Button from './components/Button'
import TitleTab from './components/TitleTab'

function App() {
  const [useRefresh, setRefresh] = useState(false);

  return (<div className={`w-per-19 h-per-19 flex f-column m-3 a-items-c j-content-c`}>

    <div className='w-per-8 flex h-fix-3 mb-5'>

      <div className='w-per-17'>
        <TitleTab f_s={8} c={'very-dark-green'} cus={`w-per-18 flex a-items-c pr-5 bg-c-mint-green r-2 pl-3`} m={'m-0'} value={'Memory-Game'} />
      </div>
      <Button c={'light'} bg_c={'dark-red'} b_c={'dark-red'} r={'r-3'} w={`w-per-3`} h={'h-per-20'} value={'Restart'}
        asClick={() => setRefresh(!useRefresh)} />

    </div>
    <Board asRefresh={useRefresh} toRefresh={() => setRefresh(!useRefresh)} />
    <TitleTab f={'tufuli'} f_s={3} c={'very-dark-green'} cus={`w-per-2 flex a-items-c j-content-c pr-5 bb-dashed bb-w-1 bb-c-very-dark-green`} m={'mx-0 mt-5'} value={'Made by Demon_Ruz'} />

  </div>)
}

export default App
