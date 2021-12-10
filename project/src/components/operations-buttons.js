let operationButtons = [
  { 0: "-" },
  { 1: "+" },
  { 2: "/" },
  { 3: "*" },
  { 4: "." },
  { 5: "(" },
  { 6: ")" },
];

const MakeOperationButtons = ({ concatDisplay }) => {
  return (
    <div>
      {operationButtons.map((button, i) => (
        <button onClick={() => concatDisplay(button[i])}>{button[i]}</button>
      ))}
    </div>
  );
};

export default MakeOperationButtons;
