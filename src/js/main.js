import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function setHeaderInfo(data) {
  // insert data into disclaimer section
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;
  // update the title of the site. Notice that we can select things in the head just like in the body with querySelector
  document.querySelector("head > title").textContent = data.fullName;
  // set the banner image
  document.querySelector(".hero-banner > img").src = data.images[0].url;
  // use the template function above to set the rest of the park specific info in the header
  document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(data);
}

const parkInfoLinks = [

]

function mediaCardTemplate(info) {
    return `
    <div class= "media-card">
    `;
}

function setParkInfo(data) {

}

function setParkFooter(data){

}

async function init() {
  const parkData = await getParkData();
  console.log(parkData); // ✅ Check that data is coming through

  // Later:
  // setHeaderFooter(parkData);
  // setParkIntro(parkData);
  // setParkInfoLinks(parkData);

}

async function getClimbingParks() {
  const url = 'https://developer.nps.gov/api/v1/activities/parks?q=climbing&api_key=0ybv11ZcMr6McY80ecu4uhdNhNLWb7yS2UeSkakd';
  
  const response = await fetch(url);
  const data = await response.json();
  
  return data;
}

const outputList = document.getElementById('outputList');

async function renderClimbingList(){
  const data= await getClimbingParks();
  const parks= data.data[0].parks;
  const html= parks.map(listTemplate).join('');
  outputList.innerHTML= html;
}

init();

getClimbingParks();
renderClimbingList();
setHeaderInfo(data);
mediaCardTemplate(data);
setParkInfo(data);
setParkFooter(data);

function enableNavigation() {
  // use a querySelector to get the menu buttons
    const menuButton = document.querySelector("#global-nav-toggle");
  // when the main menu button is clicked:
  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;
    // toggle the show class on the global-nav
document.querySelector(".global-nav").classList.toggle("show");
    // check to see if target is the button or something inside the button
if target.tagName !== "BUTTON" {
      target=target.closest("button")};
    } 
    // check to see if we just opened or closed the menu
    
      // if we opened it then set the aria-expanded attribute on the button to true
      
      // if we closed it then set the aria-expanded attribute on the button to false
      
    const isExpanded = target.getAttribute("aria-expanded") === "true";

      target.setAttribute("aria-expanded", false);
    console.log("toggle");
  )};
enableNavigation();