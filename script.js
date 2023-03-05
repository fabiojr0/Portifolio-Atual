var typed = new Typed(".auto-type", {
    strings: ["Back-end","Front-end","Full-Stack"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    loop: true
})

function colorChange(theme="cor") {
    var corFonte
    var corFundo
    if (theme == "dark") {
        corFonte = "#ffffff";
        corFundo = "#010718";
    }else if (theme == "white"){
        corFonte = "black";
        corFundo = "#ffffff";
    }else{
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
    hour.innerText = `${date.getHours()}:${date.getMinutes()}`
    day.innerText = `${verifyDate(date.getDate())}/${verifyDate(date.getMonth())}/${date.getFullYear()}`
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
    switch(tab) {
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


function copyToClipboard(txt,tab) {
    const email = document.querySelector('.cpEmail')
    const number = document.querySelector('.cpNumber')
    navigator.clipboard.writeText(txt);
    if(tab == "email") {
        email.style.display = 'inline'
        function tirarAlerta(){
            email.style.display = 'none'
        }
    }else {
        number.style.display = 'inline'
        function tirarAlerta(){
            number.style.display = 'none'
        }
    }
        
    setTimeout(tirarAlerta,4000)
  }


function showInfosProjects(projectIndex) {
    const infos = [
        {
            title: "Tela de login",
            description: "Validação de formulário atráves de JavaScript"
        },
        {
            title: "Jogo da Velha",
            description: "Feito com JavaScript, jogável com 2 pessoas"
        },
        {
            title: "Raposas animais fantásticos",
            description: "Site numa pegada mais front-end para treinar técnicas de design"
        },
        {
            title: "To-Do List",
            description: "C.R.U.D feito com JavaScript"
        },
        {
            title: "Calculadora",
            description: "Meu primeiro projeto JavaScript"
        },
        {
            title: "Cotação de moedas e busca por cep",
            description: "Consumo de APIs usando fetch {awesomeapi e viacep}"
        }
    ]
    const project = infos[projectIndex];
    const infosProjecs = document.querySelector(".infos-projetos");

    infosProjecs.innerHTML = `<h1>${project.title} - ${project.description}</h1>`
}

const navHref = document.querySelectorAll('nav a[href^="#"]');

navHref.forEach(item => {
  item.addEventListener('click',() => {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;

    window.scroll({
        top: section,
        behavior:"smooth",
    }); 
  });
})


