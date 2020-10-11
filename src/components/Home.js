/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useState } from "react";
import AddItem from "./AddItem";

function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      let _list = [];
      for (let i = 0; i < 20; i++) {
        _list.push(<AddItem placeholder={true} key={i} />);
      }
      setList(_list);
    }
  }, list);

  return (
    <React.Fragment>
      <div className="home-page">
        <div className="add-list flex ">{list}</div>
        <button className="load-more fontb c333 anim s20"> Load More </button>
      </div>
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
            Buy, sell and find just about anything using the app on your mobile.
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
    </React.Fragment>
  );
}

export default Home;
