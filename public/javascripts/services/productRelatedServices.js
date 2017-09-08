angular.module('mainApp').service('productService', ['$http', '$q', function ($http, $q) {
    this.backendUrl = "https://www.orangeclips.com/api"
    this.getproductsToDisplay = function (gender, superCategory, subCategory, src,tagsSelected, pageNo) {
        console.log(pageNo)
        return $http({
            url: this.backendUrl+'/fetchProducts?pageNo='+pageNo,
            mehtod:'GET'
        });
    // var details = [{
        //     "id": "1",
        //     "name": "Af Half Sleeve T-Shirt",
        //     "price": 499,
        //     "display_image": "https://images.bewakoof.com/t320/af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg",
        //     "in_stock": 1,
        //     "status": 1,
        //     "designedBy": "Chintu",
        //     "tags": ['Bollywood', "Humour"],
        //     "product_type": "garment",
        //     "limited_edition": false,
        //     "color_name": 'GREY 17',
        //     "category_info": {
        //         "brand": "-1",
        //         'cat_type': "Apparel",
        //         "fabric": "Single Jersey",
        //         'gender': "Men",
        //         "is_printed": "y",
        //         "sleeve": "Half Sleeve",
        //         "subclass": "T-Shirt",
        //     }
        // },
        // {
        //     "id": "2",
        //     "name": "Af Half Sleeve T-Shirt",
        //     "url": "productDetails/productId",
        //     "price": 499,
        //     "child_category_url": "men-printed-t-shirts",
        //     "flip_image": "",
        //     "display_image": "https://images.bewakoof.com/t320/af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg",
        //     "designedBy": "Mintu",
        //     "in_stock": 1,
        //     "tags": ['Bollywood', "OrangeClips Select"],
        //     "status": 1,
        //     "product_type": "garment",
        //     "limited_edition": false,
        //     "color_name": 'GREY 17',
        //     "category_info": {
        //         "brand": "-1",
        //         'cat_type': "Apparel",
        //         "fabric": "Single Jersey",
        //         'gender': "Men",
        //         "is_printed": "y",
        //         "model": "-1",
        //         "sleeve": "Half Sleeve",
        //         "subclass": "T-Shirt",
        //         'subtype': "Topwear"
        //     }
        // },
        // {
        //     "id": "3",
        //     "name": "Af Half Sleeve T-Shirt",
        //     "url": "productDetails/productId",
        //     "price": 499,
        //     "child_category_url": "men-printed-t-shirts",
        //     "flip_image": "",
        //     "display_image": "https://images.bewakoof.com/t320/af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg",
        //     "in_stock": 1,
        //     "status": 1,
        //     "designedBy": "pintu",
        //     "product_type": "garment",
        //     "tags": ['Humour', "Tollywood"],
        //     "limited_edition": false,
        //     "color_name": 'GREY 17',
        //     "category_info": {
        //         "brand": "-1",
        //         'cat_type': "Apparel",
        //         "fabric": "Single Jersey",
        //         'gender': "Men",
        //         "is_printed": "y",
        //         "model": "-1",
        //         "sleeve": "Half Sleeve",
        //         "subclass": "T-Shirt",
        //         'subtype': "Topwear"
        //     }
        // },
        // {
        //     "id": "4",
        //     "name": "Af Half Sleeve T-Shirt",
        //     "url": "productDetails/productId",
        //     "price": 499,
        //     "child_category_url": "men-printed-t-shirts",
        //     "flip_image": "",
        //     "display_image": "https://images.bewakoof.com/t320/af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg",
        //     "in_stock": 1,
        //     "status": 1,
        //     "tags": ["Lazy"],
        //     "product_type": "garment",
        //     "limited_edition": false,
        //     "designedBy": "bintu",
        //     "color_name": 'GREY 17',
        //     "category_info": {
        //         "brand": "-1",
        //         'cat_type': "Apparel",
        //         "fabric": "Single Jersey",
        //         'gender': "Men",
        //         "is_printed": "y",
        //         "model": "-1",
        //         "sleeve": "Half Sleeve",
        //         "subclass": "T-Shirt",
        //         'subtype': "Topwear"
        //     }
        // },
        // {
        //     "id": "5",
        //     "name": "Af Half Sleeve T-Shirt",
        //     "url": "productDetails/productId",
        //     "price": 499,
        //     "child_category_url": "men-printed-t-shirts",
        //     "flip_image": "",
        //     "display_image": "https://images.bewakoof.com/t320/af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg",
        //     "in_stock": 1,
        //     "designedBy": "Kaka",
        //     "status": 1,
        //     "tags": ['Humour', "Tollywood"],
        //     "product_type": "garment",
        //     "limited_edition": false,
        //     "color_name": 'GREY 17',
        //     "category_info": {
        //         "brand": "-1",
        //         'cat_type': "Apparel",
        //         "fabric": "Single Jersey",
        //         'gender': "Men",
        //         "is_printed": "y",
        //         "model": "-1",
        //         "sleeve": "Half Sleeve",
        //         "subclass": "T-Shirt",
        //         'subtype': "Topwear"
        //     }
        // }
        // ]
        // return $q(function (res, rej) {
        //     res({ products: details, totalCount: 10 });
        // });

    };
    this.getDetailsForProduct = function (productId) {
        return $http({
            method: 'GET',
            url: this.backendUrl+'/getProductDetails?id='+productId
        });
        // var response = {
        //     "id": 121471,
        //     "name": "Af Half Sleeve T-Shirt",
        //     "price": 499.0,
        //     "fit": "Regular Fit",
        //     "fit_description": "Fits just right - not too tight, not too loose.",
        //     "material_filter_details": "\u003cb\u003eRegular Fit \u003c/b\u003e\n Fits just right - not too tight, not too loose.",
        //     "limited_edition": false,
        //     "mrp": 499.0,
        //     "updated_at": "16 Aug 2017",
        //     "launched_at": "Jul 11 2017",
        //     "category_info": {
        //         "cat_type": "Apparel",
        //         "subtype": "Topwear",
        //         "gender": "Men",
        //         "subclass": "T-Shirt",
        //         "sleeve": "Half Sleeve",
        //         "fabric": "100% Supima Cotton Mercerized. Pre-shrunk Reinforced.",
        //         "brand": "-1", "model": "-1", "is_printed": "y"
        //     },
        //     "sizes": { "S": 11, "M": 2, "L": 3, "XL": 4 },
        //     "shipsIn": "Ships in 24 hours",
        //     "images": {
        //         "display": [{ "id": 612407, "name": "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg" }],
        //         "additional": [{ "id": 612409, "name": "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769705.jpg" }, 
        //                         { "id": 612411, "name": "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769707.jpg" }, 
        //                         { "id": 612413, "name": "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769710.jpg" }, 
        //                         { "id": 612415, "name": "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769713.jpg" }]
        //     }

        // }
        // return $q(function (res, rej) {
        //     res(response)
        // });
    }
    this.fetchTags = function () {
        return $q(function (res, rej) {
            res({
                "tags": ["OrangeClips Select", "Bollywood", "Tollywood", "Humour", "Lazy"]
            })
        })
    };
    this.fetchAvailableSizes = function (productId) {
        return $q(function (res, rej) {
            res({ sizes: { "S": 11, "M": 2, "L": 3, "XL": 4 } })
        })
    }
}
])