import './App.scss';
import headshot from './Assets/headshot.jpg';

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
              <img className="headshot" src={headshot}/>
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

      </div>
    </div>
  );
}

export default App;
