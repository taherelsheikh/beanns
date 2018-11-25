import React, { Component } from "react";
import styled from "styled-components";
import {Animated} from "react-animated-css";


class Table extends Component {
  constructor() {
      super();
      this.state = {
        emails: {
          emailOne: "mark@fb.com",
          emailTwo: "zuck@fb.com",
          emailThree: "markzuck@fb.com",
          emailFour: "mzuck@fb.com",
          emailFive: "mark.zuck@fb.com",
          emailSix: "mark_zuck@fb.com"
        }
  }
  this.handleEmails = this.handleEmails.bind(this)
}


  handleEmails(emails) {
     this.setState({emails: emails})
  }

  render() {
    const Div_table_box = styled.div`
      /* height: 716px; */
      display: flex;
    justify-content: center;
    /* width: 1112px; */
    height: 716px;
    width: 1112px;
    margin: 0 auto;


    `;

    const Div_table_box_small = styled.div`
    border-radius: 3px;
    border: 1px solid rgba(151, 151, 151, 0.39);
    box-shadow: 0 6px 8px 0 rgba(164, 164, 164, 0.28),
    4px 2px 4px 0 rgba(0, 0, 0, 0.09);
    position: relative;
    background-color: #ffffff;
    height: 525px;
    width: 1112px;
    /* margin:  auto; */
    /* margin:  2px; */
    margin-top: -33px;
    margin-left: 54px;
    margin-right: 54px;
    top: -513px;
    /* right: -306px; */
    overflow: hidden;
    z-index: 200;
    `



    const Div_table = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      // justify-content: center;


    `;

    const Div_table_row = styled.div`
      display: flex;
      flex-direction: column;
      text-align: center;
    `;

    const Hr_table_horizontal_line = styled.hr`
      width: 875px;
      height: 0px;
      border: 1px solid rgba(151, 151, 151, 0.27);
      margin-bottom: 46px;
      margin-top: 90px;
      position: relative;
      top: 9px;
    `;

    const Results_headers_title = styled.p`
      display: inline;
      font-family: "Alegreya Sans", sans-serif;
      font-size: 20px;
      color: #9b9b9b;
      letter-spacing: 0.74px;
      position: relative;
      top: 55px;
      right: -290px;
      margin-right: 280px;
    `;

    const Div_table_title = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    `;

    const P_table_title = styled.p`
      font-family: "Alegreya Sans", sans-serif;
      font-size: 22px;
      font-weight: 500;
      color: #9b9b9b;
      letter-spacing: 0.74px;
      position: relative;
      top: -100px;
      margin: 0;
    `;

    const P_table_data = styled.p`
      font-family: "Alegreya Sans", sans-serif;
      font-size: 20px;
      font-weight: 200;
      font-style: normal;
      font-stretch: normal;
      line-height: -1px;
      letter-spacing: 3px;
      text-align: center;
      color: #9b9b9b;
      position: relative;
      top: -47px;
    `;

    const P_table_data_winner = styled.p`
      font-size: 20px;
      font-weight: 400;
      font-style: normal;
      font-stretch: normal;
      line-height: -1px;
      letter-spacing: 3px;
      text-align: center;
      color: #9b9b9b;
      position: relative;
      top: -47px;
    `;


    const P_table_img_check = styled.img`
    height: 39px;
    width: 39px;
    position: relative;
    margin-bottom: 25px;
    top: -42px;
        left: 17px;
            `


    const P_table_img_cross = styled.img`
    height: 31px;
    width: 31px;
    position: relative;
    margin-bottom: 33px;
    top: -39px;
    left: 21px;                        `

    return (
      <Div_table_box>

      <Div_table_box_small>
        <Hr_table_horizontal_line />
        <Div_table>
        <Div_table_row>
          <P_table_title>EMAIL</P_table_title>
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <P_table_data_winner>{this.state.emails['emailOne']}</P_table_data_winner>
          </Animated>
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

          <P_table_data_winner>{this.state.emails['emailTwo']}</P_table_data_winner>
          </Animated>
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

          <P_table_data_winner>{this.state.emails['emailThree']}</P_table_data_winner>
          </Animated>
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

          <P_table_data_winner>{this.state.emails['emailFour']}</P_table_data_winner>
          </Animated>
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

          <P_table_data_winner>{this.state.emails['emailFive']}</P_table_data_winner>
          </Animated>
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

          <P_table_data_winner>{this.state.emails['emailSix']}</P_table_data_winner>
          </Animated>

        </Div_table_row>
        </Div_table>
        </Div_table_box_small>
      </Div_table_box>
    );

  }
}

export default Table;
