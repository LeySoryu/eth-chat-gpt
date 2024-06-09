document.getElementById('copySolidityButton').addEventListener('click', function() {
    var solidityCode = document.querySelector('code.solidity');
    var range = document.createRange();
    range.selectNode(solidityCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Solidity code copied!');
});

// Adjusting the size and color of the "Copy Code" button
document.getElementById('copySolidityButton').style.backgroundColor = 'green';
document.getElementById('copySolidityButton').style.color = 'white';
document.getElementById('copySolidityButton').style.padding = '12px 24px';
document.getElementById('copySolidityButton').style.fontSize = '20px';
document.getElementById('copySolidityButton').style.border = 'none';
document.getElementById('copySolidityButton').style.borderRadius = '8px';
document.getElementById('copySolidityButton').style.cursor = 'pointer';

// Hover effect for the "Copy Code" button
document.getElementById('copySolidityButton').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'darkgreen';
});

document.getElementById('copySolidityButton').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'green';
});
