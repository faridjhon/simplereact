 import React, { useEffect, useState } from 'react';

import PlayersData from '../Data/data.json' ;
import './Players.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './Player/Player';


const Players = () => {
    
    const [players,setPlayers]= useState([]);


    useEffect(()=>{
    setPlayers(PlayersData);
    console.log(PlayersData);
    },[])
    return (
        
        <div className="players-container mt-5 text-center ">
            <div className="player-container col-md-7">
                    <h1 className="mb-5" >Bangladesh ODI Squad / Players</h1>
                    
                    
                        {
                            players.map(pl => <Player player={pl}></Player>)
                            
                        }
                    
                    
                   
                </div>

                <div className="cart-container col-md-5 ">
                    
                    <h3>Player Person : {players.length}</h3>
                    {/* <ul>
                        {
                            players.map(player => <li>{player.name}</li>)
                        }
                    </ul> */}
                </div>
        
        
        
        
        
        
        
        
        
        
        
        </div>
           
    );
};

export default Players;