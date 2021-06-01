import './App.css';

import States from './component/state';
import Reducers from './component/reducer';
import Redux from './component/reduxs';

function App() {
  return (
    <div style={{ width: "96%", margin: "0 auto" }}>
        <h2> State Management </h2>
        <p> by : 118140084 - Nazla Andintya Wijaya </p>

        <br />
        <States />

        <br />
        <Reducers />

        <br />
        <Redux />
    </div>
  );
}

export default App;
