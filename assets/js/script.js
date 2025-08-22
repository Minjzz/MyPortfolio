
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".navbar-toggle");
    const navLinks = document.querySelector(".navbar ul");

    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        toggle.classList.toggle("active");
    });
});


const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal_container.classList.remove('show');
    }
});

function openModal(projectId) {
    const modal = document.getElementById(`${projectId}-modal`);
    modal.style.display = 'flex';

    const images = document.querySelectorAll(`#${projectId}-modal .carousel-img`);
    images[0].classList.add('active');
}

function closeModal(projectId) {
    const modal = document.getElementById(`${projectId}-modal`);
    modal.style.display = 'none';
}

function changeImage(projectId, direction) {
    const images = document.querySelectorAll(`#${projectId}-modal .carousel-img`);
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[currentIndex].classList.remove('active');

    let nextIndex = (currentIndex + direction + images.length) % images.length;

    images[nextIndex].classList.add('active');
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal-container')) {
        const modals = document.querySelectorAll('.modal-container');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    }
}

function showImage(project, idx) {
    const modal = document.getElementById(`${project}-modal`);
    const imgs = modal.querySelectorAll('.carousel-img');
    const thumbs = modal.querySelectorAll('.carousel-thumbnails img');
    imgs.forEach((img, i) => img.classList.toggle('active', i === idx));
    thumbs.forEach((thumb, i) => thumb.classList.toggle('active', i === idx));
}

function openModal(project) {
    const modal = document.getElementById(`${project}-modal`);
    modal.style.display = 'flex';
    showImage(project, 0);
}

function closeModal(project) {
    const modal = document.getElementById(`${project}-modal`);
    modal.style.display = 'none';
}

function changeImage(project, dir) {
    const modal = document.getElementById(`${project}-modal`);
    const imgs = modal.querySelectorAll('.carousel-img');
    let idx = Array.from(imgs).findIndex(img => img.classList.contains('active'));
    idx = (idx + dir + imgs.length) % imgs.length;
    showImage(project, idx);
}