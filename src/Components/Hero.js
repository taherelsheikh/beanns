import React, { Component } from "react";
import styled from "styled-components";

class Hero extends Component {
  render() {
    const Div_hero_main_background = styled.div`
      height: 743.9px;
      width:100%;
      background-image: linear-gradient(322deg, #ff986a, #ff986a 30%, #ffd46a);
      overflow: hidden;
      position: relative;
    `;

    const Div_hero_top_left_square = styled.div`
      width: 200px;
      height: 216px;
      background-image: linear-gradient(35deg, #ffd46a, #f9cb68);
      float: left;
    `;

    const Div_hero_top_right_square = styled.div`
    width:100%;
      height: 216px;
      background-image: linear-gradient(-90deg, #dea005 0%, #ffd46a 0%);
    `;

    const Div_hero_rotate_top_two_squares = styled.div`
      -ms-transform: rotate(-10deg);
      -webkit-transform: rotate(-10deg);
      transform: rotate(-10deg);
      position: relative;
      top: -205px;
      left: -33px;
    `;

    const Div_hero_bottom_left_square = styled.div`
      width: 447.3px;
      height: 186.4px;
      background-color: rgba(255, 212, 106, 0.33);
      position: relative;
      top: 143px;
      left: -30px;
      z-index:50;
      @media screen and (max-width: 375px) {
       visibility:hidden;
     }

    `;

    const Div_hero_bottom_right__white_square = styled.div`
      height: 400px;
      width: 110%
      background-color: white;
      position: relative;
      top: 143px;
      left: -30px;
      @media screen and (max-width: 375px) {
        top: 234px;
     }


    `;

    const Div_hero_section2 = styled.div`
      -ms-transform: rotate(-10deg); /* IE 9 */
      -webkit-transform: rotate(-10deg); /* Safari */
      transform: rotate(-10deg); /* Standard syntax */
      position: relative;
      top: 54px;
      /* left: -px; */
      width: 100%;
      z-index: 3;
    `;

    const Div_hero_mobile = styled.div`
    @media screen and (max-width: 375px) {
      -ms-transform: rotate(-10deg); /* IE 9 */
      -webkit-transform: rotate(-10deg); /* Safari */
      transform: rotate(-10deg);
      position: absolute;
      top: -121px;
      left: -88px;
      width: 482px;
      height: 192px;
      background: rgba(255,212,106,0.45);
            z-index: 2;
}
    `;



    return (
      <div>
        <Div_hero_main_background>
        <Div_hero_mobile />

          <Div_hero_rotate_top_two_squares>

            <Div_hero_top_left_square />
            <Div_hero_top_right_square />
          </Div_hero_rotate_top_two_squares>


          <Div_hero_section2>
            <Div_hero_bottom_left_square />
            <Div_hero_bottom_right__white_square />
          </Div_hero_section2>
        </Div_hero_main_background>
      </div>
    );
  }
}

export default Hero;
