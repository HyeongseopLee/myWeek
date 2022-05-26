import React, {useEffect} from "react";
import styled from "styled-components";
import { Route , Switch} from 'react-router-dom';

// 파일
import Home from './Home';
import Review from './Review';


const App = () => {
  // 랜덤 평점 5개를 담은 배열
  const [randomNumArray, setRamdomNumArray] = React.useState([]);
  
  // 오늘부터 일주일 간의 요일을 담은 배열 
  const [WeekDayfromToday, setWeekDayfromToday] = React.useState([]);

  const weekList = {
      0: "일",
      1: "월",
      2: "화",
      3: "수",
      4: "목",
      5: "금",
      6: "토"
  }
  // 오늘을 기준으로 7일간의 요일을 담은 배열로 상태를 변경합니다.
  const DayList = Object.keys(weekList).map((num,index) => {
      let today = new Date().getDay();
      // 오늘 날짜 인덱스 + 0, 오늘 날짜 인덱스 + 1 ... 오늘 날짜 인덱스 + 6
      let day = today + parseInt(num) > 6 
                ? today + parseInt(num)  -7 
                : today + parseInt(num);
                return weekList[day];
  });

  // 랜덤한 5개의 숫자의 배열로 상태를 변경합니다.
  const randomList = () => {
      var arr = []; 
      for (var i = 0; i < 7; i++) {
        const randomNumInLoop = Math.floor(Math.random() * 7);
        arr[i] = randomNumInLoop;
      }
      return arr
  }
  
  useEffect(() => {
    setWeekDayfromToday(DayList);
    setRamdomNumArray(randomList());
  }, [])

  //  [issue #1] 1번 쨰 function(){}, 2번 째 useEffect 안에서 useState가 발동되었기 때문에 재렌더링이 일어나면서 뜬 콘솔
  // console.log("이거 왜 2번뜸?")
  return(
<Container className="App">
      <h1>내 일주일은?</h1>
      <Switch>
        <Route path="/" exact render={(props) => (WeekDayfromToday.map((day,idx) => (<Home key={idx} day={day} randomNum={randomNumArray[idx]}></Home>)) )}></Route>
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

