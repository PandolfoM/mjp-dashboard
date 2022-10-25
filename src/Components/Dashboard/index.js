import config from "../../config.json";

function Dashboard() {
  let services = config.services;

  const handleClick = (file) => {
    if (file.includes("http")) {
      return;
    } else {
      window.notepad.openExe(file);
    }
  };

  return (
    <div className="flex flex-wrap justify-start gap-5 px-5">
      {services.map((item, i) => (
        <div className="w-full md:w-auto flex-auto" key={i}>
          <h3 className="text-3xl m-5 mb-1 font-semibold text-white text-center">
            {item.name}
          </h3>

          {item.items.map((item, i) => (
            <a
              className="mx-auto hover:-translate-y-1.5 transition-all ease-linear duration-200 m-5 p-6 max-w-2xl bg-slate-700 rounded-xl shadow-lg flex items-center space-x-4 border border-solid border-slate-600"
              href={item.url}
              target={"_blank"}
              rel="noreferrer"
              key={i}
              onClick={() => handleClick(item.url)}>
              <p className="m-auto text-3xl font-medium text-white">
                {item.name}
              </p>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
