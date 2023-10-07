import Board from "./Board";
import LeaderBoard from "./LeaderBoard";
import Help from "./Help";

const TicTacToe = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-center mt-4 font-bold border-2 mx-auto w-44 rounded-md bg-green-500 text-gray-800 p-3">
          Tic Tac Toe Game
        </h1>
        <Help />
      </div>

      <div className="flex justify-evenly mx-auto items-center flex-col sm:flex-row ">
        <Board />
        <LeaderBoard />
      </div>
    </>
  );
};

export default TicTacToe;
