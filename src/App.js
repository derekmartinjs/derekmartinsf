import React from 'react';
import './App.css';
import profile from './profile.jpg';
import {
  BrowserRouter as Router,
//  Switch,
//  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{outline: 'none'}}>
          <nav className="navbar-container navbar-left">
            <Link className="navbar-link active" to="/">Home</Link>
  {/*
      <a className="navbar-link" href="#">Projects</a>
      <a className="navbar-link" href="#">Blog</a>
  */}
          </nav>
          <div className="lines lines-active">
            <span className="line line--one"></span>
            <span className="line line--two"></span>
            <span className="line line--three"></span>
          </div>
          <canvas className="shape-canvas" width="2880" height="726"></canvas>
          <div role="main" className="main">
            <section className="ProfileIntro--homeContainer">
              <button
                data-tooltip="Tap me"
                className="HexButton-container HexButton-loaded HexButton-jump"
                aria-label="Read bio of Derek Martin"
                aria-controls="bio-drawer"
                onClick={() => console.log('clicked!')}
                >
                  <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" className="HexButton--pic">
                      <title>Picture of Derek Martin</title>
                      <defs>
                        <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                          <image xlinkHref={profile} x="-25" width="150" height="100"></image>
                        </pattern>
                      </defs>
                      <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"></polygon>
                  </svg>
                    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" class="HexButton-module--overlay--3mrql" role="presentation">
                      <defs>
                        <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100">
                          <stop offset="45%" stop-color="transparent"></stop>
                          <stop offset="95%" stop-color="#89bcfe"></stop>
                        </linearGradient>
                      </defs>
                      <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#gradient)"></polygon>
                      <line x1="40" y1="83" x2="50" y2="90" stroke-width="1" stroke-linecap="round" stroke="rgba(255,255,255,0.7)"></line>
                      <line x1="50" y1="90" x2="60" y2="83" stroke-width="1" stroke-linecap="round" stroke="rgba(255,255,255,0.7)"></line>
                    </svg>
              </button>
              <h1 id="spinner" class="spinner ProfileIntro--title" style={{perspective: '20em'}}>
                {"Derek  Martin"
                  .split('')
                  .map((letter) => (
                    <span className="outer" style={{paddingLeft: '.1em', display: 'inline-block'}}>
                      <span className="inner" style={{display: 'inline-block', transformOrigin: '50% 0px', transform: 'rotateY(0deg)'}}>
                        {letter}
                      </span>
                    </span>
                  ))}
              </h1>
              <p className="ProfileIntro--subtext">Software Engineer</p>
              <p id="bio-drawer" className="blurb ProfileIntro--bio" aria-hidden="true">
                This is the bio section
              </p>
              <div className="SocialLinks--container SocialLinks--loaded">
                <a href="https://twitter.com/derekmartinsf" target="_blank" className="SocialLinks--link" rel="noopener noreferrer" aria-label="Derek on Twitter" data-tooltip="Twitter">
                  <svg class="color" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.424 3.183c.755-.533 1.766.156 1.548 1.054-.343 1.406-1.03 2.703-1.995 3.774.015.163.022.326.023.49C22 20.36 10.554 26.452.514 20.874c-.92-.51-.527-1.915.526-1.873 1.686.068 3.356-.267 4.874-.967-2.204-1.358-3.615-3.157-4.308-5.285C.89 10.55.996 8.243 1.592 6.05c.18-.663.364-1.163.494-1.456.316-.71 1.286-.805 1.732-.17C5.49 6.807 8.133 8.292 11 8.508c-.016-2.285 1.39-4.34 3.525-5.157 1.933-.737 4.095-.32 5.608 1.035.812-.298 1.582-.702 2.29-1.202zm-2.276 3.305c-.376.113-.784-.005-1.043-.302-.958-1.102-2.502-1.488-3.866-.967-1.366.52-2.26 1.836-2.24 3.31v1c0 .542-.432.986-.974 1-3.26.084-6.376-1.2-8.622-3.487-.395 1.705-.424 3.464.104 5.086.677 2.08 2.227 3.77 4.898 4.956.717.32.805 1.3.156 1.74-1.12.76-2.346 1.33-3.63 1.698C12.612 22.544 20 17.446 20 8.504c0-.217-.022-.433-.062-.646-.063-.328.042-.666.28-.9.223-.22.43-.454.618-.7-.227.083-.456.16-.688.23z" fill-rule="nonzero" fill="#000">
                    </path>
                  </svg>
                </a>
                <a href="https://github.com/derekmartinsf" target="_blank" class="SocialLinks--link" rel="noopener noreferrer" aria-label="Derek on Github" data-tooltip="Github">
                  <svg class="color" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.713 19.042c-2.152.646-3.02.304-4.097-1.028-.072-.09-.37-.468-.45-.567-.644-.795-1.158-1.226-1.923-1.417-.536-.134-1.08.192-1.213.727-.134.536.192 1.08.727 1.213.23.058.462.252.853.735.07.085.368.464.45.565 1.554 1.925 3.235 2.585 6.227 1.688.53-.16.83-.716.67-1.245-.158-.53-.715-.83-1.244-.67zM22.5 9.52c0-1.45-.49-2.85-1.38-3.98.343-1.303.244-2.687-.29-3.934-.118-.273-.35-.48-.636-.565-.057-.016-.127-.03-.21-.043-.94-.136-2.317.235-4.163 1.406-2.183-.518-4.457-.518-6.64 0C7.332 1.233 5.954.86 5.014.997c-.082.012-.152.027-.21.044-.284.086-.517.293-.634.566-.534 1.247-.633 2.63-.29 3.933C2.98 6.677 2.49 8.092 2.5 9.554c0 4.612 2.06 6.866 5.8 7.725-.24.603-.344 1.258-.298 1.92L8 23c0 .552.448 1 1 1s1-.448 1-1v-3.87c-.05-.74.19-1.4.66-1.885.572-.592.222-1.586-.597-1.687C6.27 15.086 4.5 13.598 4.5 9.55c-.006-1.153.433-2.26 1.224-3.09.264-.278.347-.68.213-1.04-.288-.77-.333-1.604-.14-2.392.07.015.147.035.23.06.646.185 1.45.574 2.416 1.223.24.162.54.21.82.135 2.12-.575 4.355-.575 6.475 0 .28.076.578.027.82-.134.966-.648 1.77-1.037 2.414-1.223.084-.024.16-.044.23-.06.194.79.15 1.623-.14 2.393-.133.36-.05.762.214 1.04.785.825 1.224 1.92 1.224 3.06 0 4.088-1.782 5.586-5.55 6.006-.827.092-1.187 1.093-.608 1.69.474.49.714 1.157.66 1.836L15 23c0 .552.448 1 1 1s1-.448 1-1v-3.87c.05-.625-.052-1.267-.29-1.867 3.72-.825 5.79-3.1 5.79-7.743z" fill-rule="nonzero" fill="#000">
                    </path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/martinderek" target="_blank" class="SocialLinks--link" rel="noopener noreferrer" aria-label="Derek on LinkedIn" data-tooltip="LinkedIn">
                  <svg class="color" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6C1.343 6 0 4.657 0 3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0-2c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM3 10c-.552 0-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9c0-.552-.448-1-1-1zm0-2c1.657 0 3 1.343 3 3v9c0 1.657-1.343 3-3 3s-3-1.343-3-3v-9c0-1.657 1.343-3 3-3zM10 14.243v6.034c0 .403.448.73 1 .73s1-.327 1-.73V15.1c.022-4.098 8-4.133 8-.037v5.214c0 .403.448.73 1 .73s1-.327 1-.73v-6.034c0-4.415-3.082-4.25-6-4.25s-6-.19-6 4.25zm6-6.252c8.467 0 8 4.24 8 6.253v6.568c0 1.21-1.343 2.19-3 2.19s-3-.98-3-2.19v-5.204c0-2.13-3.988-2.137-4 .043v5.16c0 1.21-1.343 2.19-3 2.19s-3-.98-3-2.19v-6.567c0-1.692-.467-6.252 8-6.252z">
                    </path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/merekdartin" target="_blank" class="SocialLinks--link" rel="noopener noreferrer" aria-label="Derek on Instagram" data-tooltip="Instagram">
                <svg class="color" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(2 2)" fill="#000" fill-rule="evenodd"><path d="M5 1C2.79 1 1 2.79 1 5v10c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V5c0-2.21-1.79-4-4-4H5zm0-2h10c3.314 0 6 2.686 6 6v10c0 3.314-2.686 6-6 6H5c-3.314 0-6-2.686-6-6V5c0-3.314 2.686-6 6-6z" fill-rule="nonzero"></path><path d="M13.01 9.517c-.193-1.308-1.22-2.334-2.527-2.528-1.28-.19-2.538.462-3.12 1.618-.58 1.156-.356 2.555.56 3.47.914.915 2.313 1.14 3.47.558 1.155-.58 1.808-1.84 1.618-3.12zm1.98-.294c.316 2.134-.772 4.23-2.7 5.2-1.926.97-4.257.595-5.782-.93-1.526-1.526-1.9-3.857-.93-5.784.97-1.928 3.065-3.016 5.2-2.7 2.177.324 3.888 2.035 4.21 4.213z" fill-rule="nonzero"></path><circle cx="16.5" cy="4.5" r="1"></circle></g></svg>
                </a>
                <a href="mailto:derekmartinsf@gmail.com" target="_blank" class="SocialLinks--link" rel="noopener noreferrer" aria-label="Email derekmartinsf at gmail" data-tooltip="derekmartinsf |at| gmail">
                    <svg class="color" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="#000"><path d="M4 5c-.548 0-1 .452-1 1v12c0 .548.452 1 1 1h16c.548 0 1-.452 1-1V6c0-.548-.452-1-1-1H4zm0-2h16c1.652 0 3 1.348 3 3v12c0 1.652-1.348 3-3 3H4c-1.652 0-3-1.348-3-3V6c0-1.652 1.348-3 3-3z"></path><path d="M12 11.78l-9.427-6.6c-.452-.316-1.076-.206-1.392.247-.316.452-.206 1.076.247 1.392l10 7c.344.24.802.24 1.146 0l10-7c.453-.317.563-.94.246-1.393-.317-.453-.94-.563-1.393-.246L12 11.78z">
                    </path>
                    </g>
                  </svg>
               </a>
               <p class="ProfileIntro--learning">
                 <span>Currently learning about:</span>
                 <span>Fastlane & App Distribution</span>
               </p>
              </div>
            </section>
          </div>
      </div>
    </Router>
  );
}

export default App;
