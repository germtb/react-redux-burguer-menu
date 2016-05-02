import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const Menu = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (<img src={require('../img/Menu.png')} alt='bahoo'/>);
  }
});
