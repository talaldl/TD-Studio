let lang = {
  en: {
    logo: "TD Studio",
    welcometo: "Welcome to"
  },
}




let selector = document.getElementById('languageselector');
selector.onchange = updateLanguage();

function updateLanguage() {
  let language = selector.options[selector.selectedIndex].value;
  let nodes = document.querySelectorAll('[data-lang]');
  
  let i = nodes.length;
  
  while(i--) {
    let key = nodes[i].getAttribute('data-lang');
    nodes[i].innerHTML = lang[language][key];
  }
}