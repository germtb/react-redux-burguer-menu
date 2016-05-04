import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const Menu = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return {hover: false};
  },
  onMouseOver: function () {
    this.setState({hover: true});
    console.log(this.state.hover);
  },
  onMouseOut: function() {
    this.setState({hover: false});
    console.log(this.state.hover);
  },
  render: function() {
    return (
      <button onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <img src={require('../img/Menu.png')} alt='bahoo'/>
      </button>
    );
  }
});
