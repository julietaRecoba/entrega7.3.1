function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
document.addEventListener("DOMContentLoaded", function() {
    const regBtn = document.getElementById("regBtn");
    
    regBtn.addEventListener("click", function() {
        const password1 = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;

       

        if (password1.length < 6) {
            showAlertError();
            return;
        }

        if (password1 !== password2) {
            showAlertError();
            return;
        }

        const terminosCheckbox = document.getElementById("terminos");
        if (!terminosCheckbox.checked) {
            showAlertError();
            return;
        }
        showAlertSuccess();
    });
});