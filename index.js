function submitData(nameArg, emailArg){
    const formData = {
        "name": nameArg,
        "email": emailArg,

    };
    const configureObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
    },
        body:JSON.stringify(formData)
    };
    return fetch('http://localhost:3000/users', configureObject)
    .then(response => response.json()) 
    .then(body => addNewInfo(body.id))
    .catch(error => {
        let errorMessage=document.createElement("errorMessage")
        errorMessage.innerHTML='Unauthorized Access';
        document.body.append(errorMessage)
    });
}
