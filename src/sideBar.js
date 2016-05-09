import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from './store';

const sideBarStyle = {
  position: 'absolute',
  backgroundColor: 'red',
  width: 400,
  left: 0,
  top: 0,
  bottom: 0,
};

export const SideBar = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={sideBarStyle}>
      </div>
    );
  }
});
