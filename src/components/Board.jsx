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
    const choosen_list = useRef([]);

    const value_flip = (ind, value_name) => {
        if (!useCards[ind]) return;

        setCards(prev => {
            const new_cards = [...prev];

            new_cards[ind] = { ...new_cards[ind], [value_name]: !new_cards[ind][value_name] };

            return new_cards;
        });
    }

    const make_game_pile = () => {
        const img_copy = [...images];

        let index = 0;
        let quota = 0;

        while (cards.current.length < 16) {
            const ind = Math.floor(Math.random() * img_copy.length);
            quota += 2;

            while (quota > index) {
                cards.current.push({
                    img: img_copy[ind],
                    ind: index,
                    id: ind,
                    face_up: false,
                    disabled: false
                });

                index += 1
            }

            img_copy.splice(ind, 1);
        }
    }

    const shuffle = (array) => array.sort(() => Math.random() - 0.5);

    const on_card_click = (res) => {
        choosen_list.current.push(res);

        console.log('Entering in to check is ' + Boolean(choosen_list.current.length == 2));
        console.log(choosen_list.current);

        if (choosen_list.current.length == 2) {
            const [first, second] = choosen_list.current;

            console.log('first');
            console.log(first);
            console.log('second');
            console.log(second);

            if (first.ind != second.ind && first.id == second.id) {
                console.log('No flags triggered, cards must be locked!');
                value_flip(first.ind, 'disabled');
                value_flip(second.ind, 'disabled');
            }
            else {
                console.log('Flags has been triggered, cards wont be locked!');
                value_flip(first.ind, 'face_up');
                value_flip(second.ind, 'face_up');
            }

            choosen_list.current = [];
        }
    }

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
            useCards?.map((card_info, ind) => {
                return <Card key={ind} card_info={card_info}
                    asClick={on_card_click}
                    onFlip={() => value_flip(ind, 'face_up')} />
            })
        }
    </div>)
}

export default Board