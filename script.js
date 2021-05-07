const videotypeDiv = document.querySelector(".video-type-div");
const totalWallet = document.querySelector(".total-wallet");
const totalViews = document.querySelector(".total-views");
const dayText = document.querySelector(".day-text");
const dayWallet = document.querySelector(".day-wallet");


let wallet = 0;
let bgbm = 0;
let day = 0;
let dailyInCome = 0.09;
let dailyWallet




function setProduct(){
    if(bgbm > 0){
        day++;
        dailyWallet = bgbm*dailyInCome;
        wallet += dailyWallet;
        totalWallet.textContent = wallet.toFixed(2) + " $";
        dayWallet.textContent =  "Günde: " + dailyWallet.toFixed(2) + " $";
        dayText.textContent = "Gün " + day;
    }else{
        alert("Video Türü Seçmeden Yükleme Yapamazsınız!");
    }
    
}

function setVideo(event){
    let getValue = event.target.parentElement.parentElement.children[0].value;
    let getBgbm = event.target.value;

    if(getValue <= 0){
        alert("Lütfen geçerli bir değer girin");
    }else{
        bgbm += getValue*getBgbm;
        totalBgbm.textContent = bgbm + " views";
    }
}

