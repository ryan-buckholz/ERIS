import './App.css';
import Header from './components/Header'
import LoginInput from './components/LoginInput';
import Logo from './components/Logo';
import SearchComponent from './components/SearchComponent'
import SearchResultsGrid from './components/SearchResultsGrid';
import SearchOptionsContaner from './components/SearchOptionsContaner';

function App() {
  return (
    <div className="App" >
      <Header />
      <Logo />
      <LoginInput />
      
      <SearchOptionsContaner />
      <SearchResultsGrid />
    </div>
  );
}

export default App;
