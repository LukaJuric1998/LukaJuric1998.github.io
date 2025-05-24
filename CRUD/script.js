var selectedRow = null;

// Ključ pod kojim spremamo podatke u localStorage
const STORAGE_KEY = "employees";

// Pri učitavanju stranice prikazujemo spremljene podatke
window.onload = function() {
    loadFromStorage();
};

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) {
            insertNewRecord(formData);
            saveToStorage(formData); // Dodaj novi zapis u localStorage
        }
        else {
            updateRecord(formData);
            updateStorage(formData); // Ažuriraj zapis u localStorage
        }
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    newRow.insertCell(0).innerHTML = data.fullName;
    newRow.insertCell(1).innerHTML = data.email;
    newRow.insertCell(2).innerHTML = data.salary;
    newRow.insertCell(3).innerHTML = data.city;
    newRow.insertCell(4).innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                                      <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        let row = td.parentElement.parentElement;
        let emailToDelete = row.cells[1].innerHTML; // Identifikator za brisanje iz storagea

        document.getElementById("employeeList").deleteRow(row.rowIndex);
        removeFromStorage(emailToDelete);
        resetForm();
    }
}

function validate() {
    let isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

// --- LocalStorage funkcije ---

// Učitava podatke iz localStorage i iscrtava tablicu
function loadFromStorage() {
    let employees = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    employees.forEach(emp => insertNewRecord(emp));
}

// Dodaje novi zaposlenik u localStorage
function saveToStorage(employee) {
    let employees = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    employees.push(employee);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}

// Ažurira postojeći zapis zaposlenika (koristimo email kao jedinstveni identifikator)
function updateStorage(updatedEmployee) {
    let employees = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    employees = employees.map(emp => {
        if (emp.email === selectedRow.cells[1].innerHTML) {
            return updatedEmployee;
        }
        return emp;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}

// Briše zaposlenika iz localStorage po emailu
function removeFromStorage(email) {
    let employees = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    employees = employees.filter(emp => emp.email !== email);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}
