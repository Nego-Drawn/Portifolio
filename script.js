/* Alternar a visibilidade dos links de navegação */
const contactName = "Contatos";
function toggleVisibilidade() {
 var Links= document.getElementById("links");
 if (Links.style.visibility === 'hidden') {
   Links.style.visibility = 'visible';
 } else {
   Links.style.visibility = 'hidden';
 }
}
/* Alternar o fundo da página e a cor do texto */
function toggleback() {
  // Array com todos os elementos e suas classes
  const elementsToToggle = [
    { selector: "html", class: "changeback" },        // Tag <html>
    { selector: "h2", class: "textAlt" },             // Tag <h2>
    { selector: "p", class: "textAlt" },              // Tag <p>
    { selector: ".proficiency", class: "textAlt" },   // Classe .proficiency (ponto = class)
    { selector: "header", class: "HeaderAlt" },       // Tag <header>
    { selector: ".Photo", class: "PhotoAlt" },        // Classe .Photo
    { selector: ".biography", class: "biographyAlt" }, // Classe .biography
    { selector: ".portifolio", class: "portifolioAlt" }, // Classe .portifolio
    { selector: ".linksContainer", class: "LinksAlt" } // Classe .linksContainer
  ];

  // Para cada item no array
  elementsToToggle.forEach(({ selector, class: className }) => {
    // querySelector busca o elemento usando o selector
    // Exemplo: querySelector(".Photo") encontra <div class="Photo">
    const element = document.querySelector(selector);
    
    // if verifica se achou o elemento antes de usar
    // Evita erro se o elemento não existir no HTML
    if (element) {
      // classList.toggle adiciona a classe se não tiver, remove se tiver
      element.classList.toggle(className);
    }
  });
}
