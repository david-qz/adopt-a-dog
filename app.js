// import services and utilities
import { getDogs } from './services/adopt-service.js';

// import component creators
import createDogList from './components/DogList.js';

// declare state variables
let dogs = [];

// write handler functions
async function handlePageLoad() {
    // *** Get all the dogs (async, so you need to "await")
    // and assign to "dogs" variable

    display();
}

// Create each component: 
const DogList = createDogList(document.querySelector('#dog-list'));

// Roll-up display function that renders (calls with state) each component
function display() {
    DogList({ dogs });
}

// Call display and page load!
handlePageLoad();

// no need to display until loaded!
// display();



