// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App




import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
// import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';



function App() {
 

  return (
    <div className="container">
      <div className="sidebar">
      <h2>Resumizeme</h2>
      <hr></hr>
      <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: '20px' }} className="search-icon"/>
          <input type="text" placeholder="Search" />
        </div>
        <h3>My templates</h3>
        <ul>
          <li>
          <FontAwesomeIcon icon={faStar} style={{  color: 'gold' }} className="star-icon" />Software Engineer</li>
          <li>
          <FontAwesomeIcon icon={faStar} style={{  color: 'gold' }} className="star-icon" />Computer hardware engineer</li>
          <li>
          <FontAwesomeIcon icon={faStar} style={{  color: 'gold' }} className="star-icon" />Network Engineer</li>
          <li>
          <FontAwesomeIcon icon={faStar} style={{  color: 'gold' }} className="star-icon" />Technical Support</li>
          <li>
          <FontAwesomeIcon icon={faStar} style={{  color: 'gold' }} className="star-icon" />Network administrator</li>
          <li>
          <FontAwesomeIcon icon={faStar} style={{  color: 'gold' }} className="star-icon" />Management</li>
          <li>
          <FontAwesomeIcon icon={faStar} style={{  color: 'gold' }} className="star-icon" />Data analysis</li>
          <li>
          <FontAwesomeIcon icon={faStar} style={{  color: 'gold' }} className="star-icon" />Computer technician</li>
          <li>
          <FontAwesomeIcon icon={faClock} style={{  color: 'black' }} className="clock-icon" />Past search 1</li>
          <li>
          <FontAwesomeIcon icon={faClock} style={{  color: 'black' }} className="clock-icon" />Past search 2</li>
          <li><FontAwesomeIcon icon={faClock} style={{  color: 'black' }} className="clock-icon" />Computers and information...</li>
          <li>
          <FontAwesomeIcon icon={faClock} style={{  color: 'black' }} className="clock-icon" />Database Administrator</li>
          <li>
          <FontAwesomeIcon icon={faClock} style={{  color: 'black' }} className="clock-icon" />Computer security</li>
          <li>
          <FontAwesomeIcon icon={faClock} style={{  color: 'black' }} className="clock-icon" />Computer Systems Analyst</li>
        </ul>
        <h3>My boards</h3>
        <ul>
          <li>
          <FontAwesomeIcon icon={faChalkboard} style={{  color: 'gold' }} className="file-icon"/>Board 1</li>
          <li>
          <FontAwesomeIcon icon={faChalkboard} style={{  color: 'gold' }} className="file-icon"/>Board 2</li>
          <li>
          <FontAwesomeIcon icon={faChalkboard} style={{  color: 'gold' }} className="file-icon"/>Board 3</li>
          <li>
          <FontAwesomeIcon icon={faLock} style={{  color: 'gold' }} className="lock-icon"/>Board agent 1</li>
          <li><FontAwesomeIcon icon={faLock} style={{  color: 'gold' }} className="lock-icon"/>Board agent 1</li>
          <li><FontAwesomeIcon icon={faLock} style={{  color: 'gold' }} className="lock-icon"/>Board agent 1</li>
        </ul>

        <hr></hr>
        <div className='profile'>
        <img src="" alt="profile image" />
          <p>Carla</p>
          <FontAwesomeIcon icon={faCog} className="settings-icon" />
        </div>
      </div>
      <div className="main">
        <div className="header">
          <h2><FontAwesomeIcon icon={faLock} style={{  color: 'blue' }} className="premium-icon"/>Premium Account</h2>
          <p>You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.</p>
        </div>
        {/* <div className="personal-information">
          <h3>Personal Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Save</button>
          </form>
          <div className="checkbox">
            <input type="checkbox" id="showProfile" checked={showProfile} onChange={() => setShowProfile(!showProfile)} />
            <label htmlFor="showProfile">Show my profile to serious employers on hirethesbest.io for free</label>
          </div>
        </div> */}

        <div className="personal-info">
           <h2>Personal Information</h2>
           <form>
            <div className="form-row1">
              <input type="text" placeholder="First Name"  />
              <input type="text" placeholder="Last Name"  />
            </div>
            <div className='form-row2'>
            <img src="" alt="Profile Picture" />
            </div>
            <div className="form-row">

              <input type="text" placeholder="City"  />
               <input type="text" placeholder="Postal Code"  />
             </div>
             <div className="form-row">
               <input type="text" placeholder="Address"  className='address'/>
             </div>
             <div className="form-row">
               <input type="email" placeholder="Email"  />
              <input type="tel" placeholder="Phone"  />
              
            </div>
            <div className="form-row">
               <input type="password" placeholder="Password" />
             
            </div>
            <p>
            Use this email to log in to your <a href="https://resumedone.io">resumedone.io</a> account and receive notifications.
          </p>
          
             <button type="submit" className="save-btn">Save</button>
           </form>
           
         </div>
        <div className="delete-account">
          <h3>Delete account</h3>
          <p>If you delete your account you'll be permanently removing it from our systems - you can't undo it.</p>
          <button onClick={() => alert('Deleting your account is not implemented yet.')}>Yes, Delete my account</button>
        </div>
        <div className="footer">
           <a>Get in touch with our support team</a><p>if you have any question or want to leave some feedback. We'll be happy to hear from you.</p>
          <hr></hr>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
