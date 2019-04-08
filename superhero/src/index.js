import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



  class Board extends React.Component {
  
    render() {
     const aquaMan = "Аквамэн";
     const batMan = "Бэтмэн";
     const ciBorg = "Киборг";
     const flash = 'Флэш';
     const greenLantern = 'Зеленый';
     const superGirl = 'Супергирла';
     const superMan = "Супермэн";
     const wonderWoman = "Вумэн"
     const blackPanther = "Пантера"
      return (
       <div>
         <div className="board-new">
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/aquaman.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}
           <div className = "aquaMan">{aquaMan}</div>
           </div>
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/batman.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}
         <div className = "aquaMan">{batMan}</div>
         </div>
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/cyborg.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}
         <div className = "aquaMan">{ciBorg}</div>
         </div>
         </div>
         <div className="board-new">
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/flash.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}
         <div className = "aquaMan">{flash}</div>
         </div>
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/greenlantern.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}
         <div className = "aquaMan">{greenLantern}</div>
         </div>
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/supergirl.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}
         <div className = "aquaMan">{superGirl}</div>
         </div>
         </div>
         <div className="board-new">
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/superman.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}
         <div className = "aquaMan">{superMan}</div>
         </div>
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/dc/wonderwoman.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}
         <div className = "aquaMan">{wonderWoman}</div>
         </div>
         <div className="board-new1">{<img src="http://www.ramrus.ru/pic/marvel/blackpanther.jpg" alt="Письма мастера дзен" width="90" height="100" ></img>}
         <div className = "aquaMan">{blackPanther}</div>
         </div>
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
