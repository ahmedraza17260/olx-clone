/* eslint-disable no-unused-vars */
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import {
  Button,
  ButtonGroup,
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Menu, { SubMenu, MenuItem } from "rc-menu";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  // console.log(basket);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const location = [
    { ID: 1, label: "Karachi" },
    { ID: 2, label: "Islamabad" },
    { ID: 3, label: "Lahore" },
    { ID: 4, label: "Peshawar" },
    { ID: 5, label: "Quetta" },
  ];

  const nav = [
    { ID: 1, Category: "Mobiles & Other", label: "Mobiles & Other" },
    { ID: 2, Category: "Cars", label: "Cars" },
    { ID: 3, Category: "Motorcycles", label: "Motorcycles" },
    { ID: 4, Category: "Houses", label: "Houses" },
    { ID: 5, Category: "TV - Video-Audio", label: "TV - Video-Audio" },
    { ID: 6, Category: "Tablets", label: "Tablets" },
    { ID: 7, Category: "Land & Plots", label: "Land & Plots" },
    { ID: 8, Category: "Clothes & Other", label: "Clothes & Other" },
  ];

  const category = {
    Mobiles: ["Tablets", "Accessories", "Mobile Phones"],
    Vehicles: [
      "Cars",
      "Cars on Installments",
      "Car Accessories",
      "Spare parts",
      "Buses, Vans & Trucks",
      "Rickshaw & Chingchi",
      "Other Vehicles",
      "Boats",
      "Tractor & Trailers",
    ],
    PropertySale: [
      "Land & Plots",
      "Houses",
      "Apartments & Flats",
      "Shops - Offices - Commercial Space",
    ],
    PropertyRent: [
      "Houses",
      "Apartments & Flats",
      "Portions & Floors",
      "Shops - Offices - Commercial Space",
      "Roommates & Paying Guest",
      "Vacation Rentals - Guest Houses",
      "Land & Plots",
      "Houses",
      "Apartments & Flats",
      "Portions & Floors",
      "Shops - Offices - Commercial Space",
      "Roommates & Paying Guest",
      "Vacation Rentals - Guest Houses",
      "Land & Plots",
    ],
    Electronics: [
      "Computers & Accessories",
      "TV - Video - Audio",
      "Cameras & Accessories",
      "Games & Entertainment",
      "Other Home Appliances",
      "Generators, UPS & Power Solutions",
      "Kitchen Appliances",
      "AC & Coolers",
      "Fridges & Freezers",
      "Washing Machines & Dryers",
    ],
    Bikes: [
      "Motorcycles",
      "Spare Parts",
      "Bicycles",
      "ATV & Quads",
      "Scooters",
    ],
    Business: [
      "Business for Sale",
      "Food & Restaurants",
      "Trade & Industrial",
      "Construction & Heavy Machinery",
      "Agriculture",
      "Other Business & Industry",
      "Medical & Pharma",
    ],
    Services: [
      "Education & Classes",
      "Travel & Visa",
      "Car Rental",
      "Driver & Taxi",
      "Web Development",
      "Other Services",
      "Electronic & Computer Repair",
      "Event Servicex",
      "Health & Beauty",
      "Maids & Domestic Help",
      "Movers & Packers",
      "Home & Office Repair",
      "Catering & Restaurant ",
      "Farm & Fresh Food",
    ],
    Jobs: [
      "Online",
      "Marketing",
      "Advertising and PR",
      "Education",
      "Customer Service",
      "Sales",
      "IT and Networking",
      "Hotel & Tourism",
      "Clerical & Administration",
      "Human Resources",
      "Accounting & Finanace",
      "Manufacturing",
      "Medical",
      "Domestic Studd",
      "Part Time",
      "Other Jobs",
    ],
    Animals: [
      "Fish & Aquariums",
      "Birds",
      "Hens & Aseel",
      "Cats",
      "Dogs",
      "Livestock",
      "Horses",
      "pet Food & Accessories",
      "Other Animals",
    ],
    Furniture: [
      "Sofa & Chairs",
      "Beds & Wardrobes",
      "Home Decoration",
      "Table & Dining",
      "Garden & Outdoor",
      "Painting & Mirrors",
      "Rugs & Carpets",
      "Curtains & Blinds",
      "Office Furniture",
      "Other HouseHold Items",
    ],
    Fashion: [
      "Accessories",
      "Cloths",
      "Footware",
      "Jawellary",
      "Make up",
      "Skin & hairs",
      "Watches",
      "Weddings",
      "Lawn & Pret",
      "Couture",
      "Other Fashion",
    ],
    Books: [
      "Books & Magazines",
      "Musical Instruments",
      "Sports Equipments",
      "Gym & Fitness",
      "Other Hobbies",
    ],
    Kids: [
      "Kid Furniture",
      "Toys",
      "Prams & Walkers",
      "Swings & Sliders",
      "Kids Accessories",
    ],
  };

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
          <Link to={!user && "/signin"} className="fontb color s16 noulh noul">
            <button className="sell flex color aic">
              {/* {!user ? <Link to="/signin"></Link> : <Link to="/"></Link>} */}
              {/* <AddIcon className="s15 ico" /> */}
              <span className="s18 fontb flex">
                +
                <h2 style={{ marginLeft: "5px" }} className="s18 fontb ">
                  Sell
                </h2>
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="hnav fixed flex aic">
        <div className="header__option" type="text">
          <Dropdown as={ButtonGroup}>
            <button
              style={{ fontWeight: "bold" }}
              className="downBtnOfNav view-cates flex aic color"
            >
              ALL CATEGORIES
              {/* <h2 className="s18 font"> ALL CATEGORIES</h2> */}
              {/* <ExpandMoreIcon className="arrow s24" /> */}
              <Dropdown.Toggle
                style={{ marginLeft: "5px" }}
                split
                variant="none"
                id="dropdown-split-basic"
              />
            </button>
            <Dropdown.Menu className="dropdown">
              <Link to="/">
                <NavDropdown.Item>
                  {category.Mobiles.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.Vehicles.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.PropertySale.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.PropertyRent.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.Electronics.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.Bikes.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.Business.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.Services.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.Jobs.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.Animals.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.Furniture.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.Fashion.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.Books.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>
                  {category.Kids.map((v, i) => (
                    <div className="subContent">
                      <Link className="important-links" to="/">
                        {v}
                      </Link>
                    </div>
                  ))}
                </NavDropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {nav.map((item, i) => {
          return (
            <Link
              key={i}
              className="noul noulh color bl font s15"
              to={"/AddItem/" + item.Category}
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
