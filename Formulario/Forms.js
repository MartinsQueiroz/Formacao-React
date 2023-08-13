
function submitForm() {
    e.preventDefault();

    showLoading();

    setTimeout(function() {
        hideLoading();
        displayResponse();
    }, 2000);
}

function showLoading() {
    document.querySelector(".loading").style.display = "block";
}

function hideLoading() {
    document.querySelector(".loading").style.display = "none";
}

function displayResponse() {
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let age = document.querySelector('input[name="age"]:checked').value;
    let interests = [];

    document.querySelectorAll('input[name="interests"]:checked').forEach(function(checkbox) {
        interests.push(checkbox.value);
    });

    let table = document.getElementById("responses").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.rows.length);
    let nameCell = newRow.insertCell(0);
    let genderCell = newRow.insertCell(1);
    let ageCell = newRow.insertCell(2);
    let interestsCell = newRow.insertCell(3);

    nameCell.innerHTML = name;
    genderCell.innerHTML = gender;
    ageCell.innerHTML = age;
    interestsCell.innerHTML = interests.join(", ");

    document.getElementById("myForm").reset
}

$(".button").click(function() {
    $(this).html("<img src='http://cdn-frm-us.wargaming.net/4.5/style_images/wg/ajax_loading.gif' />");
  });
