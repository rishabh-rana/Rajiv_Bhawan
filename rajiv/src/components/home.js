import React from "react";
import styled, { css } from "styled-components";

const MainPic = styled.div`
  background-image: url("https://www.iitr.ac.in/campus_life/uploads/Image/DSC_0068.JPG");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 78%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 78%, 0 100%);
  width: 100%;
  height: 300px;
  opacity: 0.6;
  transition: opacity 2s;
  position: absolute;
`;

const Second = styled.div`
  background-image: url("https://www.iitr.ac.in/campus_life/Hostels/RajivBhawan/images/slider_gallery/pic2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 79%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 79%);
  width: 100%;
  height: 300px;
  opacity: 0.6;
  transition: opacity 2s;
`;

const MainText = styled.div`
  position: absolute;
  top: 340px;
  font-family: Righteous;
  font-size: 50px;
  color: black;
`;

const Para = styled.div`
  font-size: 17px;
  display: block;
  margin-bottom: 100px;

  ${props =>
    props.right &&
    css`
      text-align: right;
    `}
`;

class Home extends React.Component {
  stop = null;
  state = {
    hide: true
  };

  componentDidMount() {
    this.stop = setInterval(() => {
      this.setState({
        hide: !this.state.hide
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.stop);
  }

  render() {
    var class1 = this.state.hide ? "hideme" : "";
    var class2 = this.state.hide ? "" : "hideme";
    return (
      <div>
        <MainPic className={class1} />
        <Second className={class2} />

        <MainText className="abs-center-x">RAJIV BHAWAN</MainText>

        <div className="container mt-5">
          <Para>
            Rajiv Bhawan is the newest jewel among the 19 hostels of IIT
            Roorkee. It is named on the 6th prime minister of India, Rajiv
            Gandhi. It was on 27 October, 2008 that the founding stone of the
            Bhawan was laid by the then director of IITR , Dr. S.C. Saxena. The
            construction was completed on 12 November 2010.The Bhawan came to be
            known in its present inhabitable form on 17 July, 2011, when the
            students first walked in. Rajiv Bhawan boasts of 675 rooms
            distributed between 6 floors, dining mess , canteen and 8 guest
            rooms. The bhawan also has a state of art cyber cafe with 20 high
            end desktop computers, a party room and a common room with HD
            television , 2 table tennis tables , 2 foosball tables ,2 caroms and
            6 chess boards. It also has a washing room with 6 front loading
            fully automatic washing machines. The bhawan provides ease of
            accessibility with 6 lifts. Bhawan inmates also enjoy high speed
            internet through wired LAN. Rajiv Bhawan also boasts of an eco
            friendly design with solar powered water heater and lighting.
          </Para>

          <Para right>
            Rajiv Gandhi, in full Rajiv Ratna Gandhi (born Aug. 20, 1944,
            Bombay, India—died May 21, 1991, Sriperumbudur, near Madras), the
            leading general secretary of India’s Congress (I) Party (from 1981)
            and prime minister of India (1984–89) after the assassination of his
            mother, Indira Gandhi. He was himself assassinated in 1991. While
            his brother was alive, Rajiv largely stayed out of politics; but,
            after Sanjay, a vigorous political figure, died in an airplane crash
            on June 23, 1980, Indira Gandhi, then prime minister, drafted Rajiv
            into a political career. In June 1981 he was elected in a
            by-election to the Lok Sabha (lower house of Parliament) and in the
            same month became a member of the national executive of the Youth
            Congress.
          </Para>

          <Para>
            Whereas Sanjay had been described as politically “ruthless” and
            “willful” (he was considered a prime mover in his mother’s state of
            emergency in 1975–77), Rajiv was regarded as a nonabrasive person
            who consulted other party members and refrained from hasty
            decisions. When his mother was killed on Oct. 31, 1984, Rajiv was
            sworn in as prime minister that same day and was elected leader of
            the Congress (I) Party a few days later. He led the Congress (I)
            Party to a landslide victory in elections to the Lok Sabha in
            December 1984, and his administration took vigorous measures to
            reform the government bureaucracy and liberalize the country’s
            economy. He resigned his post as prime minister in November 1989,
            though he remained leader of the Congress (I) Party.
          </Para>
        </div>
      </div>
    );
  }
}
export default Home;
