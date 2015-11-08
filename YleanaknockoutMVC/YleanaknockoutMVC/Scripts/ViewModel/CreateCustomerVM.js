var CustomerInformationSystem = {};
//CustomerView Model with the validation Rules
CustomerInformationSystem.CustomerViewModel = function (cus) {
    var CustomerInfoModel = ko.validatedObservable({
        CustomerName: ko.observable(cus.CustomerName).extend({ required: true, minLength: 2, maxLength: 50 }),
        ContactName: ko.observable(cus.ContactName).extend({ required: true, minLength: 2, maxLength: 50 }),
        Address: ko.observable(cus.Address).extend({ required: true, minLength: 5, maxLength: 70 }),
        City: ko.observable(cus.City).extend({ required: true, minLength: 2, maxLength: 20 }),
        PostalCode: ko.observable(cus.PostalCode).extend({ required: true, minLength: 2, maxLength: 10 }),
        Country: ko.observable(cus.Country).extend({ required: true, minLength: 2, maxLength: 50 })
    });

    return CustomerInfoModel;
};


// Bind the customerInfo
CustomerInformationSystem.bindModel = function (cus) {

    // Create the view model
    CustomerInformationSystem.CusViewModel =  CustomerInformationSystem.CustomerViewModel(cus);

    // Validation initialization
    ko.validation.init({ messagesOnModified: false, errorClass: 'errormsg', insertMessages: true });
    ko.applyBindings(this.CusViewModel);
};
//Save the Information
CustomerInformationSystem.SaveCustomer = function () {
    if (CustomerInformationSystem.CusViewModel.isValid()) {
        $.ajax({
                        url: '/Customer/Create',
                        type: 'post',
                        dataType: 'json',
                        cache: false,
                        data: ko.mapping.toJSON(this),
                        contentType: 'application/json',
                        success: function (result) {
                                 alert('Customer data saved successfully.');
                                 window.location.href = '/Customer/ListCustomers/';
                        },
                        error: function (err) {
                               alert("Error while saving data.Status:"+err.responseText);
                               window.location.href = '/Customer/Index/';;
                        },
                        complete: function () {
                                window.location.href = '/Customer/ListCustomers/';
                        }
                    });
    } else {
        alert("Please check the validation errors.");
    }
};


$(document).ready(function () {
    CustomerInformationSystem.bindModel({CustomerName: "", ContactName: "", Address: "", City: "", PostalCode: "", Country: "" });
   
});

