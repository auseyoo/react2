/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동맛집';
  // let [글제목, b] = useState('남자 코트 추천');
  let [글제목, b] = useState(['여자 코드 추천', '강남 우동맛집', '파이썬독학']);

  // let [logo, setLogo] = useState('ReactBlog');
  // let num = [1, 2];

  // let [a, c] = [1, 2];

  //let a = num[]
  let[따봉, 따봉변경] = useState(0);

  function 함수(){
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ logo }</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0]} <span className="ico-like" onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
