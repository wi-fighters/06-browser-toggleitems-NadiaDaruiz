(() => {

    // I want to switch back and forward between two elements: btn 
    // At the same time  the list will show or hide, updating the message on the btn. 

    const destinationList = document.querySelector('ul');
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', showList)

    function showList() {
        destinationList.classList.toggle('hide')
        btn.textContent = destinationList.classList.contains('hide') ? 'Show Destinations' : 'Hide Destinations';
    }


    // I want to create a box that show a selected item from the list. 
    // For that, I must create a new element that updates every time the selected items change.
    // I must remove the previously selected item.

    // The event will happen in the li.


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
