// Фильтрация для блога

const filterBox = document.querySelectorAll('.box');

document.querySelector('.for-blog').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    
    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});

// onclick для блога
const tmdBtn = document.querySelectorAll(".rr");

tmdBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;

        tmdBtn.forEach(function(item) {
            item.classList.remove("active");
        });

        currentBtn.classList.add("active");
    });
});