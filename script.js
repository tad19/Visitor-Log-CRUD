var selectedRow = null;

// On form submit
function onFormSubmit(e) {
    e.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

// Retrieve form data
function readFormData() {
    return {
        name: document.getElementById("name").value,
        city: document.getElementById("city").value,
        contactNum: document.getElementById("contactNum").value,
        purpose: document.getElementById("purpose").value
    };
}

// Insert new row
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    newRow.insertCell(0).innerHTML = data.name;
    newRow.insertCell(1).innerHTML = data.city;
    newRow.insertCell(2).innerHTML = data.contactNum;
    newRow.insertCell(3).innerHTML = data.purpose;

    // Actions cell
    var actionsCell = newRow.insertCell(4);
    actionsCell.innerHTML = `
        <button onclick="onEdit(this)">Edit</button> 
        <button onclick="onDelete(this)">Delete</button>
    `;
}

// Edit row
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("city").value = selectedRow.cells[1].innerHTML;
    document.getElementById("contactNum").value = selectedRow.cells[2].innerHTML;
    document.getElementById("purpose").value = selectedRow.cells[3].innerHTML;
}

// Update row
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.city;
    selectedRow.cells[2].innerHTML = formData.contactNum;
    selectedRow.cells[3].innerHTML = formData.purpose;
}

// Delete row
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        var row = td.parentElement.parentElement;
        row.parentElement.removeChild(row);
        resetForm();
    }
}

// Reset form
function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("city").value = '';
    document.getElementById("contactNum").value = '';
    document.getElementById("purpose").value = '';
    selectedRow = null;
}

// Clear entire table
function clearTable() {
    if (confirm("Do you want to clear the entire table?")) {
        var tableBody = document.getElementById("storeList").getElementsByTagName("tbody")[0];
        tableBody.innerHTML = "";
        resetForm();
    }
}
