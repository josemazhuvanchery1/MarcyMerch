const registerBttn = document.getElementById('register')
registerBttn.addEventListener('click', handleSignup)
async function handleSignup(event){
    event.preventDefault();
    const first_name = document.getElementById('firstName').value;
    const last_name = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('userName').value;
    const password = document.getElementById('pass').value;
    console.log('hi')
    let postRequest = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({first_name, last_name,email,username,password}),
    }
    let data = await fetch("http://localhost:8000/customers/register", postRequest)
    let userObj = await data.json()
   
    if(userObj.user_id) window.location.href = "http://127.0.0.1:5501/Products_files/index.html";

}
