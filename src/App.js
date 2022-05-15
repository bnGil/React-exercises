import React from "react";
import Exercise2_1 from "./components/Exercise2_1";
import Exercise2_2 from "./components/Exercise2_2";
import Exercise3_1 from "./components/Exercise3_1";
import Exercise3_2 from "./components/Exercise3_2/Exercise3_2";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Exercise2_1 /> */}
        {/* <Exercise2_2 /> */}
        {/* <Exercise3_1 /> */}
        <Exercise3_2 />
      </div>
    );
  }
}

export default App;
