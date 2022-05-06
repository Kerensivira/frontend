export const register = async () =>{

    const usuario = JSON.parse(localStorage.getItem('Usuario'))     
    const URL = 'https://dailybits2022.herokuapp.com/usuario/'
    console.log("holaaaaa")
    console.log(usuario)
    
    await fetch(URL, {
        method: 'POST', 
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    
    }