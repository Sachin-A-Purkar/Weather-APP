import './App.css';
import i1 from "./images/search.png"
import i2 from "./images/rain2.png"
import i3 from "./images/humidity.png"
import i4 from "./images/wind.png"

function App() {
  return (
    <div className="App">
      <div className="card">
        <form>
          <div className="search">
            
              <input type="text" placeholder="Enter City Name"/>
              <button ><img src={i1} alt='search' id="i1"/></button>
          </div>
          </form>
          <div className="weather">
            <img src={i2} alt="rain" id="i2"/>
            <h1 className="temp"> 22°</h1>
            <h2 className="city">New York</h2>
          </div>
          <div className="detail">
            <div className="col">
                <img src={i3} alt="hum"/>
                <div>
                  <p className="humidity">50%</p>
                  <p>Humidity</p>
                </div>
            </div>
            <div className="col">
                <img src={i4} alt="hum"/>
                <div>
                  <p className="humidity">15 Km/h</p>
                  <p>Wind Speed</p>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
