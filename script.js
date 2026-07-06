const loveQuotes = [
"Love is shown through actions, not words.",
"True love begins with respect.",
"Love grows when you care every day.",
"A kind heart is the language of love.",
"Real love never demands perfection."
];

const successQuotes = [
"Success comes to those who never quit.",
"Discipline beats motivation.",
"Stay focused and trust the process.",
"Hard work always pays off.",
"Dream big and work bigger."
];

const lifeQuotes = [
"Life rewards those who stay consistent.",
"Every day is a new beginning.",
"Small steps create big changes.",
"Life becomes better when you grow.",
"Be grateful for today."
];

const motivationQuotes = [
"Small steps every day lead to big results.",
"Push yourself beyond your limits.",
"Believe in your potential.",
"Consistency wins every time.",
"Your future starts today."
];
let allQuotes = []; window.addEventListener("load", function () { allQuotes = window.quotes || []; });
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultQuote = document.getElementById("resultQuote");

searchBtn.addEventListener("click", function () {
resultQuote.innerText = "Button Click Working!";
    const text = searchInput.value.trim().toLowerCase();
    if (text === "love") {
    const random = Math.floor(Math.random() * loveQuotes.length);
    resultQuote.innerText = "❤️ " + loveQuotes[random];
}
    
else if (text === "success") {
    const random = Math.floor(Math.random() * successQuotes.length);
    resultQuote.innerText = "🏆 " + successQuotes[random];
}
   else if (text === "life") {
    const random = Math.floor(Math.random() * lifeQuotes.length);
    resultQuote.innerText = "🌍 " + lifeQuotes[random];
} 
  
   else if (text === "motivation") {
    const random = Math.floor(Math.random() * motivationQuotes.length);
    resultQuote.innerText = "🔥 " + motivationQuotes[random];
}
else {
    resultQuote.innerText = "❌ No quotes found.";
}

});

searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});
const loveBtn = document.getElementById("loveBtn");
const motivationBtn = document.getElementById("motivationBtn");
const successBtn = document.getElementById("successBtn");
const lifeBtn = document.getElementById("lifeBtn");

loveBtn.onclick = function () {
    searchInput.value = "love";
    searchBtn.click();
};

motivationBtn.onclick = function () {
    searchInput.value = "motivation";
    searchBtn.click();
};

successBtn.onclick = function () {
    searchInput.value = "success";
    searchBtn.click();
};

lifeBtn.onclick = function () {
    searchInput.value = "life";
    searchBtn.click();
};
const randomBtn = document.getElementById("randomBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");
const showFavoriteBtn = document.getElementById("showFavoriteBtn");
const themeBtn = document.getElementById("themeBtn");
randomBtn.addEventListener("click", function () {

    const random = Math.floor(Math.random() * allQuotes.length);

    resultQuote.innerText = "✨ " + allQuotes[random];

});
favoriteBtn.addEventListener("click", function () {

    localStorage.setItem("favoriteQuote", resultQuote.innerText);

    alert("❤️ Quote Saved!");

});

copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(resultQuote.innerText);
    alert("📋 Quote Copied!");
});
function showCategory(category){

    if(category==="love"){
        resultQuote.innerText="❤️ Love is shown through actions, not words.";
    }

    else if(category==="success"){
        resultQuote.innerText="🏆 Success comes to those who never quit.";
    }

    else if(category==="life"){
        resultQuote.innerText="🌍 Life rewards those who stay consistent.";
    }

    else if(category==="motivation"){
        resultQuote.innerText="🔥 Small steps every day lead to big results.";
    }

    else if(category==="discipline"){
        resultQuote.innerText="🔥 Discipline beats motivation.";
    }

    else if(category==="dreams"){
        resultQuote.innerText="✨ Dream big. Start small. Stay consistent.";
    }

}
shareBtn.addEventListener("click", function () {

    if (navigator.share) {
        navigator.share({
            title: "QuoteNova",
            text: resultQuote.innerText
        });
    } else {
        alert("Sharing is not supported on this device.");
    }

});
showFavoriteBtn.addEventListener("click", function () {

    const fav = localStorage.getItem("favoriteQuote");

    if (fav) {
        resultQuote.innerText = fav;
    } else {
        alert("❌ No Favorite Saved!");
    }

});
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerText = "🌙 Dark Mode";
    }else{
        themeBtn.innerText = "☀️ Light Mode";
    }

});
