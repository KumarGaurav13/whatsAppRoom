import React from 'react';
/* import MyInfo from './Components/MyInfo';


*/
import Header from './Components/Header';
import Footer from './Components/Footer';
import TodoItem from './Components/TodoItem';
import './App.css';
/* function App() {
    return (
      <div>
        <Header />
        <MyInfo />
        <Footer />
      </div>
    );
 }*/

const App = () => {
  return(
    <div>
      <Header />
      <TodoItem />
      <Footer />
    </div>
  );
}

export default App;
