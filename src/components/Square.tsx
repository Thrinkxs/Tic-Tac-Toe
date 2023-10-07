type SquareProps = {
  value: string;
  onClick: () => void;
};

const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button
      className={`outline-none w-22   h-20 border active:bg-gray-200 text-lg font-semibold ${
        value === "X" ? "text-red-600" : "text-blue-600"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
