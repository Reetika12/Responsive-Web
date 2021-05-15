import './App.css';

function App() {
  return (
    <div >
      <nav className="navbar background">
          <ul className="nav-list">
             <div className="logo">
               <img
                 src={require("./Image/logo.svg").default}
                 alt="logo"
               />
               <li><a href="#home">Home</a></li>
               <li><a href="#about">About</a></li>
               <li><a href="#services">Services</a></li>
               <li><a href="#contact">Contact Us</a></li>
             </div>
          </ul>
          <div className="rightNav">
            <input type="text" name="search" id="search"/>
            <button className="btn btn-sm">Search</button>
          </div>
      </nav>
      <section className="background firstsection">
        <div className="box-main">
            <div className="firsthalf">
                
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
