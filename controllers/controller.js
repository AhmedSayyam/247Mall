const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});
function notify(msg, sign){
    Toast.fire({
        icon: sign,
        title: msg
    });
}


app.controller('main_cont', function($scope){
    console.log("Main Controller");
});


app.controller('dashboard_ctrl', function($scope, $rootScope){
    console.log("Dashboard Controller");
    // $translate
    // $scope.changeLanguage = function (key) {
    //     console.log("KEY: ",key);
    //     $rootScope.lang = key;
    //     $translate.use(key);
    // };
});


app.controller('product_ctrl', function($scope){
    console.log("Products Controller");
    $("#createProductSection").hide();
    $scope.products = [
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
    ];

    $scope.showCreateProductSection = function(){
        $("#createProductSection").slideDown();
    }

    // Dropzone of add product page code starts 
    var UPLOAD_FILE = null;
    $scope.$on("$viewContentLoaded", function () {
        $("#pdropzone").dropzone({
            url: URL + "/document_upload",
            addRemoveLinks: true,
            maxFiles: 1,
            maxFilesize: 2, // MB
            paramName: "document",
            dictDefaultMessage: "Upload Document",
            acceptedFiles: ".pdf,.doc,.docx,.txt,.ppt,.pptx,.rtf",
            success: function (file, responseText) {

                $scope.UPLOAD_FILE = responseText.data;
                // some code
            }
        });
        $scope.clear = () => {
            var myDropzone = Dropzone.forElement("#pdropzone");
        };
        // Dropzone of add product page code ends 
    });

    $scope.createProduct = function(){
        notify('Product Added Successfully', 'success');
        $("#createProductSection").slideUp();
        $("#productListingSection").fadeIn();
    }

    $scope.hideaddProduct = function(){
        $("#createProductSection").slideUp();
        
        // notify('Poor Connection!', 'warning');
        // notify('Poor Connection!', 'error');
        // notify('Poor Connection!', 'info');
    }

    // Dropzone of add product page code starts 
    var UPLOAD_FILE = null;
    $scope.$on("$viewContentLoaded", function () {
        $("#peditdropzone").dropzone({
            url: URL + "/document_upload",
            addRemoveLinks: true,
            maxFiles: 1,
            maxFilesize: 2, // MB
            paramName: "document",
            dictDefaultMessage: "Upload Document",
            acceptedFiles: ".pdf,.doc,.docx,.txt,.ppt,.pptx,.rtf",
            success: function (file, responseText) {

                $scope.UPLOAD_FILE = responseText.data;
                // some code
            }
        });
        $scope.clear = () => {
            var myDropzone = Dropzone.forElement("#peditdropzone");
        };
        // Dropzone of add product page code ends 
    });

    $scope.updateProduct = function(){
        console.log("Product Updated.");
        notify("Product Updated Successfully", "success");

    }

    $scope.delProduct = function(){
        console.log("Product Deleted");
        notify("Product Deleted Successfully", "success");
    }
});



app.controller('category_ctrl', function($scope){
    console.log("Category Controller");
    $("#createCategorySection").hide();
    $scope.categories = [
        { label: 'category-1' },

        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
        { label: 'category-1' },
    ];

    $scope.showCreateCategorySection = function(){
        $("#createCategorySection").slideDown();
    }

    $scope.createCategory = function(){
        notify('Category Added Successfully', 'success');
        $("#createCategorySection").slideUp();
        $("#categoryListingSection").fadeIn();
    }

    $scope.hideaddCategory = function(){
        $("#createCategorySection").slideUp();
    }

    $scope.updateCategory = function(){
        notify('Category Updated Successfully', 'success');
        console.log("Category Updated");
    }

    $scope.delCategory = function(){
        notify('Category Deleted Successfully', 'success');
        console.log("Category Deleted");
    }
});

app.controller('sub_category_ctrl', function($scope){
    console.log("Sub-Category Controller");
    $("#createsubCategorySection").hide();
    $scope.sub_categories = [
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
    ];

    $scope.showCreatesubCategorySection = function(){
        $("#createsubCategorySection").slideDown();
    }

    $scope.createsubCategory = function(){
        notify('Sub-Category Added Successfully', 'success');
        $("#createsubCategorySection").slideUp();
        $("#subcategoryListingSection").fadeIn();
    }

    $scope.hideaddsubCategory = function(){
        $("#createsubCategorySection").slideUp();
    }

    $scope.updatesubCategory = function(){
        notify('Sub-Category Updated Successfully', 'success');
        console.log("Sub-Category Updated");
    }

    $scope.delsubCategory = function(){
        notify('Sub-Category Deleted Successfully', 'success');
        console.log("Sub-Category Deleted");
    }
});


app.controller('customers_ctrl', function($scope){
    console.log("Customers Controller");
    $("#createCustomerSection").hide();
    $scope.products = [
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
        { name: 'product-1',category: 'cat-1', sub_category: 'sub-2', sale_price: 2323 },
    ];

    $scope.showCreateCustomerSection = function(){
        $("#createCustomerSection").slideDown();
    }


    $scope.createCustomer = function(){
        $("#createCustomerSection").slideUp();
        $("#customerListingSection").fadeIn();
    }

    $scope.hideaddCustomer = function(){
        $("#createCustomerSection").slideUp();
    }
});

app.controller('orders_ctrl', function($scope){
    console.log("Orders Controller");
    $("#createOrderSection").hide();
    $scope.orders = [
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'pending'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'complete'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'failed'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'inprocess'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'pending'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'complete'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'failed'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'inprocess'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'pending'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'complete'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'failed'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'inprocess'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'pending'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'complete'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'failed'  },
        { order_no: '1324', customer: 'Ahmed Sayyam', total_items: 6, amount: 670, status: 'inprocess'  },
        
    ];

    $scope.showCreateOrderSection = function(){
        $("#createOrderSection").slideDown();
    }

    $scope.createOrder = function(){
        notify('Order Added Successfully', 'success');
        $("#createOrderSection").slideUp();
        $("#orderListingSection").fadeIn();
    }

    $scope.hideaddOrder = function(){
        $("#createOrderSection").slideUp();
    }

    $scope.updateOrder = function(){
        notify('Order Updated Successfully', 'success');
    }

    $scope.delOrder = function(){
        notify('Order Deleted Successfully', 'success');
    }
});

app.controller('schedule_orders_ctrl', function($scope){
    console.log("Orders Controller");
    $scope.sub_categories = [
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
        { category: 'category-1', label: 'sub-category-1' },
    ];

    $scope.updateOrder = function(){
        notify('Sub-Category Updated Successfully', 'success');
        console.log("Order Updated");
    }

    $scope.delOrder = function(){
        notify('Order Deleted Successfully', 'success');
        console.log("Order Deleted");
    }
});

app.controller('dispute_ctrl', function($scope){
    console.log("Dispute Controller");
});


app.controller('support_ctrl', function($scope){
    console.log("Support Controller");
});
