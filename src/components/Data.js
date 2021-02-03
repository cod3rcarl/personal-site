import wwdatabase from "../images/wwdatabase.png";
import mentor from "../images/mentor.png";
import spotify from "../images/spotify.png";
import rick from "../images/rick.png";
import rock from "../images/rock.png";
import bootcamper from "../images/bootcamper.png";
// import snake from "../images/snake.png";
import engage from "../images/engage.png";
import engageVid from "../images/EngagaeMate.mp4";
import rickTacToe from "../images/rick-tac-toe.mp4";
import socFM from "../images/soc-fm.mp4";
import wwDatabase from "../images/wwdatabase.mp4";
import bootcamperIO from "../images/bootcamper.mp4";

import {
  SiPostman,
  SiMongodb,
  SiCss3,
  SiWwe,
  SiFirebase,
  SiGithub,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNetlify,
  SiNodeDotJs,
  SiPostgresql,
  SiReact,
  SiSocketDotIo,
  SiSpotify,
  SiAuth0,
} from "react-icons/si";
import { MdNotifications } from "react-icons/md";
import { BsLightningFill } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";

export const experience = [
  {
    title: "Experience",
    text:
      "Before becoming a full time Web Developer I was working in the print industry for 15 years, over 12 years of that time was spent as a Print Production Manager. Technology was constantly changing through the years and it was my job to adapt to the changing needs of the business and industry as a whole while working with a team in a fast paced environment. I had to continuously evolve my working role over the years utilising new information, infrastructure, processes and legislation.  ",
  },
];

export const me = [
  {
    title: "School of Code",
    text:
      "I was given a fantastic opportunity in the summer of 2020 to be apart of the 4th Cohort in the School of Code Bootcamp. This intensive course taught all the necessary skills to become a ready to work Javascript developer.  While also teaching industry best practices.  The course was fully remote and as well as teaching the fundamentals of JavaScript and introducing us to frameworks, such as React on the Front-End and Express on the backend, they taught us the soft skills necessary to become job ready and work within an Agile tech team.  We worked every week in pairs, working with a different person each week, and culminated with a four week project solving a real tech problem and creating an app from start through to minimum viable product and minimum lovable product.",
  },
  {
    title: "Away from Web Development",
    text:
      "The global pandemic has meant my acivites away from code have become limited. I'm currently training to hopefully take part in a Tough Mudder run for 2021 so I try to run at least 3 times a week.  I'm an avid wrestling fan (don't judge me please) so can be found watching this from time to time.  I love to read, John Grisham being my favourite author.  Other than that, you'll find me playing Fifa on the Playstation , listening to podcasts on Spotify or binging shows on Netflix or Disney Plus. ",
  },
];

export const final = [
  {
    link: "EngageMate",
    image: engage,
    video: engageVid,
    website: "https://engagemate.netlify.app/",
    technologies: [
      SiCss3,
      SiHtml5,
      SiJavascript,
      SiReact,
      BsLightningFill,
      SiAuth0,
      SiSocketDotIo,
      SiHeroku,
      SiPostgresql,
      SiNetlify,
      SiNodeDotJs,
      MdNotifications,
      SiJest,
      SiSpotify,
      SiGithub,
    ],
    text:
      "Built for the School of Code. Our final project was built to solve the problem ‘how to improve remote teaching delivery’.  Working as part of an agile team, we chose to focus on creating an app to sit alongside Zoom or a similar team meeting platform.  Built utilising Web Sockets we wanted to gain live feedback from the participants in a remote learning setting. We achieved this by enhancing existing features such as hand raising and live polls, while creating an engaging feature ‘The Thumbometer’ so that speakers could gain real-time feedback via an interactive thumb.  The app also utilised sounds and used the Spotify API to generate playlists to play music during different School of Code tasks. We performed integration tests using Jest and end to end test using cypress.io.",
    github: "https://github.com/cod3rcarl/engageMate",
    responsiveness: "Mobile First",
  },
  {
    link: "WWDatabase",
    image: wwdatabase,
    website: "https://wwdatabase.netlify.app",
    video: wwDatabase,
    technologies: [
      SiReact,
      SiCss3,
      SiHtml5,
      SiJavascript,
      SiHeroku,
      SiPostgresql,
      SiNetlify,
      SiNodeDotJs,
      SiWwe,
    ],
    text:
      "A personal project of mine, built with a React front-end, and deployed on Netlify for the front end and Heroku for the backend with an Node/Express server and Postgres database. This app fetches data from a database I created based on a date. It will return whomever was WWE Champion on that day. I plan to expand on this with different titles in the future. Originally built using vanilla JavaScript, I refactored the code once I was taught React.",
    github: "https://github.com/cod3rcarl/wwdatabaseFE",
    responsiveness: "Mobile First",
  },
  {
    link: "Bootcamper API",
    image: bootcamper,
    website: "https://bootcamper-io.herokuapp.com",
    video: bootcamperIO,
    technologies: [
      SiPostman,
      SiMongodb,
      SiCss3,
      SiHtml5,
      SiJavascript,
      SiHeroku,
      SiNodeDotJs,
    ],
    text:
      "This is a backend app built to help broaden my knowledge on RESTful APIs.  I used Postman extensively to create endpoints and apply CRUD functionality.  The app utlises pagination, sorting and filtering for different bootcamps and allows querying different courses and jobs within those bootcamps.  The app uses MongoDB to store user data,  which is used to set roles to differentiate between admins, publishers and users.  There is also login and logout functonality. The landing page was made using a package called DocGen, which took the documentation i made in the Postman app and converted the json data into html.",
    github: "https://github.com/cod3rcarl/bootcamper.io",
    responsiveness:
      "Made for desktop, but responsive to allow mobile and tablet use.",
  },
];

