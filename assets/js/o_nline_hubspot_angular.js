
var app = angular.module('OnlineApp', ['angular-ladda']);
app.controller('OnlineCtrl', function ($scope, $http, $location, $timeout) {
    $scope.site_url = site_url;

    $scope.stateName;
    $scope.countryName;

//    International
    $scope.getCountry = function () {
        $http.get($scope.site_url + "country/getCountry").then(function (response) {
            $scope.countries = response.data;
        });
    };
    $scope.getStatebyCountryId = function (country) {
        $http.get($scope.site_url + "country/getStatebyCountryId/" + country).then(function (response) {
            $scope.statesbyCountryId = response.data;
        });

        $http.get($scope.site_url + "country/getcountryNamebyCountryId/" + country).then(function (response) {
            $scope.countryName = response.data.name;
        });
    };
    $scope.getCitybyStateId = function (state) {
        $http.get($scope.site_url + "country/getCitybyStateId/" + state).then(function (response) {
            $scope.citiesByStateId = response.data;
        });
        $http.get($scope.site_url + "country/getStateName_International/" + state).then(function (response) {
            $scope.stateName = response.data.name;
        });
    };
//    International

    $scope.getState = function () {
        $http.get($scope.site_url + "country/getState").then(function (response) {
            $scope.states = response.data;
        });
    };
    $scope.getCity = function (state) {
        $http.get($scope.site_url + "country/getCity/" + state).then(function (response) {
            $scope.cities = response.data;
        });
        $http.get($scope.site_url + "country/getStateName/" + state).then(function (response) {
            $scope.stateName = response.data.name;
        });
    };
   $scope.onlineDepartments = [
        {"id": 1, "name": "BBA"},
        {"id": 2, "name": "B.Com"},
        {"id": 3, "name": "MBA"},
        {"id": 4, "name": "MCA"},
        {"id": 5, "name": "MCom"},
        {"id": 6, "name": "MA"}
    ];
    $scope.getSpecialization = function (deptId) {
//        BBA
        if (deptId == 'BBA') {
            $scope.courseSpecialization = [

                {"id": 1, "name": "Human Resource Management"},
                {"id": 2, "name": "Finance"},
                {"id": 3, "name": "Marketing"},
                {"id": 4, "name": "Engineering and Project Management"},
                {"id": 5, "name": "Multimedia Management"},
                {"id": 6, "name": "Aviation Management"},
                {"id": 7, "name": "Advertising & Branding"},
                {"id": 8, "name": "Strategy & Leadership"},
                {"id": 9, "name": "Banking and Finance"},
                {"id": 10, "name": "Digital Marketing"},
                {"id": 11, "name": "Data Science & Analytics"},
                {"id": 12, "name": "Business Intelligence & Analytics (Integrated with IoA, UK)"},
                {"id": 13, "name": "Artificial Intelligence & Business Intelligence (Integrated with AI Society, UK)"},
                {"id": 14, "name": "Financial Markets (Integrated with IFM, UK)"},
                {"id": 15, "name": "Logistics & Supply Chain Management (Integrated with CIPS, UK)"},
                {"id": 16, "name": "Real Estate Management (Integrated with RICS, UK)"},
                {"id": 17, "name": "International Finance (Integrated with ACCA, UK)"},
                {"id": 18, "name": "International Marketing (Integrated with CIM, UK)"},
                {"id": 19, "name": "Finance and Leadership (Integrated with CIMA, UK)"}

            ];
        }
//        Bcom
        if (deptId == 'B.Com') {
            $scope.courseSpecialization = [
                {"id": 1, "name": "Accounting & Finance"},
                {"id": 2, "name": "Corporate Accounting (Benchmarked to CA - Ind: Foundation, Intermediate and Final)"},
                {"id": 3, "name": "Cost Accounting (Benchmarked to CMA - Ind: Foundation and Intermediate)"},
                {"id": 4, "name": "Corporate Secretaryship (Benchmarked to CS - Ind: CSEET and Executive Programme)"},
                {"id": 5, "name": "Investment Banking (Benchmarked to CA - Ind: Foundation and Intermediate + CFA: Level 1)"},
                {"id": 6, "name": "Corporate Finance (Benchmarked to CA - Ind: Foundation and Intermediate + CMA, US + CPA)"},
                {"id": 7, "name": "Professional Accounting & Finance (Integrated with CMA, US)"},
                {"id": 8, "name": "Finance & Analytics (Integrated by IoA, UK)"},
                {"id": 9, "name": "International Finance & Accounting (Integrated with ACCA, UK)"},
                {"id": 10, "name": "Management Accounting (Integrated with CIMA, UK)"},
                {"id": 11, "name": "Financial Markets (Integrated with IFM, UK)"},
                {"id": 12, "name": "Logistics & Supply Chain Management (Integrated by CIPS, UK)"}
            ];
        }
//        MBA
        if (deptId == 'MBA') {
            $scope.courseSpecialization = [
                {"id": 1, "name": "Human Resource Management"},
                {"id": 2, "name": "Finance"},
                {"id": 3, "name": "Marketing"},
                {"id": 4, "name": "General Management"},
                {"id": 5, "name": "Systems and Operations Management"},
                {"id": 6, "name": "Finance and Marketing"},
                {"id": 7, "name": "Human Resource Management and Finance"},
                {"id": 8, "name": "Marketing and Human Resource Management"},
                {"id": 9, "name": "Aviation Management"},
                {"id": 10, "name": "Project Management"},
                {"id": 11, "name": "Information Technology Management"},
                {"id": 12, "name": "Healthcare Management"},
                {"id": 13, "name": "Logistics & Supply Chain Management (Integrated with CIPS, UK)"},
                {"id": 14, "name": "Banking & Finance (Benchmarked to IIBF, India)"},
                {"id": 15, "name": "Financial Markets (Integrated with IFM, UK)"},
                {"id": 16, "name": "Business Intelligence & Analytics (Integrated with IoA, UK)"},
                {"id": 17, "name": "Artificial Intelligence & Business Intelligence (Integrated AI Society, UK)"},
                {"id": 18, "name": "Strategic Finance (Integrated with CPA, US + CMA, US)"},
                {"id": 19, "name": "Real Estate Management (Integrated with RICS, UK)"},
                {"id": 20, "name": "Strategic Human Resource Management (Integrated with SHRM Certification)"},
                {"id": 21, "name": "Entrepreneurship and Leadership"},
                {"id": 22, "name": "Advertising & Branding"},
                {"id": 23, "name": "Strategy & Leadership"},
                {"id": 24, "name": "International Finance (Integrated with ACCA, UK)"},
                {"id": 25, "name": "Finance and Leadership (Integrated with CIMA, UK)"},
                {"id": 26, "name": "International Marketing (Integrated CIM, UK)"},
                {"id": 27, "name": "Strategic Marketing (Integrated with CDMP from Digital Marketing Institute, Ireland)"},
                {"id": 28, "name": "Data Science & Analytics"},
                {"id": 29, "name": "Digital Marketing & E - commerce"},
                {"id": 30, "name": "FinTech"},
                {"id": 31, "name": "Investment Banking & Equity Research"}
            ];
        }
//        MCA
        if (deptId == 'MCA') {
            $scope.courseSpecialization = [

                {"id": 1, "name": "Computer Science & IT"},
                {"id": 2, "name": "Cyber Security (Integrated with BCS, UK)"},
                {"id": 3, "name": "Data Analytics (Integrated with IoA, UK)"},
                {"id": 4, "name": "Full Stack Development"},
                {"id": 5, "name": "Cloud Computing"},
                {"id": 6, "name": "Data Science"},
                {"id": 7, "name": "Artificial Intelligence"},
            ];
        }

//        Mcom
        if (deptId == 'MCom') {
            $scope.courseSpecialization = [
                {"id": 1, "name": "Accounting & Finance"},
                {"id": 2, "name": "Professional Accounting & Finance (Integrated with CPA, US)"},
                {"id": 3, "name": "International Finance (Integrated with ACCA, UK)"}
            ];
        }
//        MA
        if (deptId == 'MA') {
            $scope.courseSpecialization = [
                {"id": 1, "name": "Economics"},
                {"id": 2, "name": "Journalism and Mass Communication"},
                {"id": 3, "name": "English"},
                {"id": 4, "name": "Public Policy & Administration"}
            ];
        }

    };

    $scope.referrer_name = $("#referrerid").val();
    $scope.keyword = $("#keyword").val();
    $scope.network = $("#network").val();
    $scope.campaign_url = $("#campaign_url").val();
    $scope.campaign_name = $("#campaign_name").val();
    $scope.sourceId = $("#sourceId").val();
    $scope.orderid = $("#orderid").val();
    $scope.sitename = $("#sitename").val();
    $scope.utm_adgroup = $("#utm_adgroup").val();
    $scope.utm_adposition = $("#utm_adposition").val();
    $scope.utm_campaign = $("#utm_campaign").val();
    $scope.utm_content = $("#utm_content").val();
    $scope.utm_creative = $("#utm_creative").val();
    $scope.utm_device = $("#utm_device").val();
    $scope.utm_devicemodel = $("#utm_devicemodel").val();
    $scope.utm_keyword = $("#utm_keyword").val();
    $scope.utm_location = $("#utm_location").val();
    $scope.utm_medium = $("#utm_medium").val();
    $scope.utm_network = $("#utm_network").val();
    $scope.utm_placement = $("#utm_placement").val();
    $scope.utm_source = $("#utm_source").val();
    $scope.utm_target = $("#utm_target").val();

    $scope.onlineEnquirySubmit = function () {

        if ($scope.onlineEnquiryForm.$valid) {
            $scope.submitLoading = true;

             var onlineFormgetdata = {
                'Name': $scope.name,                
                'Email': $scope.email,
                'Mobile': $scope.mobile,
                'State': $scope.stateName,
                'City': $scope.city,
                'Program': $scope.program
            };
            var onlineUtmFormgetdata = {
                'firstname': $scope.name,
                'email': $scope.email,
                'phone': $scope.mobile,
                'state': $scope.stateName,
                'city': $scope.city,
                'program': $scope.program,
                'referrer_name': $scope.referrer_name,
                'keyword': $scope.keyword,
                'network': $scope.network,
                'campaign_url': $scope.campaign_url,
                'campaign_name': $scope.campaign_name,
                'source': $scope.source,
                'orderid': $scope.orderid,
                'jainug2021': $scope.jainug2021,
                'utm_adgroup': $scope.utm_adgroup,
                'utm_adposition': $scope.utm_adposition,
                'utm_campaign': $scope.utm_campaign,
                'utm_content': $scope.utm_content,
                'utm_creative': $scope.utm_creative,
                'utm_device': $scope.utm_device,
                'utm_devicemodel': $scope.utm_devicemodel,
                'utm_keyword': $scope.utm_keyword,
                'utm_location': $scope.utm_location,
                'utm_medium': $scope.utm_medium,
                'utm_network': $scope.utm_network,
                'utm_placement': $scope.utm_placement,
                'utm_source': $scope.utm_source,
                'utm_target': $scope.utm_target,
                'hubspotutk': hubspotutk,
                'ip_addr': ip_addr                
            }
            $http({
                method: 'POST',
                url: 'https://script.google.com/macros/s/AKfycbzJwbJkkRmLJOqQ8j44u96FFQ2fPDPWITJhTynPGHaXnISrdVGiX22ui9R9QjsG8qnXqQ/exec',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param(onlineFormgetdata)
            }).then(function (response) {
                window.location = $scope.site_url + "online/thankyou.php";
            });

            
            // $http({
            //     method: 'POST',
            //     url: $scope.site_url + "online/hubspot.php",
            //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            //     data: $.param(onlineFormgetdata)
            // });
            // $http({
            //     method: 'POST',
            //     url: $scope.site_url + "online/formSubmit.php",
            //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            //     data: $.param(onlineUtmFormgetdata)
            // });
            console.log(onlineUtmFormgetdata);
            $http({
                method: 'POST',
                url: "https://transfunnel.io//jainx/submitForm.php",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param(onlineUtmFormgetdata)
            });
            
            
        } else {
            $scope.submitLoading = false;
        }
        return false;
    };

});
app.controller('thankUCtrl', function ($scope, $http, $location, $timeout) {
    $scope.site_url = site_url;
//    $timeout(function () {
//        window.location = $scope.site_url;
//    }, 5000);
});
app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});