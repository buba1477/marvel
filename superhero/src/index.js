import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     value: null,
   };
 } 
  render() {
     return (
       <button className="square"
        onClick={() => this.setState({value:'X'})}>
         {this.state.value}
       </button>
     );
   }
 }
  class Board extends React.Component {
   renderSquare(i) {
     return <Square value = {i}/>;
   }
    render() {
     
      return (
       <div>
         <div className="board-new">
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/aquaman.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}</div>
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/batman.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}</div>
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/cyborg.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}</div>
         </div>
         <div className="board-new">
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/flash.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}</div>
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/greenlantern.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}</div>
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/supergirl.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}</div>
         </div>
         <div className="board-new">
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/superman.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}</div>
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/wonderwoman.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}</div>
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/marvel/blackpanther.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}</div>
         </div>
         </div>
     );
   }
 }
  class Game extends React.Component {
   render() {
     return (
       <div className="game">
         <div className="game-board">
           <Board />
         </div>
         <div className="game-info">
           <div>{/* status */}</div>
           <ol>{/* TODO */}</ol>
         </div>
       </div>
     );
   }
 }
  // ========================================
  ReactDOM.render(
   <Game />,
   document.getElementById('root')
 );
