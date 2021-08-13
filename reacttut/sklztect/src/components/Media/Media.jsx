import React from "react";
import "./Media.css";
function Media() {
      return (
        <div>
          <meta charSet="utf-8" />
          <title>SklzTect/Media</title>
          <link rel="stylesheet" href="css/media.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <header>
            <nav className="navbar navbar-expand-lg bg-light">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <h3><button type="button" className="btn btn-outline-primary">Home</button></h3>
                </li>
              </ul>
            </nav>
          </header>
          <br />
          <br />
          <h2>MEDIA</h2>
          <div className="row">
            <div className="col-lg-4">
              <img className="title-image" src="image/AUDIO AND VIDEO.png" alt="AUDIO AND VIDEO" />
            </div>
            <div className="col-lg-4">
              <img className="title-image" src="image/NETWORKING.png" alt="NETWORKING" />
            </div>
            <div className="col-lg-4">
              <img className="title-image" src="image/PHOTOGRAPHY.png" alt="PHOTOGRAPHY" />
            </div>
            <div className="col-lg-4">
              <img className="title-image" src="image/SPECIAL EFFECTS.png" alt="SPECIAL EFFECTS" />
            </div>
            <div className="col-lg-4">
              <img className="title-image" src="image/VIDEO EDITING.png" alt="VIDEO EDITING" />
            </div>
          </div>
          <footer className="white-section" id="footer">
            <div className="row">
              <div className="col-lg-3">
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <th>
                        <h3>SklzTect</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>Instagram</th>
                    </tr>
                    <tr>
                      <th>Facebook</th>
                    </tr>
                    <tr>
                      <th>Linkedin</th>
                    </tr>
                  </tbody></table>
              </div>
              <div className="col-lg-3">
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <th>
                        <h3>Resources</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>Blogs</th>
                    </tr>
                    <tr>
                      <th>Videos</th>
                    </tr>
                    <tr>
                      <th>Benefites</th>
                    </tr>
                  </tbody></table>
              </div>
              <div className="col-lg-3">
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <th>
                        <h3>Quick Links</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>About us</th>
                    </tr>
                    <tr>
                      <th>Contact</th>
                    </tr>
                    <tr>
                      <th>Success Stories</th>
                    </tr>
                    <tr>
                      <th>SklzTech's App</th>
                    </tr>
                    <tr>
                      <th>Privacy policy</th>
                    </tr>
                    <tr>
                      <th>Terms &amp; Conditions</th>
                    </tr>
                    <tr>
                      <th>Career at SklzTect</th>
                    </tr>
                  </tbody></table>
              </div>
              <div className="col-lg-3">
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <th>
                        <h3>Courses</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>Engineering</th>
                    </tr>
                    <tr>
                      <th>Media</th>
                    </tr>
                    <tr>
                      <th>Administration</th>
                    </tr>
                    <tr>
                      <th>Electronics</th>
                    </tr>
                    <tr>
                      <th>Technology Sale</th>
                    </tr>
                    <tr>
                      <th>Publishing and Art</th>
                    </tr>
                  </tbody></table>
              </div>
            </div>
            <div className="container-fluid">
              <p style={{textAlign: 'center'}} id="Copyright">© Copyright 2021 SklzTect</p>
            </div>
          </footer>
        </div>
      );
    }
    export default Media;
  