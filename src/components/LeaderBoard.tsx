import React from "react";
import { useWinnerContext } from "../context/WinnerContext";

type LeaderProps = {
  player1: string;
  player2: string;
  player1Score: number;
  player2Score: number;
};

const LeaderBoard = () => {
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

  const players = [
    { playerName: player1, score: player1Score },
    { playerName: player2, score: player2Score },
  ];
  players.sort((a, b) => b.score - a.score);
  return (
    <div className="mx-auto pb-64">
      <h1 className="font-bold py-10 sm:py-0 text-xl sm:text-2xl">
        Leaderboard
      </h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300">Rank</th>
            <th className="py-2 px-4 border border-gray-300">Player Name</th>
            <th className="py-2 px-4 border border-gray-300">Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-300">
                {player.playerName}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {player.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
