import React from 'react';
import portrait from '../../images/bren-small.jpg';

const Intro = () => {
    return (
        <div class="centered intro">
			<article>
				<h1>Hi, I'm a photographer who likes to travel</h1>
				<img src={portrait} class='profile' alt='Portrait of Brendan' title='Brendan' />
				<p>My name is Brendan and I am a photographer who enjoys world travel, meeting new people, and discovering new experiences.</p>
				<p>Photography is my way of telling stories, and sharing not only how a place looks but also how it feels. I shoot digitally and use purely prime lenses, as I like the creative opportunities the constraints of a fixed focal length provides me. All of my photos are processed in Adobe Lightroom. With my editing I attempt to evoke the moods and emotions of a scene rather than simply just how it looks.</p>
				<p>Travelling is so much more than the tourist trails, instagram selfie spots, and unattainable influencer lifestyles. I enjoy learning about different cultures and meeting new people, both fellow travelers or friendly locals. My photography is an attempt to observe daily life around the world, while staying respectful of peoples beliefs, homes, and places of work.</p>
				<p>I've had my work featured <a href="https://www.picfair.com/blog/post/best-of-picfair-february-2020">in the best of PicFair for February 2020.</a></p>
			</article>
		</div>
    )
}

export default Intro;