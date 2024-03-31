document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('search-icon').addEventListener('click', function () {
        var searchBar = document.getElementById('search-bar');
        searchBar.style.display = (searchBar.style.display === 'none') ? 'block' : 'none';
    });
});
