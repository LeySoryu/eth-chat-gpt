document.getElementById('copyButton').addEventListener('click', function() {
    var copyText = document.getElementById('copyText');
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Text copied: ' + copyText.textContent);
});

// Menyesuaikan ukuran dan warna tombol "Copy"
document.getElementById('copyButton').style.backgroundColor = 'green';
document.getElementById('copyButton').style.color = 'white';
document.getElementById('copyButton').style.padding = '12px 24px';
document.getElementById('copyButton').style.fontSize = '20px';
document.getElementById('copyButton').style.border = 'none';
document.getElementById('copyButton').style.borderRadius = '8px';
document.getElementById('copyButton').style.cursor = 'pointer';

// Efek hover untuk tombol "Copy"
document.getElementById('copyButton').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'darkgreen';
});

document.getElementById('copyButton').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'green';
});
