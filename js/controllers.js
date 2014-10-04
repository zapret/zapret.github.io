
var zapretData = {
    'vpn': { what: "доступ к ресурсам сети интернет по шифрованным каналам VPN и SSH" },
    'bitcoin': { what: "использование криптовалют для любых расчётов" },
    'anime': { what: "фильмы жанра аниме" },
    'skype': { what: 'звонки через сервисы IP-телефонии, в частности через Skype' },
    'cats': { what: "картинки с котиками" },
    'visa': { what: "расчёты картами Visa и Mastercard на территории Российской Федерации" },
    'nix': { what: "программное обеспечение на платформе GNU/Linux" },
    'win': { what: "программное обеспечение на платформе MS Windows" },
    'git': { what: "систему контроля версий GIT" }    

};

var reasonData = {
    's': "самоубийств среди подростков",
    'cp': "распространения детской порнографии",
    'ex': 'экстремизма',
    'terr': 'проявления террористической деятельности'
};


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey(obj) {
    var count = 0;
    var pos = getRandomInt(1, Object.keys(obj).length);

    for (var key in obj)
        if (++count == pos)
            return key;
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

                var id = $routeParams.what;
                if (!id) {
                    redirectToNext();
                }

                $scope.zapret = zapretData[id];
                $scope.zapret.reason = getRandomValue(reasonData);
                $scope.zapret.pro = getRandomInt(80, 100) + "." + getRandomInt(1, 10) + "%";
            }

            // events
            $scope.new = function() {
                redirectToNext();
            }

            index();
        }
    ]);

