/*
  This list gives the ids of all the great houses that we want to look up.
  It should be inserted into the html above all the other files to ensure it is available
*/
const houseIdList = [
  7, // Eyrie
  17, // Baratheon
  169, // Greyjoy
  229, // Lannister
  362, // Stark
  378, // Targaryen
  395, // Tully
  398, // Tyrell
];

const houseListDiv =document.getElementById("got-house-list");


function fetchData(){
  houseIdList.forEach(element => {
  fetch (`https://anapioficeandfire.com/api/houses/${element}`)
  .then ( response => {
    return response.json();
  })
  .then (jsonData =>{
    const houseName = jsonData.name;
    let lordUrl = jsonData.currentLord;

    if (lordUrl) {
     fetch(lordUrl)
    .then(res => {
     return res.json();
    })
    .then(jsonData => {
      const lordName = jsonData.name;

      houseListDiv.innerHTML += `
        <div class="got-house">
          <h1 class="got-house__title">${houseName}</h1>
          <span class="got-house__current-lord">${lordName}</span>
        </div>
        `;

    })  
    } else if (lordUrl === ''){
      let lordUrl = jsonData.swornMembers[0];

    fetch(lordUrl)
    .then(res => {
     return res.json();
    })
    .then(jsonData => {
      const lordName = jsonData.name;

      houseListDiv.innerHTML += `
      <div class="got-house">
        <h1 class="got-house__title">${houseName}</h1>
        <span class="got-house__current-lord">${lordName}</span>
      </div>
      `;

    })

    }



  })

})


}

fetchData();


const killBtn = document.getElementById("kill-random-lord-button");
killBtn.addEventListener('click', function fetchSwornMember(){
fetch(`https://anapioficeandfire.com/api/houses/${houseIdList[Math.floor(Math.random() * houseIdList.length)]}`)
.then(res => {
  return res.json();
})
.then(jsonData => {
  return fetch (`${jsonData.swornMembers[Math.floor(Math.random() * houseIdList.length)]}`);
})
.then (res => {
  return res.json();
})
.then(jsonData => {
  const lordName = jsonData.name;

      houseListDiv.innerHTML += `
        <span class="got-house__current-lord">${lordName}</span>
      `;
})


})