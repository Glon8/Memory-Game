import { useEffect, useRef, useState } from 'react'

import Card from './Card'
import PopUp from './PopUp'

import C from '../images/C.logo.webp'
import CSh from '../images/CSh.logo.webp'
import CPl from '../images/CPl.logo.webp'
import Html from '../images/HTML.logo.webp'
import Java from '../images/Java.logo.webp'
import JS from '../images/JavaScript.logo.webp'
import Php from '../images/PHP.logo.webp'
import Py from '../images/Python.logo.webp'
import Ru from '../images/Rust.logo.webp'

function Board({ asRefresh, toRefresh }) {
    const debug = false;

    const images = [C, CSh, CPl, Html, Java, JS, Php, Py, Ru];

    const [useCards, setCards] = useState([]);
    const [useLock, setLock] = useState(true);
    const [useFinish, setFinish] = useState(false);

    const cards = useRef([]);
    const choosen = useRef([]);

    const value_flip = (ind, value_name) => {
        // check on index existing
        if (!useCards[ind]) return;
        // debug prints
        if (debug) console.log('flipping values');

        setCards(prev => {
            // copying previous array
            const new_cards = [...prev];
            // mutate copied array
            new_cards[ind] = { ...new_cards[ind], [value_name]: !new_cards[ind][value_name] };
            // re-assign
            return new_cards;
        });
    }

    const make_game_pile = () => {
        // copy of the images array to work with
        const img_copy = [...images];
        // fake cards id
        let fake_id = 99;

        while (cards.current.length < 16) {
            // generating a random image
            let ind = Math.floor(Math.random() * img_copy.length);
            //generating fake id
            fake_id -= 2;
            // assigning image & id to pair of cards
            for (let i = 0; i < 2; i++) {
                cards.current.push({
                    img: img_copy[ind],
                    ind: -1,
                    id: fake_id,
                    face_up: false,
                    disabled: false
                });
            }
            // pulling out used image out of list
            img_copy.splice(ind, 1);
        }
        // debug prints
        if (debug) {
            console.log('GAME PILE:');
            console.log(cards.current);
        }
    }

    const shuffle = (array) => {
        // shuffle cards
        array.sort(() => Math.random() - 0.5);
        // re-indexing
        const new_pile = array.map((element, index) => ({ ...element, ind: index }));
        // debug prints
        if (debug) {
            console.log('SHUFFLE:');
            console.log(new_pile);
        }
        return new_pile;
    }

    const finished = () => {
        const finish = useCards.every((item) => item.face_up);
        // debug prints
        if (debug) {
            console.log('>==============Finish Check==============<')
            console.log(useCards);
            console.log('Finish flag is ' + finish);
            if (finish) console.log('USER WON');
            else console.log('User still didnt finished!');
        }
        // check if all the gards are fliped up > if true, show the pop-up > else, nothing
        if (finish) setTimeout(() => { setFinish(true); }, 500);
    }

    const on_card_click = (res) => {
        // check for the same card click > if the same card, do nothing > if length > 2, do nothing > else push in to choosen
        if (choosen.current.length != 0) {
            for (let i = 0; i < choosen.current.length; i++)
                if (choosen.current[i].ind != res.ind) { choosen.current.push(res); break; }
        }
        else if (choosen.current.length > 2) return;
        else choosen.current.push(res);
        // debug prints
        if (debug) {
            console.log('Entering in to check is ' + Boolean(choosen.current.length == 2));
            console.log(choosen.current);
        }

        if (choosen.current.length == 2) {
            // "unpacking"
            const [first, second] = choosen.current;
            // debug prints
            if (debug) {
                if (first.ind != second.ind && first.id == second.id) console.log('No flags has been triggered, cards must be locked!');
                else console.log('Flags has been triggered, cards wont be locked!');
            }
            // check for choosen cards > if indexes differ AND they share the same id, disable both > else, flip the cards back down
            choosen.current.forEach((card) => {
                if (first.ind != second.ind && first.id == second.id) value_flip(card.ind, 'disabled');
                else setTimeout(() => value_flip(card.ind, 'face_up'), 900);
            });
            // erase choosen cards
            choosen.current = [];
        }
    }

    useEffect(() => {
        make_game_pile();

        setCards(shuffle(cards.current));
    }, []);

    useEffect(() => {
        cards.current = [];

        setFinish(false);

        make_game_pile();

        setCards(shuffle(cards.current));
    }, [asRefresh]);

    useEffect(() => {
        if (!useLock) finished();
        else setLock(false);
    }, [useCards]);

    return (<div className='w-per-7 w-per-17-sm w-per-14-md w-per-11-lg h-per-16 bg-c-light-brown r-2 grid grid-t-c-4-per-4 r-g-2 c-g-6 p-3 j-content-c relative'>
        {
            useCards?.map((card_info, ind) => {
                return <Card key={ind} card_info={card_info}
                    asClick={on_card_click}
                    onFlip={() => value_flip(ind, 'face_up')} />
            })
        }


        <PopUp visible={useFinish} asClick={() => toRefresh?.()} />
    </div>)
}

export default Board