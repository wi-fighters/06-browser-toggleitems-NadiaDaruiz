(() => {
    // Show and Hide destination list.

    const destinationList = document.querySelector('ul');
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', showList)

    function showList() {
        destinationList.classList.toggle('hide')
        btn.textContent = destinationList.classList.contains('hide') ? 'Show Destinations' : 'Hide Destinations';
    }

    //Show selected destination and update the city everytime click

    const destinations = [...document.querySelectorAll('.destination__items')];
    const destinationBox = document.querySelector('.selection__box');
    destinationBox.style.display = 'none';

    function showDestination(e) {

        destinationBox.innerHTML = 'You selected' + ' ' + e.target.innerHTML;
        const selectedItem = document.querySelector('.selected');

        selectedItem.classList.remove('selected')
        e.target.classList.add('selected')

        destinationBox.style.display = 'block'
        console.log(destinationBox);

    }

    destinations.forEach(destination => {
        destination.addEventListener('click', showDestination);

    })

})()
