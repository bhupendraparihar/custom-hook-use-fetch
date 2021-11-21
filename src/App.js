import './App.css';
import useFetch from './hooks/UseFetch';

const App = () => {
  const { isLoading, error, apiData } = useFetch('books', () => fetch('http://myjson.dit.upm.es/api/bins/cosr').then(res => res.json()));

  console.log(apiData);
  return (
    <div className="App">
      <pre>
        { JSON.stringify(apiData, null, 4) }
        </pre>
    </div>
  );
};

export default App;
