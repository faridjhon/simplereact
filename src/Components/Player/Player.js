import React from 'react';
import './Player.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    
    const{image,name,playing ,batting ,salary} =props.player;
    // playing,batting
    return (
        <div className="player-container" >
            <div>
                
                <img src={image} alt=""/>
            </div>
            <div>
                <h5>Full Name:{name}</h5>
                <p>Roll :{playing}</p>
                <p>Type :{batting}</p>
                <p>TK:{salary}Tk</p>
                <button className="btn btn-danger" 
                onClick={()=>props.handleAddPlayer(props.player)}
                >
                <FontAwesomeIcon icon={faCartPlus} />   Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Player;