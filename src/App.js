import React, { Component } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Pick from './components/Pick'
import { Button } from 'react-bootstrap';
import _ from 'lodash'

export default class App extends Component {
  state = {
    members: [
      {
        id: 1,
        role: "Lisstle",
        url:
          "https://i.pinimg.com/originals/01/3a/10/013a1063dd59789edd4b48b626b0a769.png",
        age: "31",
        name: "Huong",
        lang: "Vietnamese",
        isOpen: false,

      },
      {
        id: 2,
        role: "Bisstle",
        url:
          "https://i.pinimg.com/originals/2a/11/a1/2a11a128331dddd0f0af04026f061451.png",
        age: "22",
        name: "PHuong",
        isOpen: false,
      },
      {
        id: 3,
        role: "Trisstle",
        url:
          "https://stickershop.line-scdn.net/stickershop/v1/product/1287660/LINEStorePC/main.png",
        age: "22",
        name: "Trinh",
        isOpen: false,

      },
      {
        id: 4,
        role: "Chisstle",
        url:
          "https://1.bp.blogspot.com/-SOkDJk-_YlM/WSOfKD3CXKI/AAAAAAAPSfQ/cfbel3AaPoQ0cr0tfu9V70hPAXmswf3JQCLcB/s1600/TF005050.png",
        age: "22",
        name: "Chi",
        isOpen: false,
      }

    ]
  };

  handleChooseItem = (item) => {
    // dung findIndex tra ve index cua phan tu thoa man dieu kien, filter tra 1 mang phan tu thoa man dieu kien
    const index = this.state.members.findIndex(mem => mem.id=== item.id)
    // const newMems = [...this.state.members]
    // newMems[index].isOpen = !newMems[index].isOpen;
    console.log(index)

    //  const newMem = _.set(this.state.members, `[${index}].isOpen`, !this.state.members[index].isOpen)
    const newMem = _.set(this.state, members[index].isOpen, !this.state.members[index].isOpen)

    this.setState({members: newMem})//lodash co ham set gia tri
  }
  render() {
    console.log(this.state.members);
//     var object = { 'a': [{ 'b': { 'c': 3 } }] };
// testing set
// _.set(object, 'a[0].b.c', 4);
// console.log(object);
// // => 4
// _.set(object, ['x', '0', 'y', 'z'], 5);
// console.log(object);

// console.log(object.x[0].y.z);
// // => 5
    return (
      <div className="App">
        <div>
        <Pick
        url={this.state.members}
        onChooseItem={this.handleChooseItem}
        />
        </div>

        {this.state.members.map(person => (
          <Intro
            isOpen={person.isOpen}
            key={person.id}
            role={person.role}
            url={person.url}
            age={person.age}
            name={person.name}
            lang={person.lang}
          />
        ))}
      </div>
    );
  }
}

