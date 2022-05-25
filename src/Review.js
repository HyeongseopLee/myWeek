import React, { Children, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";


const Review = () => {
    const [filled, setFilled] = React.useState([false, false, false, false, false]);
    let history = useHistory();
    const day_params = useParams();
    const day_name = day_params.day_name;

    const circle = React.useRef(null);
    
    const onClickCircle = (e) => {
        const circlesValue = Number(e.target.attributes.value.value);
        const mapFilled = filled.map((bool, idx) => {
            const toTrue = idx <= circlesValue ? filled[idx] = true : filled[idx] = false;
            return toTrue
        });
        setFilled(mapFilled)
        return mapFilled
    }
    
    React.useEffect(() => {
        const circlesChildrens = Array.from(circle.current.childNodes);
        circlesChildrens.forEach((children, idx) => {
            children.addEventListener('click', onClickCircle)
        })
    }, [])
    
    return (
        <div>
            <div>{day_name}요일 평점남기기</div> 
            <Circles ref={circle}>
                {/* 조건부 스타일링 */}
                {filled.map((bool, idx) => (
                    <Circle key={idx} value={idx} style={
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