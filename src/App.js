import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy2 } from './store/slices/counter/counterSlice';


function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch();



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`Count is : ${counter}`}</p>

        <button type='button' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button type='button' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type='button' onClick={() => dispatch(incrementBy2(2))}>
          Increment by 2
        </button>
      </header>
    </div>
  );
}

export default App;
