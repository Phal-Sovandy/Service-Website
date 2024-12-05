const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {
    navigation.classList.toggle('background', window.scrollY > 0);
});

