import React, { Component } from "react";
import styled from "styled-components";
// import imageUrl from './whatever.png';




class Footer extends Component {
  render() {
    const Div_footer_main = styled.div`
    height: 447px;
    width: 1112px;
    position: relative;
top: -1982px;
margin: 0 auto;
z-index: 200;
/* overflow: hidden; */

@media screen and (max-width: 375px) {
display:none
}


    `
    const Div_footer_iphone = styled.div`
    @media screen and (max-width: 375px) {

    /* height: 447px;
    width: 1112px; */
    height: 200px;
    width:100%
    position: relative;
top: -1982px;
margin: 0 auto;
z-index: 200;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

}

`



    const P_footer_about = styled.p`
      font-family: "Alegreya Sans", sans-serif;
      font-size: 25px;
      font-weight: 800;
      color: rgba(74, 74, 74, 0.71);
      letter-spacing: 0.77px;
      margin: 0;

    `

    const P_footer_titles = styled.p`
    font-family: larsseit, Helvetica, Arial, sans-serif;
    font-size: 19px;
    color:rgba(247, 63, 0, 0.7);
    letter-spacing: 0.68px;
    margin: 0;
    margin-top: 20px;
    font-weight: 300;
        `


    const P_footer_subtitle = styled.p`
    font-family: larsseit, Helvetica, Arial, sans-serif;
    font-size: 17px;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.20px;
    color: #525f7f;
    margin: 0;
            `




  const Hr_table_horizontal_line = styled.hr`
              width: 100%;
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

const Hr_table_horizontal_line_mobile = styled.hr`
position: relative;
top: -20px;
            width: 72%;
            height: 0px;
            border: solid 1px rgba(151, 151, 151, 0.27);
            margin:0;

          `;

const A_div_mobile = styled.div`
display: block;
`



    return (
      <div>
      <Div_footer_main>
      <Hr_table_horizontal_line/>
      <P_footer_titles>PROJECT</P_footer_titles>
      <P_footer_subtitle>Beanns was a project that started as a result of me trying to find an internship.</P_footer_subtitle>
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
     <Div_footer_iphone>

     <Hr_table_horizontal_line_mobile/>
     <A_div_mobile>
     <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/taherelsheikhgwu/">
     <Img_social_media_images src={require('./Assets/linkedin.svg')} />
     </a>
     <a target="_blank" rel="noopener noreferrer" href="https://github.com/taherelsheikh/">
     <Img_social_media_images src={require('./Assets/github.svg')} />
     </a>
     <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/taherelsheikh/">
     <Img_social_media_images src={require('./Assets/twitter.svg')} />
     </a>
     </A_div_mobile>




      </Div_footer_iphone>
      </div>
    );
  }
}

export default Footer;
