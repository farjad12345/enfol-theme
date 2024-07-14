import "./App.css";
import { useState } from "react";
import { Element, Link, animateScroll as Scroll } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp} from "@fortawesome/free-solid-svg-icons"
function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <div className="App">
                 <Element name="home">

      <header className="header">
        <nav className="nav">
          <img src="./images/logo_wedding_white.png" alt="" className="logo" />
          <ul className={isShowModal ? "menu" : " menu display-none"}>
            <li>
            <Link to="home" smooth={true} duration={500}>
                <span>home</span>
              </Link>
            </li>
            <li>
            <Link to="our-story" smooth={true} duration={500}>
                <span>our story</span>
</Link>            </li>
      
            <li>
            <Link to="who-we-are" smooth={true} duration={500}>
                <span>who we are</span>
              </Link>
            </li>
            <li>
            <Link to="wedding" smooth={true} duration={500}>
                <span>wedding</span>
</Link>            </li>
            <li>
            <Link to="Accomodation" smooth={true} duration={500}>
                <span>Accomodation</span>
              </Link>
            </li>
            <li>
            <Link to="Registery" smooth={true} duration={500}>
                <span>Registery</span>
              </Link>

            </li>
            <li>
            <Link to="RSVP" smooth={true} duration={500}>
                <span>RSVP</span>
              </Link>
            </li>
          </ul>
          <div
            className="menu-toggler"
            onClick={() => setIsShowModal((prevstate) => !prevstate)}
          >
            {isShowModal ? (
              <FontAwesomeIcon icon={faTimes} className="fa-bars" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="fa-bars" />
            )}
          </div>
        </nav>
        <section className="header-section">
          <h1>Endré & Fabienne</h1>
          <p className="second-family">
            JULI 4TH – ROSEGARDEN CHAPPEL – ORLANDO, FOLRIDA
          </p>
        </section>
      </header>
      </Element>
      <main className="main">
        <section className="our-story-top">
          <h2>We are getting married!</h2>
          <div className="icon-parent">
            <FontAwesomeIcon icon={faHeart} className="fa-heart" />
          </div>
          <p className="second-family">
            After having searched for each other for more than 25 years we are
            now
            <br />
            happy to announce that we will celebrate our wedding together on
          </p>
          <time>Juli 4th 2024</time>
        </section>
        <Element name="our-story">

        <section className="our-story-main ">
          <div className="container">
            <h2>Our Story</h2>
            <div className="icon-parent">
              <FontAwesomeIcon
                icon={faHeart}
                className="fa-heart  light-gray"
              />
            </div>
            <div className="our-story-wraper ">
              <p className="second-family">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean{" "}
                <span className="text-red">commodo ligula eget dolor</span> .
                Aenean massa. Cum sociis natoque penatibus et magnis dis{" "}
                <span className="text-red"> parturient montes,</span> nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla{" "}
                <span className="text-red">vel, aliquet nec,</span> vulputate
                eget, arcu.
              </p>
              <p className="second-family">
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo. Nullam dictum felis eu pede mollis pretium. Integer
                tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                vulputate eleifend tellus{" "}
                <span className="text-red"> Aenean leo ligula,</span> porttitor
                eu, consequat vitae, eleifend ac, enim. Aliquam lorelus.
              </p>
            </div>
            <div className="icon-parent ">
              <FontAwesomeIcon
                icon={faHeart}
                className="fa-heart  light-gray"
              />
            </div>
          </div>
        </section>
        </Element>
        <Element name="who-we-are">
        <section className="who-are-we">
          <h2>Who are we?</h2>
          <p>The most important participants</p>
        </section>
        </Element>
        <section className="container">
          <div className=" Groom-Bride  ">
            <section className="groom-bride-box">
              <h3>The Groom</h3>
              <figure>
                <div className="grom-bride-box-image">
                  <img
                    src="./images/set1-person1-845x684.jpg"
                    alt="the groom"
                  />
                </div>
                <figcaption className="second-family"> Endré</figcaption>
                <p className="second-family">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </figure>
            </section>
            <section className="groom-bride-box">
              <h3>The Bride</h3>
              <figure>
                <div className="grom-bride-box-image">
                  <img
                    src="./images/set1-person2-845x684.jpg"
                    alt="the  bride"
                  />
                </div>
                <figcaption className="second-family"> Fabienne</figcaption>
                <p className="second-family">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus..
                </p>
              </figure>
            </section>
          </div>
        </section>
        <div className="customers">
          <section className="customers-side costomer-left-side">
            <h2>The Groomsmen</h2>
            <div className="customer-gallery">
              <figure>
                <div>
                  <img src="./images/boy-1.jpg" alt="" />
                </div>
                <figcaption className="second-family">Frank Wood</figcaption>
              </figure>
              <figure>
                <div>
                  <img src="./images/boy-2.jpg" alt="" />
                </div>
                <figcaption className="second-family">Marco Banio</figcaption>
              </figure>
              <figure>
                <div>
                  <img src="./images/boy-3.jpg" alt="" />
                </div>
                <figcaption className="second-family">Marcus Cole</figcaption>
              </figure>
            </div>
          </section>
          <section className="customers-side costomer-right-side">
            <h2>The Bridesmaids</h2>
            <div className="customer-gallery">
              <figure>
                <div>
                  <img src="./images/girl-1.jpg" alt="" />
                </div>
                <figcaption className="second-family">Sara Atkins</figcaption>
              </figure>
              <figure>
                <div>
                  <img src="./images/girl-2.jpg" alt="" />
                </div>
                <figcaption className="second-family">Sara Atkins</figcaption>
              </figure>

              <figure>
                <div>
                  <img src="./images/girl-3.jpg" alt="" />
                </div>
                <figcaption className="second-family">Carol Green</figcaption>
              </figure>
            </div>
          </section>
        </div>
        <Element name="wedding">

        <section className="wedding-detail  wedding-detail-top">
          <h2>Wedding Details</h2>
          <p>on Juli 4th 2018</p>
        </section>
        </Element>
      
        <div className="container">
          <div className=" Accomodations-bottom ">
            <section className="Accomodations-bottom-box wedding-detail-inside ">
              <h3 className="second-family">Main Ceremony</h3>
              <p className="second-family">
                Rosegarden Chappel / 2:30pm – 3:30pm
              </p>
              <figure>
                <div className="Accomodations-bottom-box-image">
                  <img src="./images/wedding-table-845x321.jpg" alt="house 1" />
                </div>
                <figcaption className="second-family">
                  <p>15 Manwin Avenue</p>
                  <p className="second-family">Orlando, Florida – US</p>
                </figcaption>
              </figure>
            </section>
            <section className="Accomodations-bottom-box wedding-detail-inside">
              <h3 className="second-family">
                Wedding Dinner <span>&</span> Party
              </h3>
              <p className="second-family">
                Rosegarden Country Club / 4:30pm – Late
              </p>
              <figure>
                <div className="Accomodations-bottom-box-image">
                  <img
                    src="./images/wedding-colorful-light-balls-845x321.jpg"
                    alt=""
                  />
                </div>
                <figcaption className="second-family">
                  <p className="second-family">37 Castle Road</p>
                  <p className="second-family">ROrlando, Florida – US</p>
                </figcaption>
              </figure>
            </section>
          </div>
        </div>
        <Element name="Accomodation">

        <section className="wedding-detail">
          <h2>Accomodations</h2>
          <p>Some hotels nearby</p>
        </section>
        </Element>
        <div className="Accomodations-parent">
         <div className="container">
          <div className=" Accomodations-bottom ">
            <section className="Accomodations-bottom-box">
              <h3 className="second-family">Main Ceremony</h3>
              <p className="second-family">
                Rosegarden Chappel / 2:30pm – 3:30pm
              </p>
              <figure>
                <div className="Accomodations-bottom-box-image">
                  <img src="./images/house-1-845x684.jpg" alt="house 1" />
                </div>
                <figcaption className="second-family">
                  <p>15 Manwin Avenue</p>
                  <p className="second-family">Orlando, Florida – US</p>
                </figcaption>
              </figure>
            </section>
            <section className="Accomodations-bottom-box">
              <h3 className="second-family">165 Frankwin Avenue</h3>
              <p className="second-family">Orlando, Florida – US</p>
              <figure>
                <div className="Accomodations-bottom-box-image">
                  <img src="./images/house-3-845x684.jpg" alt="house 2" />
                </div>
                <figcaption className="second-family">
                  <p>37 Saderson Street</p>
                  <p className="second-family">Orlando, Florida – US</p>
                </figcaption>
              </figure>
            </section>
            <section className="Accomodations-bottom-box">
              <h3 className="second-family">Sheraton Inn</h3>
              <p className="second-family">High Class 5 Star Luxury</p>
              <figure>
                <div className="Accomodations-bottom-box-image">
                  <img
                    src="./images/house-croisette-promenade-in-cannes-845x684.jpg"
                    alt="house 3"
                  />
                </div>
                <figcaption className="second-family">
                  <p>12 Castleblack Road</p>
                  <p className="second-family">Orlando, Florida – US</p>
                </figcaption>
              </figure>
            </section>
          </div>
          <div className="container">
            <div className="Accomodations-description">
              <div className="icon-parent">
                <FontAwesomeIcon icon={faHeart} className="fa-heart" />
              </div>
              <p className="second-family">
                We got several deals with nearby hotels if you are visiting from
                outside Orlando.
              </p>
              <p className="second-family Accomodations-description-last-text">
                {" "}
                If you need any help with booking let us know!
              </p>
            </div>
          </div>
        </div>
        </div>
        <Element name="Registery">

        <section className="Accomodations-description Accomodations-description-bottom">
          <h3>Gift Registry</h3>
          <div className="icon-parent icon-parent-Accomodations ">
            <FontAwesomeIcon icon={faHeart} className="fa-heart" />
          </div>

          <p className="second-family  Accomodations-description-last-text ">
            We got several deals with nearby hotels if you are visiting from
            outside Orlando.If you need any help with booking let us know
          </p>
          <div className="container ">
            <div className=" Accomodations-bottom ">
              <section className="Accomodations-bottom-box">
                <figure>
                  <div className="Accomodations-bottom-box-image">
                    <img src="./images/logo1.png" alt="logo 1" />
                  </div>
                </figure>
              </section>
              <section className="Accomodations-bottom-box">
                <figure>
                  <div className="Accomodations-bottom-box-image">
                    <img src="./images/logo2.png" alt="logo 2" />
                  </div>
                </figure>
              </section>
              <section className="Accomodations-bottom-box">
                <figure>
                  <div className="Accomodations-bottom-box-image">
                    <img src="./images/logo3.png" alt="logo 3" />
                  </div>
                </figure>
              </section>
            </div>
          </div>
        </section>
        </Element>
        <Element name="RSVP">

        <div className="contact-us ">
          <form action="">
            <div className="contact-us-title">Rsvp</div>
            <div className="icon-parent icon-parent-contact-us">
              <FontAwesomeIcon icon={faHeart} className="fa-heart" />
            </div>
            <p className="second-family">
              Please let us know if you are able to attend and if so, if you
              bring someone. We can’t wait to see you at our wedding!
            </p>
            <div className="parent-inputs  second-family">
              <div className="contact-us-input">
                <label htmlFor="name">Your Name / Names *</label>
                <input type="text" id="name" />
              </div>
              <div className="contact-us-input">
                <label htmlFor="email">Your E-Mail *</label>
                <input type="email" id="email" />
              </div>
              <div className="contact-us-input">
                <label htmlFor="attend">You will attend *</label>
                <input type="text" id="attend" />
              </div>
              <div className="contact-us-input">
                <label htmlFor="Meal">Meal Preference *</label>
                <input type="text" id="Meal" />
              </div>
            </div>
            <div className="contact-us-submit">
              <input type="submit" value={"Send"} />
            </div>
          </form>
        </div>
        </Element>
      </main>
      <footer className="footer  second-family">
        <div className="container">
          <div className="footer-wraper">
            <div className="footer-left">
              <p>© Copyright - Enfold Wedding Demo -Farjad Babapour</p>
            </div>
            <div className="footer-right">
              <ul>
                <li>
                  <a href="">Our Wedding</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    <div className="elavator">
    <Link to="home" smooth={true} duration={500}>
    <FontAwesomeIcon  icon={faChevronUp} />  
  </Link>
     </div>
     </div>
  );
}

export default App;
