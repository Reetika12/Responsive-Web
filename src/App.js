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
            <div className="firstHalf">
              <p className="text-big">The Future of Education is here</p>
              <p className="text-small">the vaery important thing in todays life is to focus on your main stream just don't divert with secondary stream </p>
              <div className="buttons">
                <button className="btn">Subscribe</button>
                <button className="btn">Watch Video</button>
              </div>
            </div>
            <div className="secondHalf">
                <img   
                  src={require("./Image/laptop.jpeg").default}
                  alt="logo1"
                />
            </div>
        </div>
      </section>
      <section className="secRight">
        <p className="sectionTag"></p>
        <p className="sectionSubTag"></p>
      </section>
    </div>
  );
}

export default App;
