angular.module('ionicApp', ['ionic'])

.controller('AppCtrl', function($scope, $timeout, $ionicPopup) {
   $scope.images = [
                        'http://lorempixel.com/g/400/400/'
                      , 'http://lorempixel.com/people/400/400/'
                      , 'http://lorempixel.com/travel/400/400/'
                      , 'http://lorempixel.com/people/200/200/'
                      , 'http://lorempixel.com/sports/200/200/'
                    ]

  $scope.photoBrowser = photoBrowser;

  function photoBrowser(index){
    photoBrowserStandalone(index, $scope.images)
  }

  function photoBrowserStandalone(index, images){

    var myApp = new Framework7({
        init: false, //IMPORTANT - just do it, will write about why it needs to false later
    });
    var photoBrowsers = document.getElementsByClassName("photo-browser")
    if (photoBrowsers.length <= 0) {
      var myPhotoBrowserStandalone = myApp.photoBrowser({
          type: 'standalone',
          theme: 'light',
          photos : images,
          initialSlide: index,
          onClose: function(){
            myApp = undefined;
          }
      });
    }

    myPhotoBrowserStandalone.open();
  }

});