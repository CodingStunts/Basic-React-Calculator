const numberButtons = [
  { 0: 0 },
  { 1: 1 },
  { 2: 2 },
  { 3: 3 },
  { 4: 4 },
  { 5: 5 },
  { 6: 6 },
  { 7: 7 },
  { 8: 8 },
  { 9: 9 },
];

const MakeNumberButtons = ({ concatDisplay }) => {
  return (
    <div>
      <h1>Buttons</h1>
      {numberButtons.map((button, i) => (
        <button onClick={() => concatDisplay(button[i])}>{button[i]}</button>
      ))}
    </div>
  );
};
export default MakeNumberButtons;
