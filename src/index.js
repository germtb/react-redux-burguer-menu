import React from 'react';
import ReactDOM from 'react-dom';
import {Menu} from './components/Menu';
import {MenuButton} from './components/MenuButton';
import {FrameContainer} from './components/Frame';
import {SideBarContainer} from './components/SideBar';
import {Provider} from 'react-redux';
import {store} from './store'

ReactDOM.render(
  <Provider store={store}>
    <FrameContainer>
      <SideBarContainer>
        <MenuButton text={'Option 1'}/>
        <MenuButton text={'Option 2'}/>
        <MenuButton text={'Option 3'}/>
      </SideBarContainer>
      <Menu/>
    </FrameContainer>
  </Provider>,
  document.getElementById('app')
);

store.dispatch({
  type: 'SHOW'
});
