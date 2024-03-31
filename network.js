window.onload = function() {
    document.querySelectorAll('.bi.bi-bookmark').forEach(function(button) {
        button.onclick = function(event) {
            event.preventDefault();
            if (button.classList.contains('bi-bookmark')) {
                button.classList.remove('bi-bookmark');
                button.classList.add('bi-bookmark-fill');
                button.style.color = 'orange';
                button.parentNode.parentNode.parentNode.style.borderColor ='orange';
            } else {
                button.classList.remove('bi-bookmark-fill');
                button.classList.add('bi-bookmark');
                button.style.color = '#fff';
                button.parentNode.parentNode.parentNode.style.borderColor ='#fff';
            }
        }
    });
}