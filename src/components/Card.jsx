import { useState } from 'react'

import TitleTab from './TitleTab'

function Card({ id_card, asClick }) {
    const [useFlipped, setFlipped] = useState(false);

    return (<div className={`w-per-20 h-per-20 r-1 b-solid b-w-1 b-c-dark bg-c-yellow a-content-c relative`} >

        <img hidden={useFlipped ? false : true} src={id_card?.img} alt='Cards Front Image' />
        <TitleTab m={'m-0'} cus={`flex j-content-c ${useFlipped ? 'none' : ''}`} f_s={10} value={'\u{2753}'} />
        <a href='#' className={`o-20 absolute w-per-20 h-per-20 top-0 left-0`}
            onClick={() => {
                setFlipped(!useFlipped);
                asClick(id_card?.id ?? -1);
            }}></a>

    </div>)
}

export default Card