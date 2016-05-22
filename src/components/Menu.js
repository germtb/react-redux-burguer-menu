import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from '../store';
import {HoverButton} from './HoverButton';

export class Menu extends React.Component{
  constructor(props) {
    super(props);
  }
  onClick() {
    store.dispatch({type: 'SHOW'});
  }
  render() {
    return (
      <HoverButton hover={require('../../img/Menu_hover.png')} normal={require('../../img/Menu.png')} onClick={this.onClick}/>
    );
  }
}
