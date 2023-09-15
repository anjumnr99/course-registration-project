

import { useState } from 'react'
import { useEffect } from 'react';
import Card from './Card';



const Cards = () => {

    const [allCards, setAllCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState([]);
    const [price, setPrice] = useState(0);
    const [credit, setCredit] = useState(0);
    const [remaining, setRemaining] = useState(20);


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCards(data));

    }, [])

   
    const handleSelect = (card) => {
        const isExist = selectedCard.find((item) => item.id === card.id);
        let totalPrice = card.price;
        let totalCredit = card.credit_hour;
        if (isExist) {
            return alert("you have already selected this course");
        } else {

            selectedCard.forEach((item) => {
                totalPrice = totalPrice + item.price;
                totalCredit = totalCredit + item.credit_hour;
            });

            const remainingCredit = 20 - totalCredit;

            if (totalCredit > 20 || remainingCredit < 0) {
                alert('Cannot add any courses')
            } else {
                setCredit(totalCredit);
                setPrice(totalPrice);


                setRemaining(remainingCredit);
                const allSelectedCard = [...selectedCard, card];
                setSelectedCard(allSelectedCard);
            }


        }

    };


    
    return (


        <div className=' w-full flex gap-6 mt-8'>
            <div className='w-3/4 '>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        allCards.map(card => <Card key={card.id} card={card} handleSelect={handleSelect}></Card>)
                    }

                </div>

            </div>
           

            <div className='w-1/4  h-fit card px-4 bg-base-100 shadow-xl text-start'>
                <h3 className='text-lg font-bold text-[#2F80ED] mt-6'>Credit Hour Remaining {remaining} hr</h3>
                <hr className='my-4 ' />
                <h3 className='text-xl font-bold mb-5'>Course Name</h3>
                <ol className='text-[#1c1b1b99] list-decimal px-4 '>
                    {
                        selectedCard.map((item, idx) => (<li key={idx}>{item.title}</li>))
                    }
                </ol>

                <hr className='my-4 ' />

                <p className='text-base font-medium text-[#1c1b1bcc]'>Total credit hour: {credit}</p>

                <hr className='my-4 ' />

                <p className='text-lg font-semibold mb-6 text-[#1c1b1bcc]'>Total price : {price} USD</p>
            </div>


        </div>




        // <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        //     {
        //         allCards.map(card => <Card key={card.id} card={card} handleSelect={handleSelect}></Card>)
        //     }

        // </div>
    );
};

export default Cards;



