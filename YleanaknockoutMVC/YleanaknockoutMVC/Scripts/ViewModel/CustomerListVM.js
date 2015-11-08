////View Model

var viewModel = {};
$.ajax({
    type: "GET",
    url: '/Customer/GetCustomers',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
        viewModel.Customers = ko.mapping.fromJS(data);
        ko.applyBindings(viewModel);
    },
    error: function (err) {
        alert(err.status + " : " + err.statusText);
    }
});





//var CustomerListVM = {
//   Customers: ko.observableArray([]),
//    getCustomers: function () {
//        var self = this;
//        $.ajax({
//            type: "GET",
//            url: '/Customer/GetCustomers',
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (data) {
//                //alert(data);
//               self.Customers(data);
//             
//            },
//            error: function (err) {
//                alert(err.status + " : " + err.statusText);
//            }
//        });
//    },
//};

//$(function () {
//    ko.applyBindings(CustomerListVM);
//    CustomerListVM.getCustomers();
//});
