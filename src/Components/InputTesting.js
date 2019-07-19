import React, { Component } from "react";
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css';
import imageUrl from './Assets/icons.svg';




class InputTesting extends Component {
  constructor() {
      super();
      this.state = {
        firstName: "",
        secondName: "",
        domainName: "",
        emailData: "",
        errorFirstNameFound: false,
        errorFirstNameMessage: "",
        errorSecondNameFound: false,
        errorSecondNameMessage: "",
        errorDomainNameFound: false,
        errorDomainNameMessage: "",
        firstNameHover: false,
        secondNameHover: false,
        domainNameHover: false
}
this.handleFirstName = this.handleFirstName.bind(this)
this.handleSecondName = this.handleSecondName.bind(this)
this.handleDomainName = this.handleDomainName.bind(this)
this.stringManipulation = this.stringManipulation.bind(this)
this.removeWhiteSpace = this.removeWhiteSpace.bind(this)
this.firstNameHover = this.firstNameHover.bind(this)
}

handleFirstName(event) {
this.setState({firstName: event.target.value})
this.setState({errorFirstNameFound: false})
this.setState({errorFirstNameMessage: ""})
}

handleSecondName(event) {
this.setState({ secondName: event.target.value})
this.setState({errorSecondNameFound: false})
this.setState({errorSecondNameMessage: ""})

}

handleDomainName(event) {
this.setState({ domainName: event.target.value})
this.setState({errorDomainNameFound: false})
this.setState({errorDomainNameMessage: ""})

}

passData() {
  let data = { first_name: this.state.firstName, second_name: this.state.secondName, domain_name: this.state.domainName }
  return ( data )
}


sanityChecking() {
  this.checkFirstName()
}

checkFirstName() {
  // check empty inputs
  if ( this.state.firstName===null || this.state.firstName==="") {
    console.log("ERROR empty inputs firstName")
    this.setState({errorFirstNameFound: true}, this.checkSecondName)
    this.setState({errorFirstNameMessage: "Enter the first name."})
  }
  else {
  if ( /\s/.test(this.state.firstName)===true) {
        console.log("ERROR space firstname")
        this.setState({errorFirstNameFound: true}, this.checkSecondName)
        this.setState({errorFirstNameMessage: "Remove whitespace."})
      }
   else {

     // check length
     if (this.state.firstName.length > 15) {
         console.log("ERROR length firstname")
         this.setState({errorFirstNameFound: true}, this.checkSecondName)
         this.setState({errorFirstNameMessage: "First name is too long."})
       }
    else {
      console.log("GOOD length")
      this.setState({errorFirstNameFound: false}, this.checkSecondName)
      this.setState({errorFirstNameMessage: ""})
    }
   }
  }
}

checkSecondName() {
  // check empty inputs
  if ( this.state.secondName===null || this.state.secondName==="") {
    console.log("ERROR empty inputs secondname")
    this.setState({errorSecondNameFound: true}, this.checkDomain)
    this.setState({errorSecondNameMessage: "Enter the second name."})
  }
  else {
    // console.log("GOOD empty inputs secondname")
    // this.setState({errorSecondNameFound: false}, this.checkDomain)
    // this.setState({errorSecondNameMessage: ""})

    // check space inputs
  if ( /\s/.test(this.state.secondName)===true) {
        console.log("ERROR space secondname")
        this.setState({errorSecondNameFound: true}, this.checkDomain)
        this.setState({errorSecondNameMessage: "Please remove whitespace."})
      }
   else {
     // console.log("GOOD space secondname")
     // this.setState({errorSecondNameFound: false}, this.checkDomain)
     // this.setState({errorSecondNameMessage: ""})

     // check length
     if (this.state.secondName.length > 15) {
         console.log("ERROR length secondname")
         this.setState({errorSecondNameFound: true}, this.checkDomain)
         this.setState({errorSecondNameMessage: "Second name is too long."})
       }
    else {
      console.log("GOOD length secondname")
      this.setState({errorSecondNameFound: false}, this.checkDomain)
      this.setState({errorSecondNameMessage: ""})
    }
   }
  }
}

checkDomain() {
  // check empty inputs
  if ( this.state.domainName===null || this.state.domainName==="") {
    console.log("ERROR empty inputs domain")
    this.setState({errorDomainNameFound: true})
    this.setState({errorDomainNameMessage: "Enter the domain."})
  }
  else {
    // console.log("GOOD empty inputs domain")
    // this.setState({errorDomainNameFound: false}, this.ConsoleLog)
    // this.setState({errorDomainNameMessage: ""})

    // check space inputs
  if ( /\s/.test(this.state.domainName)===true) {
        console.log("ERROR space domain")
        this.setState({errorDomainNameFound: true})
        this.setState({errorDomainNameMessage: "Please remove whitespace."})
      }
   else {
     // console.log("GOOD space domain")
     // this.setState({errorDomainNameFound: false}, this.ConsoleLog)
     // this.setState({errorDomainNameMessage: ""})

     // check length
     if (this.state.domainName.length > 24) {
         console.log("ERROR length domain")
         this.setState({errorDomainNameFound: true})
         this.setState({errorDomainNameMessage: "Domain is too long."})
       }
    else {
      // console.log("GOOD length domain")
      // this.setState({errorDomainNameFound: false}, this.ConsoleLog)
      // this.setState({errorDomainNameMessage: ""})
      // check domain name
      if (this.state.domainName.charAt(0) !== "@" || this.state.domainName.includes(".") === false ) {
        console.log("ERROR @ or . ")
        this.setState({errorDomainNameFound: true})
        this.setState({errorDomainNameMessage: "Domain has to have @ and ."})
      } else {
        console.log("GOOD @ or .")
        this.setState({errorDomainNameFound: false}, this.predictEmail)
        this.setState({errorDomainNameMessage: ""})
      }
    }
   }
  }
}

removeWhiteSpace() {
  this.setState({ firstName: this.state.firstName.trim() },
  this.setState({ secondName: this.state.secondName.trim()},
  this.setState({ domainName: this.state.domainName.trim()},
    ()=> {this.sanityChecking()} )
    )
  )
}

predictEmail() {
  if (this.state.errorFirstNameFound === false && this.state.errorSecondNameFound === false && this.state.errorDomainNameFound === false) {
  let firstname = this.state.firstName.toLowerCase()
  let secondname = this.state.secondName.toLowerCase()
  let domainname = this.state.domainName.toLowerCase()
  let emailOne = firstname+domainname
  let emailTwo = secondname+domainname
  let emailThree = firstname+secondname+domainname
  let emailFour = firstname.charAt(0)+secondname+domainname
  let emailFive = firstname+"."+secondname+domainname
  let emailSix = firstname+"_"+secondname+domainname

  let emailData = {
    emailOne: emailOne, emailTwo: emailTwo, emailThree: emailThree,
    emailFour: emailFour, emailFive: emailFive, emailSix: emailSix
  }

  // this.props.passDataApp(emailData)
  // console.log(emailData)
  this.setState({emailData: emailData},   ()=> {this.props.passDataApp(this.state.emailData)}  );

}
}

stringManipulation() {
  this.removeWhiteSpace()
}

firstNameHover(status) {
  if (status) {
    this.setState({firstNameHover: true})
  } else {
    this.setState({firstNameHover: false})
  }
}

secondNameHover(status) {
  if (status) {
    this.setState({secondNameHover: true})
  } else {
    this.setState({secondNameHover: false})
  }

}

domainNameHover(status) {
  if (status) {
    this.setState({domainNameHover: true})
  } else {
    this.setState({domainNameHover: false})
  }
}

firstNameHoverShowV2() {
  const ErrorDiv = styled.div`
  height: 42px;
  background: rgba(221,11,11,0.50);
  border: 1px solid rgba(221,11,11,0.56);
  border-radius: 8px;
  display: flex;
flex-direction: row;
          `;

  const FlexBoxDiv = styled.div`
  display: flex;
justify-content: center;
flex-direction: column;
margin-top: 28px;
          `;

  const ErrorDivTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent rgba(221,11,11,0.65) transparent;
  margin-left: 10px;
  margin-top: 10px;

  `

  const ErrorMessageFont = styled.p`
  /* font-family: "Alegreya Sans", sans-serif; */
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-top: -16px;



  /* margin-top: -20px;
  margin-left: 9px; */

  /* margin-left: 4px; */
  `

  const ErrorMessageFontSnap = styled.p`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-top: -17px;

  /* margin-top: 11px;
  margin-left: 9px; */

  /* margin-left: 4px; */
  `



    const ErrorMessageFontImg= styled.img`
    margin-left: 9px;
    margin-right: 12px;
    `




  if (this.state.firstNameHover) {
    return (
      <div>
      <ErrorDivTriangle/>
      <ErrorDiv>
      <ErrorMessageFontImg src={imageUrl} />
      <FlexBoxDiv>
        <ErrorMessageFontSnap>Oh snap!</ErrorMessageFontSnap>
        <ErrorMessageFont>{this.state.errorFirstNameMessage}</ErrorMessageFont>
      </FlexBoxDiv>
      </ErrorDiv>
      </div>
    )
  }

}

// firstNameHoverShow() {
//   const ErrorFontFirstName = styled.p`
//   color: white;
//   display: block;
//   `
//
//   const ErrorDivImgFirstName = styled.div`
//   margin-top : 40.5px;
//   `
//
//   const ErrorDivFirstName = styled.div`
//   margin-top : -41.5px;
//   `
//   const ErrorTextDivFirstName = styled.div`
//   margin-top : -57.5px;
//   margin-left : 8px;
//   `
//
//   const ErrorImageFirstName = styled.img`
//     width: 213px;
//     height: 75px;
//   `
//
//   const ErrorImageFirstNamewhitespace = styled.img`
//     width: 237px;
//     height: 75px;
//   `
//
//   const ErrorImageFirstNameLength = styled.img`
//   width: 171px;
// height: 57px;
//   `
//
//   const ErrorTextDivLength = styled.div`
//   margin-top: -50.5px;
//   margin-left: 8px;
//   `
//
//   const ErrorTextDivWhitespace = styled.div`
//   margin-top: -57.5px;
//   margin-left: 6px;
//   `
//
//   const ErrorDivWhitespace = styled.div`
//   margin-top : -36.5px
//   `
//
//
//
//   if (this.state.firstNameHover && this.state.errorFirstNameMessage == "Please enter the first name.") {
//     return (<ErrorDivFirstName>
//       <ErrorDivImgFirstName>
//       <ErrorImageFirstName src={require('./Assets/errorBox.svg')} />
//       </ErrorDivImgFirstName>
//       <ErrorTextDivFirstName>
//       <ErrorFontFirstName>{this.state.errorFirstNameMessage}</ErrorFontFirstName>
//       </ErrorTextDivFirstName>
//       </ErrorDivFirstName>)
//   }
//   if (this.state.firstNameHover && this.state.errorFirstNameMessage == "Please remove any whitespace.") {
//     return (<ErrorDivWhitespace>
//       <ErrorDivImgFirstName>
//       <ErrorImageFirstNamewhitespace src={require('./Assets/errorBox.svg')} />
//       </ErrorDivImgFirstName>
//       <ErrorTextDivWhitespace>
//       <ErrorFontFirstName>{this.state.errorFirstNameMessage}</ErrorFontFirstName>
//       </ErrorTextDivWhitespace>
//       </ErrorDivWhitespace>)
//   }
//   if (this.state.firstNameHover && this.state.errorFirstNameMessage == "first name is too long.") {
//     return (<ErrorDivWhitespace>
//       <ErrorDivImgFirstName>
//       <ErrorImageFirstNameLength src={require('./Assets/errorBox.svg')} />
//       </ErrorDivImgFirstName>
//       <ErrorTextDivLength>
//       <ErrorFontFirstName>{this.state.errorFirstNameMessage}</ErrorFontFirstName>
//       </ErrorTextDivLength>
//       </ErrorDivWhitespace>)
//   }
//
//
// }
//
secondNameHoverShowV2() {
  const ErrorDiv = styled.div`
  height: 42px;
  background: rgba(221,11,11,0.50);
  border: 1px solid rgba(221,11,11,0.56);
  border-radius: 8px;
  display: flex;
flex-direction: row;
          `;

  const FlexBoxDiv = styled.div`
  display: flex;
justify-content: center;
flex-direction: column;
margin-top: 28px;
          `;

  const ErrorDivTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent rgba(221,11,11,0.65) transparent;
  margin-left: 10px;
  margin-top: 10px;

  `

  const ErrorMessageFont = styled.p`
  /* font-family: "Alegreya Sans", sans-serif; */
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-top: -16px;



  /* margin-top: -20px;
  margin-left: 9px; */

  /* margin-left: 4px; */
  `

  const ErrorMessageFontSnap = styled.p`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-top: -17px;

  /* margin-top: 11px;
  margin-left: 9px; */

  /* margin-left: 4px; */
  `



    const ErrorMessageFontImg= styled.img`
    margin-left: 9px;
    margin-right: 12px;
    `




  if (this.state.secondNameHover) {
    return (
      <div>
      <ErrorDivTriangle/>
      <ErrorDiv>
      <ErrorMessageFontImg src={imageUrl} />
      <FlexBoxDiv>
        <ErrorMessageFontSnap>Hmm!</ErrorMessageFontSnap>
        <ErrorMessageFont>{this.state.errorSecondNameMessage}</ErrorMessageFont>
      </FlexBoxDiv>
      </ErrorDiv>
      </div>
    )}


  }








// secondNameHoverShow() {
//   const ErrorFontFirstName = styled.p`
//   color: white;
//   display: block;
//   `
//
//   const ErrorDivImgFirstName = styled.div`
//   margin-top : 40.5px;
//   `
//
//   const ErrorDivFirstName = styled.div`
//   margin-top : -41.5px;
//   `
//   const ErrorTextDivFirstName = styled.div`
//   margin-top: -59.5px;
//   margin-left: 7px;
//     `
//
//   const ErrorImageFirstName = styled.img`
//   width: 236px;
//   height: 82px;
//   `
//
//   const ErrorImageFirstNamewhitespace = styled.img`
//     width: 237px;
//     height: 75px;
//   `
//
//   const ErrorImageFirstNameLength = styled.img`
//   width: 197px;
//       height: 61px;
//         `
//
//   const ErrorTextDivLength = styled.div`
//   margin-top: -52.5px;
//   margin-left: 8px;
//   `
//
//   const ErrorTextDivWhitespace = styled.div`
//   margin-top: -57.5px;
//   margin-left: 6px;
//   `
//
//   const ErrorDivWhitespace = styled.div`
//   margin-top : -36.5px
//   `
//   if (this.state.secondNameHover && this.state.errorSecondNameMessage == "Please enter the second name.") {
//     return (<ErrorDivFirstName>
//       <ErrorDivImgFirstName>
//       <ErrorImageFirstName src={require('./Assets/errorBox.svg')} />
//       </ErrorDivImgFirstName>
//       <ErrorTextDivFirstName>
//       <ErrorFontFirstName>{this.state.errorSecondNameMessage}</ErrorFontFirstName>
//       </ErrorTextDivFirstName>
//       </ErrorDivFirstName>)
//   }
//   if (this.state.secondNameHover && this.state.errorSecondNameMessage == "Please remove any whitespace.") {
//     return (<ErrorDivWhitespace>
//       <ErrorDivImgFirstName>
//       <ErrorImageFirstNamewhitespace src={require('./Assets/errorBox.svg')} />
//       </ErrorDivImgFirstName>
//       <ErrorTextDivWhitespace>
//       <ErrorFontFirstName>{this.state.errorSecondNameMessage}</ErrorFontFirstName>
//       </ErrorTextDivWhitespace>
//       </ErrorDivWhitespace>)
//   }
//   if (this.state.secondNameHover && this.state.errorSecondNameMessage == "second name is too long.") {
//     return (<ErrorDivWhitespace>
//       <ErrorDivImgFirstName>
//       <ErrorImageFirstNameLength src={require('./Assets/errorBox.svg')} />
//       </ErrorDivImgFirstName>
//       <ErrorTextDivLength>
//       <ErrorFontFirstName>{this.state.errorSecondNameMessage}</ErrorFontFirstName>
//       </ErrorTextDivLength>
//       </ErrorDivWhitespace>)
//   }
// }

domainNameHoverShow() {
  const ErrorDiv = styled.div`
  height: 42px;
  background: rgba(221,11,11,0.50);
  border: 1px solid rgba(221,11,11,0.56);
  border-radius: 8px;
  display: flex;
flex-direction: row;
          `;

  const FlexBoxDiv = styled.div`
  display: flex;
justify-content: center;
flex-direction: column;
margin-top: 28px;
          `;

  const ErrorDivTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent rgba(221,11,11,0.65) transparent;
  margin-left: 10px;
  margin-top: 10px;

  `

  const ErrorMessageFont = styled.p`
  /* font-family: "Alegreya Sans", sans-serif; */
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-top: -16px;



  /* margin-top: -20px;
  margin-left: 9px; */

  /* margin-left: 4px; */
  `

  const ErrorMessageFontSnap = styled.p`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-top: -17px;

  /* margin-top: 11px;
  margin-left: 9px; */

  /* margin-left: 4px; */
  `



    const ErrorMessageFontImg= styled.img`
    margin-left: 9px;
    margin-right: 12px;
    `




  if (this.state.domainNameHover) {
    return (
      <div>
      <ErrorDivTriangle/>
      <ErrorDiv>
      <ErrorMessageFontImg src={imageUrl} />
      <FlexBoxDiv>
        <ErrorMessageFontSnap>Oops!</ErrorMessageFontSnap>
        <ErrorMessageFont>{this.state.errorDomainNameMessage}</ErrorMessageFont>
      </FlexBoxDiv>
      </ErrorDiv>
      </div>
    )
  }

}


InputsBoxFirstName(input) {

  const Label = styled.label`
            height: 24px;
            font-size: 17px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 0.7px;
            color: #ffffff;
            display: block;`;

    const Star = styled.label`
                    color: #FD0909;
                  `;

    const ErrorFont = styled.p`
    color: white;
    display: block;
    margin-top : 2.5px;

    `

    const ErrorDivImg = styled.div`
    margin-top : 3.5px;
    `

    const ErrorTextDiv = styled.div`
    margin-top : -44.5px;
    margin-left : 10px;
    `




if (input === "firstname") {
if (this.state.errorFirstNameFound) {
  return(
    <div>
    <Label><Star>*</Star> FIRST NAME</Label>
    <input id="ErrorInput" value={this.state.firstName} onMouseEnter={()=>{this.firstNameHover(true)}} onMouseLeave={()=>{this.firstNameHover(false)}} onChange={(event)=>{this.handleFirstName(event);}} placeholder="elon"/>
    {this.firstNameHoverShowV2()}
    </div>
  )
} else {
  return(
    <div>
    <Label>FIRST NAME </Label>
    <input id="MainInput" value={this.state.firstName} onMouseEnter={()=>{this.firstNameHover(true)}} onMouseLeave={()=>{this.firstNameHover(false)}} onChange={(event)=>{this.handleFirstName(event);}} placeholder="elon"/>
    </div>
  )
}
}
if (input === "secondname") {

if (this.state.errorSecondNameFound) {
  return(
    <div>
    <Label><Star>*</Star> SECOND NAME</Label>
    <input id="ErrorInput" value={this.state.secondName} onMouseEnter={()=>{this.secondNameHover(true)}} onMouseLeave={()=>{this.secondNameHover(false)}} onChange={(event)=>{this.handleSecondName(event);}} placeholder="musk"/>
    {this.secondNameHoverShowV2()}
    </div>
  )
} else {
  return(
    <div>
    <Label>SECOND NAME </Label>
    <input id="MainInput" value={this.state.secondName} onMouseEnter={()=>{this.secondNameHover(true)}} onMouseLeave={()=>{this.secondNameHover(false)}}  onChange={(event)=>{this.handleSecondName(event);}} placeholder="musk"/>
    </div>
  )
}
}
if (input === "domainname") {

if (this.state.errorDomainNameFound) {
  return(
    <div>
    <Label><Star>*</Star> DOMAIN</Label>
    <input id="ErrorInput" value={this.state.domainName}  onMouseEnter={()=>{this.domainNameHover(true)}} onMouseLeave={()=>{this.domainNameHover(false)}} onChange={(event)=>{this.handleDomainName(event);}} placeholder="@spacex.com"/>
    {this.domainNameHoverShow()}
    </div>
  )
} else {
  return(
    <div>
    <Label>DOMAIN</Label>
    <input id="MainInput" value={this.state.domainName} onMouseEnter={()=>{this.domainNameHover(true)}} onMouseLeave={()=>{this.domainNameHover(false)}} onChange={(event)=>{this.handleDomainName(event);}} placeholder="@spacex.com"/>
    </div>
  )
}
}

}


render() {
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
            font-size: 17px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 0.7px;
            color: #ffffff;
            display: block;
          `;


const ErrorDiv = styled.div`
height: 42px;
background: rgba(221,11,11,0.50);
border: 1px solid rgba(221,11,11,0.56);
border-radius: 8px;
        `;

const ErrorDivTriangle = styled.div`
width: 0;
height: 0;
border-style: solid;
border-width: 0 10px 10px 10px;
border-color: transparent transparent rgba(221,11,11,0.65) transparent;
margin-left: 10px;
margin-top: 10px;

`

const ErrorMessageFont = styled.p`
/* font-family: "Alegreya Sans", sans-serif; */
font-size: 15px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: 0.4px;
color: #ffffff;
margin-top: 11px;
margin-left: 4px;
`

const DivInputsMargins = styled.div`
margin-bottom: 9px;
`



    return (
      <div id="Flexbox_Div_inputs">

        <div id="DivInputsMargins">
          {this.InputsBoxFirstName("firstname")}
        </div>

        <div id="DivInputsMargins">
          {this.InputsBoxFirstName("secondname")}
        </div>

        <div id="DivInputsMargins">
        {this.InputsBoxFirstName("domainname")}
        </div>

        </div>
    );
  }
}


export default InputTesting;
