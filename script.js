
const messages = [
    "i get lost in your eyes every single time.",
    "i don’t know why, but your eyes feel like home to me.",
    "your eyes feel like the safest place i’ve ever known.",
    "have you ever noticed that your eyes speak more than words ever could?",
    "your eyes don’t need to say much, they already brighten up my life.",
    "i’m all in, lovvvve youuu so muchhh ! 💖"
];


let i = 0;

function nextPopup() {
    i++;
    if (i < messages.length) {
        document.getElementById("popupText").innerText = messages[i];
    } else {
        // Menyembunyikan popup dan menampilkan halaman pertanyaan
        document.getElementById("popup").classList.remove("active");
        document.getElementById("questionPage").classList.add("active");
    }
}

// Fungsi untuk memindahkan tombol "Tidak"
function moveNoBtn() {
    const btn = document.getElementById("noBtn");
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// Fungsi untuk melanjutkan ke halaman galeri
function goToGallery() {
    document.getElementById("questionPage").classList.remove("active");
    document.getElementById("galleryPage").classList.add("active");
}

    window.addEventListener("beforeunload", function () {
        var audio = document.getElementById('audio');
        if (audio) {
            audio.pause();
            audio.currentTime = 0; // Reset ke awal (opsional)
        }
    });

    window.addEventListener("unload", function () {
    var audio = document.getElementById('audio');
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
});

// const gallery = document.querySelector(".gallery");
// let currentIndex = 0;

// function autoSlide() {
//     const images = gallery.querySelectorAll("img");
//     const totalImages = images.length;

//     currentIndex++;

//     if (currentIndex >= totalImages) {
//         currentIndex = 0;
//     }

//     gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// let slideInterval = setInterval(autoSlide, 3000);

