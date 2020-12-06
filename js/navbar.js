const burger = document.querySelector('nav .fas');
const navigation = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    

    navigation.style['display'] = (navigation.style['display'] == 'flex') ? 'none' : 'flex';
});

window.addEventListener('resize', () => {
    navigation.style['display'] = (window.innerWidth > 1200) ? 'flex' : 'none';
});