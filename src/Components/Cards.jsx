import { useState } from 'react'
import { useEffect } from 'react';
import Card from './Card';


const Cards = () => {

    const [allCards, setAllCards] = useState([]);

    useEffect(() => {
        fetch('../public/data.json')
            .then(res => res.json())
            .then(data => setAllCards(data));

    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                allCards.map(card => <Card  key={card.id} card={card}></Card> )
            }
            
        </div>
    );
};

export default Cards;