import React from 'react';

const dom = "test";
const dom2 = <div>Hi!Tom!</div>;

function App() {
  return (
    <React.Fragment>
      <lable htmlFor="bar">bar</lable>
      <input type="text" onChange={() => {console.log("i am Clicked!")}} />
      <input type="button" lable="テキストです" />
    </React.Fragment>

  );
}

export default App;