export const work = [
  {
    link: "Mentor Diary",
    image: mentor,
    website: "https://musing-turing-792e59.netlify.app",
    technologies: [
      SiReact,
      SiCss3,
      SiHtml5,
      SiJavascript,
      SiHeroku,
      SiPostgresql,
      SiNetlify,
      SiNodeDotJs,
      SiFirebase,
      SiGithub,
    ],
    text:
      "Our mid-way project on the School of Code Bootcamp. In teams of 4 we worked to create an app to make our mentoring experience better. We created a diary using a Node/Express server and Postgres database. The front-end was created using React with bootstrap used to style the app. The user can signup to access the app using Google Firebase with an email/password login.",
    github: "https://github.com/cod3rcarl/mentor-diary",
    responsiveness: "Desktop",
  },
  {
    link: "SOC Spotify App",
    image: spotify,
    video: socFM,
    website: "https://soc-fm.netlify.app",
    technologies: [SiCss3, SiHtml5, SiJavascript, SiSpotify],
    text:
      "A web app utilising the Spotify API to fetch playlists, based on different music genres that can be set by the user. The API requires a bearer token as well as my api key in order to retrieve the data.",
    github: "https://github.com/cod3rcarl/soc-fm-app",
    responsiveness: "Desktop",
  },
  {
    link: "Rick-Tac-Toe",
    image: rick,
    video: rickTacToe,
    website: "https://rick-tac-toe.vercel.app/",
    technologies: [IoLogoVercel, SiReact, SiCss3, SiHtml5, SiJavascript],
    text:
      "A game of noughts and crosses with a twist. The challenge on this project was to take code from the offical React documentation written with the older class based system and then refactor that code to use the React hook useState and props.  The app utilises 'time travel' functionality so the player can revert back to a previous move.  The next strp for this project is to utilise web sockets so that the game becomes a tru two player experience.",
    github: "https://github.com/cod3rcarl/rick-tac-toe",
    responsiveness: "Desktop",
  },
  {
    link: "Rock, Paper Scissors",
    image: rock,
    website: "https://rock-paper-scissors-black-zeta.vercel.app/",
    technologies: [IoLogoVercel, SiCss3, SiHtml5, SiJavascript],
    text:
      "For the first project I worked on at the School of Code I created a Rock, Paper, Scissors game using vanilla JavaScript. This was a great way to learn about functions and conditionals.",
    github: "https://github.com/cod3rcarl/rockPaperScissors",
    responsiveness: "Desktop",
  },
  // {
  //   link: "Snake",
  //   image: snake,
  //   website: "https://snake-by-carl.netlify.app/",
  //   technologies: [SiNetlify, SiCss3, SiHtml5, SiJavascript],
  //   text:
  //     "A classic game created using the Canvas tag in html.  This was an early personal project built to understand canvas, event key codes and basic animation in a JavaScript environment.",
  //   github: "https://snake-by-carl.netlify.app/",
  //   responsiveness: "Desktop",
  // },
];
