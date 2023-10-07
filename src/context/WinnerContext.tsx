import { ReactNode, createContext, useContext, useState } from "react";

const WinnerContext = createContext({});
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
