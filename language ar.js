let lang = {
  ar: {
    helpbird: "ساعد الطائر على الطيران وتفادي الأنابيب",
    helpmove: "ساعد على تحريك الصناديق ووضعهم في مكانهم الصحيح",
    howfly: "كيف تصنع لعبة العصفور الطائر في محرك غودوت",
    howmove: "كيف تصنع لعبة تحريك الصناديق في محرك غودوت",
    tdstudio: "TD أستوديو",
    moredetails: "المزيد من التفاصيل",
    playnow: "ألعبها الأن",
    movetheboxes: "تحريك الصناديق",
    flybird: "العصفور الطائر",
    copyright: "TD جميع الحقوق محفوظة لدى @ أستوديو",
    letsworktogether: "هيا نتحدث سوياً",
    games: "TD ألعاب",
    toutorial: "فيديوهات تعليمية",
    viewmygames: "رؤية ألعابي",
    info: "صانع ألعاب ,و مبرمج",
    logo: "TD أستوديو",
    welcometo: "أهلاً بكم في"
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