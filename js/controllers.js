var zapretControllers = angular.module('zapretControllers', []);

zapretControllers.controller(
    'MainCtrl',
    ['$scope', '$routeParams', '$location',
        function ($scope, $routeParams, $location) {

            var zapretData = {
                '1': { what: "доступ к ресурсам сети интернет по шифрованным каналам VPN и SSH" },
                '2': { what: "использование криптовалют для любых расчётов" },
                '3': { what: "анимэ" },
                '4': { what: 'звонки через сервисы IP-телефонии, в частности через Skype' },
                '5': { what: "картинки с котиками" },
                '6': {what: "расчёты картами Visa и Mastercard на территории Российской Федерации"}
            };

            var reasonData = {
                '1': "самоубийств среди подростков",
                '2': "распространения детской порнографии",
                '3': 'экстремизма'                
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

            function redirectToNext() {
                $location.path("/" + getRandomKey(zapretData));
            };

            function index() {

                var id = $routeParams.id;
                if (!id) {
                    redirectToNext();
                }

                $scope.zapret = zapretData[id];
                $scope.zapret.reason = getRandomValue(reasonData);
                $scope.zapret.pro = getRandomInt(80, 100) + "." + getRandomInt(1, 10) + "%";
            }

            // events
            $scope.new = function () {
                redirectToNext();
            }

            index();
        }


    ]);