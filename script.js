/**Funcoes de acoes durante scroll */
let currentSection;

// Função para obter o retângulo de uma seção
function getBoundingClientRect(section) {
    return section.getBoundingClientRect();
}

// Função para verificar se a seção está visível na tela
function isSectionVisible(section) {
    const rect = getBoundingClientRect(section);
    const visibleHeight = rect.height * (rect.bottom / window.innerHeight);
    return visibleHeight >= window.innerHeight / 2;
}

// Função para adicionar a classe "current" à seção predominante
function addCurrentClassToPredominantSection() {
    if (currentSection) {
        const sumaryItem = document.getElementsByName(currentSection.id);
        sumaryItem[0].classList.remove("active");
        currentSection.classList.remove("current");
    }

    const sections = document.querySelectorAll(".section");

    for (const section of sections) {
        if (isSectionVisible(section)) {
            currentSection = section;
            break;
        }
    }

    if (currentSection) {
        const sumaryItem = document.getElementsByName(currentSection.id);
        sumaryItem[0].classList.add("active");
    }
}

// Adicionar evento de scroll à janela
window.addEventListener("scroll", addCurrentClassToPredominantSection);

// Chamar a função no carregamento da página
addCurrentClassToPredominantSection();