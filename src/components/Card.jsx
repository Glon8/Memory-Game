import TitleTab from './TitleTab'

function Card({ card_info, asClick, onFlip }) {
    return (<div className={`w-per-20 h-per-20 r-1 bg-c-${card_info.face_up ? 'light-yellow' : 'yellow'} flex a-items-c j-content-c relative`} >

        <img className='absolute' hidden={card_info.face_up ? false : true} src={card_info?.img} alt='Cards Front Image' />
        <TitleTab m={'m-0'} cus={`absolute flex j-content-c ${card_info.face_up ? 'none' : ''}`} f_s={10} value={'\u{2753}'} />
        <a href='#' className={`o-20 absolute w-per-20 h-per-20 top-0 left-0`}
            onClick={(e) => {
                e.preventDefault();

                if (card_info?.disabled) return;

                onFlip?.();

                asClick?.(card_info ?? -1);
            }}></a>

    </div>)
}

export default Card