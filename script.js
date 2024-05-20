function calculate() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const result = parseFloat(input1) + parseFloat(input2);

    if (!isNaN(result)) {
        document.getElementById('result').innerText = Result: ${result};
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    }
}