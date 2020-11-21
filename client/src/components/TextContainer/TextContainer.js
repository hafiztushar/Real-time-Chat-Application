import React, { useState, useEffect } from "react";

import onlineIcon from '../../icons/onlineIcon.png';


import './TextContainer.css';




const TextContainer = ({ users }) => {
    const [videoLink, setLink] = useState('');
  useEffect(() => {
     
  });
  return (
    <div className="textContainer">
      <div>
         <div><h1>welcome to the Party</h1>
          <iframe src={videoLink}
          frameborder='0'
          allow='autoplay'
          allowfullscreen
          title='video'
        />
      </div>
        <div>
          <input placeholder="Link" className="joinInput mt-20" type="text"
                  onKeyPress={event => event.key === 'Enter' ? setLink(event.target.value) : null}

             />
        </div>
        
      </div>
      {
        users
          ? (
            <div>
              <span>People currently chatting:</span>
              <div className="activeContainer">
                <h2>
                  {users.map(({ name }) => (
                    <div key={name} className="activeItem">
                      {name}
                      <img alt="Online Icon" src={onlineIcon} />
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          )
          : null
      }
    </div>
  );
}
export default TextContainer;