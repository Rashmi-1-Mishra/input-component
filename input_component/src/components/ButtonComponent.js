import React from 'react';
import { Component } from 'react';

class ButtonComponent extends Component {
    
    render(){
        return(
            <>
            
            <button id={this.props.btnId}> <span class="material-icons">{this.props.iconNameStart}</span>
             {this.props.btnValue}
             <span class="material-icons">{this.props.iconNameEnd}</span>
              </button> 
            </>
        )
    }
}

export default ButtonComponent;