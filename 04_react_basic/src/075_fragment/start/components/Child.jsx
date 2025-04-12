import "./Child.css";
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt,
        nihil nulla placeat nemo asperiores laboriosam? Est soluta alias labore
        doloremque exercitationem iusto tempora ad, dignissimos dicta quis in
        commodi.
      </p>
    </React.Fragment>
  );
};

export default Child;
