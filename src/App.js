import React from 'react';
import Profile from './Profile1/Profile';
import HomePage from './HomePage1/HomePage';
import WorkExperience from './WorkExperience1/WorkExperience';
import Education from './Education1/Education';
import Portfolio from './Portfolio1/Portfolio';
import Company from './Company1/Company';
import Sidebar from './Sidebar';

// import font
import './Fonts/fonts.css';

// import css
import { withTheme } from '@material-ui/core';

function App() {

  // DEFINE DATA VARIABLES
  const introText = "I am a software engineer.";
  const aboutMeText = "I'm a recent Math/CS grad from University of Waterloo and I have strong experience with writing object-oriented code and have strong work experience with frameworks like React and both full-stack and mobile development, along with other experience displayed on my resume.";
  const fullNameText = "Anthony Madison";
  const emailAddressText = "a97madison@gmail.com";
  const linkedInLinkText = "https://www.linkedin.com/in/anthony-madison-a3417a109/";
  const githubLinkText = "https://github.com/a97madison";
  const instagramLinkText1 = "https://www.instagram.com/anthony0cap/";
  const instagramLinkText2 = "https://www.instagram.com/fly_sht_only_/";
  const twitterLinkText = "https://twitter.com/xanthony2018";
  const facebookLinkText = "https://www.facebook.com/anthonydmadison/";
  const twitchLinkText = "https://www.twitch.tv/legreatness123";
  const githubUsername = "a97madison";
  const instagramUsername1 = "@anthony0cap";
  const instagramUsername2 = "@fly_sht_only_";
  const twitterUsername = "@xanthony2018";
  const twitchUsername = "legreatness123";
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
  const address = "56 Willow Street, " + city;
  const cityGoogleMapsLink = "https://www.google.com/maps/place/Waterloo,+ON/@43.4823217,-80.6167598,12z/data=!3m1!4b1!4m5!3m4!1s0x882bf1565ffe672b:0x5037b28c7231d90!8m2!3d43.4642578!4d-80.5204096";
  const addressGoogleMapsLink = "";
  const companyWebsiteLink = "https://www.purefacts.com/";

  const informationPairs = [
    // ["Full Name", fullNameText],
    ["Age", age],
    ["Birthdate", birthdateText],
    ["Email", emailAddressText],
    ["Company", "Swish Studios"],
    ["LinkedIn", linkedInLinkText],
    ["Github", [githubUsername, githubLinkText]],
    ["Instagram", [instagramUsername1, instagramLinkText1]],
    ["Instagram", [instagramUsername2, instagramLinkText2]],
    ["Twitter", [twitterUsername, twitterLinkText]],
    ["Facebook", facebookLinkText],
    ["Twitch", [twitchUsername, twitchLinkText]],
    ["Phone #", "1-(226)-808-9619"],
    ["Job Title", "Software Engineer"],
    ["City", [city, cityGoogleMapsLink]],
    ["Address", [address, addressGoogleMapsLink]],
  ];

  const workExperienceCells = [
    {
      companyName:"LINKEDIN",
      position:"iOS ENGINEER",
      companyLink:"https://www.linkedin.com/",
      city:"Sunnyvale, CA",
      timeframe:"Sept. 2019 - Dec. 2019",
      bulletPointsArray:["● Implemented all Objective-C code for detail screens on the profile page of LinkedIn’s iOS app, used object-oriented approach",
                         "● Fixed various bugs throughout the sixteen weeks, improving the Profile page’s SWIFT/Obj-c code in the iOS app",
                         "● Cleaned up dead code across Objective-C pods, refactoring or removing old code where new implementations are now used",
                         "● Wrote unit tests, integration tests and functional tests for most of the Profile page code within LinkedIn’s iOS codebase"]
    },
    {
      companyName:"INKLING",
      position:"SOFTWARE ENGINEER",
      companyLink:"https://www.inkling.com/",
      city:"San Francisco, CA",
      timeframe:"Jan. 2018 - Apr. 2018",
      bulletPointsArray:["● Wrote feature-related code with SWIFT and React Native for different mobile applications Inkling provides to customers",
                         "● Fixed bugs throughout a mobile app’s release, assisted with the web team’s backlog of front-end bugs using React with Redux",
                         "● Helped decide which features were most important for the app to include; worked with PMs and design team on feature design"]
    },
    {
      companyName:"COGNITIVE SYSTEMS CORPORATION",
      position:"FULL-STACK DEVELOPER",
      companyLink:"https://www.cognitivesystems.com/",
      city:"Waterloo, ON",
      timeframe:"May 2017 - Aug. 2017",
      bulletPointsArray:["● Implemented an internal web app that displayed various reports, making use of React, D3.js and Ruby on Rails",
                         "● Constructed three widgets for internal and customer-side web apps using D3.js and React",
                         "● Updated report dashboard and widgets, enabling on-screen elements to react dynamically when users manipulate the screen",
                         "● Leveraged Ruby on Rails to solve flaws within web app"]
    },
    {
      companyName:"CANADIAN INSTITUTE FOR HEALTH INFORMATION",
      position:"FRONT-END DEVELOPER",
      companyLink:"https://www.cihi.ca/en",
      city:"Toronto, ON",
      timeframe:"May 2016 - Aug. 2016",
      bulletPointsArray:["● Designed and implemented plots/diagrams for data visualization with D3.js, providing insight into large quantities of data",
                         "● Implemented multiple features such as legends for diagrams, locational maps and various dynamic web app features",
                         "● Analyzed web frameworks Bootstrap, React, AngularJS and Web Experience Toolkit in a comparison report of frameworks"]
    },
    {
      companyName:"AXONIFY INC.",
      position:"QUALITY ASSURANCE ANALYST",
      companyLink:"https://axonify.com/",
      city:"Waterloo, ON",
      timeframe:"Sept. 2015 - Dec. 2015",
      bulletPointsArray:["● Architected regression test plan and put effective testing measures in place for part of Axonify’s iOS and Android apps",
                         "● Fixed straightforward bugs, found and allocated bugs in code-base, tested bug fixes, executed regression testing",
                         "● Organized team meetings such as sprint planning and standups during month-long sprints"]
    },
    {
      companyName:"PUREFACTS FINANCIAL SOLUTIONS",
      position:"iOS ENGINEER",
      companyLink:"https://www.purefacts.com/",
      city:"Toronto, ON",
      timeframe:"Jan. 2015 - Apr. 2015",
      bulletPointsArray:["● Prepared complete set of test data through SQL procedures in MySQL, for use in testing and demos shown to customers",
                         "● Tested products developed by coworkers and modernized software’s testing system by creating a complete test plan",
                         "● Standardized new automation testing system using Ranorex to improve speed and quality of testing system"]
    },
  ];  

  const educationProps = {
    bulletPointsArray:["● 2019 Honours Bachelor of Mathematics graduate, Computational Math major and Computer Science minor, CO-OP",
                       "● Gained 3+ years of professional work experience as a front-end developer, native mobile engineer, and ios engineer through University of Waterloo's co-op program",
                       "● In Computational Mathematics you learn to analyze data sets, formulae, and images in ways that help us understand the world around us and predict/influence the future",
                       "● In Computer Science you study computers and computational systems. Computer scientists deal mostly with software and software systems; their theory, design, development, and application."],
    schoolLink:"https://uwaterloo.ca/"
  };
 
  const portfolioCells = [
    {
      title: "Two player chess game web application",
      time: "Jun. 2020",
      projectLink: "https://github.com/a97madison/chess-with-react-redux",
      bulletPointsArray:["● Web app is built using React with Redux for local and global store of data alongside JavaScript, HTML, CSS and PHP.",
                         "● N4js is used for type checking of React elements and all of the chess game logic implemented within React components.",
                         "● Read source code and test app here: https://github.com/a97madison/chess-with-react-redux"],
    },
    {
      title: "Personal website",
      time: "Aug. 2020",
      projectLink: "https://www.instagram.com/anthony0cap/",
      bulletPointsArray:["● This website is built entirely using React with Redux"],
    },
    {
      title: "@cian.p's personal website",
      time: "Sept. 2020",
      projectLink: "https://www.instagram.com/cian.p/",
      bulletPointsArray:["● This website is built entirely using React with Redux"],
    },
    {
      title: "Young Lung's personal website",
      time: "Sept. 2020",
      projectLink: "https://www.instagram.com/younglungs98/",
      bulletPointsArray:["● This website is built entirely using React with Redux"],
    },
    {
      title: "Swish Studio's website",
      time: "Sept. 2020",
      projectLink: "https://www.instagram.com/swish.studios/",
      bulletPointsArray:["● This website is built entirely using React with Redux"],
    }
  ];

  const headerFont = "ModestoW01-Open";
  const bgColour = "#f4f0e2";
  const appHeight = "90vh", appWidth = "80vw", sidebarWidth = "20vw";

  // page colours
  const color1 = "rgb(244,240,226)";
  const color2 = "rgb(231,255,221)";
  const color3 = "rgb(244,223,223)";
  const color4 = "rgb(237,230,255)";
  const color5 = "rgb(216, 245, 253)";
  const color6 = "rgb(240, 230, 210)";
  const color7 = "rgb(255, 255, 255)";

  // DEFINE REACT OBJECTS
  const homePageObject = (
    <HomePage
      textFont={headerFont}
      color1={color2}
      color2={color1}
      appHeight={appHeight}
      appWidth={appWidth}
      fullName={fullNameText}
      introText={introText}
    />
  );

  const profileObject = (
    <Profile
      color1={color3}
      color2={color2}
      appHeight={appHeight}
      fullName={fullNameText}
      bgColour={bgColour}
      informationPairs={informationPairs}
      aboutMeText={aboutMeText}
    />
  );

  const workExperienceObject = (
    <WorkExperience
      color1={color4}
      color2={color3}
      appHeight={appHeight}
      cellsProps={workExperienceCells}
    />
  );

  const educationObject = (
    <Education
      color1={color5}
      color2={color4}
      appHeight={appHeight}
      educationProps={educationProps}
    />
  );

  const portfolioObject = (
    <Portfolio
      color1={color6}
      color2={color5}
      appHeight={appHeight}
      appWidth={appWidth}
      cellsProps={portfolioCells}
    />
  );

  const companyObject = (
    <Company
      color1={color7}
      color2={color6}
      appWidth={appWidth}
    />
  );

  const items = [
    { name: 'home', label: 'Home Page' },
    { name: 'profile', label: 'Profile' },
    { name: 'work', label: 'Work Experience' },
    { name: 'education', label: 'Education' },
    { name: 'portfolio', label: 'Portfolio' },
    { name: 'company', label: 'Company' }
  ];  

  const sidebarObject = (
    <Sidebar 
      items={items} 
      appHeight={appHeight}
      appWidth={appWidth}
    />
  );

  // DEFINE STYLE CONSTANTS
  const appStyle = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    margin: "0px 0px 0px 0px",
    fontFamily: 'Geneva',
    color: 'darkgrey'
  };

  const adContainerStyle = {
    height: "10vh",
    width: "100%",
    position: "fixed",
    top: "90vh",
    backgroundColor: "white"
  }

  // RETURN APP COMPONENT
  return (
    <div style={appStyle}>
      {sidebarObject}
      <div>
        {profileObject}
        {homePageObject}
        {workExperienceObject}
        {educationObject}
        {portfolioObject}
        {companyObject}
      </div>
    <div style={adContainerStyle}>{""}</div>
    </div>
  );
}

export default App;
