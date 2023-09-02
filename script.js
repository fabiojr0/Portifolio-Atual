var typed = new Typed(".auto-type", {
  strings: ["Back-end", "Front-end", "Full-Stack"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  loop: true
})

function colorChange(theme = "cor") {
  var corFonte
  var corFundo
  var nav = document.querySelector("nav")
  if (theme == "dark") {
    corFonte = "#ffffff";
    corFundo = "#010718";
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.048)";
  } else if (theme == "white") {
    corFonte = "#8200FF";
    corFundo = "#ffffff";
    nav.style.backgroundColor = "rgba(255, 255, 255, .5)";
  } else {
    corFonte = document.querySelector("#style1").value;
    corFundo = document.querySelector("#style2").value;
  }
  document.body.style.setProperty('--fonte', corFonte);
  document.body.style.setProperty('--fundo', corFundo);
}


function windowsDate() {
  const hour = document.querySelector(".hour");
  const day = document.querySelector(".day");

  const date = new Date();
  hour.innerText = `${date.getHours()}:${verifyDate(date.getMinutes())}`
  day.innerText = `${verifyDate(date.getDate())}/${verifyDate(date.getMonth() + 1)}/${date.getFullYear()}`
}
function verifyDate(date) {
  if (date < 10) return `0${date}`
  else return date
}
setInterval(windowsDate, 1000)
windowsDate()


function tab(tab, type) {
  const tabWhatsapp = document.querySelector(".whatsapp")
  const tabGmail = document.querySelector(".gmail")
  const tabNote = document.querySelector(".note")
  const tabEdge = document.querySelector(".edge")
  switch (tab) {
    case "whatsapp":
      tabWhatsapp.style.display = type
      break;
    case "gmail":
      tabGmail.style.display = type
      break;
    case "note":
      tabNote.style.display = type
      break;
    case "edge":
      tabEdge.style.display = type
      break;
  }
}


function copyToClipboard(txt, tab) {
  const email = document.querySelector('.emailCopy')
  const number = document.querySelector('.numberCopy')
  navigator.clipboard.writeText(txt);
  if (tab == "email") {
    email.innerText = 'Copiado!'
    function tirarAlerta() {
      email.innerText = 'Copiar email'
    }
  } else {
    number.innerText = 'Copiado!'
    function tirarAlerta() {
      number.innerText = 'Copiar número'
    }
  }

  setTimeout(tirarAlerta, 4000)
}


function showInfosProjects(projectIndex) {
  const infos = [
    {
      title: "Pipocando Filmes",
      description: "Projeto React - Tailwind , consumindo APIs de filme da OMDB e TMDB."
    },
    {
      title: "Flor do Dia",
      description: "Projeto feito como trabalho para a faculdade, ideia foi fazer o front-end de uma floricultura fictícia."
    },
    {
      title: "Marvelous",
      description: "Projeto Tailwind, consumindo API da Marvel."
    },
    {
      title: "Delícias da carne exótica",
      description: "Uma releitura do site <a href='https://deliciasdacarn8.wixsite.com/meusite' target='_blank'>Delícias da carne exótica</a> feito para um trabalho da faculdade."
    }
  ]
  const project = infos[projectIndex];
  const infosProjecs = document.querySelector(".infos-projetos");

  infosProjecs.innerHTML = `<h1>${project.title} - ${project.description}</h1>`
}

const navHref = document.querySelectorAll('nav a[href^="#"]');

navHref.forEach(item => {
  item.addEventListener('click', () => {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;

    window.scroll({
      top: section,
      behavior: "smooth",
    });
  });
})


