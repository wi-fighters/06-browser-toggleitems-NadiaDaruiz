(() => {

    const destinationList = document.querySelector('ul');

    const buttons = [...document.querySelectorAll('.destinations__buttons')];
    console.log(buttons);

    buttons.forEach(btn => {
        btn.addEventListener('click', showList)

    })

    function showList() {

        destinationList.classList.toggle('btn--hide');


    }




})()
