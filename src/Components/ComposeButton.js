import React, { Component } from "react";
import styled from "styled-components";


class ComposeButton extends Component {
  constructor(props) {
      super(props);
      this.state = {
        ComposeButton: "border: 3px solid rgba(247,63,0,0.60);\
            border-radius: 8px;\
            height: 45px;\
            display: flex;\
          align-items: center;\
          justify-content:center;\
          margin-top: -109px;",
          Compose_email_button_text: "\
          font-family: 'Alegreya Sans', sans-serif;\
          font-size: 17px;\
          font-weight: 400;\
          font-style: normal;\
          line-height: -1px;\
          letter-spacing: 3px;\
          text-align: center;\
          color: rgba(247,63,0,0.60);\
          margin: 0;\
          margin-left: 30px;\
          margin-right: 30px;",
          Href: "mailto:myaddress@gmail.com"
  }
}

  handleHoverCompose(status) {
    if (status == false ) {
    this.setState({ComposeButton:"border: 3px solid rgba(247,63,0,0.60);\
        border-radius: 8px;\
        height: 45px;\
        display: flex;\
      align-items: center;\
      justify-content:center;\
      margin-top: -109px;"})
    this.setState({Compose_email_button_text: "\
    font-family: 'Alegreya Sans', sans-serif;\
    font-size: 17px;\
              font-weight: 400;\
              font-style: normal;\
              line-height: -1px;\
              letter-spacing: 3px;\
              text-align: center;\
              color: rgba(247,63,0,0.60);\
              margin: 0;\
              margin-left: 30px;\
              margin-right: 30px;"
    })
    } else {
      this.setState({ComposeButton: "border: 3px solid rgba(247,63,0,0.1);\
      border-radius: 8px;\
      height: 45px;\
      display: flex;\
      align-items: center;\
      justify-content:center;\
      margin-top: -109px;\
      background: rgba(245,118,35,0.71);"})
      this.setState({Compose_email_button_text: "\
      font-family: 'Alegreya Sans', sans-serif;\
      font-size: 17px;\
                font-weight: 400;\
                font-style: normal;\
                line-height: -1px;\
                letter-spacing: 3px;\
                text-align: center;\
                color: #FFFFFF;\
                margin: 0;\
                margin-left: 30px;\
                margin-right: 30px;"
      })
    }
  }

  HrefRetun() {
const emails = this.props.emails
let hreftText="mailto:Undisclosed recipients<myaddress@gmail.com>?bcc="

var step;
for (step = 0; step < Object.keys(emails).length; step++) {
  if (step !=	 (Object.keys(emails).length - 1)) {
  // Runs 5 times, with values of step 0 through 4.
    hreftText += emails[Object.keys(emails)[step]] + ",";

  } else {
    hreftText += emails[Object.keys(emails)[step]] + "&body=Hey, beanns user - Don't worry, none of the Bcc addresses will be seen by any of the recipients. As long as you put your email in the To field as an 'Undisclosed recipients' tag.";
  }
}
return (hreftText)

  }


  render() {
    const Compose_email_button = styled.a`
${this.state.ComposeButton};
}
    `

    const Compose_email_button_text = styled.p`
    ${this.state.Compose_email_button_text};
        `



    return (
      //  <a href='mailto:?bcc=Undisclosed Recipients<taher.el.sheikh@gmail.com> \
      // // &body=The following is everything I have to say about the color blue.'>Email Us</a>
<div>
        <Compose_email_button style={{ textDecoration: 'none' }}
        href={this.HrefRetun()}
        onMouseEnter={()=>this.handleHoverCompose(true)}
        onMouseLeave={()=>this.handleHoverCompose(false)}
        onClick={()=>{console.log(this.HrefRetun())}}
        >
          <Compose_email_button_text>COMPOSE EMAIL
          </Compose_email_button_text>
        </Compose_email_button>
        </div>
    );

  }
}

export default ComposeButton;
