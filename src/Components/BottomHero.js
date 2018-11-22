import React, { Component } from "react";
import styled from "styled-components";

class BottomHero extends Component {
  render() {
    const Div_footer_angled_square = styled.div`
    width: 2000px;
    height: 800px;
    -ms-transform: rotate(-10deg); /* IE 9 */
    -webkit-transform: rotate(-10deg); /* Safari */
    transform: rotate(-10deg); /* Standard syntax */
    background-color: white;
    position: relative;
    top: -436px;
    left:-113px;
    `

  const Div_footer_main = styled.div`
      height: 1700px;
      background-color: #f6f9fc;
      position: relative;
      top: -1079px;
      z-index: 100;
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
