import config from "./config.json";

function App() {
  let services = config.services;

  return (
    <div className="App">
      <header>MJP Dashboard</header>
      <ul>
        {services.map((item, i) => (
          <li key={i}>
            <p>{item.name}</p>
            {item.items.map((item, i) => (
              <ul key={i}>
                <a href={item.url}>{item.name}</a>
              </ul>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
