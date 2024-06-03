import Search from './components/search/search';
import './App.css'

function App() {

  const handleOnSearchChange = (searchData: string) => {
    console.log(searchData)
  }

  return (
    <>
      <div className="container">
        {' '}
        <Search onSearchChange={handleOnSearchChange} />
      </div>
    </>
  );
}

export default App;
