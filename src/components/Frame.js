import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {Motion, spring} from 'react-motion';
import {store} from '../store';

const frameStyle = {
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

const overlay = {
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'black',
}

export class Frame extends React.Component {
  onClick () {
    store.dispatch({type: 'HIDE'});
  }
  render() {
    const opacity = this.props.show ? 0.5 : 0;
    overlay.pointerEvents = this.props.show ? '' : 'none';
    return (
      <div style={frameStyle}>
        <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(opacity)}}>
          {s => <div style={Object.assign({}, overlay, s)} onClick={this.onClick}/>}
        </Motion>
        {this.props.children}
      </div>
    );
  }
}

export const FrameContainer = connect(s => {
  return s === undefined ? {show: false} : {show: s.show};
})(Frame);
