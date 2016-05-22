import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from '../store';
import {HoverButton} from './HoverButton';

export const Menu = React.createClass({
  mixins: [PureRenderMixin],
  onClick: function() {
    store.dispatch({type: 'SHOW'});
  },
  render: function() {
    return (
      <HoverButton hover={require('../../img/Menu_hover.png')} normal={require('../../img/Menu.png')} onClick={this.onClick}/>
    );
  }
});
