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
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from 'assets/img/club-bg.jpg';

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

//
import AlignItemsList from "components/AlignItemsList/AlignItemsList.jsx";
import pageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class ClubPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="G Spare Bowling"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require('assets/img/club-bg.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>YHJ Bowling Club</h3>
                      {/*<h6>DESIGNER</h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>*/}
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  안녕하세요.
                  🎳대학생 볼링클럽 "골든패스"입니다.
                  🎳함께 하면 언제나 즐겁고 행복해지는 사람들이 모여 평생인맥, 평생취미를 가질 수 있길 바라는 마음에서 클럽이름을 ✨골든패스✨로 지었습니다.
                  저희는 2018년 8월에 볼링을 취미로 하던 사람들끼리 모여 새롭게 창단한 클럽으로 앞으로 함께 할 신입회원을 모집하고 있습니다.
                  현재 회원들의 평균 연령대는 20대 중반이기 때문에 저희 또래에 맞는 사람들과 함께하고 싶어서 연령 제한은 28세로 두었고, 대학교 졸업여부는 상관없이 열심히 활동하실 분을 모집합니다!

                  ✔️매주 일요일 오후 2시
                  ✔️혜화 어썸라운지
                  ✔️볼링 3게임(4500X3=13500원)
                  ✔️정회원 회비 3만원(6개월)
                  ✔️월별 출석기준 최소 1회 이상
                  📍유령회원이 되거나 모임 내에서 부적합한 행동을 할 시 운영진 회의 하에 강퇴당할 수 있음을 미리 알려드립니다.
                  📍ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
                  ✔️지원 시 공지사항  ✔️

                  1.호기심보다는 '볼링'이라는 건설적인 취미활동을 목적으로 하는 분을 원해요.
                  2.사람들과 소통하길 좋아하며 술이 없더라도 함께 커피 한 잔을 마셔도 재밌게 놀 수 있는 분을 원해요.
                  3.마이볼이 있거나 구매할 의사가 있는 분을 원해요.
                  "놀 땐 놀고 집중할 땐 집중할 줄 아는 분"이라면 저희 클럽에 지금바로 지원해주세요😊

                  📌지원서 링크\nhttps://goo.gl/forms/lVC2G3M7MlYGo9Em1

                  ✔️지원서 검토 후 기재된 연락처로 합불여부를 개별연락드립니다.
                  ✔️모임에 한 번 나오신 이후 절차를 거쳐 정회원방에 초대해드립니다.
                  〰️ 기타 문의사항은 카카오플러스친구 '골든패스'로 연락주세요! 〰️

                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                      클럽원
                    </Typography>
                    <Typography component="p">
                    </Typography>
                  </Paper>
                  <AlignItemsList />
                  {/*<NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />*/}
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(pageStyle)(ClubPage);
