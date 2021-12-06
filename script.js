function openSlideMenu() {
    document.getElementById('friend-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';

}

function closeSlideMenu() {
    document.getElementById('friend-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';

}


let btnmikey = document.querySelector('#mikey-btn');
let btnleo = document.querySelector('#leo-btn');
let btnraph = document.querySelector('#raph-btn');
let btndonny = document.querySelector('#donny-btn');



let newphoto = document.querySelector('#new-photo');
let newfollowing = document.querySelector('#new-following');
let title = document.querySelector('#page-heading');





btnmikey.addEventListener('click', () => {
    title.innerHTML = '@Michaelangelo';
    newphoto.innerHTML = 'Michaelangelo uploaded a new photo.';
    newfollowing.innerHTML = 'Michaelangelo was followed by April.';
    closeSlideMenu()
});
btnleo.addEventListener('click', () => {
    title.innerHTML = '@Leonardo';

    newphoto.innerHTML = 'Leonardo uploaded a new photo.';
    newfollowing.innerHTML = 'Leonardo was followed by April.';
    closeSlideMenu()
});
btnraph.addEventListener('click', () => {
    title.innerHTML = '@Raphael';

    newphoto.innerHTML = 'Raphael uploaded a new photo.';
    newfollowing.innerHTML = 'Raphael was followed by April.';
    closeSlideMenu()

});
btndonny.addEventListener('click', () => {
    title.innerHTML = '@Donatello';

    newphoto.innerHTML = 'Donatello uploaded a new photo.';
    newfollowing.innerHTML = 'Donatello was followed by April.';
    closeSlideMenu()
});


// new post

var typingTimer;
var doneTypingInterval = 10;
var finaldoneTypingInterval = 2000;

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};

var today = new Date();
var m = today.getMonth();
var d = today.getDate();

m = checkTime(m);
d = checkTime(d);

$('.content, .title').keydown(function() {
    clearTimeout(typingTimer);
    if ($('.content, .title').val) {
        typingTimer = setTimeout(function() {
            $(".rest").removeClass('active');
            $(".notes-dot").removeClass('saved');
        }, doneTypingInterval);
    }
});

$('.content, .title').keyup(function() {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(function() {
        $('.rest').addClass('active');
        $('.notes-dot').addClass('saved');
        $('.comment').html('Last updated by you on ' + d + '/' + m + '')
    }, finaldoneTypingInterval);
});

function previewFile() {
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        reader.result;
        console.log(reader.result)
        $('.content').append('<img src="' + reader.result + '" />');
    }

    if (file) {
        reader.readAsDataURL(file);
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function() {
            $('.rest').addClass('active');
            $('.notes-dot').addClass('saved');
            $('.comment').html('Last updated by you on ' + d + '/' + m + '')
        }, finaldoneTypingInterval);
    } else {}
}

document.onpaste = function(event) {
    var items = (event.clipboardData || event.originalEvent.clipboardData).items;
    console.log(JSON.stringify(items)); // will give you the mime types
    for (index in items) {
        var item = items[index];
        if (item.kind === 'file') {
            var blob = item.getAsFile();
            var reader = new FileReader();
            reader.onload = function(event) {
                console.log(event.target.result); // data url!
                $('.content').append('<img src="' + event.target.result + '" />');
                $('.comment').html('Last updated by you on ' + d + '/' + m + '')
            };
            reader.readAsDataURL(blob);
        }
    }
}




// like button
function myFunction(x) {
    x.classList.toggle("fa-heart-o");
}
