import React from 'react';
import './Body.css';
import pic from './illustration-working.svg';
import pic1 from './bg-boost-desktop.svg';
import pic5 from './bg-shorten-desktop.svg';
import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';

const Body = () => {
    return (
        <div className="body">
            <div className="header">
                <div className="head">
                    <h1 className="head1 b">More than just shorter links</h1>
                    <p className="para">
                        Build your brand’s recognition and get detailed insights 
                        on how your links are performing.
                    </p>
                    <button className="ton b">Get Started</button>
                </div>
                <div>
                    <img className="pic1" src={pic}/>
                </div>
            </div>
            <div className="main">
                <div className="input" style={{ backgroundImage: `url(${pic5})`}}>
                    <input type="url" placeholder="Shorten a Link Here"/>
                    <button className="enter grow">Shorten it!</button>
                </div>
                <h2 className="mt0">Advanced Statistics</h2>
                <p className="tag">
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard.
                </p>
                <div className="boxes mt0">
                    <div className="box1 grow">
                        <div className="icon"><img src={icon1}/></div>
                        <h3>Brand Recognition</h3>
                        <p className="f5 gray">Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    <div className="box2 grow">
                    <div className="icon"><img src={icon2}/></div>
                        <h3>Detailed Records</h3>
                        <p className="f5 gray">Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions.</p>
                    </div>
                    <div className="box3 grow">
                    <div className="icon"><img src={icon3}/></div>
                        <h3>Fully Customizable</h3>
                        <p className="f5 gray">Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement.</p>
                    </div>
                </div>
            </div>
            <div className="bottom" style={{ backgroundImage: `url(${pic1})`}}>
                <h1>Boost your links today</h1>
                <button className="click b">Get Started</button>
            </div>
        </div> 
    )
}

export default Body;