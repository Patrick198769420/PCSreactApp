import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import abe from './images/abe.jpg';
import PCS1 from './images/PCS1.png';
import cult from './images/cult.jpg';
import econ from './images/econ.jpg';
import ed from './images/ed.jpg';
import doc from './images/doc.jpg';
import army from './images/army.jpg';
import isra2 from './images/isra2.jpg';
import abhs1 from './images/abhs1.jpg';
import adam from './images/adam.jpg';
import patrick from './images/pat.jpg';
import chris from './images/chris.jpg';
import george from './images/george.jpg';
import felix from './images/felix.jpg';
import konrad from './images/konrad.jpg';
import riccardo from './images/riccardo.jpg';
import Mario from './images/mario.jpg';
import relig from './images/relig.jpg';
import Ash from './images/ash.jpg';
import Mystery from './images/mystery.jpg';
import res from './images/res.jpg';
import law from './images/law.jpg';
import kingpurr from './images/kingpurr.jpg';
import Ali from './images/ali.jpg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function Home() {
  return (
    <div class="container">
      <div class="row align-items-center justify-content-center" style={{height: "100vh"}}>
        <div class="col-md-6">
          <div class="card mb-3" style={{maxWidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={kingpurr} class="img-fluid rounded-start" alt="King Purr image"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Welcome to the Puurrty Cats Society!</h5>
                  <p class="card-text fs-4 fw-bold">Under Construction.</p>
                  <p class="card-text"><small class="text-body-secondary">Click to check out our Socciety, and our Constitution</small></p>
                  <Link to="/society" className="btn btn-primary me-2">Society</Link> 
                  <Link to="/constitution" className="btn btn-primary">Constitution</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







function About() {
  return (
<div className="card-deck">
  <div className="card">
    <img src={isra2} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Isra "israelement" Project - Lead/Artist</h5>
      <p className="card-text">Isra is the team lead and artist/creator, hailing from Spain. With extensive experience in the Ethereum and Cardano blockchains, Isra has been a part of numerous projects and is considered an OG in the industry.Isra was the original artist of Spacebudz.</p>
    </div>
  </div>
  <div className="card">
    <img src={abhs1} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Nic "Fettuccine"- Markerting </h5>
      <p className="card-text">Nic is the founder of the first project on Ethereum with Cardano utility. His project ABHS (Angel Baby Hit Squad) has been a bridge between the two communities, and he previously brought his wealth of experience and marketing skills to the PCS team as our marketing lead.</p>
    </div>
  </div>
  <div className="card">
    <img src={adam} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Adam "Catastrophic" Dean - Technical Lead</h5>
      <p className="card-text">Adam is one of the founders of Buffy Bot Publishing and the retired BUFFY Stake Pool. He has contributed significantly to many Cardano projects and has been instrumental in educating newcomers to the blockchain. As the technical lead on PCS, Adam's expertise is invaluable to the team.</p>
    </div>
  </div>
  <div className="card">
    <img src={patrick} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Patrick "BlueCollarCrypto" Organizer/Dev</h5>
      <p className="card-text">Patrick, a Canadian native, brings a wealth of experience to the PCS team as the project organizer and one of its developers. He has demonstrated his commitment to the Cardano community by contributing to various community-led initiatives, including SPOCRA, and running a Cardano Stake Pool with the ticker BLCLR for several months following the release of Shelley.</p>
    </div>
  </div>
  <div className="card">
    <img src={chris} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Chris "puurrcival" - Social Engineer</h5>
      <p className="card-text">Chris joined the team in July 2022, hailing from Germany. As a former Community Advisor for IOHK in the Cardano Foundation, Chris has provided advice and guidance to many OG projects in the Cardano blockchain. As the Concept Lead on PCS, Chris brings his expertise and strategic thinking to the team.</p>
    </div>
  </div>
  <div className="card">
    <img src={riccardo} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">"Riccardo"</h5>
      <p className="card-text">Hailing from Italy, Riccardo has been a advocate/holder/supporter since the project launched in 2022</p>
    </div>
  </div>
  <div className="card">
    <img src={konrad} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">"Konrad"</h5>
      <p className="card-text">Hailing from Poland, Konrad has been a advocate/holder/supporter since the project launched in 2022</p>
    </div>
  </div>
  <div className="card">
    <img src={felix} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">"Felix"</h5>
      <p className="card-text">Hailing from Dominican Republic, Felix has been a advocate/holder/supporter since the project launched in 2022</p>
    </div>
  </div>
  <div className="card">
    <img src={george} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">"George"</h5>
      <p className="card-text">Geroge, Hailing from Cyprus, hes been a PCS advocate/holder/supporter since the project launched in 2022</p>
    </div>
  </div>
</div>

  );
}

function Society() {
  return (
    <div className="content">
      <h1>The PuurrtyCats Society</h1>
      <div className="card-container">
        <div className="card" style={{ width: '18rem' }}>
        <img src={abe} className="card-img-top" alt="..." style={{width: '50%', height: '50%'}} />


          <div className="card-body">
            <h5 className="card-title">Politics</h5>
            <p className="card-text">
Politics can have a significant impact on a society, as it involves decision-making processes that affect the organization and functioning of a community.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Power</li>
            <li className="list-group-item">Limitation</li>
            <li className="list-group-item">Rhetoric</li>
            <li className="list-group-item">Vote</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Vote</a>
            <a href="#" className="card-link">Verify</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
        <img src={cult} className="card-img-top" alt="..." style={{width: '50%', height: '50%'}} />
          <div className="card-body">
            <h5 className="card-title">Culture</h5>
            <p className="card-text">Culture shapes and reflects society's beliefs and values.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Traditions</li>
            <li className="list-group-item">Arts</li>
            <li className="list-group-item">Music</li>
            <li className="list-group-item">Values</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Vote</a>
            <a href="#" className="card-link">Verify</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
        <img src={econ} className="card-img-top" alt="..." style={{width: '50%', height: '50%'}} />
          <div className="card-body">
            <h5 className="card-title">Economics</h5>
            <p className="card-text">Economics pertains to society by affecting the production, distribution, and consumption of goods and services within it.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Currency</li>
            <li className="list-group-item">Distribution</li>
            <li className="list-group-item">Wealth</li>
            <li className="list-group-item">Capital</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Vote</a>
            <a href="#" className="card-link">Verify</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
        <img src={ed} className="card-img-top" alt="..." style={{width: '50%', height: '50%'}} />
          <div className="card-body">
            <h5 className="card-title">Education</h5>
            <p className="card-text">Education equips individuals with knowledge and skills necessary for personal growth and societal progress.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Experience</li>
            <li className="list-group-item">Knowledge</li>
            <li className="list-group-item">Wisdom</li>
            <li className="list-group-item">Level Up</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Vote</a>
            <a href="#" className="card-link">Verify</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
        <img src={doc} className="card-img-top" alt="..." style={{width: '50%', height: '50%'}} />
          <div className="card-body">
            <h5 className="card-title">Health</h5>
            <p className="card-text">Health is a fundamental aspect of society, impacting the well-being and productivity of individuals and communities.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Fitness</li>
            <li className="list-group-item">Health</li>
            <li className="list-group-item">Endurance</li>
            <li className="list-group-item">Restore Health</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Vote</a>
            <a href="#" className="card-link">Verify</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
        <img src={army} className="card-img-top" alt="..." style={{width: '50%', height: '50%'}} />
          <div className="card-body">
            <h5 className="card-title">Military</h5>
            <p className="card-text">Military is an important aspect of society, providing defense and protection for its citizens.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Dicipline</li>
            <li className="list-group-item">Bravery</li>
            <li className="list-group-item">Honroable</li>
            <li className="list-group-item">Values</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Vote</a>
            <a href="#" className="card-link">Verify</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
        <img src={relig} className="card-img-top" alt="..." style={{width: '50%', height: '50%'}} />
          <div className="card-body">
            <h5 className="card-title">Religion</h5>
            <p className="card-text">Religion can play a significant role in shaping the values, beliefs, and practices of a society, often providing a moral and ethical framework for individuals to follow.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Faith</li>
            <li className="list-group-item">Spirit/Spirituality</li>
            <li className="list-group-item">Devotion</li>
            <li className="list-group-item">Reverance</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Vote</a>
            <a href="#" className="card-link">Verify</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
        <img src={res} className="card-img-top" alt="..." style={{width: '50%', height: '50%'}} />
          <div className="card-body">
            <h5 className="card-title">Research</h5>
            <p className="card-text">Research is essential for advancing knowledge and understanding in various fields, including science, medicine, and technology.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Investigative</li>
            <li className="list-group-item">Systematic</li>
            <li className="list-group-item">Thorough</li>
            <li className="list-group-item">Analytical</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Vote</a>
            <a href="#" className="card-link">Verify</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
        <img src={law} className="card-img-top" alt="..." style={{width: '50%', height: '50%'}} />
          <div className="card-body">
            <h5 className="card-title">Law</h5>
            <p className="card-text">Law is a system of rules and principles that governs and regulates behavior within a society. It provides a framework for resolving disputes and maintaining order in a community.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Justice</li>
            <li className="list-group-item">Order</li>
            <li className="list-group-item">Regulation</li>
            <li className="list-group-item">Legalism</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Vote</a>
            <a href="#" className="card-link">Verify</a>
          </div>
        </div>

      </div>
    </div>
  );
}

function Constitution() {
  return (
    <div className="content container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div class="card text-center constitution-card">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">PCS Constitution</h5>
              <p class="card-text">
                <h6>Preamble:</h6>
                <p>We, the PuurrtyCats of this Society, do hereby establish this constitution in order to promote our welfare and secure the blessings of our collective autonomy, and to foster the development of the nine systems of our society.</p>
                
                <h6>Article I: Purpose</h6>
                <p>The purpose of this Society is to create a community of PuurrtyCats that will govern itself in a manner that reflects our unique values and preferences, and to develop the nine systems of our society: Politics, Economy, Law, Culture, Education, Military, Religion, Research, and Health.</p>
                
                <h6>Article II: Membership</h6>
                <p>Membership in this Society shall be open to all PuurrtyCats, regardless of breed or age, who own a valid NFT that grants them access to the community. Each member shall have an equal say in the governance of the Society, and shall have the opportunity to contribute to the development of the nine systems of our society.</p>
                
                <h6>Article III: Governance</h6>
                <p>The Society of PuurrtyCats shall be governed by a council, composed of a rotating group of members chosen by lottery. The council shall be responsible for making decisions that affect the Society as a whole, such as setting rules and regulations, establishing policies, and resolving disputes, with consideration for the development of the nine systems of our society.</p>
                
                <h6>Article IV: Rights and Responsibilities</h6>
                <p>Each member of the Society of PuurrtyCats shall have the right to express their opinions and preferences, and to participate in the decision-making process. Members also have the responsibility to respect the opinions and preferences of others, and to adhere to the rules and regulations established by the council, in a manner that promotes the development of the nine systems of our society.</p>
                
                <h6>Article V: Amendments</h6>
                <p>This constitution may be amended by a two-thirds vote of the council, provided that notice of the proposed amendment has been given to all members at least one week prior to the vote, with consideration for the development of the nine systems of our society.</p>
                
                <h6>Article VI: Dissolution</h6>
                <p>In the event that the Society of PuurrtyCats is dissolved, any assets or funds remaining shall be distributed equally among all members, with consideration for the development of the nine systems of our society.</p>
                
                <h6>Conclusion:</h6>
                <p>We, the PuurrtyCats of this Society, do hereby adopt this constitution as our guiding document, and pledge to work together to create a community that reflects our values and preferences, and that promotes the development of the nine systems of our society: Politics, Economy, Law, Culture, Education, Military, Religion, Research, and Health.</p>
              </p>
              <a href="#" class="btn btn-primary">VOTE</a>
            </div>
            <div class="card-footer text-body-secondary">
              2 days ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




function Connect() {
  return (
    <div class="container">
      <div class="row align-items-center justify-content-center" style={{height: "100vh"}}>
        <div class="col-md-6">
          <div class="card mb-3" style={{maxWidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
              <img src={Ali} class="img-fluid rounded-start" alt="Ash Image"/>                
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Connect</h5>
                  <p class="card-text fs-4 fw-bold">Connect your preferred wallet</p>
                  <p class="card-text"><small class="text-body-secondary">Click to connect and view your collection</small></p>
                  <a href="#" class="btn btn-primary">Connect</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Merch() {
  return (
    <div class="container">
      <div class="row align-items-center justify-content-center" style={{height: "100vh"}}>
        <div class="col-md-6">
          <div class="card mb-3" style={{maxWidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={Ash} class="img-fluid rounded-start" alt="Ash Image"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Merch</h5>
                  <p class="card-text fs-4 fw-bold">PCS Merch Page</p>
                 <p class="card-text"><small class="text-body-secondary">Click to Browse!</small></p>
                  <a href="#" class="btn btn-primary">Click to Browse</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Chat() {
  return (
    <div class="container">
      <div class="row align-items-center justify-content-center" style={{height: "100vh"}}>
        <div class="col-md-6">
          <div class="card mb-3" style={{maxWidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={Mystery} class="img-fluid rounded-start" alt="Chat Image"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Chat</h5>
                  <p class="card-text fs-4 fw-bold">PCS Chat Page.</p>
                  <p class="card-text"><small class="text-body-secondary">Chat with other PuurrtyCats and earn XP to LEVEL UP</small></p>
                  <a href="#" class="btn btn-primary">Click to Chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Games() {
  return (
    <div class="container">
      <div class="row align-items-center justify-content-center" style={{height: "100vh"}}>
        <div class="col-md-6">
          <div class="card mb-3" style={{maxWidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={Mario} class="img-fluid rounded-start" alt="Kobe Bryant Image"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Games</h5>
                  <p class="card-text fs-4 fw-bold">PCS Game Page</p>
                  <p class="card-text"><small class="text-body-secondary">Play Games to earn XP and LEVEL UP!</small></p>
                  <a href="#" class="btn btn-primary">Click to Play</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Footer() {
  return (
    <footer>
        <div className="navbar navbar-expand-lg navbar-dark bg-dark- bottom">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <div className="navbar-text me-3">POWERED BY THE</div>
          <a className="navbar-brand" href="https://www.jpg.store/collection/puurrtycatssociety?tab=items">
            <img src={PCS1} alt="contact us" style={{ maxWidth: "80px", maxHeight: "80px" }} className="d-inline-block align-text-top" />
          </a>
        </div>
        <div className="navbar-nav ms-auto">
          <a href="https://twitter.com/puurrtycats">Twitter</a>
          <span style={{ margin: '0 5px' }}>|</span>
          <a href="https://discord.gg/fEhWszgBzN">Discord</a>
        </div>
      </div>
    </div>
    </footer>
  );
}


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/society" element={<Society />} />
          <Route path="/constitution" element={<Constitution />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/games" element={<Games />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;



