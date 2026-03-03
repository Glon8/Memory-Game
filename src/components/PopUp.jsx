import React from 'react'

import TitleTab from './TitleTab'

function PopUp({ visible }) {
    return (<div hidden={visible ? false : true} className=' w-per-10 h-per-5 absolute flex f-column top-7 left-5 r-3 j-content-c bg-c-light'>

        <TitleTab f_s={9} cus={'flex j-content-c'} value={'YOU WON'} />
        <TitleTab f={'tufuli'} f_s={3} cus={'flex j-content-c'} value={'Click to play again !'} />

    </div>)
}

export default PopUp