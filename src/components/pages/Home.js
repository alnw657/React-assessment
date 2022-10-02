import React from 'react'
import '../../App.css';
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
             <div class="container">
                <div class="row">
                    <div class="col-6">
                    <h2>Image if</h2>
                    <div className='snapchat'>
                    <h2>SnapChat</h2></div>
                    <h2>had events</h2>
                    <p>Easiliy host and share events with your friends across any social media.</p>
                    </div>
                    <div class="col-6">
                    <img src='/images/landingimage.jpeg' />
                        <Link to='/event'><button>Create my event</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;