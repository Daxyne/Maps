/* User_saved Toggle Start */
function toggleFullPanel(panel) {
  const panels = document.querySelectorAll('.panel');
  panels.forEach((p) => p.classList.remove('active'));
  panel.classList.add('active');
}

function hideFullPanel(arrow) {
  const fullPanel = arrow.closest('.full-length-panel');
  fullPanel.classList.add('hide-animation');
  setTimeout(() => {
    fullPanel.parentElement.classList.remove('active');
    fullPanel.classList.remove('hide-animation');
  }, 300);
}
/* User_saved Toggle end */





/* DashboardSetting Checkbox Start */
var checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('click', function () {
    this.classList.toggle('checked');
  });
});
/* DashboardSetting Checkbox End */

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

    // Set the value for the first input
    document.getElementById('firstDropdownValue').value = selectedOptionText;
    console.log(selectedOptionText);
  });
});
/* addLocationProduct End */
// 
/* AddLocation Producr Dashboard */
function selectAllProducts() {
  const productRadios = document.getElementsByName("product");
  const selectAllRadio = document.getElementsByName("selectAll")[0];

  productRadios.forEach(function (radio) {
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



/* Profile_Location_Tabs Start */
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
/* Profile_Location_Tabs End */