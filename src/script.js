document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('applyThemeButton').addEventListener('click', function() {
    var themeSelect = document.getElementById('theme');
    var selectedTheme = themeSelect.value;

    var headerElement = document.querySelector('header');
    headerElement.classList.remove('green-theme');

    if (selectedTheme === 'green') {
      headerElement.classList.add('green-theme');
    }
  });
});


