angular.module('mainApp').service('productService', ['$http', '$q', function ($http, $q) {
    this.getproductsToDisplay = function (gender, superCategory, subCategory, src, pageNo) {
        // $http.get({
        //     url: '',
        //     mehtod:''
        // })
        var details = [{
            "id": "1",
            "name": "Af Half Sleeve T-Shirt",
            "url": "productDetails/productId",
            "price": 499,
            "child_category_url": "men-printed-t-shirts",
            "flip_image": "",
            "display_image": "https://images.bewakoof.com/t320/af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg",
            "in_stock": 1,
            "status": 1,
            "designedBy":"Chintu",
            "tags":['Bollywood', "Humour"],
            "product_type": "garment",
            "limited_edition": false,
            "color_name": 'GREY 17',
            "category_info": {
                "brand": "-1",
                'cat_type': "Apparel",
                "fabric": "Single Jersey",
                'gender': "Men",
                "is_printed": "y",
                "model": "-1",
                "sleeve": "Half Sleeve",
                "subclass": "T-Shirt",
                'subtype': "Topwear"
            }
        },
        {
            "id": "2",
            "name": "Af Half Sleeve T-Shirt",
            "url": "productDetails/productId",
            "price": 499,
            "child_category_url": "men-printed-t-shirts",
            "flip_image": "",
            "display_image": "https://images.bewakoof.com/t320/af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg",
            "designedBy":"Mintu",
            "in_stock": 1,
            "tags":['Bollywood', "OrangeClips Select"],
            "status": 1,
            "product_type": "garment",
            "limited_edition": false,
            "color_name": 'GREY 17',
            "category_info": {
                "brand": "-1",
                'cat_type': "Apparel",
                "fabric": "Single Jersey",
                'gender': "Men",
                "is_printed": "y",
                "model": "-1",
                "sleeve": "Half Sleeve",
                "subclass": "T-Shirt",
                'subtype': "Topwear"
            }
        },
        {
            "id": "3",
            "name": "Af Half Sleeve T-Shirt",
            "url": "productDetails/productId",
            "price": 499,
            "child_category_url": "men-printed-t-shirts",
            "flip_image": "",
            "display_image": "https://images.bewakoof.com/t320/af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg",
            "in_stock": 1,
            "status": 1,
            "designedBy":"pintu",
            "product_type": "garment",
            "tags":['Humour', "Tollywood"],
            "limited_edition": false,
            "color_name": 'GREY 17',
            "category_info": {
                "brand": "-1",
                'cat_type': "Apparel",
                "fabric": "Single Jersey",
                'gender': "Men",
                "is_printed": "y",
                "model": "-1",
                "sleeve": "Half Sleeve",
                "subclass": "T-Shirt",
                'subtype': "Topwear"
            }
        },
        {
            "id": "4",
            "name": "Af Half Sleeve T-Shirt",
            "url": "productDetails/productId",
            "price": 499,
            "child_category_url": "men-printed-t-shirts",
            "flip_image": "",
            "display_image": "https://images.bewakoof.com/t320/af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg",
            "in_stock": 1,
            "status": 1,
            "tags":["Lazy"],
            "product_type": "garment",
            "limited_edition": false,
            "designedBy":"bintu",
            "color_name": 'GREY 17',
            "category_info": {
                "brand": "-1",
                'cat_type': "Apparel",
                "fabric": "Single Jersey",
                'gender': "Men",
                "is_printed": "y",
                "model": "-1",
                "sleeve": "Half Sleeve",
                "subclass": "T-Shirt",
                'subtype': "Topwear"
            }
        },
        {
            "id": "5",
            "name": "Af Half Sleeve T-Shirt",
            "url": "productDetails/productId",
            "price": 499,
            "child_category_url": "men-printed-t-shirts",
            "flip_image": "",
            "display_image": "https://images.bewakoof.com/t320/af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg",
            "in_stock": 1,
            "designedBy":"Kaka",
            "status": 1,
            "tags":['Humour', "Tollywood"],
            "product_type": "garment",
            "limited_edition": false,
            "color_name": 'GREY 17',
            "category_info": {
                "brand": "-1",
                'cat_type': "Apparel",
                "fabric": "Single Jersey",
                'gender': "Men",
                "is_printed": "y",
                "model": "-1",
                "sleeve": "Half Sleeve",
                "subclass": "T-Shirt",
                'subtype': "Topwear"
            }
        }
        ]
       return $q(function(res, rej){
            res({products : details, totalCount: 10});
        });

    };
    this.getDetailsForProduct = function(productId){
        var response = {"id":121471,
        "name":"Af Half Sleeve T-Shirt",
        "description":"\u003cp\u003eEverything is said better with a printed edit.Thank God we have this men\u0026#8217;s printed half sleeve T-shirt in for you! We think this one will fit right into your on-trend wardrobe. You think so too? Well, time to get your hands on one!\u003c/p\u003e",
        "url":"af-half-sleeve-t-shirt-for-men",
        "meta_title":"AF T-Shirt - AF Mens T-Shirts@Best Price India - Bewakoof.com",
        "meta_description":"Buy AF Mens T-Shirts Online at ₹ 499 on Bewakoof.com. Shop from wide range of Men's Printed T-Shirts Collection. Get Free Shipping, COD \u0026 Easy Returns! Shop Now!",
        "meta_keywords":null,
        "price":499.0,
        "weight":100.0,
        "status":"enabled",
        "product_description":"",
        "model_description":"",
        "fit":"Regular Fit",
        "fit_description":"Fits just right - not too tight, not too loose.",
        "material_filter_details":"\u003cb\u003eRegular Fit \u003c/b\u003e\n Fits just right - not too tight, not too loose.",
        "delivery_and_return_policy":"Free Shipping above \u0026#8377; 1000\n\nCOD charges applicable. Please, refer \u003ca href='/faq' style='color:inherit;'\u003eFAQ\u003c/a\u003e for more information.\n\nAll products, except boxers and nightwear shorts, are applicable for return.\n\nCustomers can return their order within 15 days of the order delivery.\n\nRefunds for returned products will be given in your Bewakoof wallet.",
        "limited_edition":false,
        "canonical_url":null,
        "mrp":499.0,
        "new_size_chart":"\u003ciframe srcdoc='\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\n\n  \u003chead\u003e\n    \u003cstyle media=\"screen\"\u003e\n      .bsg_back {\n        position: absolute;\n        left: 0;\n        top: 0;\n        color: #aaa;\n        cursor: pointer;\n        width: 11px;\n        opacity: 0.4;\n        margin: 18px !important;\n      }\n      .bsg_tab * {\n        margin: 0;\n        padding: 0;\n        line-height: normal;\n      }\n\n      .bsg_tab {\n        position: relative;\n        float: left;\n        width: 100%;\n        margin: 0 auto;\n        display: block;\n        font-family: montserrat, sans-serif;\n        font-size: 13px;\n        text-align: center;\n      }\n\n      .bsg_tab label {\n        margin: 0 10px;\n        padding-bottom: 4px;\n      }\n\n      .bsg_model {\n        float: left;\n        width: 100%;\n        background: #f7f7f7;\n      }\n\n      .bsg_model_hide {\n        display: none;\n      }\n\n      .bsg_reference {\n        float: left;\n        text-align: left;\n        padding: 0 10px 0 15px;\n      }\n\n      .bsg_model_title {\n        color: #1a1a1a;\n        font-family: montserrat-bold;\n        font-weight: bold;\n        padding-bottom: 10px !important;\n      }\n\n      .bsg_reference span {\n        float: left;\n        width: 100%;\n        padding-bottom: 5px;\n      }\n\n      .bsg_model_term {\n        font-size: 10px;\n        padding-top: 10px;\n      }\n\n      .bsg_dark {\n        float: left;\n        margin-top: 10px;\n        width: 100%;\n        color: #444;\n        font-weight: bold;\n      }\n\n      .spara {\n        padding: 0 15px;\n      }\n\n      .bsg_h1 {\n        margin-bottom: 5px;\n        color: #444;\n        font-size: 18px;\n        text-align: center;\n      }\n\n      .bsg_h2 {\n        font-size: 12px;\n        text-align: center;\n      }\n\n      .bsg_measure_guide_image {\n        float: left;\n        width: 100%;\n        margin: 0 auto 10px;\n        display: block;\n      }\n      .bsg_table tr:first-child {\n        color: #161616;\n        background: #f7f7f7;\n        text-transform: capitalize;\n      }\n      .bsg_landscape tr td:first-child {\n        text-align: left;\n      }\n\n      .bsg_landscape td {\n        min-width: 80px;\n      }\n\n      .bsg_table td {\n        min-width: 50px;\n        font-size: 12px;\n        padding: 10px 0;\n        text-align: center;\n      }\n\n      .bsg_link {\n        font-weight: normal !important;\n        font-size: 13px !important;\n        color: #51cccc !important;\n        display: block;\n        cursor: pointer;\n      }\n\n      .bsg_how_to_measure {\n        max-width: 350px;\n        padding: 5px 15px 0;\n        margin: 0 auto;\n      }\n\n      .bsg_sizeinfo {\n        width: 100%;\n        max-width: 350px;\n        min-width: 290px;\n        margin: 0 auto;\n      }\n\n      .bsg_fitsinfo {\n        max-width: 350px;\n        margin: 0 auto;\n      }\n\n      .bsg_flex {\n        max-width: 350px;\n        margin: 35px auto;\n      }\n\n      .bsg_thumbs {\n        float: left;\n        width: 50%;\n        text-align: center;\n        outline: 1px solid #eee;\n      }\n\n      .bsg_thumb {\n        width: 80%;\n        max-width: 290px;\n        margin: 0 auto;\n        padding: 20% 0;\n      }\n\n      .bsg_thumb p {\n        height: 80px;\n      }\n\n      .bsg_selected {\n        display: none;\n      }\n\n      .bsg_selection .bsg_thumb p {\n        height: auto;\n      }\n\n      .bsg_selection .bsg_thumb {\n        padding-top: 0;\n        padding-bottom: 0;\n      }\n\n      .bsg_selection .bsg_thumbs {\n        width: 80%;\n        margin: 0 auto;\n        float: none;\n        display: none;\n        outline: none;\n      }\n\n      .bsg_selection .bsg_selected {\n        display: block;\n        background-color: initial;\n      }\n\n      .bsg_tab \u003e input[type=\"radio\"] {\n        display: none;\n      }\n\n      .bsg_fitsinfo_guide_tab label,\n      .bsg_sizeinfo_guide_tab label {\n        color: black;\n        cursor: pointer;\n        font-weight: bold;\n      }\n\n      .bsg_fitsize_title_holder {\n        float: left;\n        width: 100%;\n        margin: 50px 0 30px;\n      }\n      .bsg_fitsinfo_guide_tab:checked~.bsg_fitsinfo_guide_tab .bsg_fitsinfo_guide_tab,\n      .bsg_sizeinfo_guide_tab:checked~.bsg_sizeinfo_guide_tab .bsg_sizeinfo_guide_tab {\n        border-bottom: 2px solid #51cccc;\n      }\n\n      .bsg_tab \u003e div {\n        display: none;\n      }\n      .bsg_fitsinfo_guide_tab:checked~.bsg_fitsinfo_guide_tab,\n      .bsg_garment_detail_tab:checked~.bsg_garment_detail_tab,\n      .bsg_how_to_measure_tab:checked~.bsg_how_to_measure_tab,\n      .bsg_sizeinfo_guide_tab:checked~.bsg_sizeinfo_guide_tab {\n        display: block;\n      }\n\n    \u003c/style\u003e\n  \u003c/head\u003e\n\n  \u003cbody style=\"margin:0;padding:0;\"\u003e\n    \u003cdiv class=\"bsg_tab\"\u003e\n      \u003cinput type=\"radio\" name=\"bsg_tab\" id=\"bsg_sizeinfo_guide_tab\" class=\"bsg_sizeinfo_guide_tab\" checked=\"checked\"\u003e\n      \u003cinput type=\"radio\" name=\"bsg_tab\" id=\"bsg_fitsinfo_guide_tab\" class=\"bsg_fitsinfo_guide_tab\"\u003e\n      \u003cinput type=\"radio\" name=\"bsg_tab\" id=\"bsg_how_to_measure_tab\" class=\"bsg_how_to_measure_tab\"\u003e\n      \u003cinput type=\"radio\" name=\"bsg_tab\" id=\"bsg_garment_detail_tab\" class=\"bsg_garment_detail_tab\"\u003e\n      \u003cdiv class=\"bsg_sizeinfo_guide_tab\"\u003e\n        \u003cdiv class=\"bsg_fitsize_title_holder\"\u003e\n          \u003clabel class=\"bsg_sizeinfo_guide_tab\" for=\"bsg_sizeinfo_guide_tab\"\u003eSIZE GUIDE\u003c/label\u003e\n          \u003clabel class=\"bsg_fitsinfo_guide_tab\" for=\"bsg_fitsinfo_guide_tab\"\u003eFIT GUIDE\u003c/label\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"bsg_sizeinfo\"\u003e\n          \u003ctable class=\"bsg_table bsg_portrait\" style=\"width:100%;margin:0 auto;border-collapse:collapse;border-bottom:1px solid #eee;\"\u003e\n            \u003ctr\u003e\n              \u003ctd\u003eIf your body chest\u003cbr\u003emeasures\u003c/td\u003e\n              \u003ctd\u003eThen you should\u003cbr\u003ego for\u003c/td\u003e\n            \u003c/tr\u003e\n            \u003ctd\u003e35\" - 36\"\u003c/td\u003e\n            \u003ctd\u003eS\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e37\" - 38\"\u003c/td\u003e\n            \u003ctd\u003eM\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e39\" - 40\"\u003c/td\u003e\n            \u003ctd\u003eL\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e41\" - 42\"\u003c/td\u003e\n            \u003ctd\u003eXL\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e43\" - 44\"\u003c/td\u003e\n            \u003ctd\u003e2XL\u003c/td\u003e\n          \u003c/tr\u003e\n          \u003ctr\u003e\n            \u003ctd\u003e45\" - 46\"\u003c/td\u003e\n            \u003ctd\u003e3XL\u003c/td\u003e\n          \u003c/tr\u003e\n        \u003c/table\u003e\n\n        \u003clabel class=\"bsg_link\" for=bsg_how_to_measure_tab style=\"margin:15px 0;\"\u003eHow to measure your Chest?\u003c/label\u003e\n        \u003ctable class=\"bsg_model BSG_MODEL\"\u003e\n          \u003ctr\u003e\n            \u003ctd width=\"50%\"\u003e\n              \u003cdiv class=\"bsg_reference\"\u003e\n                \u003cspan class=\"bsg_model_title\"\u003eMODEL REFERENCE\u003c/span\u003e\n                \u003cspan\u003eHeight : 6\"\u003c/span\u003e\n                \u003cspan\u003eChest : 39\"\u003c/span\u003e\n                \u003cspan\u003eWearing size\n                \u003c/span\u003e\n                \u003cspan\u003e\n                  \u003cp style=\"display: inline-block;border-radius: 4px;background: #fdd835;padding:5px 10px;\"\u003e\n                    \u003cb style=\"padding-right:5px;font-weight: bold;\"\u003eL\u003c/b\u003e\n                    REGULAR FIT\n                  \u003c/p\u003e\n                \u003c/span\u003e\n                \u003cspan class=\"bsg_model_term\"\u003e*Still not sure about the size? We recommend ordering the size you normally wear.\u003c/span\u003e\n              \u003c/div\u003e\n            \u003c/td\u003e\n            \u003ctd width=\"50%\"\u003e\n              \u003cimg style=\"float:left;width:100%;\" src=\"https://images.bewakoof.com/t540/af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg\"\u003e\n            \u003c/td\u003e\n          \u003c/tr\u003e\n        \u003c/table\u003e\n      \u003c/div\u003e\n    \u003c/div\u003e\n\n    \u003cdiv class=\"bsg_how_to_measure_tab\" style=\"padding-top:0\"\u003e\n      \u003clabel for=bsg_sizeinfo_guide_tab\u003e\n        \u003cimg\n          class=\"bsg_back\"\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAkBAMAAABh4ecdAAAAJFBMVEUAAAAODg4PDw8PDw8PDw8VFRUODg4ODg4PDw8QEBAODg4ODg5cw6gZAAAAC3RSTlMA90buZxjFNfNzNmPkk0EAAABYSURBVBjTY4AB9ox0BjhQ3L05AMZmkt692wEhAeQgJEDKEBJCSBIbFagvMRFZYjcOHazWSBIsMAkEB1MZwgBMoxGWIpyD0EVzqc0B6AGPiBKskcXABYxGAFiWU7h1xLGrAAAAAElFTkSuQmCC\"\u003e\n      \u003c/label\u003e\n      \u003cbr\u003e\u003cbr\u003e\u003cbr\u003e\n      \u003cdiv class=\"bsg_h1\"\u003eHow to measure your chest\u003c/div\u003e\n      \u003cdiv class=\"bsg_how_to_measure\"\u003e\n        \u003cimg class=\"bsg_measure_guide_image\" src=\"https://images.bewakoof.com/sizeguide/men_top_how_to_measure_min_v2.jpg\"\u003e\n        \u003cdiv class=\"bsg_h2\"\u003eMeasure around the fullest part of your chest, keeping the measuring tape horizontal.\u003c/div\u003e\n        \u003cbr\u003e\n        \u003cbr\u003e\n        \u003clabel class=\"bsg_h2 bsg_link\" for=bsg_sizeinfo_guide_tab\u003eFind your Size\u003c/label\u003e\u003cbr\u003e\n        \u003cbr\u003e\n      \u003c/div\u003e\n    \u003c/div\u003e\n\n    \u003cdiv class=\"bsg_garment_detail_tab\"\u003e\n      \u003clabel for=bsg_fitsinfo_guide_tab\u003e\n        \u003cimg\n          class=\"bsg_back\"\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAkBAMAAABh4ecdAAAAJFBMVEUAAAAODg4PDw8PDw8PDw8VFRUODg4ODg4PDw8QEBAODg4ODg5cw6gZAAAAC3RSTlMA90buZxjFNfNzNmPkk0EAAABYSURBVBjTY4AB9ox0BjhQ3L05AMZmkt692wEhAeQgJEDKEBJCSBIbFagvMRFZYjcOHazWSBIsMAkEB1MZwgBMoxGWIpyD0EVzqc0B6AGPiBKskcXABYxGAFiWU7h1xLGrAAAAAElFTkSuQmCC\"\u003e\n      \u003c/label\u003e\n      \u003cdiv class=\"bsg_flex\"\u003e\n        \u003cbr\u003e\n        \u003cdiv class=\"bsg_h1\"\u003eGarment Measurements\u003c/div\u003e\n        \u003cimg style=\"width:55%;margin:10px auto 40px;\" src=\"https://images.bewakoof.com/sizeguide/men_half_sleeves_tshirts-1484025744.jpg\"\u003e\n        \u003cdiv class=\"bsg_h2\"\u003eAll measurements are of the garment. (In Inches)\u003c/div\u003e\n        \u003cbr\u003e\n        \u003ctable class=\"bsg_table bsg_portrait\" style=\"width:100%;text-align:center;\"\u003e\u003ctr\u003e\u003ctd\u003eSize\u003c/td\u003e\u003ctd\u003eChest\u003c/td\u003e\u003ctd\u003eLength\u003c/td\u003e\u003ctd\u003eSleeve length\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eS\u003c/td\u003e\u003ctd\u003e38\u0026quot;\u003c/td\u003e\u003ctd\u003e27\u0026quot;\u003c/td\u003e\u003ctd\u003e7.25\u0026quot;\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eM\u003c/td\u003e\u003ctd\u003e40\u0026quot;\u003c/td\u003e\u003ctd\u003e28\u0026quot;\u003c/td\u003e\u003ctd\u003e7.5\u0026quot;\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eL\u003c/td\u003e\u003ctd\u003e42\u0026quot;\u003c/td\u003e\u003ctd\u003e29\u0026quot;\u003c/td\u003e\u003ctd\u003e7.75\u0026quot;\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eXL\u003c/td\u003e\u003ctd\u003e44\u0026quot;\u003c/td\u003e\u003ctd\u003e30\u0026quot;\u003c/td\u003e\u003ctd\u003e8\u0026quot;\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e2XL\u003c/td\u003e\u003ctd\u003e46\u0026quot;\u003c/td\u003e\u003ctd\u003e30.5\u0026quot;\u003c/td\u003e\u003ctd\u003e8.25\u0026quot;\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e3XL\u003c/td\u003e\u003ctd\u003e48\u0026quot;\u003c/td\u003e\u003ctd\u003e31\u0026quot;\u003c/td\u003e\u003ctd\u003e8.5\u0026quot;\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\n        \u003cbr\u003e\n        \u003clabel class=\"bsg_h2 bsg_link\" for=bsg_fitsinfo_guide_tab\u003eBack to Fit Guide\u003c/label\u003e\n      \u003c/div\u003e\n    \u003c/div\u003e\n\n    \u003cdiv class=\"bsg_fitsinfo_guide_tab\" style=\"padding:0\"\u003e\n      \u003cdiv class=\"bsg_fitsize_title_holder\"\u003e\n        \u003clabel class=\"bsg_sizeinfo_guide_tab\" for=\"bsg_sizeinfo_guide_tab\"\u003eSIZE GUIDE\u003c/label\u003e\n        \u003clabel class=\"bsg_fitsinfo_guide_tab\" for=\"bsg_fitsinfo_guide_tab\"\u003eFIT GUIDE\u003c/label\u003e\n      \u003c/div\u003e\n      \u003cdiv class=\"bsg_fitsinfo bsg_selection\"\u003e\n        \u003cdiv class=\"bsg_thumbs OVERSIZED_FIT\"\u003e\n          \u003cdiv class=\"bsg_thumb\"\u003e\n            \u003cimg src=\"https://images.bewakoof.com/sizeguide/fit_topwear_men_oversized_v3.png\" width=\"100%\"\u003e\n            \u003cspan class=\"bsg_h2 bsg_dark\"\u003eOVERSIZED FIT:\u003c/span\u003e\n            \u003cp class=\"bsg_h2\"\u003eFalls loosely on the body.\u003c/p\u003e\n          \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"bsg_thumbs bsg_selected\"\u003e\n          \u003cdiv class=\"bsg_thumb\"\u003e\n            \u003cimg src=\"https://images.bewakoof.com/sizeguide/fit_topwear_men_regular_v3.png\" width=\"100%\"\u003e\n            \u003cspan class=\"bsg_h2 bsg_dark\"\u003eREGULAR FIT:\u003c/span\u003e\n            \u003cp class=\"bsg_h2\"\u003eFits just right - not too tight, not too loose.\u003c/p\u003e\n          \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"bsg_thumbs SLIM_FIT\"\u003e\n          \u003cdiv class=\"bsg_thumb\"\u003e\n            \u003cimg src=\"https://images.bewakoof.com/sizeguide/fit_topwear_men_slim_v3.png\" width=\"100%\"\u003e\n            \u003cspan class=\"bsg_h2 bsg_dark\"\u003eSLIM FIT:\u003c/span\u003e\n            \u003cp class=\"bsg_h2\"\u003eFits close to the body.\u003c/p\u003e\n          \u003c/div\u003e\n        \u003c/div\u003e\n      \u003c/div\u003e\n\n      \u003clabel class=\"bsg_h2 bsg_link\" for=bsg_garment_detail_tab style=\"margin:15px 0;\"\u003eView garment measurements\u003c/label\u003e\n      \u003cspan class=\"bsg_dark\" style=\"padding:10px;background-color:#f7f7f7;\"\u003eOther fits\u003c/span\u003e\n      \u003cbr\u003e\n      \u003cbr\u003e\n      \u003cbr\u003e\n      \u003cdiv class=\"bsg_fitsinfo\"\u003e\n        \u003cdiv class=\"bsg_thumbs OVERSIZED_FIT\"\u003e\n          \u003cdiv class=\"bsg_thumb\"\u003e\n            \u003cimg src=\"https://images.bewakoof.com/sizeguide/fit_topwear_men_oversized_v3.png\" width=\"100%\"\u003e\n            \u003cspan class=\"bsg_h2 bsg_dark\"\u003eOVERSIZED FIT:\u003c/span\u003e\n            \u003cp class=\"bsg_h2\"\u003eFalls loosely on the body.\u003c/p\u003e\n          \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"bsg_thumbs bsg_selected\"\u003e\n          \u003cdiv class=\"bsg_thumb\"\u003e\n            \u003cimg src=\"https://images.bewakoof.com/sizeguide/fit_topwear_men_regular_v3.png\" width=\"100%\"\u003e\n            \u003cspan class=\"bsg_h2 bsg_dark\"\u003eREGULAR FIT:\u003c/span\u003e\n            \u003cp class=\"bsg_h2\"\u003eFits just right - not too tight, not too loose.\u003c/p\u003e\n          \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"bsg_thumbs SLIM_FIT\"\u003e\n          \u003cdiv class=\"bsg_thumb\"\u003e\n            \u003cimg src=\"https://images.bewakoof.com/sizeguide/fit_topwear_men_slim_v3.png\" width=\"100%\"\u003e\n            \u003cspan class=\"bsg_h2 bsg_dark\"\u003eSLIM FIT:\u003c/span\u003e\n            \u003cp class=\"bsg_h2\"\u003eFits close to the body.\u003c/p\u003e\n          \u003c/div\u003e\n        \u003c/div\u003e\n      \u003c/div\u003e\n    \u003c/div\u003e\n\n  \u003c/div\u003e\n\n\u003c/body\u003e\n\n\u003c/html\u003e\n' frameborder = '0' marginheight = '0' marginwidth = '0' sandbox = 'allow-scripts' style='width: 100%; min-height: 400px; height: 100vh; padding: 0; margin: 0;'\u003e\u003c/iframe\u003e",
        "dispatch_days":"2-4",
        "updated_at":"16 Aug 2017",
        "launched_at":"Jul 11 2017",
        "sort_by_new":1499771741,
        "parent_category":{"id":13,"name":"Men's T-Shirts","url":"men-t-shirts"},
        "child_categories":[{"id":160,"name":"Men's Printed T-Shirts","url":"printed-t-shirts-for-men"}],
        "category_info":{"cat_type":"Apparel","subtype":"Topwear","gender":"Men","subclass":"T-Shirt","sleeve":"Half Sleeve","fabric":"Single Jersey","brand":"-1","model":"-1","is_printed":"y"},
        "images":{"original":[{"id":612407,"name":"af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg"}],
        "display":[{"id":612407,"name":"af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg"}],
        "additional":[{"id":612409,"name":"af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769705.jpg"},{"id":612411,"name":"af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769707.jpg"},{"id":612413,"name":"af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769710.jpg"},{"id":612415,"name":"af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769713.jpg"}]},
        "is_gift_card":0,
        "gift_card_occasions":[],
        "cod_enable":1,
        "breadCrumb":[{"name":"T-Shirts","url":"men-t-shirts"},{"name":"Printed T-Shirts","url":"men-printed-t-shirts"}],
        "product_type":"garment","sizes":[{"id":1,"name":"S","product_size_id":185993,"qty_avail":13},{"id":2,"name":"M","product_size_id":185995,"qty_avail":23},{"id":3,"name":"L","product_size_id":185997,"qty_avail":39},{"id":4,"name":"XL","product_size_id":185999,"qty_avail":76},{"id":5,"name":"2XL","product_size_id":186001,"qty_avail":54},{"id":18,"name":"3XL","product_size_id":186003,"qty_avail":0}],
        "in_stock":1,"notify_me_message":"SELECT FROM UNAVAILABLE SIZES",
        "color":{"id":738,"name":"GREY 17"},
        "tabular_description":{"fit_description":{"name":"FIT DETAILS","text":"Regular Fit: Take your usual size\n\n"},
        "description":{"name":"FEATURES","text":"\u003cp\u003eEverything is said better with a printed edit.Thank God we have this men\u0026#8217;s printed half sleeve T-shirt in for you! We think this one will fit right into your on-trend wardrobe. You think so too? Well, time to get your hands on one!\u003c/p\u003e"},
        "fabric_detail":{"name":"FABRIC DETAILS","text":"\u003cb\u003eFabric\u003c/b\u003e\n100% cotton\nSingle jersey\nPrewashed to impart a softer texture\n\n\u003cb\u003eWashCare Instructions\u003c/b\u003e\n\nMachine wash cold\n\nDo not bleach or wash with chlorine based detergent or water\n\nWash/dry inside out\n\nDo not iron directly on prints\n\nDry promptly in shade\n\nDry on a flat surface as hanging may cause measurement variations\n\nProduct color may vary little due to photography \n\nWash with similar clothes\n\n\u003ca href='/faq?query=washcare' style='color:inherit;'\u003eKnow more\u003c/a\u003e\n","image":[]},"delivery_info":{"name":"DELIVERY \u0026 RETURN INFO","text":"Free Shipping above \u0026#8377; 1000\n\nCOD charges applicable. Please, refer \u003ca href='/faq' style='color:inherit;'\u003eFAQ\u003c/a\u003e for more information.\n\nAll products, except boxers and nightwear shorts, are applicable for return.\n\nCustomers can return their order within 15 days of the order delivery.\n\nRefunds for returned products will be given in your Bewakoof wallet."}},"cod_statement":"","offer_statement":""
    }
        return $q(function(res, rej){
            res(response)
        });
    }
    this.fetchTags = function(){
        return $q(function(res, rej){
            res({
                "tags":["OrangeClips Select", "Bollywood", "Tollywood", "Humour", "Lazy"]
            })
        })
    };
    this.fetchAvailableSizes = function(productId){
        return $q(function(res, rej){
            res({sizes:{"S":11,"M":2, "L":3,"XL":4}})
        })
    }
}
])