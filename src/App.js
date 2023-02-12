
import './App.css';
import LoadingBar from "react-top-loading-bar";

import {
  HashRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { useState } from 'react';

import Navbar from './Components/Navbar';
import News from './Components/News';
// import NewsItem from './Components/NewsItem';

function App()  {
  const[progress,setProgress]=useState(0)

 
 const setprogress=(progress)=>
  {
    setProgress(progress)
  }
  
  
  
  let pagesize=12;
  return (
    <>
      <Router>
 
      {/* <News setprogress={setprogress} Item></NewsItem> */}
      {/* element={<News setprogress={setprogress}  pageSize={pagesize} country={'us'} key="" category={'Entertainment'}></News> */}
      <LoadingBar height={3} color='#f11946' progress={progress} ></LoadingBar>
      <Navbar></Navbar>
      <Routes>
          <Route exact path="/"
          element={<News setprogress={setprogress}  pageSize={pagesize} country={'in'} key="h" category={'general'}></News>}>
          </Route>
          <Route exact path="/bussiness" element={<News setprogress={setprogress}  pageSize={pagesize} country={'us'} key="c" category={'bussiness'}/>}></Route>
          <Route exact path="/entertainment"
          element={<News setprogress={setprogress}  pageSize={pagesize} country={'us'} key="b" category={'entertainment'}></News>}>
          </Route>
          <Route exact path="/general"
          element={<News setprogress={setprogress}  pageSize={pagesize} country={'us'} key="a" category={'general'}></News>}>
          </Route>
          <Route exact path="/health"
          element={<News setprogress={setprogress}  pageSize={pagesize} country={'us'} key="d" category={'health'}></News>}>
          </Route>
          <Route exact path="/science"
          element={<News setprogress={setprogress}  pageSize={pagesize} country={'us'} key="e" category={'science'}></News>}>
          </Route>
          <Route exact path="/sports"
          element={<News setprogress={setprogress}  pageSize={pagesize} country={'us'} key="f" category={'sports'}></News>}>
          </Route>
          <Route exact path="/technology"
          element={<News setprogress={setprogress}  pageSize={pagesize} country={'us'} key="g" category={'technology'}></News>}>
          </Route>
          
        </Routes>
      </Router>
      </>
    )
  }

  export default App;