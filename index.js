const mockUser ={
    username:"sudarat",
    password:"29126502",
    name:"Arm",
    email:"arm@gmail.com",
};

function createJWT(payload,secret,expiresInSeconds=20){
    const header=btoa(JSON.stringify({alg:"HS256",typ:"JWT"}));
    const body= btoa(
      JSON.stringify({
        ...payload,
        exp:Date.now()+expiresInSeconds*1000,
      })           
    );
    const signature = btoa(`${header}.${body}.${secret}`);
    return `${header}.${body}.${signature}`;
}

document.getElementById("Loginform").addEventListener("submit", function (e){
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === mockUser.username && password === mockUser.password) {
        const token = createJWT({username:mockUser.username},"mysecret",20);

        localStorage.setItem("token",token);

        localStorage.setItem("name",mockUser.name);
        localStorage.setItem("email",mockUser.email);

        alert("Login successful!");
        window.location.href = "menu.html";
    } else{
        alert("Invalid username or password.");
    }
});