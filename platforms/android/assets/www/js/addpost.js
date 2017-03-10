
function DemoTextFieldController()
{
    var vm = this;

    vm.emailValidation = emailValidation;

    function emailValidation(_email)
    {
        return /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/.test(_email);
    }
}