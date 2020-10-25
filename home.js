const ul = document.querySelector('.navbar-links ul')[0];

var img = document.querySelector('.toggle-button')


img.addEventListener('click', function(){
       document.querySelector('#ul').classList.toggle("active");
})

var clickCount = 1;

document.querySelector('body').addEventListener('click', function(){
    clickCount++;
    if ( clickCount%2 != 0) {

            if (document.querySelector('#ul').classList == 'active') {
                document.querySelector('#ul').classList.remove('active');
            }
    }
})
