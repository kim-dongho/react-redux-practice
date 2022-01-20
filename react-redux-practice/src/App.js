import React, { useState } from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';

const ADD = 'ADD';
const reducer = (currentState, action) => {
  if (currentState === undefined)
    return {
      number: 1,
    };
  const newState = { ...currentState };
  if (action.type === ADD) {
    newState.number++;
  }
  return newState;
};

const store = createStore(reducer);

const App = () => {
  return (
    <div id='container'>
      <h1>Root</h1>
      <div id='grid'>
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
};

const Left1 = (props) => {
  return (
    <div>
      <h1>Left1 :</h1>
      <Left2 />
    </div>
  );
};

const Left2 = (props) => {
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3 />
    </div>
  );
};

const Left3 = (props) => {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
};

const Right1 = (props) => {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
};

const Right2 = (props) => {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  );
};

const Right3 = (props) => {
  const dispatch = useDispatch();
  console.log(dispatch);
  return (
    <div>
      <h1>Right3</h1>
      <input type='button' value='+' onClick={() => dispatch({ type: 'ADD' })} />
    </div>
  );
};

export default App;
