import {expect} from 'chai';
import {reducer} from '../src/reducer';
import {INITIAL_STATE} from '../src/reducer';

describe('reducer', () => {

  it('handles SHOW', () => {
    const action = { type: 'SHOW' };
    const nextState = reducer(INITIAL_STATE, action);
    expect(nextState.show).to.equal(true);
  });

  it('handles HIDE', () => {
    const action = { type: 'HIDE' };
    const nextState = reducer(INITIAL_STATE, action);
    expect(nextState.show).to.equal(false);
  });

});
