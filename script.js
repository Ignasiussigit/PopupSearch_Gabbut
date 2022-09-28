let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.container .image-container .image');

searchBox.oninput = () => {
    images.forEach(hide => hide.style.display = 'none');
    let value = searchBox.value;
    images.forEach(filter => {
        let title = filter.getAttribute('data-title');
        if (value == title) {
            filter.style.display = 'block';
        }
        if (searchBox.value == '') {
            filter.style.display = 'block';
        }
    })
};


document.querySelectorAll(".image-container img").forEach(images => {
    images.onclick = () => {
        document.querySelector(".popup-img").style.display = "block";
        document.querySelector(".popup-img img").src = images.getAttribute('src');
    }
});

document.querySelector("span").onclick = () => {
    document.querySelector(".popup-img").style.display = "none";
};


function myFunction() {
    var kj = document.getElementById('panel');
    if (kj.style.display === 'none') {
        kj.style.display = 'block';
    } else {
        kj.style.display = 'none';
    }
}


