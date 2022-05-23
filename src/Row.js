import React from "react";
import styled from "styled-components";

const Row = ({day}) => {
    return(
        <div>
        <Circles>
            <Day>{day}</Day>
            <Circle className="circle"></Circle>
            <Circle className="circle"></Circle>
            <Circle className="circle"></Circle>
            <Circle className="circle"></Circle>
            <Circle className="circle"></Circle>
            <RatingButton>평가하기</RatingButton>
        </Circles>
      </div>
    )
}

// style


const Day = styled.p`
    font-size: 20px;
    margin-right:20px;
`

const Circles = styled.div`
display:Flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-bottom: 10px;
`

const Circle = styled.div`
    width: 30px;
    height: 30px;
    background-color: rgb(221, 221, 221);
    display: flex;
    justify-content: space-between;
    margin-right:1px;
`

const RatingButton = styled.p`
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
export default Row;