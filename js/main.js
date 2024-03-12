const form = document.getElementById('contact-form');
let phoneNumber = document.getElementById('phone-number');
let nameContact = document.getElementById('name');
let tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];

function formatPhoneNumber(number){
    return number.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1)$2-$3');
}

phoneNumber.addEventListener('keyup',function(e){
    let number = phoneNumber.value.replace(/\D/g, '');
    let formattedNumber = formatPhoneNumber(number);
    phoneNumber.value = formattedNumber;
})

form.addEventListener('submit',function(e){
    e.preventDefault();
    let tableNewRow = tableBody.insertRow();
    let nameNewCell = tableNewRow.insertCell();
    let phoneNumberNewCell = tableNewRow.insertCell();
    let linkNewCell = tableNewRow.insertCell();
    let link = document.createElement('a');
    link.target = "_blank";
    link.href = "https://api.whatsapp.com/send?phone=".concat(phoneNumber.value.replace(/\D/g, ''));
    let linkIcon = document.createElement('img');
    linkIcon.src = "./img/whatsapp.png";
    link.appendChild(linkIcon);
    linkNewCell.appendChild(link);
    nameNewCell.textContent = nameContact.value;
    phoneNumberNewCell.textContent = phoneNumber.value;
})
