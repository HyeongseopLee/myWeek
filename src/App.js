// 리액트 패키지
import React from 'react';
import styled from "styled-components";

// 파일
import Row from './Row';

function App() {
  const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="App">
      <Container>
        <h1>내 일주일은?</h1>
        {WEEKDAY.map((day, idx) => (<Row key={idx} day={day}/>))}
      </Container>
    </div>
  );
}

const Container = styled.div`
text-align: center;
`

export default App;
