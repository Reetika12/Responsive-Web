import '../App.css';
import '../CSS/Responsive.css'

function ResponsiveWeb() {

 const OpenToggleEvent = () =>{
    let navList=document.querySelector('.nav-list')
    let rightNav=document.querySelector('.rightNav')
    let navBar=document.querySelector('.navbar')
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
    navBar.classList.toggle('h-nav-resp')
  }
  return (
    <div >
      <nav className="navbar background h-nav-resp">
          <ul className="nav-list logo v-class-resp">
               <img
                 src={require("../Image/logo.svg").default}
                 alt="logo"
               />
               <li><a href="#home">Home</a></li>
               <li><a href="#about">About</a></li>
               <li><a href="#services">Services</a></li>
               <li><a href="#contact">Contact Us</a></li>
          </ul>
          <div className="rightNav v-class-resp">
            <input type="text" name="search" id="search"/>
            <button className="btn btn-sm">Search</button>
          </div>
          <div onClick={OpenToggleEvent} className="burger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
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
                  src={require("../Image/laptop.jpeg").default}
                  alt="logo1"
                />
            </div>
        </div>
      </section>
      <section className="section" id="services">
        <div className="paras">
          <p className="sectionTag text-big">The end of search is here.</p>
          <p className="sectionSubTag text-small">Lorem password Lorem password Lorem password Lorem password Lorem password Lorem password Lorem password Lorem password lorem password Lorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem
          Lorem password Lorem password Lorem password.the end of seracch is here. The end of search is here. the end of search is here  the end of search is here. the end of serch is here.
          password. tHe end of search is here the end of search is here</p>
        </div>
         <div className="thumbnail">
            <img
                src={require("../Image/sideImage.jpeg").default}
                alt="laptopImage"
                />
        </div>
      </section>
      <section className="section section-left">
        <div className="paras">
          <p className="sectionTag text-big">Transforming Education in India</p>
          <p className="sectionSubTag text-small">Lorem password Lorem password Lorem password Lorem password Lorem password Lorem password Lorem password Lorem password lorem password Lorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem
          Lorem password Lorem password Lorem password.the end of seracch is here. The end of search is here. the end of search is here  the end of search is here. the end of serch is here.
          password. tHe end of search is here the end of search is here</p>
        </div>
         <div className="thumbnail">
            <img
                src={require("../Image/book1.jpeg").default}
                alt="book1"
                />
        </div>
      </section>
      <section className="section section-left">
        <div className="paras">
          <p className="sectionTag text-big">The Change is in Our Hand</p>
          <p className="sectionSubTag text-small">Lorem password Lorem password Lorem password Lorem password Lorem password Lorem password Lorem password Lorem password lorem password Lorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem passwordLorem
          Lorem password Lorem password Lorem password.the end of seracch is here. The end of search is here. the end of search is here  the end of search is here. the end of serch is here.
          password. tHe end of search is here the end of search is here</p>
        </div>
         <div className="thumbnail">
            <img
                src={require("../Image/book2.jpeg").default}
                alt="laptop image"
                />
        </div>
      </section>
      <section className="contact" id="contact">
          <h2 className="text-align">Contact Us</h2>
          <div className="form">
              <input className="form-input" type="text" name="name" id="name" placeholder="Enter Your name"></input>
              <input className="form-input" type="text" name="phone" id="phone" placeholder="Enter Your phone"></input>
              <input className="form-input" type="email" name="email" id="email" placeholder="Enter Your email"></input>
              <textarea className="form-input" name="text" id="text" cols="30" rows="10"placeholder="Ellaborate your concern"></textarea>
              <button className="btn btn-dark">Submit</button>
          </div>
      </section>
      <footer className="text-footer">
          <p>Copyright @2027 all rights reserved</p>
      </footer>
    </div>
  );
}

export default ResponsiveWeb;
