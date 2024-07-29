document.getElementById('email-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    // Send email to backend (to be implemented)
    alert(`Email ${email} has been submitted!`);
    document.getElementById('email').value = '';
});
