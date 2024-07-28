import './App.css';
import { useState, createContext } from 'react';
import Header from './components/Header';
import CompA from './components/CompA'

const AppState = createContext();

function App() {
  const [data, setData] = useState("Welcome")
  const [name, setName] = useState({name: 'Sanjeev Kumar', age:30});
  return (
    <>
    <AppState.Provider value={{data, name}} >
      <Header />
      <CompA />
    </AppState.Provider>
    </>
  );
}

export default App;
export {AppState};