// Dummy data for initial contacts
let contacts = [
    { name: "John Doe", phone: "1234567890", email: "john@example.com", address: "123 Main St" },
    // Add more contacts as needed
];

// Function to add a new contact
function addContact() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    contacts.push({ name, phone, email, address });
    updateContactList();
    clearForm();
}

// Function to update the contact list
function updateContactList() {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "";

    contacts.forEach(contact => {
        const li = document.createElement("li");
        li.textContent = `${contact.name} - ${contact.phone}`;
        li.onclick = () => showUpdateDeleteForm(contact);
        contactList.appendChild(li);
    });
}

// Function to clear the input form
function clearForm() {
    document.getElementById("addContactForm").reset();
}

// Function to search contacts by name or phone number
function searchContacts() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery) ||
        contact.phone.includes(searchQuery)
    );

    updateContactList(filteredContacts);
}

// Function to show the update/delete form and populate with selected contact details
function showUpdateDeleteForm(contact) {
    document.getElementById("updateDeleteForm").style.display = "block";
    document.getElementById("newPhone").value = contact.phone;
}

// Function to update contact details
function updateContact() {
    const newPhone = document.getElementById("newPhone").value;

    // Update the selected contact's phone number
    const selectedContact = contacts.find(contact => contact.phone === newPhone);
    if (selectedContact) {
        selectedContact.phone = newPhone;
        updateContactList();
        clearUpdateDeleteForm();
    }
}

// Function to delete a contact
function deleteContact() {
    const newPhone = document.getElementById("newPhone").value;

    // Delete the selected contact
    contacts = contacts.filter(contact => contact.phone !== newPhone);
    updateContactList();
    clearUpdateDeleteForm();
}

// Function to clear the update/delete form
function clearUpdateDeleteForm() {
    document.getElementById("updateDeleteForm").style.display = "none";
    document.getElementById("newPhone").value = "";
}

// Initial population of contact list
updateContactList();
