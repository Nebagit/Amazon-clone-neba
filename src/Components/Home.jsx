import React from "react";
import "../Components/Home.css";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
   const settings = { dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    fade: true, 
    cssEase: "linear" 
  }; // Use fade mode for image transition // Use linear easing for smoother fading effect
  return <div className="home">
      <div className="home_container">
        <Slider {...settings}>
          <div>
            <img className="home_image" src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/717RUPA1bDL._SX3000_.jpg" alt="" />
          </div>
          <div>
            <img className="home_image" src="https://amazon-clone-by-nati.netlify.app/assets/Kitchen-f36457ef.jpg" alt="" />
          </div>
          <div>
            <img className="home_image" src="https://amazon-clone-by-nati.netlify.app/assets/Toys-970565c5.jpg" alt="" />
          </div>
        </Slider>

        <div className="home_row">
          <Product id="1231" title="TOZO T10 Bluetooth 5.3 Wireless Earbuds with Wireless Charging Case IPX8 Waterproof Stereo Headphones in Ear Built in Mic Headset Premium Sound with Deep Bass for Sport Black" price={11.96} rating={5} image="https://m.media-amazon.com/images/I/715CLGC8OML.__AC_SX300_SY300_QL70_FMwebp_.jpg" />

          <Product id="1232" title="SHOKZ OpenRun (AfterShokz Aeropex) - Open-Ear Bluetooth Bone Conduction Sport Headphones - Sweat Resistant Wireless Earphones for Workouts and Running - Built-in Mic, with Headband" price={11.96} rating={5} image="https://m.media-amazon.com/images/I/51z-rf7XIjL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
        </div>
        <div className="home_row">
          <Product id="1233" title="Bose QuietComfort Earbuds II, Wireless, Bluetooth, Proprietary Active Noise Cancelling Technology In-Ear Headphones with Personalized Noise Cancellation & Sound, Triple Black" price={11.96} rating={5} image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51Yx+42b0PL._AC_SY300_SX300_.jpg" />
          <Product id="1234" title="Tile Slim 1-Pack. Thin Bluetooth Tracker, Wallet Finder and Item Locator for Wallet, Luggage Tags and More; Up to 250 ft. Range. Water-Resistant. Phone Finder. iOS and Android Compatible." price={11.96} rating={5} image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/418frxLAtoL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
          <Product id="1235" title="Apple AirPods (2nd Generation) Wireless Ear Buds, Bluetooth Headphones with Lightning Charging Case Included, Over 24 Hours of Battery Life, Effortless Setup for iPhone" price={11.96} rating={5} image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/417OJaY3DAL.__AC_SY445_SX342_QL70_FMwebp_.jpg" />
        </div>
        <div className="home_row">
          <Product id="1236" title="INIU Portable Charger, Slimmest 10000mAh 5V/3A Power Bank, USB C in&out High-Speed Charging Battery Pack, External Phone Powerbank Compatible with iPhone 15 14 13 12 11 Samsung S22 S21 Google iPad etc" price={11.96} rating={5} image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51AOZq9HhEL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
          <Product id="1237" title="Ailun 3 Pack Screen Protector for iPhone 15 Pro Max [6.7 inch] + 3 Pack Camera Lens Protector with Installation Frame,Sensor Protection,Dynamic Island Compatible,Case Friendly Tempered Glass Film" price={11.96} rating={5} image="https://m.media-amazon.com/images/I/71aodrmIgCL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
          <Product id="1238" title="Tile Mate 1-Pack. Black. Bluetooth Tracker, Keys Finder and Item Locator for Keys, Bags and More; Up to 250 ft. Range. Water-Resistant. Phone Finder. iOS and Android Compatible." price={11.96} rating={5} image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/4161BoDqu3L.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
        </div>
        <div className="home_row">
          <Product id="1239" title="3 in 1 Charging Station for iPhone, Wireless Charger for iPhone 15 14 13 12 11 X Pro Max & Apple Watch - Charging Stand Dock for AirPods 3/2/1/Pro" price={11.96} rating={5} image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Kf+coz5uL._AC_SY300_SX300_.jpg" />
          <Product id="1210" title="Fitbit Inspire 3 Health &-Fitness-Tracker with Stress Management, Workout Intensity, Sleep Tracking, 24/7 Heart Rate and more, Midnight Zen/Black One Size (S & L Bands Included)" price={11.96} rating={5} image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61gFrSlmofL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
        </div>

        <div className="home_row">
          <Product id="1211" title="Cell Phone Stand with Wireless Bluetooth Speaker and Anti-Slip Base HD Surround Sound Perfect for Home and Outdoors with Bluetooth Speaker for Desk Compatible with iPhone/ipad/Samsung Galaxy" price={11.96} rating={5} image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71cjRhnTVtL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
          <Product id="1212" title="Fitbit Charge 6 Fitness Tracker with Google apps, Heart Rate on Exercise Equipment, 6-Months Premium Membership Included, GPS, Health Tools and More, Obsidian/Black, One Size (S & L Bands Included)" price={11.96} rating={5} image="https://m.media-amazon.com/images/I/61ZtqtvoD2L.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
          <Product id="1213" title="INIU Wireless Charger, 15W Fast Wireless Charging Station with Sleep-Friendly Adaptive Light Compatible with iPhone 15 14 13 12 Pro XR XS 8 Plus Samsung Galaxy S23 S22 S21 S20 Note 20 10 Google etc" price={11.96} rating={5} image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Ejp4aG40L.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
        </div>
      </div>
      <div className="footer-wrapper">
        <div className="footer-links-wrapper row">
          <div className="links-wrapper col-sm-12 col-md">
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Amazon</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">About Amazon</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Press Center</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Amazon Devices</a>
              </li>
              <li>
                <a href="#">Amazon Science</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper col-sm-12 col-md">
            <h3>Make Money with Us</h3>
            <ul>
              <li>
                <a href="#">Sell on Amazon</a>
              </li>
              <li>
                <a href="#">Sell apps on Amazon</a>
              </li>
              <li>
                <a href="#">Supply to Amazon</a>
              </li>
              <li>
                <a href="#">Protect & Build Your Brand</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">Become a Delivery Driver</a>
              </li>
              <li>
                <a href="#">Start a Package Delivery Business</a>
              </li>
              <li>
                <a href="#">Advertise Your Products</a>
              </li>
              <li>
                <a href="#">Self-Publish with us</a>
              </li>
              <li>
                <a href="#">Host an Amazon Hub</a>
              </li>
              <li>
                <a href="#">See More Ways to Make Money</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper col-sm-12 col-md">
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>
                <a href="#">Amazon Visa</a>
              </li>
              <li>
                <a href="#">Amazon Store Card</a>
              </li>
              <li>
                <a href="#">Amazon Secured Card</a>
              </li>
              <li>
                <a href="#">Amazon Business Card</a>
              </li>
              <li>
                <a href="#">Shop with Points</a>
              </li>
              <li>
                <a href="#">Credit Card Marketplace</a>
              </li>
              <li>
                <a href="#">Reload Your Balance</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Amazon Currency</a>
              </li>
              <li>
                <a href="#">Converter</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper col-sm-12 col-md">
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">Your Orders</a>
              </li>
              <li>
                <a href="#">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="#">Amazon Prime</a>
              </li>
              <li>
                <a href="#">Returns & Replacements</a>
              </li>
              <li>
                <a href="#">Manage Your content and Devices</a>
              </li>
              <li>
                <a href="#">Your Recalss and Product Safety Alerts</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
}

export default Home;
