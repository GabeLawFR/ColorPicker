import { useState } from 'react'



const App = () => {
  const Color = ({color, setSelectedColor, isSelected}) => {
    return (<div 
    className={`${color} ${isSelected ? 'selected' : ""}`}
    onClick={() => setSelectedColor(color)}
    ></div>
    )
  }
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} isSelected={selectedColor === "yellow"}/>
        <Color color="orange" setSelectedColor={setSelectedColor} isSelected={selectedColor === "orange"}/>
        <Color color="blue" setSelectedColor={setSelectedColor} isSelected={selectedColor === "blue"}/>
        <Color color="violet" setSelectedColor={setSelectedColor} isSelected={selectedColor === "violet"}/>
      </div>
    </div>
  );
};

export default App;
