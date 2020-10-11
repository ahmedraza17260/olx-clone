import React from "react";

function AddItem(props) {
  if ("placeholder" in props) {
    return (
      <div className="add-item">
        <div className="poster anim placeholder" />
        <div className="title anim placeholder" />
        <div className="tagline anim placeholder" />
        <div className="ftr anim flex">
          <div className="anim location placeholder" />
          <div className="anim stamp placeholder" />
        </div>
      </div>
    );
  }
  return <div className="add-item"></div>;
}

export default AddItem;
