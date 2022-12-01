import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather
          defaultCity="
Kyiv"
        />
        <p className="git">
          <a
            href="/https://github.com/OksanaZuikova/weather-react"
            target="_blank"
            className="git-link"
          >
            Open-sourse code
          </a>{" "}
          by Oksana Zuikova
        </p>
      </div>
    </div>
  );
}

export default App;
