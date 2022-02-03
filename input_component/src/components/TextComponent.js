import React from 'react';
import { Component } from 'react';

class TextComponent extends Component {

    render(){
        return(
            <label id={this.props.labelFor} className={`textComponentDiv ${this.props.labelFor}`}>{this.props.labelValue}</label>   
        )
    }
}
export default TextComponent;