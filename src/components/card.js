
import React from 'react'

export default function Card(props) {
    return (
        <div className="body-card">
           <div className="card-content">
            <img className="card-img" src={props.img} />
            <div className="content-text">
            <span>Beatufy food</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <button>View Recipe</button>
            </div>
           </div>
        </div>
    )
}
