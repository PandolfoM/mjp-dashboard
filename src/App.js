import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Notepad from "./Components/Notepad";
import Store from "./utils/store";

function App() {
  return (
    <Store>
      <Notepad />
      <Header />
      <Dashboard />
    </Store>
  );
}

export default App;
