import React from 'react'

import Card from './Card'

function Board() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    return (<div className='w-per-7 h-per-16 bg-c-light-brown r-2 b-solid b-w-1 b-c-gray grid grid-t-c-4-per-4 r-g-2 c-g-6 p-3 j-content-c'>
        {
            cards.map((card) => {
                return <Card />
            })
        }
    </div>)
}

export default Board