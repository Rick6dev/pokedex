import logo from './logo.svg';
import './App.css';
import { TopBar } from './components/TopBar/TopBar';
import { PokeList } from './components/PokeList/PokeList';
import { BottomBar } from './components/BottomBar/BottomBar';

function App() {
  return (
    <main className="App">
      <TopBar/>
      <PokeList/>
      <BottomBar/>
    </main>
  );
}

export default App;
