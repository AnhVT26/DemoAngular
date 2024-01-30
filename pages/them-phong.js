app.controller('themPhongCtrl', function ($scope, $http) {
    $scope.phong = {
        id: 0,
        ten: '',
        loai: '',
        soLuong: 0
    }

    $scope.formInvalid = false;
    $scope.formInvalidMessage = '';

    $scope.onClickCreate = function () {
        $scope.formInvalid = false;
        $scope.formInvalidMessage = '';

        //check nhập đủ
        if ($scope.phong.ten === '' || $scope.phong.loai === '' || $scope.phong.id === '' || $scope.phong.id === 0 || $scope.phong.soLuong === '' || $scope.phong.soLuong === 0) {
            $scope.formInvalid = true;
            $scope.formInvalidMessage = 'Yêu cầu nhập đầy đủ các trường thông tin';
            return;
        }
        if (isNaN($scope.phong.id) || isNaN($scope.phong.soLuong)) {
            $scope.formInvalid = true;
            $scope.formInvalidMessage = 'ID và số lượng phải là số!!!';
            return;
        }


        $http({
            method: 'POST',
            url: 'http://localhost:3000/Phong',
            data: $scope.phong
        }).then(function () {
            alert('Thêm thành công')
        })
    }
})