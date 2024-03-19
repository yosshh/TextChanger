import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Is Enabled.", "success");
      // document.title="Dark Is Best"
      // setInterval(() => {
      //   document.title="Yash is best person"
      // }, 1200);
      // setInterval(() => {
      //   document.title="Yash is best actor"
      // }, 2000);
      // by these wayss we can change the title of the app
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is Enabled.", "success");
      document.title = "Light Is Best";
    }
  };
  return (
    // <React.Fragment>
    // {/* <p>yash is best.</p> */}
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Namaste React
    //     </a>
    //   </header>
    // </div>
    // </React.Fragment>
    // <>
    // {/* <div className="blank">Yash, You are awesome.</div> */}
    // {/* </> */}
    <>
      <Router>
        {/* <nav> */}
        {/* <li>Hello</li> */}
        {/* <li>About</li> */}
        {/* <li>Home</li> */}
        {/* </nav> */}
        {/* <div className='container'> */}
        {/* <h1>Hello Yash</h1> */}
        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia dolore, veniam quasi iste cum fugit numquam, libero ullam provident ratione placeat sequi corrupti. Fugiat perspiciatis quisquam nobis tempora in ipsa.</p> */}
        {/* </div> */}

        {/* <Navbar title= "yashshukla" address="HomeSweet"/> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/home" element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter The Text Here."
                  mode={mode}
                  
                  />}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}


export default App;