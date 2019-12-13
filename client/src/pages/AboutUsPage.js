import React from 'react';
import '../App.css';

function AboutUsPage(props) {
  return (
    <div className="col-12 welcome_image2">
      <div>
        <h1>About The Daily Popcorn</h1>
        <br/>
        <p className="App-intro AboutUs-Summary">
            The Daily Popcorn is a social media platform that is made for movie lovers and goers 
            to share <br/> and appreciate each other's opinions of a specific movie they've watched based 
            on genre and desire. <br/> Whether if it's going to the theaters with friends or going on a date,
            our application is capable of <br/> giving people the opportunity to share their own conceptual thoughts
            of what they visualize on the screen. <br/> Developed by three CTP students, our application allows users to
            create an account, allow them  to post <br/> and read people's movie reviews. Users would also be able to
            comment on other user's posts and even <br/> "like" or "dislike" posts.  This application is still in development
            which new features of the application will include like creating meetups <br/> and linking to purchase movie tickets efficiently
            later on next year 2020.  
          </p>
        </div>
        <br/>
        <h2>Meet Our Developers</h2>
      <div2 className="container">
        <div className="row indent1-AboutUs">
          <div className="col">
              Elvis Rodriguez
              <div>
              <img src="https://media.licdn.com/dms/image/C5603AQGhL5nmmk8eBw/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=GWKWKHkahhkCC7MB9H4Zg3zXGn5zfF1u0eji1si48HQ" className="resize-image-AboutUs"/>
              <p>University: CUNY - Medgar Evers College </p>
              <p>Major: Computer Science</p>
              <p>Email: elvisrodriguez1992@gmail.com </p>
              <p>Linkedin: <a href="https://www.linkedin.com/in/elvis-rodriguez-20brklyn20/">Click Me</a></p>
              </div>
          </div>
          <div className="col">
            David Oppong
            <div>
              <img src="https://ca.slack-edge.com/TKP6TDSSK-UKK0P69NE-b0f5d46fd042-512" className="resize-image-AboutUs"/>
              <p>University: CUNY - New York City College Of Technology</p>
              <p>Major: Computer Engineering Technology</p>
              <p>Email: doppong791@outlook.com</p>
              <p>Linkedin: <a href="https://www.linkedin.com/in/davidoppong">Click Me</a></p>
              </div>
          </div>
          <div className="col">
            Brian Cheung
            <div>
              <img src="https://ca.slack-edge.com/TKP6TDSSK-UKNPWBB44-03a9a5ef62f4-512" className="resize-image-AboutUs"/>
              <p>University: CUNY - Brooklyn College</p>
              <p>Major: Computer Science</p>
              <p>Email: brian.cheung214@gmail.com </p>
              <p>Linkedin: <a href="https://www.linkedin.com/in/brian-cheung-43a576130/">Click Me</a></p>
              </div>
            </div>
        </div>
        
        
      </div2>
    </div>
  );
}

export default AboutUsPage;