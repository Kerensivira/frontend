import styled from "styled-components";



export const Label = styled.label`
`;


export const Invisible = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
`;

export const Pantalla = styled.div`
    color: #fff;
    min-width: 400px;
    min-height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    background: #1c2231;
    z-index: 100;
`;


export const Comprobacion = styled.div`
 position: absolute;
    width: 91%;
    bottom: 25px;
    background-color: #dbffb6;
    border-top: 2px solid #00000054;
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    transform: translateX(-100%);
    transition: all 0.3s ease;
`;

export const Congrats = styled.div`
 font-size: 20px;
    margin: 10px 0 10px 0;
    color: #1c2231;
    font-weight: 600;
    text-align: center;
`;

export const BotonNext = styled.button`
 width: 100%;
    margin: 10px 0 10px 0;
    background-color: #7dc755;
    color: #fff;
    padding: 10px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    border-bottom: 2px solid #3e5e13cb;
    transition: all 0.3s ease;
    cursor: pointer;
    outline: none;
`;




// CONTENEDOR GLOBAL
export const HtmlHome = styled.div `
    background-color: rgb(14, 24, 36);
    color: #fff;
    min-width: 400px;
    max-width: 400px;
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    position: relative;
`

// HIJOS DEL CONTENEDOR GLOBAL
export const PaddingHtml = styled.div `
  padding: 20px;
`


export const Html = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Position0 = styled.div `
  
`

export const Position1 = styled.div `
  
`

export const Position2 = styled.div `
    display: flex;
    align-items: center;
    color: rgb(255, 75, 75);
    font-size: 20px;
`

export const Progress = styled.div `
    background-color: #fff;
    width: 250px;
    min-height: 15px;
    border-radius: 10px;
    display: flex;
`

export const ColorProgress = styled.div `
    width: 0;
    min-height: 15px;
    border-radius: 10px;
    background-color: #7cc023;
    transition: all 0.3s ease;
    z-index: 1;
`

export const Num = styled.div `
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
`

export const TextImg = styled.div `
    margin-top: 20px;
    display: flex;
`

export const Title = styled.div `
    display: flex;
    align-items: center;
    font-size: 20px;
`

export const ContentOptions = styled.div `
    position: relative;
`

export const Options = styled.div `
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: all 0.3s ease;
`

export const DivHijo = styled.div `
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  background-color: #2a3349b8;
  border: 2px solid #fff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  transition: all 0.3s ease;
`

export const Veri = styled.div `
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
`

export const Activation = styled.div `
  position: absolute;
  width: 91%;
  bottom: 20px;
  background-color: #edffdc;
  border-top: 2px solid #00000054;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  transform: translateX(-100%);
  transition: all 0.3s ease;
`

export const ActivationFalse = styled.div `
  position: absolute;
  width: 91%;
  bottom: 20px;
  background-color: #ffdcdc;
  border-top: 2px solid #00000054;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  transform: translateX(-100%);
  transition: all 0.3s ease;
`

export const Ok = styled.div `
  font-size: 20px;
  margin: 10px 0 10px 0;
  color: #1c2231;
  font-weight: 600;
  text-align: center;
`

export const Continue = styled.div `
  width: 100%;
  margin: 10px 0 10px 0;
  background-color: #7dc755;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  border-bottom: 2px solid #3e5e13cb;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
`

export const ContinueFalse = styled.div `
  width: 100%;
  margin: 10px 0 10px 0;
  background-color: #c75555;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  border-bottom: 2px solid #5e13139d;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
`