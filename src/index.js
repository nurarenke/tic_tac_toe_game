import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
{/* This is a functional component and only consists of a render,
  so therefore doesn't need to extend React.Component and it
  can just be a function, not a class */}
    return (
      {/* This button sets the current state when clicked */},
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  constructor(props) {
    {/* Constructor subclass to set it's inital state to contain an array
    with 9 nulls, corresponding to the 9 squares */}
    super(props);
    this.state = {
      squares:Array(9).fill(null),
      xIsNext: true;
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});

  }

  renderSquare(i) {
    {/*Passing down two props from Board to Square*/}
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)} 
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
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
