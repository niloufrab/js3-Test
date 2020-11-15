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

function main() {
  //variables
  const url = `https://anapioficeandfire.com/api/houses`;
  const body = document.body;
  const button = document.querySelector('button');

  body.appendChild(button)


  //function to load houses 
  function getHouse() {
    fetch(url)
      .then((res) => res.json())

      .then((data) => {
        console.log (data)

        data.forEach((house) => {
          const currentLordUrl = data[i].currentLord;
          const houseDiv = document.createElement('div');
          const h1 = document.createElement('h1');

          div.appendChild(houseDiv);
          houseDiv.appendChild(h1);

          h1.textContent = data[i].cadetBranches.name;

          h1.classList.add('got-house__title');

        });
      })
      .catch((err) => console.error(err));
  }



  //function get currentLord information
  function getCurrentLord() {
    fetch(`https://anapioficeandfire.com/api/houses/${data[i].currentLord}`)
      .then((res) => res.json())
      .then((data) => {
        console.log (data)
        data.forEach( (lord) => {
          const span = document.createElement('span');
          
          houseDiv.appendChild(span)

          span.innerText = data.cadetBranches.name;

          h1.classList.add('got-house__current-lord');

        })

      })
      .catch((err) => console.error(err));     
      
  }


  // function to get swornMembers
  function removeSwornMembers() {
    fetch('swornMembersUrl')
    
      .then((res) => res.json())
      .then((data) => {
        // here should  each time select randomly random swornMembers then make click event on button to invoke removeSwornMembers function
        const randomMember = swornMembers[Math.floor(Math.random() * swornMembers.length)];


      })
      .catch((err) => console.log(err));
  }

  getHouse();

  button.addEventListener('click', removeSwornMembers())

}

window.addEventListener('load', main);

