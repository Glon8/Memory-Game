import React, { useEffect, useRef, useState } from 'react'

import Card from './Card'

import C from '../images/C.logo.webp'
import CSh from '../images/CSh.logo.webp'
import CPl from '../images/CPl.logo.webp'
import Html from '../images/HTML.logo.webp'
import Java from '../images/Java.logo.webp'
import JS from '../images/JavaScript.logo.webp'
import Php from '../images/PHP.logo.webp'
import Py from '../images/Python.logo.webp'
import Ru from '../images/Rust.logo.webp'

function Board({ asRefresh }) {
    const images = [C, CSh, CPl, Html, Java, JS, Php, Py, Ru];
    const [useCards, setCards] = useState([]);

    const cards = useRef([]);

    const make_game_pile = () => {
        const img_copy = [...images];

        let id = 1;

        while (cards.current.length < 16) {
            const ind = Math.floor(Math.random() * img_copy.length);

            for (let i = 0; i < 2; i++) cards.current.push({ img: img_copy[ind], id: id });

            id++;

            img_copy.splice(ind, 1);
        }
    }

    const shuffle = (array) => array.sort(() => Math.random() - 0.5);

    useEffect(() => {
        make_game_pile();
        setCards(shuffle(cards.current));
    }, []);

    useEffect(() => {
        cards.current = [];
        make_game_pile();
        setCards(shuffle(cards.current));
    }, [asRefresh]);

    return (<div className='w-per-7 h-per-16 bg-c-light-brown r-2 b-solid b-w-1 b-c-gray grid grid-t-c-4-per-4 r-g-2 c-g-6 p-3 j-content-c'>
        {
            useCards?.map((id_card, ind) => {
                return <Card key={ind} id_card={id_card} />
            })
        }
    </div>)
}

export default Board