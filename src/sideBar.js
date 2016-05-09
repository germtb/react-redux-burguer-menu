import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from './store';
import {Motion, spring} from 'react-motion';

const sideBarStyle = function(left) {
  return {
    position: 'absolute',
    backgroundColor: 'red',
    width: left,
    left: 0,
    top: 0,
    bottom: 0,
  };
};

export const SideBar = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <Motion defaultStyle={{
        position: 'absolute',
        backgroundColor: 'red',
        width: 400,
        left: -400,
        top: 0,
        bottom: 0,
      }} style={{
        position: 'absolute',
        backgroundColor: 'red',
        width: 400,
        left: spring(0),
        top: 0,
        bottom: 0,
      }}>
        {interpolatingStyle => <div style={interpolatingStyle}/>}
      </Motion>
    );
  }
});
