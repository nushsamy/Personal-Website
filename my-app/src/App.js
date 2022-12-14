import './Styles/Intro.scss';
import './Styles/About.scss';
import './Styles/Projects.scss';
import './Styles/Skills.scss';
import './Styles/Experience.scss';
import './Styles/AdditionalInfo.scss';

import './Scripts/carouselAbout.js'

import headshot from './Assets/headshot.jpg';
import food from './Assets/food.jpg';
import piano from './Assets/piano.JPG';
import milo from './Assets/milo.jpg';
import feaste from './Assets/feaste.png'
import ehacks from './Assets/ehacks.png';
import chaching from './Assets/chaching.png'
import email from './Assets/email.png'
import github from './Assets/github.png'
import linkedin from './Assets/linkedin.png'

function App() {
  return (
    <div className="App">
      <div className="mainFrame">

        <div className="intro">

          <div className="row1">

            <div className="introName">
              <h1 className="scriptLarge stackedText">
                Hi, I'm
              </h1>
              <h1 className="normalLarge stackedText">
                Anusha
              </h1>
              <h1 className="normalLarge stackedText stackedTextLast">
                Samarabandu
              </h1>
            </div>

            <div className="introPic">
              <img className="headshot" src={headshot} />
            </div>

          </div>

          <div className="linkRow">
            <a href='https://github.com/nushsamy' target="_blank">
              <img src={github} className="icon" />
            </a>

            <a href='https://www.linkedin.com/in/anusha-samarabandu-5157a21a0/' target="_blank">
              <img src={linkedin} className="icon" />
            </a>

            <a href='mailto:anushd.sam@gmail.com'>
              <img src={email} className="icon" />
            </a>
          </div>

          <div className="row2">
            <div className="semiCircle">

            </div>
          </div>

          <div className="row3">
            <a href='#toolBarLink'>
              <div className="downArrow">

              </div>
            </a>
          </div>

        </div>


        <div className="about">
          <a id="toolBarLink">
            <div className="row4">
              <a href='#aboutLink' className="toolBar">
                <h2 className="normalHeading normalHeadingBar">
                  About Me
                </h2>
              </a>

              <a href="#projectsLink" className="toolBar">
                <h2 className="normalHeading normalHeadingBar">
                  Projects
                </h2>
              </a>

              <a href='#resumeLink' className='toolBar'>
                <h2 className="normalHeading normalHeadingBar">
                  Resume
                </h2>
              </a>
            </div>
          </a>

          <div className="row5">
            <div className="lineEmbellish lineEmbellishLeft">

            </div>

            <a id="aboutLink">
              <h2 className="normalHeading normalHeadingAbout">
                About Me
              </h2>
            </a>

            <div className="lineEmbellish lineEmbellishRight">

            </div>
          </div>

          <div className="row6">
            <div className="cornerEmbellish cornerEmbellishRight">

            </div>
          </div>

          <div className="row7">
            <h3 className="normalBody normalBodyAbout">
              I am currently finishing my last year of Software Engineering at Western University
            </h3>

            <h3 className="normalBody normalBodyAbout">
              I???m excited to pursue a career in software development and look forward to being able to be a positive influence doing what I love!
            </h3>

            <h3 className="normalBody normalBodyAbout">
              I also love to cook, am an accomplished musician, and cat mom
            </h3>
          </div>

          <div className="row8" data-carousel-about>
            <div className="arrowsRow">
              <div className="leftArrow arrowAbout" carousel-button-about="left">

              </div>

              <div className="rightArrow arrowAbout" carousel-button-about="right">

              </div>
            </div>

            <ul className="aboutCarousel" data-slides-about>

              <li className="slideAbout" data-active>
                <img className="hobbies" src={food}></img>
              </li>
              <li className="slideAbout">
                <img className="hobbies" src={piano}></img>
              </li>
              <li className="slideAbout">
                <img className="hobbies" src={milo}></img>
              </li>
            </ul>
          </div>

          <div className="row9">
            <h1 className="scriptAbout">
              Nice to meet you!
            </h1>
          </div>

          <div className="row10">
            <div className="cornerEmbellish cornerEmbellishLeft">

            </div>
          </div>

        </div>

        <div className="projects">
          <div className="row11">
            <div className="lineEmbellish lineEmbellishLeft">

            </div>

            <a id="projectsLink">
              <h2 className="normalHeading normalHeadingProjects">
                Projects
              </h2>
            </a>

            <div className="lineEmbellish lineEmbellishRight">

            </div>
          </div>

          <div className="projectRow">
            <div className="projectBox">
              <h2 className="normalHeading normalHeadingProjectTitle">
                Feaste
              </h2>


              <div className="projectMain">
                <div className="projectContext">
                  <li className="normalBodyProjects">
                    A web application that is inspired by my own love of cooking, feaste allows you to meal-plan and keep track of groceries using your own recipes.
                  </li>

                  <li className="normalBodyProjects">
                    My current project
                  </li>
                </div>

                <div className="tags">
                  <div className="rowTags">
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        React.js
                      </h4>
                    </div>
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        Node.js
                      </h4>
                    </div>
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        Express.js
                      </h4>
                    </div>
                  </div>

                  <div className="rowTags">
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        Figma
                      </h4>
                    </div>
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        MySQL
                      </h4>
                    </div>
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        JWT
                      </h4>
                    </div>
                  </div>
                </div>

              </div>

              <div className="imgLine">

              </div>

              <div className="row12">
                <img src={feaste} className="projectImage"></img>
              </div>
            </div>

            <div className="projectBox">
              <h2 className="normalHeading normalHeadingProjectTitle">
                Ehacks Website
              </h2>

              <div className="projectMain">
                <div className="projectContext">
                  <li className="normalBodyProjects">
                    eHacks is a technology and business focused Hackathon. Their website includes user accounts, applications and hackathon information
                  </li>

                  <li className="normalBodyProjects">
                    This website was developed by the eHacks development team and includes responsive design, documentation and scalable code.
                  </li>
                </div>

                <div className="tags">
                  <div className="rowTags">
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        MongoDB
                      </h4>
                    </div>
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        Git
                      </h4>
                    </div>
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        JWT
                      </h4>
                    </div>
                  </div>

                  <div className="rowTags">
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        Figma
                      </h4>
                    </div>
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        React.js
                      </h4>
                    </div>
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        Node.js
                      </h4>
                    </div>
                  </div>
                </div>

              </div>

              <div className="imgLine">

              </div>

              <div className="row12">
                <img src={ehacks} className="projectImage"></img>
              </div>
            </div>

            <div className="projectBox">
              <h2 className="normalHeading normalHeadingProjectTitle">
                ChaChing
              </h2>


              <div className="projectMain">
                <div className="projectContext">
                  <li className="normalBodyProjects">
                    Cha-Ching is a chore app created for Hack Western 7. It is aimed at making the mundane fun, while teaching financial literacy skills.
                  </li>

                  <li className="normalBodyProjects">
                    Cha-Ching provides parents with educational tools to help teach financial literacy by doing household chores.
                  </li>
                </div>

                <div className="tags">
                  <div className="rowTags">
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        React.js
                      </h4>
                    </div>
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        Node.js
                      </h4>
                    </div>
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        Express.js
                      </h4>
                    </div>
                  </div>

                  <div className="rowTags">
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        Figma
                      </h4>
                    </div>
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        MySQL
                      </h4>
                    </div>
                    <div className="projectTag">
                      <h4 className="normalBodyProjects normalBodyProjectsTags">
                        JWT
                      </h4>
                    </div>
                  </div>
                </div>

              </div>

              <div className="imgLine">

              </div>

              <div className="row12">
                <img src={chaching} className="projectImage"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="row13">
            <a id="resumeLink">
              <h2 className="scriptSkills scriptSkillsLeft">
                Languages
              </h2>
            </a>
            <div className="skillsLineEmbellish">

            </div>
          </div>

          <div className="row14">

            <div className="row14-1">
              <div className="skillCircle">
                <h2 className="normalHeading normalHeadingSkills">
                  Java
                </h2>
              </div>
            </div>

            <div className="row14-2">
              <div className="skillCircle">
                <h2 className="normalHeading normalHeadingSkills">
                  C#
                </h2>
              </div>

              <div className="skillCircle">
                <h2 className="normalHeading normalHeadingSkills">
                  JavaScript
                </h2>
              </div>
            </div>

            <div className="row14-2">

              <div className="skillCircle">
                <h2 className="normalHeading normalHeadingSkills">
                  Python
                </h2>
              </div>

              <div className="skillCircle">
                <h2 className="normalHeading normalHeadingSkills">
                  SQL
                </h2>
              </div>
            </div>
          </div>

          <div className="row15">
            <div className="skillsLineEmbellish skillsLineEmbellishRight">

            </div>
            <h2 className="scriptSkills scriptSkillsRight">
              Additional Skills
            </h2>
          </div>

          <div className="row16">
            <div className="skillBlock">
              <h2 className="normalHeading normalHeadingSkills normalHeadingSkillsBlock">
                CSS and HTML
              </h2>
            </div>

            <div className="skillBlock">
              <h2 className="normalHeading normalHeadingSkills normalHeadingSkillsBlock">
                Object-Oriented Programming
              </h2>
            </div>

            <div className="skillBlock">
              <h2 className="normalHeading normalHeadingSkills normalHeadingSkillsBlock">
                Database Management
              </h2>
            </div>
          </div>
          <div className="row17">
            <div className="skillBlock">
              <h2 className="normalHeading normalHeadingSkills normalHeadingSkillsBlock">
                CI/CD
              </h2>
            </div>

            <div className="skillBlock">
              <h2 className="normalHeading normalHeadingSkills normalHeadingSkillsBlock">
                Kubernetes
              </h2>
            </div>

            <div className="skillBlock">
              <h2 className="normalHeading normalHeadingSkills normalHeadingSkillsBlock">
                RESTful APIs
              </h2>
            </div>

            <div className="skillBlock">
              <h2 className="normalHeading normalHeadingSkills normalHeadingSkillsBlock">
                AWS
              </h2>
            </div>

            <div className="skillBlock">
              <h2 className="normalHeading normalHeadingSkills normalHeadingSkillsBlock">
                Node.js
              </h2>
            </div>

            <div className="skillBlock">
              <h2 className="normalHeading normalHeadingSkills normalHeadingSkillsBlock">
                React.js
              </h2>
            </div>

          </div>
        </div>

        <div className="experience">
          <div className="row18">
            <div className="lineEmbellish lineEmbellishLeft">

            </div>

            <h2 className="normalHeading normalHeadingExperience">
              Experience
            </h2>

            <div className="lineEmbellish lineEmbellishRight">

            </div>
          </div>

          <div className="experienceSection">
            <div className="experienceBox">

              <div className="row19">
                <h3 className="normalHeadingBodyExperience normalHeadingBodyExperienceTitle">
                  Software Developer Intern
                </h3>

                <h3 className="normalHeadingBodyExperience">
                  MAY 2021 - AUG 2022
                </h3>
              </div>

              <div className="row20">
                <h3 className="normalHeadingBodyExperience normalHeadingExperienceCompany">
                  J.D. Power | London, ON
                </h3>
              </div>

              <div className="experienceContent">
                <li className="normalHeadingPoint">
                  Designed Java software solutions using Kubernetes, Docker, Jenkins, and Git among various cloud technologies
                </li>

                <li className="normalHeadingPoint">
                  Handled daily data team support tasks including SQL scripting and maintaining and troubleshooting ETLs
                </li>

                <li className="normalHeadingPoint">
                  Implemented major design changes within FCA Stellantis dataflows for Chrysler, Ram, Jeep, Dodge, Alfa Romeo, and Fiat
                </li>

                <li className="normalHeadingPoint">
                  Investigated and resolved over 50 bugs, enhancing the performance and functionality of enterprise-level applications
                </li>
              </div>
            </div>
          </div>

          <div className="experienceSection">
            <div className="experienceBox">

              <div className="row19">
                <h3 className="normalHeadingBodyExperience normalHeadingBodyExperienceTitle">
                  Software Developer
                </h3>

                <h3 className="normalHeadingBodyExperience">
                  SEPT 2021 - APRIL 2022
                </h3>
              </div>

              <div className="row20">
                <h3 className="normalHeadingBodyExperience normalHeadingExperienceCompany">
                  eHacks | London, ON
                </h3>
              </div>

              <div className="experienceContent">
                <li className="normalHeadingPoint">
                  Collaborated with team members to design and develop the eHacks website using the MERN stack
                </li>

                <li className="normalHeadingPoint">
                  Participated in agile development, creating quality software and a successful project delivery
                </li>
              </div>
            </div>
          </div>

          <div className="experienceSection">
            <div className="experienceBox">

              <div className="row19">
                <h3 className="normalHeadingBodyExperience normalHeadingBodyExperienceTitle">
                  Director of Education
                </h3>

                <h3 className="normalHeadingBodyExperience">
                  JUNE 2020 - APRIL 2021
                </h3>
              </div>

              <div className="row20">
                <h3 className="normalHeadingBodyExperience normalHeadingExperienceCompany">
                  Western AI | London, ON
                </h3>
              </div>

              <div className="experienceContent">
                <li className="normalHeadingPoint">
                  Created curriculums, machine learning models and interactive code tutorials to teach machine learning and empower the members of Western AI with knowledge for their personal growth
                </li>

                <li className="normalHeadingPoint">
                  Taught ethics and business applications of AI to broaden the range of students with opportunities in Western AI
                </li>
              </div>
            </div>
          </div>

          <div className="experienceSection">
            <div className="experienceBox">

              <div className="row19">
                <h3 className="normalHeadingBodyExperience normalHeadingBodyExperienceTitle">
                  Undergraduate Summer Research Intern
                </h3>

                <h3 className="normalHeadingBodyExperience">
                  MAY 2020 - AUG 2020
                </h3>
              </div>

              <div className="row20">
                <h3 className="normalHeadingBodyExperience normalHeadingExperienceCompany">
                  Western University | London, ON
                </h3>
              </div>

              <div className="experienceContent">
                <li className="normalHeadingPoint">
                  Designed preprocessing code using Python to optimize the performance of deep neural networks on human activity recognition
                </li>

                <li className="normalHeadingPoint">
                  Analyzed Convolutional Neural Network performance to refine proceeding trials for better results
                </li>

                <li className="normalHeadingPoint">
                  Initiated self-guided learning required to successfully complete remote work
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="additionalInfo">
          <div className="additionalRow">
            <h2 className="scriptSkills scriptSkillsRight scriptAdditional">
              Education
            </h2>
            <div className="skillsLineEmbellish">

            </div>

            <div className="educationBox">
              <h2 className="normalHeading normalHeadingAdditionalBig">
                Western University
              </h2>

              <h2 className="normalHeading normalHeadingAdditional">
                Bachelor of Engineering Science, Software Engineering
              </h2>
            </div>
          </div>

          <div className="additionalRow">

            <div className="awardsBox">
              <h2 className="normalHeading normalHeadingAdditional normalHeadingAdditionalAwards">
                2021&nbsp;Proteus&nbsp;Innovation<br />Competition Winner
              </h2>
              <h2 className="normalHeading normalHeadingAdditional">
                Western&nbsp;Scholarship&nbsp;of<br />Excellence
              </h2>
              <h2 className="normalHeading normalHeadingAdditional">
                Summer&nbsp;Undergraduate<br />Research&nbsp;Scholarship
              </h2>
            </div>
            <div className="skillsLineEmbellish">

            </div>
            <h2 className="scriptSkills scriptSkillsRight scriptAdditional">
              Awards
            </h2>
          </div>

          <div className="additionalRow">

            <h2 className="scriptSkills scriptSkillsRight scriptAdditional">
              Key&nbsp;Interests
            </h2>
            <div className="skillsLineEmbellish">

            </div>
            <div className="interestsBox">
              <h2 className="normalHeading normalHeadingAdditional normalHeadingAdditionalAwards">
                Full&nbsp;Stack&nbsp;Development
              </h2>
              <h2 className="normalHeading normalHeadingAdditional">
                Database&nbsp;Management
              </h2>
              <h2 className="normalHeading normalHeadingAdditional">
                Cloud&nbsp;Computing
              </h2>
              <h2 className="normalHeading normalHeadingAdditional">
                Mobile&nbsp;Development
              </h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
