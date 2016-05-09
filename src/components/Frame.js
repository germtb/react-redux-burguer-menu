import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from '../store';
import {connect} from 'react-redux';

const frameStyle = {
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

export const Frame = React.createClass({
  mixins: [PureRenderMixin],
  onClick: function() {
    if (this.props.show === true) {
      store.dispatch({type: 'HIDE'});
    }
  },
  render: function() {
    return (
      <div style={frameStyle} onClick={this.onClick}>
      </div>
    );
  }
});

export const FrameContainer = connect(s => {
  return s === undefined ? {show: false} : {show: s.show};
})(Frame);
