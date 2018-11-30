import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import profile from 'assets/img/club-bg.jpg';
//
import pageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import CustomizedTabs from "components/CustomizedTabs/CustomizedTabs.jsx";
import * as service from '../../services/apis';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import profileImage from "assets/img/faces/avatar.jpg";
import Email from "@material-ui/icons/Email";

class ClubPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    const {classes, ...rest} = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    return (
      <div>
        {/*<Header
          color="transparent"
          brand="G Spare Bowling"
          rightLinks={<HeaderLinks/>}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require('assets/img/club-bg.jpg')}/>*/}
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses}/>
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>G Spare Bowling</h3>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Description
                </p>
              </div>

              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={20} className={classes.navWrapper}>
                  <CustomizedTabs />

                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(pageStyle)(ClubPage);
