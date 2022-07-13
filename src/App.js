import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { firestore } from './firebase';
import { useCallback, useEffect, useState} from 'react';
import Header from './component/Header';
import Banner from './component/Banner';
import About from './component/About';

// function getMovies() {
//   const url = 'https://fake-movie-database-api.herokuapp.com/api?s=batman'
//   axios.get(url).then(res => {
//     console.log(res.data)
//     return res.data;
//   })
// }

function App() {
  const [data, setData] = useState("");
  const test = firestore.collection("test");

  useEffect(() => {
    test.doc("firend").get().then(result => {
      console.log(result.data())
      setData(result.data().friend_count);
    })
  }, []);

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      {/* <h1>This is 오동현</h1>
      <h2>{data}</h2>
       */}
       <br></br>

    </div>
  );
}

export default App;
