import './Styles/Intro.scss';
import './Styles/About.scss'
import './Scripts/carouselAbout.js'
import headshot from './Assets/headshot.jpg';
import food from './Assets/food.jpg';
import piano from './Assets/piano.JPG';
import milo from './Assets/milo.jpg';

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

      </div>
    </div>
  );
}

export default App;
