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
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-modern-jetset"><a href="https://modernjetset.com" target="_blank" rel="noopener noreferrer"><img src="img/overlay-modern-jetset.png" alt="Modern Jetset" className="grid-img-overlay" /></a></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-interface-message-processor"><a href="https://www.mixcloud.com/irisberkeley/playlists/interface-message-processor/" target="_blank" rel="noopener noreferrer"><img src="img/overlay-interface-message-processor.png" alt="Interface Message Processor" className="grid-img-overlay" /></a></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner"><img src={evileye} className="evil-eye" alt="You spin me right round, baby, right round" /></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-cover-up"><a href="https://www.mixcloud.com/irisberkeley/playlists/the-cover-up-radio-1190/" target="_blank" rel="noopener noreferrer"><img src="img/overlay-cover-up.png" alt="The Cover-Up" className="grid-img-overlay" /></a></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-other-programs"><a href="https://www.mixcloud.com/irisberkeley" target="_blank" rel="noopener noreferrer"><img src="img/overlay-other-shows.png" alt="Other shows" className="grid-img-overlay" /></a></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-instagram"><a href="https://www.instagram.com/irisberkeley" target="_blank" rel="noopener noreferrer"><img src="img/overlay-instagram.png" alt="Instagram" className="grid-img-overlay" /></a></div></div>
            <div className="grid-item-outer"><div className="grid-item-inner grid-img-contact" onClick={()=>{ document.getElementById('text-contact').style.display = 'block'; document.getElementById('grid-container').style.display = 'none'; }}><img src="img/overlay-contact.png" alt="Contact info" className="grid-img-overlay" /></div></div>
          </div>

          <div id="text-about">
            <img src="img/about.jpg" alt="Iris Berkeley" />
            <p><strong>Iris Berkeley likes to connect the dots</strong> &mdash; between deep cuts from the distant past and fresh new releases, between your favorite song and something fab you’ve never heard before, between local darlings and unexpected sounds from halfway around the world.</p>
            <p>She’s been making music shows in some form or another since 1997, including the launch of the legendary <a href="https://web.archive.org/web/20010412174514fw_/http://ucsu.colorado.edu/~schillij/kucb.html" target="_blank" rel="noopener noreferrer">KVCU Radio 1190</a> (Boulder, Colo.) way back in 1998 and a regular slot on the Afternoon Sound Alternative on <a href="http://www.kgnu.org" target="_blank" rel="noopener noreferrer">KGNU</a> (Boulder/Denver, Colo.) since 2019. In 2022, she was voted <strong>Readers' Choice for <a href="https://www.westword.com/best-of/2022" target="_blank" rel="noopener noreferrer">Best Radio DJ</a></strong> in Westword's Best of Denver poll.</p>
            <p>Since 2020, she's been the <strong>host and producer of <a href="https://modernjetset.com" target="_blank" rel="noopener noreferrer">Modern Jetset</a></strong>, a syndicated hour-long weekly program with a focus on eclectic new releases and the vintage influences that feed them. Listen live every week on Radio Rethink's <a href="https://www.radiorethink.com/index.cfm/fuseaction/rr.page/pageID/projects-channelone-eclectic.html" target="_blank" rel="noopener noreferrer">Channel One</a> and KGNU's <a href="http://www.afterfm.com/irisberkeley" target="_blank" rel="noopener noreferrer">AfterFM</a> ... or <strong>grab it for free for your own station</strong> from <a href="https://exchange.prx.org/series/42347-modern-jetset" target="_blank" rel="noopener noreferrer">PRX</a>.</p>
            <p>In person, find Iris all over the globe playing music from funk to lounge to jazz to freeform pop at a variety of events big and small. Anything is fair game when she’s behind the decks, but no matter where it goes, <strong>it’s guaranteed to be a fun ride.</strong></p>
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
            Created on the Native lands of the Arapaho, Cheyenne, and Ute communities. <a href="https://usdac.us/nativeland" target="_blank" rel="noopener noreferrer">Learn more.</a>
          </div>
      </div>
    );
  }
}
export default App;
