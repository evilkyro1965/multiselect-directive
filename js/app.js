var mainApp = angular.module("mainApp",[]);

mainApp.controller("mainController", function($scope){

	$scope.userlist = [
		{'id':'1','name':'fahrur'},
		{'id':'2','name':'razi'}
	];
    $scope.selected = new Array();

});

mainApp.directive('multiselect', function () {
    return {
        scope : {
            data : "=data",
            selected : "=selected",
            label : "@label"
        },   
        templateUrl : "template/multiselect.html",
        link: function (scope, element, attrs) {
            var choiceBox = angular.element(element[0].querySelector('.choiceBox'));
            var selectedBox = angular.element(element[0].querySelector('.selectedBox'));
            for(var i=0;i<scope.data.length;i++) {
                choiceBox.append("<a dataindex='"+i+"''>"+scope.data[i][scope.label]+"</a>");
            }
            choiceBox.find("a").on('click',function(event){
                var dataIndex = $(this).attr("dataindex");
                var findIndex = scope.selected.indexOf(dataIndex);
                if(findIndex==-1) {
                    var label = scope.data[dataIndex][scope.label];
                    scope.selected.push(dataIndex);
                    scope.$apply(function () {
                        console.log(scope.selected);
                        selectedBox.append("<a dataindex='"+dataIndex+"''>"+label+"</a>");
                    });
                }
            });
        }
    };
});

