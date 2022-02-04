import React from 'react';
import { Component} from 'react';

class LinkComponent extends Component {
   
    render(){
        return(
            <>
                <a className= {this.props.linkClassName} href = {this.props.linkAddr} target = {this.props.targetType}>{this.props.linkName}</a>
            </>
        )
    }
}

export default LinkComponent;