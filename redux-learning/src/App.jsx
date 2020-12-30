import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { anotherName, addWish } from './actions/myAction';

const App = (props) =>{

  console.log(props);
  
  const wishList = props.myWish.map(item=>{
    return <h3 key={Math.random()}>{item}</h3>
  })
  
  return (
    <div className="App">
      <h1>I am App Component</h1>
      <h2>My name is {props.myName}</h2>
      <h2>My Wishes are...</h2>
      {wishList}
      <button onClick={() =>{props.changeName()}}>Change It</button>
      <button onClick={() =>{props.addWish()}}>Add Wish</button>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    myName : state.name,
    myWish : state.wish
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    changeName : () =>{ dispatch(anotherName()) },
    addWish : ()=>{ dispatch(addWish()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
