import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Notepad from "./Components/Notepad";
import Titlebar from "./Components/Titlebar";
import Store from "./utils/store";

function App() {
  return (
    <Store>
      <Titlebar />
      <Notepad />
      <Header />
      <Dashboard />
    </Store>
  );
}

export default App;
