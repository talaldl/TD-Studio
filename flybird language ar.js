let lang = {
  ar: {
    toutorial: "فيديوهات تعليمية",
    contact: "دعنا نتحدث سوياً",
    games: "TD ألعاب",
    copyright: "TD جميع الحقوق محفوظة لدى @ أستوديو",
    play: "itch.io العبها الأن على",
    ingodot: "هذه اللعبة على غودوت من",
    canwatch: "بإمكانك مشاهدة فيديو كيفية صنع",
    info: "ساعد الطائر على الطيران وتفادي الأنابيب",
    youtube: "هنا",
    flybird: "العصفور الطائر",
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