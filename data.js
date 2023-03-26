fetch("Data/list.json").then(res => res.json());
// .then(data => console.log(JSON.stringify(data.avis)));

//-------------
fetch("Data/list.json").then(res => res.json());
// .then(data => console.log(JSON.stringify(data.pieces)));

// const title = document.getElementById("displayTitre");
fetch("Data/pieces.json")
    .then(res => res.json())
    // .then(data => console.log((data[3].titre)));
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            // const element = data[i];
            console.log(data[i].titre);
            console.log(data[i].definition);
        }
    });

//
const liste = document.getElementById("lexique");
fetch("Data/pieces.json")
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            //
            let newDivMot = document.createElement("div");
            newDivMot.classList.add("mot");
            //
            let newDivTitre = document.createElement("div");
            newDivTitre.classList.add("titre");
            //
            let newDivAction = document.createElement("div");
            newDivAction.classList.add("action");
            //
            let newDivDown = document.createElement("div");
            newDivDown.classList.add("down");
            newDivDown.innerHTML = `&#9660;`;
            //
            let newDivUp = document.createElement("div");
            newDivUp.classList.add("up");
            newDivUp.innerHTML = "&#9650;";
            //
            let newDivDefinition = document.createElement("div");
            newDivDefinition.classList.add("definition");
            //
            let newH2 = document.createElement("h2");
            let newP = document.createElement("p");
            //
            newH2.innerText = element.titre;
            newP.innerText = data[i].definition;
            //
            liste.appendChild(newDivMot);
            newDivMot.appendChild(newDivTitre);
            newDivTitre.appendChild(newH2);
            newDivTitre.appendChild(newDivAction);
            newDivAction.appendChild(newDivDown);
            newDivAction.appendChild(newDivUp);
            newDivMot.appendChild(newDivDefinition);
            newDivDefinition.appendChild(newP);
        }
    });

//*****************
// FONCTIONNE - affiché sur page index.html
const nom = document.getElementById("displayName");
fetch("Data/data.json")
    .then(res => res.json())
    // .then(data => console.log(data.name))
    .then(data => {
        nom.innerText = data.name;
    });

// FONCTIONNE - affiché sur page index.html
const myImage = document.querySelector("img");
fetch("img/flowers.jpg")
    .then(function (response) {
        return response.blob();
    })
    .then(function (myBlob) {
        const objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
    });
