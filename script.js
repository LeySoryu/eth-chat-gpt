<script>
    function copyCode() {
        var codeBlock = document.getElementById("codeBlock");
        var range = document.createRange();
        range.selectNode(codeBlock);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        alert("Code copied!");
    }
</script>
