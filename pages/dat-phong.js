app.controller('datPhongCtrl', 'phongCtrl', function($scope, $http, $routeParams) {
    // Khởi tạo đối tượng datPhong và phong
    $scope.datPhong = {
        id: 0,
        tenKhach: '',
        sodienthoai: '',
        ngayDat: '',
        idPhong: 0,
        soLuong: 0
    };

    $scope.phong = {
        id: 0,
        ten: '',
        loai: '',
        soLuong: 0
    };

    // Gửi yêu cầu GET để lấy thông tin phòng từ server
    $http({
        method: 'GET',
        url: 'http://localhost:3000/Phong/' + $routeParams.idPhong
    })
    .then(function(response) {
        // Gán dữ liệu phòng từ server vào $scope.phong
        $scope.phong = response.data;

        // Gán id phòng vào datPhong.idPhong sau khi dữ liệu đã được tải về
        $scope.datPhong.idPhong = $scope.phong.id;
    })
    .catch(function(error) {
        // Xử lý lỗi nếu có
        console.error('Lỗi khi lấy thông tin phòng:', error);
    });

    // Hàm xử lý khi người dùng nhấn nút đặt phòng
    $scope.onClickDatPhong = function() {
        // Gửi yêu cầu POST để đặt phòng lên server
        $http({
            method: 'POST',
            url: 'http://localhost:3000/DatPhong',
            data: $scope.datPhong
        })
        .then(function(response) {
            // Xử lý khi đặt phòng thành công
            alert('Đặt phòng thành công');
        })
        .catch(function(error) {
            // Xử lý khi đặt phòng không thành công
            console.error('Lỗi khi đặt phòng:', error);
            alert('Đặt phòng không thành công. Vui lòng thử lại sau.');
        });
    };
});
