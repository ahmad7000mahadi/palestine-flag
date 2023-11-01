const palestineNotes = document.querySelector('.js-read-me');
const popup = document.getElementById('popup');

function showReadMe() {
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = `I whipped up this project with love to back up my Muslim fam in Palestine. Trust, it might not be much, but believe me, my heart, thoughts, and prayers are all riding with you.<br><br>
    Ahmad Mahadi`;

    popup.style.display = 'block';
    setTimeout(function() {
        popup.classList.add('show-popup');
    }, 10);
}

function closePopup() {
    popup.classList.remove('show-popup');
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3); // Adjust the time to match the animation duration
}
