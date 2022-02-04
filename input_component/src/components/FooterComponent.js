import React from 'react';
import  {Component} from 'react';
import TextComponent from './TextComponent';
import LinkComponent from './LinkComponent';
import '../App.css';

class FooterComponent extends Component{
    render(){
        return(
            <div class = "footerComponentDiv">
                
                <LinkComponent 
                    linkClassName = "iconText"
                    linkAddr="https://material.io/resources/icons/?style=round" 
                    linkName="Icons: https://material.io/resources/icons/?style=round" 
                    targetType="_blank" 
                />
                <TextComponent labelFor="userText" 
                    labelValue = {
                    ["Created By  " , <LinkComponent linkAddr="https://github.com/Rashmi-1-Mishra" 
                    linkName="Rashmi Mishra" 
                    targetType="_blank"/>  , " - devChallenges.io"]}
                    
                />
                    
            </div>
        )
    }
}
export default FooterComponent;