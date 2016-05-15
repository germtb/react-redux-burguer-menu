import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from '../store';
import {HoverButton} from './HoverButton';

const imageStyle = {

};

const textStyle = {

};

export const MenuButton = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div>
        <button onClick={this.props.onClick}>
          <img style={imageStyle} src={this.props.img)}/>
          <div style={text.style}> {this.props.text} </div>
        </button>
      </div>
    );
  }
});
