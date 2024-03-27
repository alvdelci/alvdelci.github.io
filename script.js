function addActiveClass(id) {
    console.log("na funcao");
    let lastElement = document.querySelector(".active");
    let element = document.getElementById(id);

    if (lastElement) {
        lastElement.classList.remove("active");
    }
    element.classList.add("active");
    element.scrollIntoView(true);

}