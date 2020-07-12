let a;
let b;
let action;

enterNum();


function enterNum() {

    document.getElementById("btn_one").addEventListener("click", function() {
        document.getElementById("main_field").value += 1;
    });
    document.getElementById("btn_two").addEventListener("click", function() {
        document.getElementById("main_field").value += 2;
    });
    document.getElementById("btn_three").addEventListener("click", function() {
        document.getElementById("main_field").value += 3;
    });
    document.getElementById("btn_four").addEventListener("click", function() {
        document.getElementById("main_field").value += 4;
    });
    document.getElementById("btn_five").addEventListener("click", function() {
        document.getElementById("main_field").value += 5;
    });
    document.getElementById("btn_six").addEventListener("click", function() {
        document.getElementById("main_field").value += 6;
    });
    document.getElementById("btn_seven").addEventListener("click", function() {
        document.getElementById("main_field").value += 7;
    });
    document.getElementById("btn_eight").addEventListener("click", function() {
        document.getElementById("main_field").value += 8;
    });
    document.getElementById("btn_nine").addEventListener("click", function() {
        document.getElementById("main_field").value += 9;
    });
    document.getElementById("btn_zero").addEventListener("click", function() {
        document.getElementById("main_field").value += 0;
    });
    document.getElementById("btn_reset").addEventListener("click", function() {
        document.getElementById("main_field").value = "";
        document.getElementById("main_field").placeholder = "";
        a = 0;
        b = 0;
        action = null;
    });
    document.getElementById("btn_multiplication").addEventListener("click", function() {
        a = document.getElementById("main_field").value;
        action = "multiplication";
        document.getElementById("main_field").value = "";
        document.getElementById("main_field").placeholder = a + " *";
    });
    document.getElementById("btn_addition").addEventListener("click", function() {
        a = document.getElementById("main_field").value;
        action = "addition";
        document.getElementById("main_field").value = "";
        document.getElementById("main_field").placeholder =a + " +";
    });
    document.getElementById("btn_subtraction").addEventListener("click", function() {
        a = document.getElementById("main_field").value;
        action = "subtraction";
        document.getElementById("main_field").value = "";
        document.getElementById("main_field").placeholder = a + " -";
    });
    document.getElementById("btn_division").addEventListener("click", function() {
        a = document.getElementById("main_field").value;
        action = "division";
        document.getElementById("main_field").value = "";
        document.getElementById("main_field").placeholder = a + " /";
    });
    document.getElementById("btn_equals").addEventListener("click", function() {
        b = document.getElementById("main_field").value;
        document.getElementById("main_field").value = "";
        sendForm();
    });
}

function sendForm() {
    let form = document.createElement('form');

    form.action = '';
    form.method = 'GET';

    form.innerHTML = `<input name="a" value="${a}">`;
    form.innerHTML += `<input name="b" value ="${b}">`;
    form.innerHTML += `<input name="action" value ="${action}">`;

    // document.body.append(form);

    form.submit();
}
