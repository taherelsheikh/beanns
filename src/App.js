import React, { Component } from "react";
import styled from "styled-components";
import Hero from "./Components/Hero";
import Inputs from "./Components/Inputs";
import Table from "./Components/Table";
import BottomHero from "./Components/BottomHero";
import Footer from "./Components/Footer";
import "./App.css";

class App extends Component {
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
this.passed_data_from_input = this.passed_data_from_input.bind(this)

}

  passed_data_from_input(data) {
    // this.setState({emails: data})
    this.refs.Emails.handleEmails(data);
    // console.log(data)
  }

  render() {
  const Div_App_main = styled.div`
    height: 1965px;
    width: auto;;
    overflow: hidden;
    `



    return (
    <Div_App_main>
     <Hero/>
     <Inputs ref="Enter" passDatafromInputs={(data)=>{this.passed_data_from_input(data)}}/>
     <Table ref="Emails" emails={this.state.emails}/>
     <BottomHero/>
     <Footer/>
    </Div_App_main>
  )
  }
}

export default App;
