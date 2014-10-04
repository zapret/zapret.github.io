
var zapretData = {
    'vpn': { what: "доступ к ресурсам сети интернет по шифрованным каналам VPN и SSH" },
    'bitcoin': { what: "использование криптовалют для любых расчётов" },
    'anime': { what: "фильмы жанра аниме", plural: true },
    'skype': { what: 'звонки через сервисы IP-телефонии, в частности через Skype', plural:true },
    'cats': { what: "картинки с котиками", plural:true },
    'visa': { what: "расчёты картами Visa и Mastercard на территории Российской Федерации", plural:true },
    'nix': { what: "программное обеспечение на платформе GNU/Linux", consequences: "вызывает красноглазие определённых груп населения" },
    'win': { what: "программное обеспечение на платформе MS Windows", consequences: "подрывает обороноспособность страны" },
    'git': { what: "систему контроля версий GIT", inf: "система контроля версий GIT", consequences: "негативно влияет на здоровье граждан" },
    'yad': { what: "платёжную систему Яндекс.Деньги" },
    'travel': { what: "выезд за рубеж" },
    'dolar': { what: "оброт наличных средств в долларах США" } 
};

['Twitter', 'Facebook', 'Google Plus', 'Instagram'].forEach(function(e) {
    zapretData[e.toLowerCase()] = { what: "доступ в социальную сеть " + e };
});
['PayPal', 'Payoneer', 'WebMoney'].forEach(function (e) {
    zapretData[e.toLowerCase()] = { what: "расчёты через платёжную систему " + e };
});


var reasonData = {
    'suicide': "самоубийств среди подростков",
    'cp': "распространения детской порнографии",
    'extrimism': 'экстремизма',
    'terrorism': 'проявления террористической деятельности'
};


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey(obj) {
    var count = 0;
    var pos = getRandomInt(1, Object.keys(obj).length);

    for (var key in obj) {
        if (++count == pos) {
            return key;
        }
    }
    return null;
}

function getRandomValue(obj) {
    var key = getRandomKey(obj);
    return obj[key];
}

function getNextUrl() {
    return "/" + getRandomKey(zapretData) + "/" + getRandomKey(reasonData);
}

var zapretControllers = angular.module('zapretControllers', []);

zapretControllers.controller(
    'EmptyCtrl', [
        '$scope', '$routeParams', '$location',
        function($scope, $routeParams, $location) {
            $location.path(getNextUrl());
        }
    ]);


zapretControllers.controller(
    'MainCtrl',
    [
        '$scope', '$routeParams', '$location',
        function($scope, $routeParams, $location) {


            function redirectToNext() {
                $location.path(getNextUrl());
            };

            function index() {
                $scope.zapret = zapretData[$routeParams.what];
                $scope.zapret.reason = reasonData[$routeParams.why];
                if ($scope.zapret.consequences) {
                    $scope.zapret.consequences = ", а также " + $scope.zapret.consequences;
                }

                $scope.zapret.pro = getRandomInt(80, 100) + "." + getRandomInt(1, 10) + "%";
            }

            // events
            $scope.new = function() {
                redirectToNext();
            }

            index();
        }
    ]);

