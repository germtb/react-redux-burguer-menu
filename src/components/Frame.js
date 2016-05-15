import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

const frameStyle = {
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

export const Frame = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={frameStyle}>
        {this.props.children}
      </div>
    );
  }
});

export const FrameContainer = connect(s => {
  return s === undefined ? {show: false} : {show: s.show};
})(Frame);
