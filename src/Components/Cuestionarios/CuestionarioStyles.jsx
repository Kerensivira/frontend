import styled from "styled-components";

export const SuperDiv = styled.div`
  background-color: rgb(14, 24, 36);
  color: #fff;
  min-width: 400px;
  max-width: 400px;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
`;

export const QuestionTitle = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const DivRespuestas = styled.div`
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
`;


export const DivHijo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  background-color: #2a3349b8;
  border: 2px solid #fff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  transition: all 0.3s ease;
`;

export const Button = styled.button`
 width: 100%;
 margin-top: 30px;
 background-color: #e9ffd58e;
 color: #fff;
 padding: 10px;
 text-align: center;
 font-weight: 600;
 font-size: 16px;
 border-radius: 5px;
 border: none;
 border-bottom: 2px solid #3e5e13cb;
 transition: all 0.3s ease;
`;


export const InputRadio = styled.input`
cursor: pointer;
width: 25px;
height: 25px;
background-color: #000;
border: 2px solid #fff;
border-radius: 50%;
`;

