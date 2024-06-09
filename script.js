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
