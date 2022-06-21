

export default function createPetList(root) {

    return ({ dogs }) => {
        root.innerHTML = '';

        for (const dog of dogs) {
            const li = DogCard({ dog });
            root.append(li);
        }
    };
}

export function DogCard({ dog }) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    li.classList.add('dog-card');

    p.textContent = dog.name;
    img.src = `./assets/dogs/${dog.breed}.jpeg`;
    const params = new URLSearchParams();
    params.set('id', dog.id);
    a.href = `detail/?${params.toString()}`; // link to the dog detail passing the id as a query param

    a.append(p, img);

    li.append(a);

    return li;
}
