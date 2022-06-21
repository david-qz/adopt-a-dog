// import services and utilities
import { getDog } from '../services/adopt-service.js';

// import component creators
import createDogDetail from '../components/DogDetail.js';
import createDogName from '../components/DogName.js';

// declare state variables
let dog = {};

// write handler functions
async function handlePageLoad() {
    // *** Get the id from search params and assign to "id" variable


    if (!id) window.location = '/';

    // *** Use the id to get this dog (async, so you need to "await"!)
    // and assign to "dog" variable


    if (!dog) window.location = '/';

    display();
}

// Create each component: 
const DogName = createDogName(document.querySelector('h1'));
const DogDetail = createDogDetail(document.querySelector('#dog-detail'));

// Roll-up display function that renders (calls with state) each component
function display() {
    DogName({ name: dog.name });
    DogDetail({ dog });
}

// Call display and page load!
handlePageLoad();
// No need to display until loaded!
// display();



