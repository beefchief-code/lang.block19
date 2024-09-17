const newFreelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

const initial = {
    freelancers: [
{    
    name: `Alice`, price: 30, occupation: `Writer`,
},
{
    name: `Bob`, price: 50, occupation: `Teacher`,
},
{
    name: `Carol`, price : 70, occupation: `Programmer`,
},
  ]}

function averageRate(){
    let avg = 0;
    for (let i = 0; i < initial.freelancers.length; i++){
        const newFreelancer = initial.freelancers[i];
        avg += newFreelancer.price;
    }
    initial.averageRate = Math.round(avg/initial.freelancers.length);
}

function newPost(freelancer){
    initial.freelancers.push(freelancer);
}

function createNewPost(freelancer){
    const postRow = document.createElement("tr");
    const newName = document.createElement("td");
    const newOcc = document.createElement("td");
    const newPrice = document.createElement("td");

    newName.textContent = freelancer.name;
    newOcc.textContent = freelancer.occupation;
    newPrice.textContent = freelancer.price;

    return postRow.append(newName, newOcc, newPrice);
}

function emptyListings(){
    const listings = document.getElementById("listings");

    while (listings.childNodes.length){
        listings.removeChild(listings.childNodes[0]);
    };
}

function render(){
    emptyListings();   //start with empty listing table

    const listings = document.getElementById("listings");

    for(let i = 0; i < initial.freelancers.length; i++){
        const nextFreelancer = initial.freelancers[i];
        const nextListing = createNewPost(nextFreelancer);
        listings.appendChild(nextListing);
    }

    averageRate();
    const avgDisplay = document.getElementById("avgRate");
    avgDisplay.textContent = "The average price is $${initial.averageRate}";
}

render();

function addFreelancer(){
    for(let i=0; i< newFreelancers.length; i++){
        const freelancer = {
            name: newFreelancers.name[i],
            occupation:  newFreelancers.occupation[i],
            price: newFreelancers.price[i]

        };
    
    return freelancer;
    }
}

setInterval(function(){
const newFreelancer = addFreelancer();
newPost(newFreelancer);
render();
}, 3000);
