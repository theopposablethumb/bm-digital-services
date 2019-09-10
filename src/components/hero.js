import React from 'react';

class Hero extends React.Component {
    render () {
        return(
            <div id="hero">
		        <img src="bren-sm.jpg" alt="Portrait of Brendan Meachen" />
				<div>
			        <h1><span>Hello,</span><br /><span>I'm Brendan</span></h1>
			        <p>I'm a consultant with 15 years experience working with Websites and Digital Experiences</p>
		        </div>
	        </div>
        )
    }
}

export default Hero;