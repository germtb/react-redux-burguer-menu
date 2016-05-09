import React from 'react';
import ReactDOM from 'react-dom';
import {Menu} from './components/Menu';
import {FrameContainer} from './components/Frame';
import {SideBarContainer} from './components/SideBar';
import {Provider} from 'react-redux';
import {store} from './store'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <SideBarContainer/>
      <Menu/>
    </div>
  </Provider>,
  document.getElementById('app')
);
