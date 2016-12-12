$(function() {
  $(".request-form").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      usrPhoneNumber: "required",
      date:"required",
    },
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
      usrPhoneNumber: "Please provide a contact number",
      date: "Please specify a date for your service",
    },
  });

submitHandler: function(form){
form.submit();
}
});