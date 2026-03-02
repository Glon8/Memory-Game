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
    const debug = true;

    const images = [C, CSh, CPl, Html, Java, JS, Php, Py, Ru];

    const [useCards, setCards] = useState([]);

    const cards = useRef([]);
    const choosen_list = useRef([]);

    const value_flip = (ind, value_name) => {
        if (!useCards[ind]) return;

        console.log('flipping values');

        setCards(prev => {
            const new_cards = [...prev];

            new_cards[ind] = { ...new_cards[ind], [value_name]: !new_cards[ind][value_name] };

            return new_cards;
        });
    }

    const make_game_pile = () => {
        const img_copy = [...images];

        let quota = 0;

        while (cards.current.length < 16) {
            const ind = Math.floor(Math.random() * img_copy.length);
            quota += 2;

            for (let i = 0; i < 2; i++) {
                cards.current.push({
                    img: img_copy[ind],
                    ind: -1,
                    id: ind,
                    face_up: false,
                    disabled: false
                });
            }

            img_copy.splice(ind, 1);
        }

        if (debug) {
            console.log('GAME PILE:');
            console.log(cards.current);
        }
    }

    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);

        const new_pile = array.map((element, index) => ({ ...element, ind: index }));

        if (debug) {
            console.log('SHUFFLE:');
            console.log(new_pile);
        }

        return new_pile;
    }

    const on_card_click = (res) => {
        if (choosen_list.current.length != 0) {
            let flag = true;

            choosen_list.current.forEach((item) => { if (flag) flag = item.ind != res.ind });

            if (flag) choosen_list.current.push(res);
        }
        else choosen_list.current.push(res);

        if (debug) {
            console.log('Entering in to check is ' + Boolean(choosen_list.current.length == 2));
            console.log(choosen_list.current);
        }

        if (choosen_list.current.length == 2) {
            const [first, second] = choosen_list.current;

            if (debug) {
                if (first.ind != second.ind && first.id == second.id) console.log('No flags has been triggered, cards must be locked!');
                else console.log('Flags has been triggered, cards wont be locked!');
            }

            choosen_list.current.forEach((card) => {
                if (first.ind != second.ind && first.id == second.id) value_flip(card.ind, 'disabled');
                else value_flip(card.ind, 'face_up');
            });

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