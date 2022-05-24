import React from "react";
import styled from "styled-components";
import { Route , Switch} from 'react-router-dom';

// 파일
import Home from './Home';
import Review from './Review';


const App = () => {
  const weekList = {
      0: "일",
      1: "월",
      2: "화",
      3: "수",
      4: "목",
      5: "금",
      6: "토"
  }
// //TODAY
  const DayList = Object.keys(weekList).map((num,index) => {
      let today = new Date().getDay();
      // 오늘 날짜 인덱스 + 0, 오늘 날짜 인덱스 + 1 ... 오늘 날짜 인덱스 + 6
      let day = today + parseInt(num) > 6 
                ? today + parseInt(num)  -7 
                : today + parseInt(num);
                return weekList[day];
  });
  return(
<Container className="App">
      <h1>내 일주일은?</h1>
      <Switch>
        <Route path="/" exact render={(props) => (DayList.map((day, idx) => <Home key={idx} day={day}></Home>))}></Route>
        <Route path="/review/:day_name" component={Review}></Route>
      </Switch>
    </Container>
    )
}

const Container = styled.div`
text-align: center;
`

export default App;

// Section 
// main page
// 날짜 
// : 오늘 날짜 이후 6개의 요일이 보이게 한다
// 평점 
// : 랜덤한 숫자를 뽑아 요일 별 평점으로 기록한다 
// : 받은 평점을 이용해 circle 엘리먼트에 변화를 준다

// review page
// 눌렀을 때 true, false 상태 값으로 DOM 변화 

