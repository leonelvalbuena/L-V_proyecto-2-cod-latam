const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const currenItem = document.querySelector('.active');
        currenItem.classList.remove('active');
        e.target.classList.add('active');
    });
});

const changeFontBtn = document.querySelector('#change-font');
changeFontBtn.addEventListener('click',function(){
    document.body.classList.toggle('change-font')
}
)