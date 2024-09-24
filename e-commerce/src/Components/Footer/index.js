import { CiBadgeDollar } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { LuShirt } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span>
              <LuShirt />
            </span>
            <span className="ml-2">Everyday fresh products</span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <TbTruckDelivery />
            </span>
            <span className="ml-2">Free delivery for order over $70</span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <RiDiscountPercentLine />
            </span>
            <span className="ml-2">Daily Mega Discounts</span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <CiBadgeDollar />
            </span>
            <span className="ml-2">Best price on the market</span>
          </div>
        </div>

        <div className="row mt-5 linksWrap">
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright mt-3 pt-3 pd-3 d-flex">
          <p className="mb-0">Copyright 2024. All rights reserved.</p>
          <ul className="list list-inline mb-0 ml-auto">
            <li className="list-inline-item">
              <Link to="#">
                <FaFacebookF />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
