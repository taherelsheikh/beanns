import React, { Component } from "react";
import styled from "styled-components";




class Footer extends Component {
  render() {
    const Div_footer_main = styled.div`
    height: 447px;
    width: 1112px;
    position: relative;
top: -1982px;
margin: 0 auto;
z-index: 200;
overflow: hidden;

    `

    const P_footer_about = styled.p`
      font-family: "Alegreya Sans", sans-serif;
      font-size: 25px;
      font-weight: 500;
      color: rgba(74, 74, 74, 0.71);
      letter-spacing: 0.77px;
      margin: 0;
    `

    const P_footer_titles = styled.p`
    font-family: "Alegreya Sans", sans-serif;
    font-size: 20px;
    color: rgba(232,134,31,0.70);
    letter-spacing: 0.68px;
    margin: 0;
    margin-top: 20px;
        `


    const P_footer_subtitle = styled.p`
    font-family: "Alegreya Sans", sans-serif;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.68px;
    color: rgba(74, 74, 74, 0.71);
    margin: 0;
            `




  const Hr_table_horizontal_line = styled.hr`
              width: autp;
              height: 0px;
              border: solid 1px rgba(151, 151, 151, 0.27);
              margin:0;
            `;

  const Img_social_media_images = styled.img`
                        width: 40px;
                        height: 40px;
                        margin-right: 12px;
                      `;

const Div_social_media_accounts = styled.div`
display: flex;
// justify-content: center;
align-items: flex-start
margin-top: 111px;

`;



    return (
      <Div_footer_main>

      <P_footer_about>ABOUT</P_footer_about>
      <Hr_table_horizontal_line/>
      <P_footer_titles>PROJECT</P_footer_titles>
      <P_footer_subtitle>beanns is a project that started as a result of me trying to find an internship.</P_footer_subtitle>
      <P_footer_titles>ME</P_footer_titles>
      <P_footer_subtitle>I’m Taher Elsheikh, a data scientist interested in full stack and UI/UX. Let me know if you found beanns helpful.</P_footer_subtitle>
      <Div_social_media_accounts>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/taherelsheikhgwu/">
      <Img_social_media_images src={require('./Assets/linkedin.svg')} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/taherelsheikh/">

      <Img_social_media_images src={require('./Assets/github.svg')} />
      </a>

      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/taherelsheikh/">

      <Img_social_media_images src={require('./Assets/twitter.svg')} />
      </a>

      </Div_social_media_accounts>


      </Div_footer_main>
    );
  }
}

export default Footer;
