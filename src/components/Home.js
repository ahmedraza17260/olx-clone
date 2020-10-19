/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import AddItem from "./AddItem";
import nextId from "react-id-generator";

function Home() {
  // const [list, setList] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (loading) {
  //     let _list = [];
  //     for (let i = 0; i < 20; i++) {
  //       _list.push(<AddItem placeholder={true} key={i} />);
  //     }
  //     setList(_list);
  //   }
  // }, list);

  return (
    <div className=" home ">
      <div className="home__container  ">
        <div
          style={{ marginTop: "20px", margin: "10px" }}
          className="container-fluid "
        >
          <div className="carousel slide">
            <img
              className="poster__image"
              // src={homePage1}
              src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg"
              alt="home page 1"
            />
            <img
              src="https://tpc.googlesyndication.com/simgad/11089460272736820028"
              border="0"
              width="320"
              height="100"
              alt="img__add"
              className="img_ad"
            />
          </div>
          <div className="row">
            <div className="home__row col-lg-3 col-sm-12 col-md-6">
              <AddItem
                id={nextId()}
                // image="../images/image.jpg"
                // image="https://apollo-singapore.akamaized.net/v1/files/ix3b8fb918fn-PK/image;s=200x400;q=60"
                image="https://cache4.pakwheels.com/system/car_generation_pictures/4962/original/Honda_Civic_Facelift_2019.jpg?1555253134"
                price={4700000}
                title="Honda Civic 2020"
                location="Pakistan"
                time="6 Days Ago"
              />
            </div>

            <div className="home__row col-lg-3 col-sm-12 col-md-6">
              <AddItem
                id={nextId()}
                // image="../images/image.jpg"
                // image="https://apollo-singapore.akamaized.net/v1/files/ix3b8fb918fn-PK/image;s=200x400;q=60"
                image="https://cache2.pakwheels.com/system/car_generation_pictures/5260/original/alto.jpg?1595597920"
                price={1650000}
                title="Suzuki Alto 2020"
                location="Pakistan"
                time="15 Days Ago"
              />
            </div>

            <div className="home__row col-lg-3 col-sm-12 col-md-6">
              <AddItem
                id={nextId()}
                // image="../images/image.jpg"
                // image="https://apollo-singapore.akamaized.net/v1/files/ix3b8fb918fn-PK/image;s=200x400;q=60"
                image="https://cache3.pakwheels.com/system/car_generation_pictures/4564/original/Suzuki_Cultus_2017_(1).jpg?1493101375"
                price={2000000}
                title="New Suzuki Cultus 2020"
                location="Pakistan"
                time="6 Days Ago"
              />
            </div>

            <div className="home__row col-lg-3 col-sm-12 col-md-6">
              <AddItem
                id={nextId()}
                // image="../images/image.jpg"
                // image="https://apollo-singapore.akamaized.net/v1/files/ix3b8fb918fn-PK/image;s=200x400;q=60"
                image="https://cache1.pakwheels.com/system/car_generation_pictures/4664/original/Toyota_Corolla.jpg?1503296685"
                price={3900000}
                title="Toyota Corolla 2020"
                location="Pakistan"
                time="15 Days Ago"
              />
            </div>

            <div className="home__row col-lg-3 col-sm-12 col-md-6">
              <AddItem
                id={nextId()}
                // image="../images/image.jpg"
                // image="https://apollo-singapore.akamaized.net/v1/files/ix3b8fb918fn-PK/image;s=200x400;q=60"
                image="https://imganuncios.mitula.net/1_kanal_house_for_sale_in_lahore_dha_phase_4_7580121561382757846.jpg"
                price={350000}
                title="1 Kanal House For Sale In Lahore Dha Phase 4"
                location="Pakistan"
                time="1 Year Ago"
              />
            </div>

            <div className="home__row col-lg-3 col-sm-12 col-md-6">
              <AddItem
                id={nextId()}
                // image="../images/image.jpg"
                // image="https://apollo-singapore.akamaized.net/v1/files/ix3b8fb918fn-PK/image;s=200x400;q=60"
                // image="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png"
                image="http://www.pngmart.com/files/1/Nike-Shoes.png"
                price={2000}
                title="Nike Running Shoe"
                location="Karachi"
                time="45 Days Ago"
              />
            </div>

            <div className="home__row col-lg-3 col-sm-12 col-md-6">
              <AddItem
                id={nextId()}
                // image="../images/image.jpg"
                // image="https://apollo-singapore.akamaized.net/v1/files/ix3b8fb918fn-PK/image;s=200x400;q=60"
                image="https://www.vhv.rs/dpng/d/599-5997011_airpods-pro-charging-case-hd-png-download.png"
                price={5000}
                title="Airpods Pro Charging Case"
                location="Karachi"
                time="6 Days Ago"
              />
            </div>

            <div className="home__row col-lg-3 col-sm-12 col-md-6">
              <AddItem
                id={nextId()}
                // image="../images/image.jpg"
                // image="https://apollo-singapore.akamaized.net/v1/files/ix3b8fb918fn-PK/image;s=200x400;q=60"
                image="https://pngimg.com/uploads/watches/watches_PNG9876.png"
                price={3000}
                title="Smart Watch"
                location="Karachi"
                time="6 Days Ago"
                style={{ width: "100px" }}
              />
            </div>
          </div>
        </div>
        <div className="home-page">
          {/* <div className="add-list flex ">{list}</div> */}
          <button className="load-more fontb c333 anim s20"> Load More </button>
        </div>
        <img
          src="https://tpc.googlesyndication.com/simgad/10330116627962781763?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnNuW4iRHOY7TMYBU1IHBAEdaJUiw"
          border="0"
          width=""
          height=""
          alt="img__add"
          className="img_ad1"
        />
        <div className="app-ribbon flex aic">
          <div className="img">
            <img
              className="bl"
              src="https://statics.olx.com.pk/external/base/img/phone-app.png"
              alt="olx-img"
            />
          </div>
          <div className="meta">
            <h2 className="title fontb s30 color "> TRY THE OLX APP </h2>
            <h2 className="slogan font s18 color ">
              Buy, sell and find just about anything using the app on your
              mobile.
            </h2>
          </div>
          <div className="links">
            <h2 className="title fontb s30 color "> Get Your App Today </h2>
            <div className="flex as">
              <a className="noul bl" href="#">
                <img
                  src="https://statics.olx.com.pk/external/base/img/appstore_2x.png"
                  alt="appStore-img"
                />
              </a>
              <a className="noul bl" href="#">
                <img
                  src="https://statics.olx.com.pk/external/base/img/playstore_2x.png"
                  alt="playStore-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
