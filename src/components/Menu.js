import React, { Component } from "react";
import axios from "axios";
import Item from "./Item";

export class Menu extends Component {
  constructor(props) {
    super();

    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    let apiURLItems = `http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/items/42`;

    let this_ = this;

    axios
      .get(apiURLItems)

      .then(function (response) {
        this_.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const mapHelper = (item,index) => {
        return(
        <Item
        item={item}
        index={index}
        key={index}
        />
        )
    };

    return <div>{this.state.items.map(mapHelper)}</div>;
  }
}
export default Menu;
