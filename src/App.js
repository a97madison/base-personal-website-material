import React from 'react';
import Profile from './Profile1/Profile';
import './App.css';

function App() {

  const headerIntroText = "I am a software engineer.";
  const aboutMeText = "I'm a recent Math/CS grad from University of Waterloo and I have strong experience with writing object-oriented code and have strong work experience with frameworks like React and both full-stack and mobile development, along with other experience displayed on my resume.";
  const fullNameText = "Anthony Madison";
  const emailAddressText = "a97madison@gmail.com";
  // social media information
  const linkedInLinkText = "https://www.linkedin.com/in/anthony-madison-a3417a109/";
  const githubLinkText = "https://github.com/a97madison";
  const twitterLinkText = "https://twitter.com/xanthony2018";
  const facebookLinkText = "https://www.facebook.com/anthonydmadison/";
  const twitchLinkText = "https://www.twitch.tv/legreatness123";
  const githubUsername = "a97madison";
  const twitterUsername = "@xanthony2018";
  const twitchUsername = "legreatness123";
  // const birthdate;
  const birthdate = new Date(1997, 9, 31);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[birthdate.getDay()];
  const month = birthdate.toLocaleString('default', { month: 'long' });
  const date = birthdate.getDate();
  const year = birthdate.getFullYear();  const ageDifMs = Date.now() - birthdate.getTime();
  const birthdateText = day + ", " + month + " " + date + ", " + year;
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  const city = "Waterloo, Ontario, Canada";
  const address = "330 Phillip Street, " + city;
  const cityGoogleMapsLink = "https://www.google.com/maps/place/Waterloo,+ON/@43.4823217,-80.6167598,12z/data=!3m1!4b1!4m5!3m4!1s0x882bf1565ffe672b:0x5037b28c7231d90!8m2!3d43.4642578!4d-80.5204096";
  const addressGoogleMapsLink = "https://www.google.com/maps/place/330+Phillip+St,+Waterloo,+ON+N2L+3W9/@43.4765099,-80.5410853,17z/data=!3m1!4b1!4m5!3m4!1s0x882bf3ff483b4b3f:0x287217f6a1dad096!8m2!3d43.476506!4d-80.5388966";
  const companyWebsiteLink = "https://about.linkedin.com/";

  const informationPairs = [
    // ["Full Name", fullNameText],
    ["Age", age],
    ["Birthdate", birthdateText],
    ["Email", emailAddressText],
    ["LinkedIn", linkedInLinkText],
    ["Github", [githubUsername, githubLinkText]],
    ["Twitter", [twitterUsername, twitterLinkText]],
    ["Facebook", facebookLinkText],
    ["Twitch", [twitchUsername, twitchLinkText]],
    ["Phone #", "1-(226)-808-9619"],
    ["Job Title", "Software Engineer"],
    ["City", [city, cityGoogleMapsLink]],
    ["Address", [address, addressGoogleMapsLink]],
    ["Company", ["LinkedIn", companyWebsiteLink]]
  ];

  const headerFont = "Geneva";
  const pageFont = "Geneva"; //Helvetica
  const bgColour = "#f4f0e2";

  const profileObject = (
    <Profile
      headerFont={headerFont}
      pageFont={pageFont}
      fullName={fullNameText}
      bgColour={bgColour} //"#284d34"
      headerTextColour="grey"
      pageTextColour="blue"
      headerIntro={headerIntroText}
      informationPairs={informationPairs}
      aboutMeText={aboutMeText}
    />
  );

  return (
    <div className="App">
      {profileObject}
    </div>
  );
}

export default App;
