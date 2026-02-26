import { useState } from 'react'

import TitleTab from './TitleTab'

function Card({ id_card, asClick }) {
    const [useFlipped, setFlipped] = useState(false);

    return (<div className={`w-per-20 h-per-20 r-1 bg-c-${useFlipped ? 'light-yellow' : 'yellow'} flex a-items-c j-content-c relative`} >

        <img className='absolute' hidden={useFlipped ? false : true} src={id_card?.img} alt='Cards Front Image' />
        <TitleTab m={'m-0'} cus={`absolute flex j-content-c ${useFlipped ? 'none' : ''}`} f_s={10} value={'\u{2753}'} />
        <a href='#' className={`o-20 absolute w-per-20 h-per-20 top-0 left-0`}
            onClick={(e) => {
                e.preventDefault();

                setFlipped(!useFlipped);
                asClick?.(id_card?.id ?? -1);
            }}></a>

    </div>)
}

export default Card