var data  = [
{
"num_hzm" : "456427",
"num_tm" : "121212",
"status": "4 מאושרת",
"matrat_hvl" : "טיול יחידתי",
"kod_rechev" : "1600",
"rechev_name" : "�������",
"kamot_rechev" : "1",
"timestamp_hit" : new Date(2017,01,17,05,00),
"timestamp_shi" : new Date(2017,01,17,10,30),
"mouda": ["���� ����", "�����"],
"mechir" :"23,244"
},
{"num_hzm" : "456789",
"num_tm" : "151515",
"status": "4 מאושרת",
"matrat_hvl" : "תרחט",
"kod_rechev" : "3000",
"rechev_name" : "�������",
"kamot_rechev" : "3",
"timestamp_hit" : new Date(2017,01,17,05,00),
"timestamp_shi" : new Date(2017,01,17,23,00),
"mouda": ["��� �����"],
"mechir" :"100,000"
},
{"num_hzm" : "525852",
"num_tm" : "123698",
"status": "4 מאושרת",
"matrat_hvl" : "������ ������",
"kod_rechev" : "3000",
"rechev_name" : "�������",
"kamot_rechev" : "1",
"timestamp_hit" : new Date(2017,01,17,06,00),
"timestamp_shi" : new Date(2017,01,17,23,00),
"mouda": ["���� ����"],
"mechir" :"60,000"}
];

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.safeApply = function(fn) {
  var phase = this.$root.$$phase;
  if(phase == '$apply' || phase == '$digest') {
    if(fn && (typeof(fn) === 'function')) {
      fn();
    }
  } else {
    this.$apply(fn);
  }
};

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('OrderCtrl', function($scope) {
  $scope.order = [
    { title: 'asd', id: 1 },
    { title: 'fds', id: 2 },
    { title: 'asd', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
 $scope.datepaln = new Date("02-17-2017");

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('CalendarCtrl', function($scope, $stateParams) {
  $scope.eventSource = [{
    title:data[0].matrat_hvl,
    startTime:data[0].timestamp_hit,
    endTime:data[0].timestamp_shi//,
    //allDay:false
  },
  {
    title:data[1].matrat_hvl,
    startTime:data[1].timestamp_hit,
    endTime:data[1].timestamp_shi//,
    //allDay:false
  },
  {
    title:data[2].matrat_hvl,
    startTime:data[2].timestamp_hit,
    endTime:data[2].timestamp_shi//,
    //allDay:false
  }]
})


.controller('CurrentHzmCtrl', function($scope, $stateParams) {
  

    $scope.add = add;
    $scope.hzm = 
                  {
                  "אסמכתא" : "456427",
                  "תמ\"ש" : "121212",
                  "סטטוס": "4 מאושר",
                  "מטרת הובלה" : "חרדים מקווה",
                  "קוד רכב" : "1600",
                  "שם רכב" : "מידיבוס",
                  "כמות רכב" : "1",
                  "תאריך התייצבות" : "17-02-2017",
                  "זמן התייצבות" :"05:00",
                  "תאריך שחרור" : "17-02-2017",
                  "זמן שחרור": "10:30",
                  "מועדות": ["מרחב מרכז", "חולון"],
                  "מחיר" :"23,244"
                }
                ;

    $scope.data = [
        {
            name: "AiA",
            code: "AI101",
            limit: 25000,
            account: "Life Insurance"
        },
        {
            name: "Cargills",
            code: "CF001",
            limit: 30000,
            account: "Food City"
        }
    ]


    function add(index) {
        window.alert("Added: " + index);
    }
})
;
