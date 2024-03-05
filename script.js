function calculate() {
    const checkboxes = document.querySelectorAll('input[name="option"]:checked');
    let total = 0;
    checkboxes.forEach(checkbox => {
        total += parseInt(checkbox.value);
    });
    document.getElementById('total').textContent = total;
}
