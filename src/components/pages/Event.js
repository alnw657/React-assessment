import React from 'react'
import '../../App.css';
import './Event.css';
import { IconName } from "react-icons/im";
import { Button } from 'react-bootstrap';

function Event() {
    return (
        <>
            <div className='event-container'>
                <div className='event-wrapper'>
                    <ul className='event-items'>
                 
                      <h2>Birthday Bash</h2>
                      <p>Hosted by Elysia</p>

                    </ul>

                </div>

            </div>

            <div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
        </>
    );
}

export default Event;