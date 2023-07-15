/* Search Filter Start */
// function toggleDropdown(inputType) {
//     var dropdown = document.getElementById('dropdown-container');
//     dropdown.style.maxHeight = dropdown.style.maxHeight === '0px' ? '200px' : '0px';
//     dropdown.style.padding = '0.5rem';

//     if (dropdown.style.maxHeight === '200px') {
//         var suggestedOptions = generateRandomOptions(3); // Generate 3 random options
//         var dropdownContent = document.getElementById('dropdown-container');
//         dropdownContent.innerHTML = suggestedOptions;
//     }
// }

// function generateRandomOptions(count) {
//     var options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']; // Example options
//     var randomOptions = [];

//     for (var i = 0; i < count; i++) {
//         var randomIndex = Math.floor(Math.random() * options.length);
//         randomOptions.push(options[randomIndex]);
//         options.splice(randomIndex, 1);
//     }

//     var optionsHtml = randomOptions.map(function (option) {
//         return `<p>${option}</p>`;
//     }).join('');

//     return optionsHtml;
// }

// function search() {
//     var business = document.getElementById('search-business').value;
//     var location = document.getElementById('search-location').value;
//     var nearby = document.getElementById('nearby-options').value;

// Perform search logic and display results
// You can use AJAX or fetch to send the search parameters to the server and receive the results
// For simplicity, let's just display the search parameters as an example
//     document.getElementById('search-results').innerHTML = `
//       <p>Search by business: ${business}</p>
//       <p>Search by location: ${location}</p>
//       <p>What's Nearby: ${nearby}</p>
//     `;
// }
/* Search Filter End */
/* addLocationProduct Start */
// function addLocationProducttoggleDropdown() {
//   var dropdownToggle = document.querySelector('.addLocationProduct-toggle');
//   dropdownToggle.classList.toggle('open');
// }
function addLocationProducttoggleDropdown() {
  var dropdownToggle = document.querySelector('.addLocationProduct-toggle');
  dropdownToggle.classList.toggle('open');
}

var dropdownOptions = document.querySelectorAll('.addLocationProduct-option');

dropdownOptions.forEach(function (option) {
  option.addEventListener('click', function () {
    var selectedOptionText = option.textContent;
    var dropdownToggle = document.querySelector('.addLocationProduct-toggle');
    dropdownToggle.textContent = selectedOptionText;
    dropdownToggle.classList.remove('open');
    dropdownToggle.insertAdjacentHTML('beforeend', '<span class="addLocationProduct-arrow"></span>');
  });
});
/* addLocationProduct End */
// 
/* AddLocation Producr Dashboard */
function selectAllProducts() {
  const productRadios = document.getElementsByName("product");
  const selectAllRadio = document.getElementsByName("selectAll")[0];
  
  productRadios.forEach(function(radio) {
    radio.checked = selectAllRadio.checked;
  });
}

function editRow(button) {
  const row = button.closest("tr");
  const dataFields = row.getElementsByClassName("data");
  const editFields = row.getElementsByClassName("edit-field");
  const editButton = row.getElementsByClassName("edit-button")[0];
  const saveButton = row.getElementsByClassName("save-button")[0];

  for (let i = 0; i < dataFields.length; i++) {
    dataFields[i].style.display = "none";
    editFields[i].style.display = "inline-block";
    editFields[i].value = dataFields[i].textContent;
  }
  
  editButton.style.display = "none";
  saveButton.style.display = "inline-block";
}

function saveRow(button) {
  const row = button.closest("tr");
  const dataFields = row.getElementsByClassName("data");
  const editFields = row.getElementsByClassName("edit-field");
  const editButton = row.getElementsByClassName("edit-button")[0];
  const saveButton = row.getElementsByClassName("save-button")[0];

  for (let i = 0; i < dataFields.length; i++) {
    dataFields[i].textContent = editFields[i].value;
    dataFields[i].style.display = "inline-block";
    editFields[i].style.display = "none";
  }
  
  editButton.style.display = "inline-block";
  saveButton.style.display = "none";
}

function removeProduct(button) {
  const row = button.closest("tr");
  row.parentNode.removeChild(row);
}
/* AddLocation Producr Dashboard End */


/* Login Start */
const loginButton = document.getElementById("loginButton");
const container = document.getElementById("container");
const loginCross = document.querySelector(".login-cross");

loginButton.addEventListener("click", () => {
  container.classList.remove("hidden");
  container.classList.add("visible");
  setTimeout(() => {
    container.classList.add("container-animation");
  }, 10);
});
container.addEventListener("click", (event) => {
  if (event.target === container) {
    container.classList.remove("container-animation");
    setTimeout(() => {
      container.classList.remove("visible");
      container.classList.add("hidden");
    }, 300);
  }
});

loginCross.addEventListener("click", (event) => {
  if (event.target === loginCross) {
    container.classList.remove("container-animation");
    setTimeout(() => {
      container.classList.remove("visible");
      container.classList.add("hidden");
    }, 300);
  }
});
/* Login End */

