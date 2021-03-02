 import React, { useEffect, useState } from 'react';

import PlayersData from '../Data/data.json' ;
import './Players.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './Player/Player';


const Players = () => {
    
    const [players,setPlayers]= useState([]);
    const [cart,setCart] = useState([]);


    useEffect(()=>{
    setPlayers(PlayersData);
    console.log(PlayersData);
    },[])

    const handleAddPlayer =(player)=>{
        const newCart=[...cart,player];
        setCart(newCart);
    }



    return (
        
        <div className="players-container mt-5 text-center ">
            <div className="player-container col-md-7">
                    <h1 className="mb-5" >Bangladesh ODI Squad / Players</h1>
                    
                    
                        {
                            players.map(pl => <Player 
                                handleAddPlayer={handleAddPlayer}
                                player={pl}>

                                </Player>)
                            
                        }
                    
                    
                   
                </div>

                <div className="cart-container col-md-5 ">
                    <h4>Players Total Information</h4>
                    
                    <h5>Players Added: {cart.length}</h5>
                    <button className="btn btn-danger">Review Players Information</button>
                </div>
        
        
        
        
        
        
        
        
        
        
        
        </div>
           
    );
};

export default Players;