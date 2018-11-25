import React, { Component } from "react";
import styled from "styled-components";

class BottomHero extends Component {
  render() {
    const Div_footer_angled_square = styled.div`
    width: 106%;
    height: 956px;
    -ms-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
    background-color: white;
    position: relative;
    top: -716px;
    left:-113px;
    `

  const Div_footer_main = styled.div`
      height: 1700px;
      background-color: #f6f9fc;
      position: relative;
      /* top: -1079px; */
      top: -1032px;
      overflow: hidden;
        `


    return (
      <Div_footer_main>
      <Div_footer_angled_square/>
      </Div_footer_main>
    );
  }
}

export default BottomHero;
