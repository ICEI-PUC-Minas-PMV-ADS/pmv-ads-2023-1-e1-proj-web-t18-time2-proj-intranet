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


let fileInput = document.getElementById("fileInput");
let form1 = document.getElementById("form1");


form1.addEventListener('submit', (e) => {


  if (fileInput.value == "") {
    e.preventDefault(); 
    fileInput.click(); 
  }
});

