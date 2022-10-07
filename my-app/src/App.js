import './Styles/Intro.scss';
import './Styles/About.scss';
import './Styles/Projects.scss';
import './Styles/Skills.scss';

import './Scripts/carouselAbout.js'

import headshot from './Assets/headshot.jpg';
import food from './Assets/food.jpg';
import piano from './Assets/piano.JPG';
import milo from './Assets/milo.jpg';
import feaste from './Assets/feaste.png'
import ehacks from './Assets/ehacks.png';
import chaching from './Assets/chaching.png'

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
              <h1 className="normalLarge stackedText">
                Samarabandu
              </h1>
            </div>

            <div className="introPic">
              <img className="headshot" src={headshot} />
            </div>

          </div>

          <div className="row2">
            <div className="semiCircle">

            </div>
          </div>

          <div className="row3">
            <div className="downArrow">

            </div>
          </div>

        </div>


        <div className="about">
          <div className="row4">
            <h2 className="normalHeading normalHeadingBar">
              About Me
            </h2>

            <h2 className="normalHeading normalHeadingBar">
              Projects
            </h2>

            <h2 className="normalHeading normalHeadingBar">
              Resume
            </h2>
          </div>

          <div className="row5">
            <div className="lineEmbellish lineEmbellishLeft">

            </div>

            <h2 className="normalHeading normalHeadingAbout">
              About Me
            </h2>

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
              I’m excited to pursue a career in software development and look forward to being able to be a positive influence doing what I love!
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

            <h2 className="normalHeading normalHeadingProjects">
              Projects
            </h2>

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
            <h2 className="scriptSkills scriptSkillsLeft">
              Languages
            </h2>
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

      </div>
    </div>
  );
}

export default App;
