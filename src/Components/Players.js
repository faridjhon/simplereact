 import React, { useEffect, useState } from 'react';

import PlayersData from '../Data/data.json' ;
import './Players.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './Player/Player';
import PlayerCard from './PlayerCard/PlayerCard';


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
    const handleAddName =()=>{
    
    }



    return (
        
        <div className="players-container mt-5 text-center ">
            <div className="player-container col-md-7">
                    <h1 className="mb-5" >Bangladesh ODI Squad / Players</h1>
                    
                    
                        {
                            players.map(pl => <Player 
                                handleAddPlayer={handleAddPlayer}
                                handleAddName={handleAddName}
                                player={pl}>

                                </Player>)
                            
                        }
                    
                    
                   
                </div>

                <div className="cart-container col-md-5 ">
                    <PlayerCard cart={cart}></PlayerCard>
                </div>
        
        
        
        
        
        
        
        
        
        
        
        </div>
           
    );
};

export default Players;