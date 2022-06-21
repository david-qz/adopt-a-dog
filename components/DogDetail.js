

export default function createDogDetail(root) {
    const img = root.querySelector('img');
    const intro = root.querySelector('.intro');
    const description = root.querySelector('.description');

    return ({ dog }) => {
        // *** use the dog data to complete the following:
        img.src = ''; // get the image based on breed from folder ../assets/dogs/
        img.alt = ''; // use the dog's name as the alt
        // format a string like "Googoo is a 2 year old beagle":
        intro.textContent = '';
        description.textContent = ''; // dog description
    };
}
