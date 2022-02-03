import React from 'react';
import { Component } from 'react';
import TextComponent from './TextComponent';
import '../App.css';

class SideComponent extends Component {

    render(){
        return(
            <div class= "sideComponentDiv">
                
                <div class= "textComponentDiv">
                    <TextComponent labelFor="Dev" labelValue="Challenges.io" />
                </div>
                <div class= "textComponentDiv">
                    <TextComponent labelFor="colors" labelValue="Colors" />
                </div>
                <div class= "textComponentDiv">
                    <TextComponent labelFor="typo" labelValue="Typography" />
                </div>
                <div class= "textComponentDiv">
                    <TextComponent labelFor="spaces" labelValue="Spaces" />
                </div>
                <div class= "textComponentDiv">
                    <TextComponent labelFor="buttons" labelValue="Buttons" />
                </div>  
                <div class= "textComponentDiv">
                    <TextComponent labelFor="inputs" labelValue="Inputs" />
                </div>
                <div class= "textComponentDiv">
                    <TextComponent labelFor="grid" labelValue="Grid" />  
                </div> 
                  
            </div>
        )
    }

}

export default SideComponent;