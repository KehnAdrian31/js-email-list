//recupero elementi dal DOM
const emailList = document.getElementById('email-list');
const generateButton = document.getElementById('generate-button');

//creo funzione per generare 10 email
function generateEmail(){

  //svuoto la lista
  emailList.innerHTML = '';

//ciclo for per generare 10 email
for(i= 0; i < 10; i++){
  axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) =>{
    const email = resp.data.response;
    emailList.innerHTML += `<li class="list-unstyled">${email}</li>`;
  })
}
}

// //rigenero nuove email
// generateButton.addEventListener('click', generateEmail());

// function getEmail(){
//   axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) =>{
//     const email = resp.data.response;
//     emailList.innerHTML += `<li>${email}</li>`;
//   })
// }
// //rigenero nuove email
generateEmail();

generateButton.addEventListener('click', generateEmail);

// //recupero elementi dal DOM un altro metodo che mi ha dimostrato mio amico
// const emailList = document.getElementById('email-list');
// const generateButton = document.getElementById('generate-button');

// //creo funzione per generare 10 email
// function generateEmail(){

//   //svuoto la lista
//   emailList.innerHTML = '';

// //ciclo for per generare 10 email
// for(i= 0; i< 10; i++){
//   axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) =>{
//     const email = resp.data.response;
//     emailList.innerHTML += `<li class="list-unstyled">${email}</li>`;
//   })
// }
// }

// //rigenero nuove email
// generateButton.addEventListener('click', generateEmail());

// async function getEmail(){
//   let email;
//   await axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) =>{
//     email = resp.data.response;
//     emailList.innerHTML += `<li class="list-unstyled">${email}</li>`;
//   })

//   return email
// }

// let hello = getEmail()