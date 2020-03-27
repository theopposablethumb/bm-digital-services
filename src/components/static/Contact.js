import React from 'react';
import { Link } from 'react-router-dom'
import Social from './Social';

const Contact = (props) => {
    if (!props.location) {
        return (
            <div className="centered contact">
                <h2>Contact</h2>
                <p><Link to='contact'>Send me a message or just say hi.</Link> Alternatively you can follow me on one of the following platforms.</p>
                <Social />
            </div>
        )
    } else {
        return (
            <>
                <div class="cover contact"></div>
                <div className="centered">
                    <h1>Follow my work</h1>
			        <p>I'm active on the following social networks. Come and say hi</p>
                    <Social />
                </div>
                <div className="centered photography">
                    <h2>Support me as a photographer</h2>
                    <p>Like my work? Want a print for your home or an image for your latest blog post or news article? I sell prints and digital downloads on the following websites.</p>
                    <ul>
                        <li> <a href="https://google.com">PicFair</a></li>
                        <li><a href="https://google.com">Society6</a></li>
                    </ul>
                    <p>PicFair offer the fairest prices for photographers, with no additional cost to you the consumer, and in my opinion is the best way to support me and the photography community.<br />Digital downloads on Picfair.com are also licensed for editorial or advertising use, sometimes both. Please check each individuals photos license before purchasing.</p>
                    <p>If you want a specific image and can't find it for sale, then contact me directly using the form below.</p>
                </div>
                <div className="centered contact">
                    <h2>Contact me</h2>
                    <p>Want to collaboarate on a creative project, or maybe get a photoshoot of you, your family and your friends? Contact me using the form below. Even if you just like the website and want to say hi, send me a message. I don't run mailing lists and I won't spam your inbox.</p>
                    <form name="contact" method="post">
                        <input type="hidden" name="form-name" value="contact" />
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" defaultValue="" /> 
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" defaultValue="" />
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </>
        )
    } 
}

export default Contact;