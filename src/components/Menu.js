import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from '../store';

const buttonStyle = {
  backgroundColor: "Transparent",
  border: "none"
};

export const Menu = React.createClass({
  mixins: [PureRenderMixin],
  onClick: function() {
    store.dispatch({type: 'SHOW'});
  },
  getInitialState: function() {
    return {hover: false};
  },
  onMouseOver: function () {
    this.setState({hover: true});
  },
  onMouseOut: function() {
    this.setState({hover: false});
  },
  render: function() {
    return (
      <button style={buttonStyle} onClick={this.onClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <img src={this.state.hover ? require('../../img/Menu_hover.png') : require('../../img/Menu.png')} alt='bahoo'/>
      </button>
    );
  }
});

const RButton = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return {hover: false};
  },
  onMouseOver: function () {
    this.setState({hover: true});
  },
  onMouseOut: function() {
    this.setState({hover: false});
  },
  render: function() {
    return (
      <button style={buttonStyle} onClick={this.propsonClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <img src={this.state.hover ? this.props.hover : this.props.normal}/>
      </button>
    );
  }
})
