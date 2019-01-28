import React from "react";
import Pic from "./gallerypic";

class Gallery extends React.Component {
  state = {
    active: 1
  };
  justMounted = true;
  numberOfPic = 3;
  stop = null;
  pics = [];

  handleBack = () => {
    var newAc =
      this.state.active === 1 ? this.numberOfPic : this.state.active - 1;
    this.setState({
      active: newAc
    });
  };

  handleForward = () => {
    var newAc =
      this.state.active === this.numberOfPic ? 1 : this.state.active + 1;
    this.setState({
      active: newAc
    });
  };

  componentDidMount() {
    this.stop = setInterval(() => {
      var newAc;
      if (this.justMounted) {
        newAc = 2;
      } else {
        newAc =
          this.state.active === this.numberOfPic ? 1 : this.state.active + 1;
      }
      this.justMounted = false;
      this.setState({
        active: newAc
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.stop);
  }

  render() {
    console.log(this.state.active);
    return (
      <div style={{ width: "100%", height: "450px", marginTop: "30px" }}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className={this.state.active === 1 ? "active" : ""}
            />
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
              className={this.state.active === 2 ? "active" : ""}
            />
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="2"
              className={this.state.active === 3 ? "active" : ""}
            />
          </ol>
          <div className="carousel-inner">
            <div
              className={
                this.state.active === 1
                  ? "carousel-item active"
                  : "carousel-item"
              }
            >
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  background:
                    "url('https://c1.staticflickr.com/4/3503/5849286573_341db20396_b.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </div>
            <div
              className={
                this.state.active === 2
                  ? "carousel-item active"
                  : "carousel-item"
              }
            >
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  background:
                    "url('https://www.iitr.ac.in/campus_life/Hostels/RajivBhawan/images/slider_main/rgb4.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
            onClick={this.handleBack}
            style={{ opacity: 0 }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
            onClick={this.handleForward}
            style={{ opacity: 0 }}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
export default Gallery;
