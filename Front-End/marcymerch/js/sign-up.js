const registerBttn = document.getElementById('register')
registerBttn.addEventListener('click', handleSignup)

function handleSignup(event){
    event.preventDefault();
    const fName = document.getElementById('firstName').value;
    const lName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('userName').value;
    const password = document.getElementById('pass').value;

    console.log({fName,lName,email,username,password})
}
