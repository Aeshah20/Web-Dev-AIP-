let users = [{"Aeshah", email:"aeshahali20@gmail.com"}, {name:"bassam", email:"bassam7@gmail.com"}];

const btn = document.querySelector("#btn01");

btn.addEventListener('click',function(){
let name = document.getElementsById(username).value;
let email = document.getElementsById(email).value;

let checkname =0;
let checkemail= 0;

for (let i=0; i<users.length; i++){
   if(users[i].name == name){
    checkname=1;
 }else if(users[i].email ==email){
    checkname= 1;
   }
}


const parent = document.querySelector("form");

if (name.length <4){
    let elem = `<p>username should be at least 4 characters</p>`;
    parent.innerHTML+= elem;
}else if (checkname==1){
    let elem = `<p>username already exist</p>`;
    parent.innerHTML+= elem;

}else if(checkemail==1){
    let elem = `<p> email already exist </p>`;
    parent.innerHTML+= elem;


}else{
    alert("welcome to AIP club!!");

}
});