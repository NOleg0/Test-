let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

function validateForms(selector, rules){
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form, values, ajax) {
            console.log(form);
        } 
    });
}

validateForms('.form',{ email: { required: true, email: true }, text: { required: true }, tel: { required: true } });