import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import DatePicker from './DatePicker'

function App() {
  return (
    <div className="App">
		<h1>React Date Picker</h1>
		<DatePicker />		
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));