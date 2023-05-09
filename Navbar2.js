import React from 'react';
import PCS1 from './images/PCS1.png';

function Footer() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid fixed-bottom" style={{position: "fixed", bottom: 0}}>
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
  );
}

export default Footer;
