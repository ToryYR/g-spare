import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";
import KakaoLogin from 'react-kakao-login';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({cardAnimaton: ""});
      }.bind(this),
      700
    );
  }

  onClickButton = () => {
    this.setState(() => ({
      hidden: !this.state.hidden
    }));
  };

  kakaoSuccess = (response) => {
    this.onClickButton();
    const userID = response.profile.id;
    const userNickName = response.profile.properties.nickname;
    const userImage = response.profile.properties.profile_image;
    this.user = response.profile;
    localStorage.setItem('user', response.profile);

    //window.document.getElementById('userImage').src = userImage;
    //window.document.getElementById('user').innerHTML = userNickName;
    //window.document.getElementById('loginButton').hidden = true;

    console.log(userID);
    console.log(userImage);
    console.log(userNickName);
    console.log(response);
  };

  kakaoFailure = (error) => {
    console.log(error);
  };

  render() {
    const {classes, ...rest} = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="G Spare Bowling"
          rightLinks={<HeaderLinks/>}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"}/>
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"}/>
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"}/>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <div className="DimmedBlockInner">
                        <div className="Close" onClick={this.onClickButton}/>
                        <div className="modal modal--setting">
                          <div className="modal-header">
                            <h2 className="modal__title"> G Spare</h2>
                          </div>
                          <div className="modal-content">
                            <div className="setting setting--locale">
                              <br/>
                              <KakaoLogin
                                jsKey="c773aa78765cb8c17f568d723385251b"
                                onSuccess={this.kakaoSuccess}
                                onFailure={this.kakaoFailure}
                                className="kakao-login-button"
                                getProfile={true}
                              />
                              <br/>
                              <br/>
                              <ul className="setting-list">
                              </ul>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <br/>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg">
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>

              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont/>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
