import { useEffect, useState } from "react";
import Square from "./Square";

import { useWinnerContext } from "../context/WinnerContext";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const {
    player1,
    setPlayer1,
    player2,
    setPlayer2,
    player1Score,
    setPlayer1Score,
    player2Score,
    setPlayer2Score,
  } = useWinnerContext();
  const [winner, setWinner] = useState("");
  const [namesSet, setNamesSet] = useState(false);
  useEffect(() => {
    if (winner) {
      if (winner === "X") {
        setPlayer1Score((prevScore) => prevScore + 1);
      } else if (winner === "O") {
        setPlayer2Score((prevScore) => prevScore + 1);
      } else if (winner === "Draw") {
        setWinner("Draw");
      }
    }
  }, [winner]);

  //Set players names
  useEffect(() => {
    if (!namesSet) {
      setTimeout(() => {
        handlePlayerNames();
      }, 3000);
      setNamesSet(true);
    }
  }, []);

  // Load player names and scores from localStorage
  useEffect(() => {
    const savedPlayer1 = localStorage.getItem("player1");
    const savedPlayer2 = localStorage.getItem("player2");
    const savedPlayer1Score = localStorage.getItem("player1Score");
    const savedPlayer2Score = localStorage.getItem("player2Score");

    if (savedPlayer1) setPlayer1(savedPlayer1);
    if (savedPlayer2) setPlayer2(savedPlayer2);
    if (savedPlayer1Score) setPlayer1Score(parseInt(savedPlayer1Score));
    if (savedPlayer2Score) setPlayer2Score(parseInt(savedPlayer2Score));
  }, []);

  //saves player names and scores to localStorage
  useEffect(() => {
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    localStorage.setItem("player1Score", player1Score.toString());
    localStorage.setItem("player2Score", player2Score.toString());
  }, [player1, player2, player1Score, player2Score]);

  //handle gameplay
  const handleClick = (i: number) => {
    const squares = [...board];
    if (squares[i] || calculateWinner(squares)) return;
    squares[i] = xIsNext ? "X" : "O";
    setBoard(squares);

    const currentWinner = calculateWinner(squares);
    if (currentWinner) {
      setWinner(currentWinner);
    } else {
      setXIsNext(!xIsNext);
    }
  };

  //find winner
  const calculateWinner = (squares: Array<string | null>) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(squares[a]!);
        return squares[a]!;
      }
    }
    if (!squares.includes(null)) {
      setWinner("Draw");
      return "Draw";
    }
    return null;
  };

  const status =
    winner === "Draw"
      ? "Game Finished, It is a draw"
      : winner
      ? `Game Finished! ${winner === "X" ? player1 : player2} wins!`
      : `Next player: ${xIsNext ? player1 : player2}`;

  //restart game
  const handleRestart = () => {
    setXIsNext(true);
    setBoard(Array(9).fill(null));
    setWinner("");
  };

  //set player names
  const handlePlayerNames = () => {
    if (!player1 || !player2) {
      const name1 = prompt("Enter Player 1's Name:");
      const name2 = prompt("Enter Player 2's Name:");
      setPlayer1(name1 || "Player 1");
      setPlayer2(name2 || "Player 2");
    }
  };

  //end game
  const handleQuit = () => {
    localStorage.clear();
    setPlayer1("");
    setPlayer2("");
    setPlayer1Score(0);
    setPlayer2Score(0);
  };

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3  w-72 h-72 gap-0 py-5 px-5  mx-auto my-52 bg-green-400  border-4 rounded-lg border-teal-500   items-center justify-center ">
        {board.map((value, i) => (
          <Square key={i} value={value} onClick={() => handleClick(i)} />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="font-semibold text-lg -mt-40 py-8 sm:py-5 sm:mt-0 ">
          {status}
        </div>
        <button
          className="p-2 mx-2 bg-blue-600  transition-opacity hover:opacity-75 text-white font-semibold  rounded-md"
          onClick={handleRestart}
        >
          Restart Game!
        </button>

        <button
          className="p-2 mx-2 bg-red-600 transition-opacity hover:opacity-75 text-white font-semibold rounded-md my-5 "
          onClick={handleQuit}
        >
          Quit Game
        </button>
      </div>
    </>
  );
};

export default Board;
