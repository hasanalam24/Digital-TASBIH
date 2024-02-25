// SubhanAllah section
const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');

let valueOfCountSubhanAllah = 0;

const audioAdd = new Audio()
const audioMinus = new Audio()
const audioReset = new Audio()

const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn').addEventListener('click', function () {

    audioAdd.src = "audio/Increase.mp3"
    audioAdd.play()
    if (valueOfCountSubhanAllah === 33) {
        return alert('মাশাআল্লাহ আপনার ৩৩ বার পূর্ণ হয়ে গেছে')
    }

    valueOfCountSubhanAllah = valueOfCountSubhanAllah + 1;
    subhanAllahDisplay.innerText = valueOfCountSubhanAllah;

})

const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn').addEventListener('click', function () {

    audioMinus.src = "audio/Discrease.mp3"
    audioMinus.play()

    if (valueOfCountSubhanAllah === 0) {
        return alert('দু্ঃখিত আপনি শূণ্যের নিচে যেতে পারবেন না')
    }
    valueOfCountSubhanAllah = valueOfCountSubhanAllah - 1;
    subhanAllahDisplay.innerText = valueOfCountSubhanAllah
})

// Alhamdulillah Section

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');

let valueCountOfalhamdulillah = 0;

const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn').addEventListener('click', function () {
    audioAdd.src = "audio/Increase.mp3"
    audioAdd.play()

    if (valueCountOfalhamdulillah === 33) {
        return alert('মাশাআল্লাহ আপনার ৩৩ বার পূর্ণ হয়ে গেছে')
    }
    valueCountOfalhamdulillah += 1;
    alhamdulillahDisplay.innerText = valueCountOfalhamdulillah;
})

const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn').addEventListener('click', function () {

    audioMinus.src = "audio/Discrease.mp3"
    audioMinus.play()

    if (valueCountOfalhamdulillah === 0) {
        return alert('দু্ঃখিত আপনি শূণ্যের নিচে যেতে পারবেন না')
    }

    valueCountOfalhamdulillah -= 1;
    alhamdulillahDisplay.innerText = valueCountOfalhamdulillah;
})


// Allahu Akbar

const allahAkberDisplay = document.getElementById('allahAkberDisplay');

let valueCountOfAllahAkbar = 0;

const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn').addEventListener('click', function () {
    audioAdd.src = "audio/Increase.mp3"
    audioAdd.play()

    if (valueCountOfAllahAkbar === 34) {
        return alert('মাশাআল্লাহ আপনার ৩৪ বার পূর্ণ হয়ে গেছে')
    }

    valueCountOfAllahAkbar += 1;
    allahAkberDisplay.innerText = valueCountOfAllahAkbar;
})

const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn').addEventListener('click', function () {

    audioMinus.src = "audio/Discrease.mp3"
    audioMinus.play()

    if (valueCountOfAllahAkbar === 0) {
        return alert('দু্ঃখিত আপনি শূণ্যের নিচে যেতে পারবেন না')
    }

    valueCountOfAllahAkbar -= 1;
    allahAkberDisplay.innerText = valueCountOfAllahAkbar;
})


const resetBtn = document.getElementById('resetBtn').addEventListener('click', function () {

    audioReset.src = "audio/Reset.mp3"
    audioReset.play()

    valueCountOfAllahAkbar = 0;
    valueCountOfalhamdulillah = 0;
    valueOfCountSubhanAllah = 0;

    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;
})