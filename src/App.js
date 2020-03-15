import React, { Component } from 'react';
import evileye from './evil-eye.svg';
import ccheart from './cc-heart.svg';

class App extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (

      <div className="content-container">
          <h1>Iris Berkeley</h1>

          <div id="grid-container">
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-about" onClick={()=>{ document.getElementById('text-about').style.display = 'block'; document.getElementById('grid-container').style.display = 'none'; }}><img src="img/overlay-about.png" alt="About Iris" className="grid-img-overlay" /></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-afterfm"><a href="http://www.afterfm.com/irisberkeley" target="_blank" rel="noopener noreferrer"><img src="img/overlay-afterfm.png" alt="KGNU shows" className="grid-img-overlay" /></a></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-modern-jetset"><a href="https://www.mixcloud.com/irisberkeley/playlists/modern-jetset-radio-1190/" target="_blank" rel="noopener noreferrer"><img src="img/overlay-modern-jetset.png" alt="Modern Jetset" className="grid-img-overlay" /></a></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-interface-message-processor"><a href="https://www.mixcloud.com/irisberkeley/playlists/interface-message-processor/" target="_blank" rel="noopener noreferrer"><img src="img/overlay-interface-message-processor.png" alt="Interface Message Processor" className="grid-img-overlay" /></a></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner"><img src={evileye} className="evil-eye" alt="Evil-eye logo" /></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-cover-up"><a href="https://www.mixcloud.com/irisberkeley/playlists/the-cover-up-radio-1190/" target="_blank" rel="noopener noreferrer"><img src="img/overlay-cover-up.png" alt="The Cover-Up" className="grid-img-overlay" /></a></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-other-programs"><a href="https://www.mixcloud.com/irisberkeley/playlists/tasty-miscellany/" target="_blank" rel="noopener noreferrer"><img src="img/overlay-other-shows.png" alt="Other shows" className="grid-img-overlay" /></a></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-instagram"><a href="https://www.instagram.com/irisberkeley" target="_blank" rel="noopener noreferrer"><img src="img/overlay-instagram.png" alt="Instagram" className="grid-img-overlay" /></a></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-contact" onClick={()=>{ document.getElementById('text-contact').style.display = 'block'; document.getElementById('grid-container').style.display = 'none'; }}><img src="img/overlay-contact.png" alt="Contact info" className="grid-img-overlay" /></div></div>
          </div>

          <div id="text-about">
            <img src="img/about.jpg" alt="Iris Berkeley" />
            <p><em>Things may come and things may go, but the art school dance goes on forever ...</em></p>
            <p>Iris Berkeley likes to connect the dots: between the music she grew up with and some fab new album from last week, between your favorite song and something you’ve never heard before, between local darlings and sounds from halfway around the world.</p>
            <p>On the radio, find Iris on <a href="http://www.kgnu.org" target="_blank" rel="noopener noreferrer">KGNU-FM</a> and <a href="http://www.radio1190.org" target="_blank" rel="noopener noreferrer">Radio 1190</a> (geographically in Boulder, Colorado USA but of course streaming everywhere).</p>
            <p>In person, find Iris all over North America at anything from private parties to fashion events to dance festivals. She's tickled to jump on a plane, too; summer 2019 found her in residency on Susak, Croatia.</p>
            <p>Anything is fair game when she’s behind the decks, but no matter where it goes, it’ll be a fun ride. </p>
            <center><button onClick={()=>{ document.getElementById('text-about').style.display = 'none'; document.getElementById('grid-container').style.display = 'flex'; }}>Go back</button></center>
          </div>

          <div id="text-contact">
            <img src="img/contact.png" alt="Vintage phone" />
            <p>Questions, comments, requests, or dedications? Here's how to get in touch.</p>
            <h2>Email</h2>
            <p><a href="mailto:mail@irisberkeley.com">mail@irisberkeley.com</a></p>
            <h2>Phone</h2>
            <p>+1 617 871 9804</p>
            <h2>Instagram</h2>
            <p><a href="https://www.instagram.com/irisberkeley" target="_blank" rel="noopener noreferrer">@irisberkeley</a></p>
            <h2>Twitter</h2>
            <p><a href="https://www.twitter.com/irisberkeley" target="_blank" rel="noopener noreferrer">@irisberkeley</a></p>
            <center><button onClick={()=>{ document.getElementById('text-contact').style.display = 'none'; document.getElementById('grid-container').style.display = 'flex'; }}>Go back</button></center>

          </div>

          <div id="footer">
            <a target="_blank" rel="license noopener noreferrer" href="http://creativecommons.org/licenses/by/4.0/"><img src={ccheart} alt="Creative Commons attribution mark" className="cc-heart" /></a> {this.getYear()} Iris Berkeley.
            Created on the native lands of the Arapaho, Cheyenne, and Ute communities. <a href="https://usdac.us/nativeland" target="_blank" rel="noopener noreferrer">Learn more.</a>
          </div>
      </div>
    );
  }
}
export default App;
