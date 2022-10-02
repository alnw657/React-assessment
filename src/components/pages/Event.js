import React from 'react'
import '../../App.css';
import './Event.css';
import { IconName } from "react-icons/im";
import { Button } from 'react-bootstrap';

function Event() {
    return (
        <>


            <div class="container">

                <div class="row">
                    <img className='event-img' src='/images/birthdaycake.png' />

                </div>
                <div className='event-title'>
                    <h2>Birthday Bash</h2>
                    <p>Hosted by Elysia</p>
                </div>
                <div class="row">

                    <div class="col-6">
                        <h5>18 August 6:00PM</h5>
                        <h6>to 19 August 1:00PM UTC +10</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h5>Street name</h5>
                        <h6>Suburb, State, Postcode</h6>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Event;