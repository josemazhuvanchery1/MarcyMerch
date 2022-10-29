const loginBttn = document.getElementById('login-form');
loginBttn.addEventListener('submit',checkLogin);

async function checkLogin(event){
    event.preventDefault();
    const username = document.getElementById('username_id').value;
    const password = document.getElementById("your_pass").value;
    if(username ==='' || password ===''){
        alert("Please enter username and password!");
    }
    else{
        let postRequest = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({username,password}),
        }
        let data = await fetch("http://localhost:8000/customers/login", postRequest)
        let userObj = await data.json()
        console.log(userObj)
        if(userObj.message === "user not found") alert("Account already exists! Please log in")
        else if (userObj.message === "wrong password") console.log("Wrong password or username")
        else if(userObj.user_id) window.location.href = "http://127.0.0.1:5501/Products_files/index.html";
    }
} 