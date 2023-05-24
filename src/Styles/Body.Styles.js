import styled from "styled-components";

export const ContainerBody = styled.div`
height: 80vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: rgb(31,169,207,255);
`

export const DatosTurno = styled.div`
height: 25vh;
width: 90vw;
border-radius: 5px;
border: 1px solid black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`
export const DatosInstalacion = styled.div`
height: 75vh;
width: 90vw;
overflow-y: scroll;
border-radius: 5px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
text-align: center;
background-color: rgb(47,68,155,255);
margin-top: 10px;
color: white
`
export const Checkers = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 5px
`