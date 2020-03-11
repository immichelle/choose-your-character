import React, { Component } from 'react'
import {Button, } from 'react-bootstrap';


export class Intro extends Component {
    state = {
        backgroundColor: 'yellow',

    }
    handleColorChange = () => {
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }
        this.setState({backgroundColor: getRandomColor()})
    };

    render() {
        const {role, url, name, age, lang, isOpen} = this.props
        return (
            <>

            <div className={isOpen? "member-wrapper" : "member-wrapper hide"}>
            <div className="triangle triangle-4"></div>
            <div
            className="member"
            style={{backgroundColor: this.state.backgroundColor}}
            >
              <h1>{role}</h1>
              <img width="100px" src={url} alt="" />
              <h2>Hey, my name is {name}</h2>
              <h2>I am {Number(age)}</h2>
              {lang && <h3>I know {lang}</h3>}
            </div>
            <div>
              <Button onClick={this.handleColorChange}>Change Color</Button>
            </div>
            </div>
          </>
        )
    }
}

export default Intro


