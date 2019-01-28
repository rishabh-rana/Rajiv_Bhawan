import React from "react";

const Pic = props => {
  var image = "url(" + props.image + ")";
  return (
    <div
      className={
        this.state.active === props.index
          ? "carousel-item active"
          : "carousel-item"
      }
    >
      <div
        style={{
          width: "100%",
          height: "400px",
          background: image,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
    </div>
  );
};
export default Pic;
