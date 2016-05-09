import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const buttonStyle = {
  backgroundColor: "Transparent",
  border: "none"
};

export const HoverButton = React.createClass({
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
      <button style={buttonStyle} onClick={this.props.onClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <img src={this.state.hover ? this.props.hover : this.props.normal}/>
      </button>
    );
  }
})
