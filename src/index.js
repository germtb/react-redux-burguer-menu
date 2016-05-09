import React from 'react';
import ReactDOM from 'react-dom';
import {Menu} from './menu';
import {SideBar} from './sideBar';

ReactDOM.render(
  (<div>
  	<SideBar/>
  	<Menu/>
  </div>),
  document.getElementById('app')
);
