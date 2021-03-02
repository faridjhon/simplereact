import React from 'react';

const PlayerCard = (props) => {
    const cart =props.cart;


    
    let total =0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.salary;
        
    }


    return (
        <div>
            <h4>Player Total Information</h4>
            <h5>Player Added :{cart.length}</h5>
            <p>Total Salary : {total}</p>
            
        </div>
    );
};

export default PlayerCard;