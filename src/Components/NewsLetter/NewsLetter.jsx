import React from 'react'
import './NewsLetter.css'
import { Link } from 'react-router-dom'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated.</p>
            <div>
                <input type="email" placeholder='Your email id' />
                <button> <a href="https://mail.google.com/mail/u/0/#inbox">
                    Subscribe
                </a>

                </button>
            </div>
        </div>
    )
}

export default NewsLetter