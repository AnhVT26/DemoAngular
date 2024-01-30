app.controller('trangChuCtrl', function($scope, $http){
    $scope.dsPhong = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/Phong'
    }).then(function(response){
        $scope.dsPhong = response.data
    })
})