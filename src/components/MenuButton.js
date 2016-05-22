import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from '../store';
import {HoverButton} from './HoverButton';
import Radium from 'radium';

const divStyle = {
  fontSize: '25px',
  marginLeft: '20px',
  marginRight: '20px',
  marginBottom: '20px',
};

const imageStyle = {

};

const textStyle = {

};

@Radium
export class MenuButton extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <img style={imageStyle} src={this.props.img}/>
        <div style={textStyle}> {this.props.text} </div>
      </div>
    );
  }
}
