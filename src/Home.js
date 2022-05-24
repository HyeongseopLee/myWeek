import React, { useEffect } from "react";
import styled from "styled-components";

const Home = ({day}) => {
    const [filled, setFilled] = React.useState([false, false, false, false, false]);
    const randomNum = Math.floor(Math.random() * 5);
    
    useEffect(() => {
        // 랜덤한 숫자의 인덱스만큼 false를 true로 변경 
        const map = filled.map((a, idx) => {
            const toTrue = idx < randomNum ? filled[idx] = true : filled[idx];
            return toTrue
            })
            setFilled(map)
    }, [])

    return(
        <RowContainer>
            <Day>{day}</Day>
            <Circles>
                {/* 조건부 스타일링 */}
                {filled.map((bool, idx) => (
                    <Circle key={idx} style={
                        bool ? {backgroundColor : 'greenyellow'} : {}
                    }></Circle>
                    )
                )}
            </Circles>
            <RatingButton>평점 남기기</RatingButton>
        </RowContainer>
    )
}

// style



const Day = styled.p`
    font-size: 20px;
    margin-right:20px;
`

const RowContainer = styled.div`
display:Flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-bottom: 10px;
`

const Circles = styled.div`
display:flex;
`

const Circle = styled.div`
    width: 30px;
    height: 30px;
    background-color: rgb(221, 221, 221);
    display: flex;
    justify-content: space-between;
    margin-right:1px;
`

const RatingButton = styled.button`
all:unset;
background-color: #074755;
color:white;
padding:4px 8px;
border-radius: 2px;
cursor: pointer;
margin-left:10px;
:hover{
    background-color: rgb(221, 221, 221);
    color:#074755;
    transition:all .2s ease-in-out;
}
`
export default Home;