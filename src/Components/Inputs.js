import React, { Component } from "react";
import styled from "styled-components";
import InputTesting from "./InputTesting"


class Inputs extends Component {

    constructor() {
        super();
        this.state = {
          firstName: "",
          secondName: "",
          domainName: ""
}

}

Submit() {
  let data = this.refs.Inputs.passData();
  return(data)
}

handleSubmit() {
  let data = this.refs.Inputs.stringManipulation()
}

handleSubmitEnter(event) {
  if (event == "Enter") {
    let data = this.refs.Inputs.stringManipulation()
  }
}




  render() {
    const Div_inputs_outline = styled.div`
    width: 1112px;
    height: 363px;
    margin: 0 auto;
    position: relative;
    top: -624px;
    overflow: hidden;
    z-index: 50;
    @media screen and (max-width: 375px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    height: 494px;
    z-index: 50;
   }
    `;

  const P_title_beans = styled.p`
  font-family: 'Comfortaa', cursive;
  font-size: 38px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0px;
  display: inline;
  margin-bottom: 25px;
  margin: 0;

`;

const P_subtitle_beans = styled.p`
font-family: larsseit, Helvetica, Arial, sans-serif;
font-size: 20px;
font-weight: 300;
color: #ffffff;
margin: 0;
margin-top: -0.2em;
`;

const P_subtitle_beans_second = styled.p`
font-family: larsseit, Helvetica, Arial, sans-serif;
font-size: 20px;
font-weight: 400;
color: #ffffff;
margin: 0;
`;



const Img_beans = styled.img`
// -ms-transform: rotate(-180deg); /* IE 9 */
// -webkit-transform: rotate(-180deg); /* Safari */
// transform: rotate(-180deg); /* Standard syntax */
width: 32px;
    height: 32px;
    `


const Flexbox_Div_inputs = styled.div`
margin-top: 10px;
display: flex;
justify-content: space-around;
position: absolute;
width: 100%
top:122px;

        `


const Input = styled.input`
          width: 229px;
          height: 42px;
          background: transparent;
          border: solid 1px rgba(0, 0, 0, 0.45);
          box-shadow: 0px 0px 0px 1.5px #f8e71c;
          border-radius: 8px;
          display: block;

          font-size: 15px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: 0.7px;
          color: #ffffff;
          padding-left: 5px;

        `;

const Label = styled.label`
          height: 24px;
          font-size: 16px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: 0.7px;
          color: #ffffff;
          display: block;
        `;


const Button_predict = styled.button`
          width: 398px;
          height: 48px;
          border-radius: 10px;
          background-color: rgba(69, 181, 78, 1);
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.29);
          &:hover {
            margin-top : -1px;
          }

        `;

const Div_button = styled.div`
display: flex;
justify-content: center;
position: absolute;
width: 100%
top: 313px;
@media screen and (max-width: 375px) {
  top: 444px;
}

`

const P_button_text = styled.p`
  font-family: "Alegreya Sans", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: #ffffff;
  margin: 0;
`;

    return (
        <Div_inputs_outline>
         <P_title_beans>beanns.</P_title_beans>
        <P_subtitle_beans>predict <strong>emails</strong> in seconds</P_subtitle_beans>
        <InputTesting
        ref="Inputs"
        passDataApp = {(data)=>{this.props.passDatafromInputs(data)}}
        />
        <Div_button>
        <Button_predict onClick={()=>{this.handleSubmit()}} onKeyPress={(event)=>{console.log(event.key)}} >
        <P_button_text>PREDICT EMAIL</P_button_text>
        </Button_predict>
        </Div_button>
        </Div_inputs_outline>
    );
  }
}

export default Inputs;
