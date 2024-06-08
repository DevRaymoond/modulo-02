function carregarUsuarios() {
    const requestOptions = {
        method: "GET"
    };

    fetch ("http://localhost:3000/usuarios", requestOptions)

        .then((response) => {
            console.log("PASSO 1")
            return response.json()
        })
    
function cadastrarUsuarios() {
    const requestOptions = {
        method: "POST"
    };

    fetch ("http://localhost:3000/usuarios", requestOptions)
    
    .then((response) =>)
}

        
}

document.addEventListener('DOMContentLoaded', carregarUsuarios)