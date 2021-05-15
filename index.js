var c = document.getElementById('course');


function getValue(radio) {
    c.innerText = radio.value;
}


$(".program").change(function() {
    $(".program").prop('checked', false);
    $(this).prop('checked', true);
});


function empty() {
    var x;
    x = document.querySelector('input[name="program"]:checked');
    if (x == null) {
        alert("Select a Course!!");
        return false;
    };
}