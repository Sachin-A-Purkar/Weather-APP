import './App.css';
import i1 from "./images/search.png"
import i2 from "./images/rain2.png"

function App() {
  return (
    <div className="App">
      <div className="card">
          <div className="search">
            <form>
              <input type="text" placeholder="Enter City Name"/>
              <button ><img src={i1} alt='search' id="i1"/></button>
            </form>
          </div>
          <div className="weather">
            <img src={i2} alt="rain" id="i2"/>
            <h1 className="temp"> 22°</h1>
            <h2 className="city">New York</h2>
          </div>
      </div>
    </div>
  );
}

export default App;
