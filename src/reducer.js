export const INITIAL_STATE = {
	show: false
};

function show (state) {
	return Object.assign({}, state, {
		show: true
	});
};

function hide (state) {
	return Object.assign({}, state, {
		show: false
	});
};

export const reducer = function(state, action) {
  switch (action.type) {
  case 'SHOW':
  	return show(state);
  case 'HIDE':
  	return hide(state);
  default:
    return state;
  }
};
