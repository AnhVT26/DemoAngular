app.controller('phongCtrl', function($scope, $http){
    $scope.dsPhong = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/Phong'
    }).then(function(response){
        $scope.dsPhong = response.data
    })

    //confirm xóa và xóa
    $scope.confirmDelete = function(id) {
        let check = confirm("Bạn có chắc chắn muốn xóa?")
        if(check){
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/Phong/' + id
            }).then(function(){
                alert('Xóa thành công')
            })
        }
    }
})