window.onload = function() {
    document.querySelectorAll('.bi.bi-envelope').forEach(function(button) {
        button.onclick = function(event) {
            event.preventDefault();
            if (button.classList.contains('bi-envelope')) {
                button.classList.remove('bi-envelope');
                button.classList.remove('bi-envelope-heart');
                button.classList.add('bi-envelope-check');
                button.style.color = '#98FB98';
            } else {
                button.classList.remove('bi-envelope-check');
                button.classList.remove('bi-envelope-heart');
                button.classList.add('bi-envelope');
                button.style.color = '#fff';
            }
        }
        button.ondblclick = function(event) {
            event.preventDefault();
            if (button.classList.contains('bi-envelope')) {
                button.classList.remove('bi-envelope');
                button.classList.add('bi-envelope-heart');
                button.style.color = '#FC46AA';}
            else if (button.classList.contains('bi-envelope-check')) {
                button.classList.remove('bi-envelope-check');
                button.classList.add('bi-envelope-heart');
                button.style.color = '#FC46AA';}
            else {
                button.classList.remove('bi-envelope-heart');
                button.classList.remove('bi-envelope-check');
                button.classList.add('bi-envelope');
                button.style.color = '#fff';
            }
        }
    });
}
