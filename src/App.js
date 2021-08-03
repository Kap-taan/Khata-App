import { useState } from "react";
import DateCompo from "./components/DateCompo";
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";
import Navdetails from "./components/Navdetails";

function App() {

  const [title, setTitle] = useState('DashBoard');

  const addTitle = (data) => {
    setTitle(data);
  }

  return (
    <div className="App">
      <Navbar addTitle={addTitle} />
      <Navdetails />
      <DateCompo />
      <MainBody title={title} />
    </div>
  );
}

export default App;
