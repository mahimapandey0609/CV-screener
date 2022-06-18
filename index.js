console.log("This my index.js");
//data is an array of objects which contains information about the candidate

const data =[
 {
    name:'Rohan das',
    age:18,
    city :"Kolkata",
    language: 'python',
    framework: 'Django',
    image: "https://randomuser.me/api/portraits/men/75.jpg"
 },
 {
    name:'Sayam das',
    age:19,
    city :"Delhi",
    language: 'Nodejs',
    framework: 'Express',
    image: "https://randomuser.me/api/portraits/men/74.jpg"
 },
 {
    name:'total das',
    age:28,
    city :"Bangalore",
    language: 'php',
    framework: 'Laravel',
    image: "https://randomuser.me/api/portraits/men/73.jpg"
 },
 {
    name:'Sunita Singh',
    age:23,
    city :"Noida",
    language: 'Java Script',
    framework: 'angular',
    image: "https://randomuser.me/api/portraits/women/72.jpg"
 },
 {
    name:'sallu das',
    age:22,
    city :"Gurgram",
    language: 'python',
    framework: 'Flask',
    image: "https://randomuser.me/api/portraits/men/71.jpg"
 },

]

//CV Iterator
function cviterator(profiles)
{
    let nextIndex = 0; 
   return{
      next: function(){
         return nextIndex<profiles.length ?
         {value: profiles[nextIndex++],done: false} :
         {done:true}
       
      }
   };
}


// Event Listner for next button
let listner = document.getElementById("button");
console.log(listner);
listner.addEventListener("click",nextCV);

const candidates = cviterator(data);
console.log(candidates);
nextCV();
function nextCV(){
   const currentcandidate = candidates.next().value;
   console.log(currentcandidate);
   if(currentcandidate!= undefined){
   let image = document.getElementById("image");
   let profile = document.getElementById('profile');
   image.innerHTML=`<img src ='${currentcandidate.image}'>`;
   profile.innerHTML=`<ul class="list-group">
   
   <li class="list-group-item">Name:${currentcandidate.name}</li>
   <li class="list-group-item">Age:${currentcandidate.age}</li>
   <li class="list-group-item">City:${currentcandidate.city}</li>
   <li class="list-group-item">Promarily works on ${currentcandidate.language}</li>
   <li class="list-group-item">with ${currentcandidate.framework} framework</li>
 </ul>`;
   }
   else{
      alert("End of Candidate Application");
      window.location.reload();
   }
}