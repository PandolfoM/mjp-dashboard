import config from "./config.json";

function App() {
  let services = config.services;

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">MJP Dashboard</h1>
      <div className="flex flex-wrap justify-start gap-5">
        {services.map((item, i) => (
          <div className="w-full md:w-auto flex-auto" key={i}>
            <h3 className="text-3xl m-5 font-semibold text-white">
              {item.name}
            </h3>
            {item.items.map((item, i) => (
              <a
                className="hover:shadow-[5px_5px_5px_indigo] hover:scale-105 transition-all duration-300 m-5 p-6 max-w-2xl bg-slate-700 rounded-xl shadow-lg flex items-center space-x-4 border border-solid border-gray-600"
                href={item.url}
                target={"_blank"}
                rel="noreferrer"
                key={i}>
                <p className="m-auto text-3xl font-medium text-white">
                  {item.name}
                </p>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
