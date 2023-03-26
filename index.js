//
const mots = document.querySelectorAll("#lexique .mot");
mots.forEach(mot => {
    mot.addEventListener("click", e => {
        console.log("click");
        if (!mot.classList.contains("open")) {
            mots.forEach(m => {
                m.classList.remove("open");
            });
            mot.classList.add("open");
        } else mot.classList.remove("open");
    });
});
//
const titi = document.querySelector(".mot");
titi.addEventListener("click", e => {
    console.log("click ici");
});
