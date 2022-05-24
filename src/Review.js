import React from "react";
import { useHistory,useLocation, useParams } from "react-router-dom";
import styled from "styled-components";


const Review = () => {
    let history = useHistory();
    const day_params = useParams();
    const day_name = day_params.day_name;
    const location = useLocation();
    const filled = location.state;

    return (
        <div>
            <div>{day_name}요일 평점남기기</div> 
            <Circles>
                {/* 조건부 스타일링 */}
                {filled.map((bool, idx) => (
                    <Circle key={idx} style={
                        bool ? {backgroundColor : 'greenyellow'} : {}
                    }></Circle>
                    )
                )}
            </Circles>
            <SaveBtn onClick={() => {
                history.push("/")
            }}>평점 남기기</SaveBtn>
        </div>
    )
}

const Circles = styled.div`
display:flex;
justify-content: center;
margin: 20px 0px;
`

const Circle = styled.div`
    width: 30px;
    height: 30px;
    background-color: rgb(221, 221, 221);
    display: flex;
    justify-content: space-between;
    margin-right:1px;
    cursor: pointer;
    :hover{
    background-color: rgb(221, 221, 221);
    }
`

const SaveBtn = styled.button`
all:unset;
background-color: #074755;
color:white;
padding:4px 8px;
border-radius: 2px;
cursor: pointer;
:hover{
    background-color: rgb(221, 221, 221);
    color:#074755;
    transition:all .2s ease-in-out;
}
`
export default Review;