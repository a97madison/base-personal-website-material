import React from 'react';
import Profile from './Profile1/Profile';
import HomePage from './HomePage1/HomePage';
import WorkExperience from './WorkExperience1/WorkExperience';
import Education from './Education1/Education';
import Portfolio from './Portfolio1/Portfolio';
// import Company from './Company1/Company';
import Sidebar from './Sidebar';

// import font
import './Fonts/fonts.scss';

import './App.scss';

function App() {

  // DEFINE DATA VARIABLES
  const introText = "Entreneur and IOS, Front-End, Mobile Software Engineer";
  const aboutMeText = "I have recently graduated from University of Waterloo with a Math and Computer Science degree and I am an experienced software engineer; I am most comfortable with iOS developement, front-end work and using React or React Native. I own the business Swish Studio 2020, a company that specializes in clothing manufacturing and mobile/web application development. During my time at LinkedIn, I was on their Profile Page Team and I completed a code migration for a large part of the profile page in the iOS app. While I was a co-op student at Inkling, I assisted with the pilot release of the company's React Native mobile app. Please reach out and I would be happy to share more and learn about new work opportunities.";
  const fullNameText = "Anthony Madison";
  const emailAddressText = "a97madison@gmail.com";
  const linkedInLinkText = "https://www.linkedin.com/in/anthony-madison-a3417a109/";
  const githubLinkText = "https://github.com/a97madison";
  const githubUsername = "a97madison";
  const personalCompanyLinkText = "https://swishstudio2020.com"
  const personalCompanyName = "Swish Studio"
  const birthdate = new Date(1997, 9, 31);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[birthdate.getDay()];
  const month = birthdate.toLocaleString('default', { month: 'long' });
  const date = birthdate.getDate();
  const year = birthdate.getFullYear();  const ageDifMs = Date.now() - birthdate.getTime();
  const birthdateText = day + ", " + month + " " + date + ", " + year;
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  const city = "Toronto, Ontario, Canada";
  const cityGoogleMapsLink = "https://www.google.com/maps/place/Toronto,+ON/data=!4m2!3m1!1s0x89d4cb90d7c63ba5:0x323555502ab4c477?sa=X&ved=2ahUKEwiulKfFjPbuAhVPV80KHfHLBv4Q8gEwAHoECAUQAQ";

  const informationPairs = [
    ["Age", age, "age"],
    ["Birthdate", birthdateText, "birthdate"],
    ["Email", emailAddressText, "email"],
    ["LinkedIn", linkedInLinkText, "linkedin"],
    ["Github", githubLinkText, githubUsername, "github"],
    ["Phone #", "1-(226)-808-9619", "phoneNumber"],
    ["City", [city, cityGoogleMapsLink], "city"],
    ["Business", personalCompanyLinkText, personalCompanyName, "swish"]
  ];

  const workExperienceCells = [
    {
      key:"visionaire",
      companyName:"VISIONAIRE 3D",
      position:"iOS Engineer",
      companyLink:"https://visionaire3d.com/",
      city:"Toronto, ON",
      timeframe:"Oct. 2020 - Present",
      bulletPointsArray:[["● Completed the entire first version of their SWIFT iOS application “STYLR” by the end of November with one other engineer",0],
                         ["● Implemented entire Profile tab in app, implemented detail pages, collection views, data manipulation, etc through rest of app",1],
                         ["● Stylr is a 3D visualization app targeting the real estate industry; users showcase interior design concepts",2]]
    },
    {
      key:"linkedin",
      companyName:"LINKEDIN",
      position:"iOS ENGINEER",
      companyLink:"https://www.linkedin.com/",
      city:"Sunnyvale, CA",
      timeframe:"Sept. 2019 - Dec. 2019",
      bulletPointsArray:[["● Implemented all Objective-C code for detail screens on the profile page of LinkedIn’s iOS app, used object-oriented approach",0],
                         ["● Fixed various bugs throughout the sixteen weeks, improving the Profile page’s SWIFT/Obj-c code in the iOS app",1],
                         ["● Cleaned up dead code across Objective-C pods, refactoring or removing old code where new implementations are now used",2],
                         ["● Wrote unit tests, integration tests and functional tests for most of the Profile page code within LinkedIn’s iOS codebase",3]]
    },
    {
      key:"inkling",
      companyName:"INKLING",
      position:"SOFTWARE ENGINEER",
      companyLink:"https://www.inkling.com/",
      city:"San Francisco, CA",
      timeframe:"Jan. 2018 - Apr. 2018",
      bulletPointsArray:[["● Wrote feature-related code with SWIFT and React Native for different mobile applications Inkling provides to customers",0],
                         ["● Fixed bugs throughout a mobile app’s release, assisted with the web team’s backlog of front-end bugs using React with Redux",1],
                         ["● Helped decide which features were most important for the app to include; worked with PMs and design team on feature design",2]]
    },
    {
      key:"cognitiveSystemsCorp",
      companyName:"COGNITIVE SYSTEMS CORPORATION",
      position:"FULL-STACK DEVELOPER",
      companyLink:"https://www.cognitivesystems.com/",
      city:"Waterloo, ON",
      timeframe:"May 2017 - Aug. 2017",
      bulletPointsArray:[["● Implemented an internal web app that displayed various reports, making use of React, D3.js and Ruby on Rails",0],
                         ["● Constructed three widgets for internal and customer-side web apps using D3.js and React",1],
                         ["● Updated report dashboard and widgets, enabling on-screen elements to react dynamically when users manipulate the screen",2],
                         ["● Leveraged Ruby on Rails to solve flaws within web app",3]]
    },
    {
      key:"canadianInstituteForHealthInfo",
      companyName:"CANADIAN INSTITUTE FOR HEALTH INFORMATION",
      position:"FRONT-END DEVELOPER",
      companyLink:"https://www.cihi.ca/en",
      city:"Toronto, ON",
      timeframe:"May 2016 - Aug. 2016",
      bulletPointsArray:[["● Designed and implemented plots/diagrams for data visualization with D3.js, providing insight into large quantities of data",0],
                         ["● Implemented multiple features such as legends for diagrams, locational maps and various dynamic web app features",1],
                         ["● Analyzed web frameworks Bootstrap, React, AngularJS and Web Experience Toolkit in a comparison report of frameworks",2]]
    },
    {
      key:"purefactsFinancialSolutions",
      companyName:"PUREFACTS FINANCIAL SOLUTIONS",
      position:"iOS ENGINEER",
      companyLink:"https://www.purefacts.com/",
      city:"Toronto, ON",
      timeframe:"Jan. 2015 - Apr. 2015",
      bulletPointsArray:[["● Completed the entire first version of their SWIFT iOS application “STYLR” by the end of November with one other engineer",0],
                         ["● Tested products developed by coworkers and modernized software’s testing system by creating a complete test plan",1],
                         ["● Standardized new automation testing system using Ranorex to improve speed and quality of testing system",2]]
    },
  ];

  const educationProps = {
    headerText: "2019 Honours Bachelor of Mathematics, Computational Math major and Computer Science minor, CO-OP",
    bulletPointsArray:[["● Gained 3+ years of professional work experience as a ios engineer, full-stack developer and native mobile engineer through University of Waterloo's co-op program",0],
                       ["● In Computational Mathematics you learn to analyze data sets, formulae, and images in ways that help us understand the world around us and predict/influence the future",1],
                       ["● In Computer Science you study computers and computational systems. Computer scientists deal mostly with software and software systems; their theory, design, development, and application.",2]],
    schoolLink:"https://uwaterloo.ca/"
  };

  const portfolioCells = [
    {
      key:"cardCalculator",
      title: "24 / 20-Something Card Game Application",
      time: "Feb. 2021",
      projectLink: "https://github.com/a97madison/24CardGameCalculator",
      bulletPointsArray:[["● iOS calculator application is coded in SWIFT, currently working on releasing this application to the iOS Application Store",0],
                         ["● Currently building partner calculator web application, also developing a full application for the card game", 1],
                         ["● Full card game app will be available as an iOS app, web app and a game pigeon app for iMessage users to play via text; Card game rules in github's ReadMe file!",2]],
      linksArray:[["https://github.com/a97madison/24CardGameCalculator",0]]
    },
    {
      key:"personalSite",
      title: "Personal website",
      time: "Aug. 2020",
      projectLink: "http://localhost:3000/",
      bulletPointsArray:[["● This website is built entirely using React with Redux",0]],
      linksArray:[]
    },
    {
      key:"chess",
      title: "Two player chess game web application",
      time: "Jun. 2020",
      projectLink: "https://github.com/a97madison/chess-with-react-redux",
      bulletPointsArray:[["● Web app is built using React with Redux for local and global store of data alongside JavaScript, HTML, CSS and PHP",0],
                         ["● N4js is used for type checking of React elements and all of the chess game logic implemented within React components.",1]],
      linksArray:[["https://github.com/a97madison/chess-with-react-redux",0]]
    },
    {
      key:"swishStudiosSite",
      title: "Swish Studio's website",
      time: "Sept. 2020",
      projectLink: "https://www.swishstudio2020.com/",
      bulletPointsArray:[],
      linksArray:[["https://swishstudio2020.com",0]]
    }
  ];

  // DEFINE REACT OBJECTS
  const homePageObject = (
    <HomePage
      fullName={fullNameText}
      introText={introText}
    />
  );

  const profileObject = (
    <Profile
      informationPairs={informationPairs}
      aboutMeText={aboutMeText}
    />
  );

  const workExperienceObject = (
    <WorkExperience
      cellsProps={workExperienceCells}
    />
  );

  const educationObject = (
    <Education
      educationProps={educationProps}
    />
  );

  const portfolioObject = (
    <Portfolio
      cellsProps={portfolioCells}
    />
  );

  const items = [
    { name: 'home', label: 'Home Page' },
    { name: 'profile', label: 'Profile' },
    { name: 'work', label: 'Work Experience' },
    { name: 'education', label: 'Education' },
    { name: 'portfolio', label: 'Portfolio' },
    { name: 'resume', label: 'Downloadable Resume' }
    // { name: 'company', label: 'Company' }
  ];

  const sidebarObject = (
    <Sidebar
      items={items}
    />
  );

  // RETURN APP COMPONENT
  return (
    <div className="app">
      {sidebarObject}
      <div className = "sections">
        {homePageObject}
        {profileObject}
        {workExperienceObject}
        {educationObject}
        {portfolioObject}
      </div>
    <div className="ad-container"></div>
    </div>
  );
}

export default App;
