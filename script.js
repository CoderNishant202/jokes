
let innerdiv = document.querySelector('.innerdiv');
let joke = document.querySelector(".joke");


const jokegenerator = async ()=>{
   try{
    const setheader = {
        headers:{
            Accept :"application/json"
        }
    }
    const res = await fetch('https://icanhazdadjoke.com',setheader);
    // const res = await fetch('',setheader);
    // console.log(res)
const data = await res.json();
innerdiv.innerHTML = data.joke;
// console.log(data)
   }catch(err){
    console.log(err)
   }
}
joke.addEventListener('click',jokegenerator)
jokegenerator()