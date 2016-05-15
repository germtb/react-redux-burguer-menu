import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Motion, spring} from 'react-motion';
import {connect} from 'react-redux';
import {HoverButton} from './HoverButton';
import {store} from '../store';

const WIDTH = 400;

const sideBarStyle = {
    borderRight: '1px solid black',
    position: 'absolute',
    width: WIDTH,
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
};

const closeButtonStyle = {
  float: 'right',
};

const SideBar = React.createClass({
  mixins: [PureRenderMixin],
  onClick: function() {
    if (this.props.show === true) {
      store.dispatch({type: 'HIDE'});
    }
  },
  render: function() {
    const left = this.props.show ? 0 : -WIDTH;
    const deleteButton = (<HoverButton style={closeButtonStyle}
                                       normal={require('../../img/Delete-50.png')}
                                       hover={require('../../img/Delete-50_hover.png')}
                                       onClick={this.onClick}/>);
    console.log(closeButtonStyle);
    return (
      <Motion defaultStyle={{left: -WIDTH}} style={{left: spring(left)}}>
        {interpolatingStyle =>
          <div style={Object.assign({}, sideBarStyle, interpolatingStyle)}>
            {deleteButton}
          </div>}
      </Motion>
    );
  }
});

export const SideBarContainer = connect(s => {
  return s === undefined ? {show: false} : {show: s.show};
})(SideBar);
