import './App.css';
import Header from './components/header';
import Balance from './components/balance'
import Inex from './components/inex'
import Transactions from './components/transactions'
import Add from './components/add';
import { TrackerProvider } from './context/globalState';

function App() {
  return (
    <TrackerProvider>
      <div className='App'>
        <Header />
        <Balance />
        <Inex />
        <Transactions />
        <Add />
      </div>
    </TrackerProvider>
  );
}

export default App;
