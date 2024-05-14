import React from "react"
import "../App.css";

export function Navigator(){
   return( 
   <>
      <nav className='topSection'>
          <div className='top1level'>
            <img  src="Foody Zone.svg" alt="foody zone" />
            <input className="search" type="text" placeholder="search Food...."></input>
          </div>

          <div className='top2level'>

            <ul className='toplist'>
              <li className='topListItem'>All</li>
              <li className='topListItem'>Breakfast</li>
              <li className='topListItem'>Lunch</li>
              <li className='topListItem'>Dinner</li>
            </ul>
          </div>
        </nav>
    </>
   )
}
