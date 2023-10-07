import { ReactNode, createContext, useContext, useState } from "react";

type WinnerContextValue = {
  player1: string;
  setPlayer1: React.Dispatch<React.SetStateAction<string>>;
  player2: string;
  setPlayer2: React.Dispatch<React.SetStateAction<string>>;
  player1Score: number;
  setPlayer1Score: React.Dispatch<React.SetStateAction<number>>;
  player2Score: number;
  setPlayer2Score: React.Dispatch<React.SetStateAction<number>>;
};

const WinnerContext = createContext<WinnerContextValue>({
  player1: "",
  setPlayer1: () => {},
  player2: "",
  setPlayer2: () => {},
  player1Score: 0,
  setPlayer1Score: () => {},
  player2Score: 0,
  setPlayer2Score: () => {},
});

type Props = {
  children: ReactNode;
};

export const WinnerProvider = ({ children }: Props) => {
  const [player1, setPlayer1] = useState<string>(
    localStorage.getItem("player1") || ""
  );
  const [player2, setPlayer2] = useState<string>(
    localStorage.getItem("player2") || ""
  );
  const [player1Score, setPlayer1Score] = useState<number>(
    parseInt(localStorage.getItem("player1Score") || "0")
  );
  const [player2Score, setPlayer2Score] = useState<number>(
    parseInt(localStorage.getItem("player2Score") || "0")
  );

  return (
    <WinnerContext.Provider
      value={{
        player1,
        setPlayer1,
        player2,
        setPlayer2,
        player1Score,
        setPlayer1Score,
        player2Score,
        setPlayer2Score,
      }}
    >
      {children}
    </WinnerContext.Provider>
  );
};

export const useWinnerContext = () => useContext(WinnerContext);
