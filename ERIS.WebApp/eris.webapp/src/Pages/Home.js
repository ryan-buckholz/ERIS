import Header from '../components/Header'
import SearchResultsGrid from '../components/SearchResultsGrid';
import SearchOptionsContaner from '../components/SearchOptionsContaner';


function Home() {
    return (
      <div className="Home" >
        <Header />
        
        <SearchOptionsContaner />
        <SearchResultsGrid />
      </div>
    );
  }
  
  export default Home;