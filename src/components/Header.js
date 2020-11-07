/* eslint-disable no-unused-vars */
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  // console.log(basket);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const nav = [
    { ID: 1, label: "Mobile Phones" },
    { ID: 2, label: "Cars" },
    { ID: 3, label: "Motorcycles" },
    { ID: 4, label: "Houses" },
    { ID: 5, label: "TV - Video-Audio" },
    { ID: 6, label: "Tablets" },
    { ID: 7, label: "Land & Plots" },
  ];

  return (
    <React.Fragment>
      <div className="header fixed flex aic">
        <Link to="/">
          <div className="logo">
            <img
              src="https://www.samaa.tv/wp-content/uploads/2018/11/OLX-logo.png"
              alt="olx-logo"
            />
          </div>
        </Link>
        <div className="location rel flex aic">
          {/* <div className="icon-search" /> */}
          <SearchIcon className="ico s24" />
          <input
            placeholder="Search city, area or locality"
            className="label s15 font"
            defaultValue="Pakistan"
          />
          <ExpandMoreIcon className="arrow s24" />
        </div>
        <div className="search flex aic header__search">
          <input
            type="text"
            placeholder="Find Cars, Mobile Phones and more"
            className="query font s15 header__searchInput"
          />
          <SearchIcon className="go s24 cfff header__searchIcon" />
        </div>
        <div className="actions flex aic">
          <Link to={!user && "/signin"} className="fontb color s16 noulh noul">
            <div
              onClick={handleAuthentication}
              className="header__option"
              type="text"
            >
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "\nSign Out" : "\nSign In"}
              </span>
            </div>
          </Link>
          <button className="sell flex color aic">
            <AddIcon className="s20 ico" />
            <h2 className="s18 fontb"> Sell</h2>
          </button>
        </div>
      </div>

      <div className="hnav fixed flex aic">
        <button className="view-cates flex aic color">
          <h2 className="s18 font"> ALL CATEGORIES</h2>
          <ExpandMoreIcon className="arrow s24" />
        </button>
        {nav.map((item, i) => {
          return (
            <Link
              key={i}
              className="noul noulh color bl font s15"
              to={"/browser/" + item.ID}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="hclr" />
    </React.Fragment>
  );
}

export default Header;
