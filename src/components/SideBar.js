import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Motion, spring} from 'react-motion';
import {connect} from 'react-redux';

const sideBarStyle = {
  position: 'absolute',
  backgroundColor: 'red',
  width: 400,
  top: 0,
  bottom: 0,
};

const SideBar = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const left = this.props.show ? 0 : -400;
    return (
      <Motion defaultStyle={{left: -400}} style={{left: spring(left)}}>
        {interpolatingStyle => <div style={Object.assign({}, sideBarStyle, interpolatingStyle)}/>}
      </Motion>
    );
  }
});

export const SideBarContainer = connect(s => {
  return s === undefined ? {show: false} : {show: s.show};
})(SideBar);
