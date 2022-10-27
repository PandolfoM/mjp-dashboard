import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import Store from "./utils/store";

function App() {
  return (
    <Store>
      <Modal />
      <Header />
      <Dashboard />
    </Store>
  );
}

export default App;
