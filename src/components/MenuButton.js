import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from '../store';
import {HoverButton} from './HoverButton';

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

export const MenuButton = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={divStyle}>
        <img style={imageStyle} src={this.props.img}/>
        <div style={textStyle}> {this.props.text} </div>
      </div>
    );
  }
});
