import React from 'react';
import './PlayerCard.css';

const PlayerCard = (props) => {
    const cart =props.cart;


    
    let total =0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.salary;
        
    }


    return (
        <div className="mt-5 playercard">
            <h2>Player Total Information</h2>
            <br></br>
            <h5>Player Added : {cart.length}</h5>
            <br></br>
            <h5>Total Salary : {total}</h5>
            <br></br>
            
        </div>
    );
};

export default PlayerCard;