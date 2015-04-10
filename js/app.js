var mainApp = angular.module("mainApp",[]);

mainApp.controller("mainController", function($scope){

	$scope.userlist = [
		{'id':'1','name':'fahrur'},
		{'id':'2','name':'razi'}
	];

});

mainApp.directive('multiselect', function () {
    return {
        scope : {
            data : "=data",
            label : "@label"
        },   
        //templateUrl : "template/multiselect.html",
        template: '<div class="multiselect">'+
	'<div class="selectedBox">'+

	'</div>'+
	'<div class="choiceBox">'+
		//'<a href="javascript:;" ng-repeat="row in data">{{row[label]}}</a>'+
	'</div>'+
'</div>',
        link: function (scope, element, attrs) {
        	var div = angular.element(element.children()[0]);
        	var selectedBox = angular.element(div.children()[0]);
        	var selectedBox2 = angular.element(element.find(".selectedBox"));
        	//selectedBox.html("test");
        	selectedBox2.html("test");
        },
        controller: function ($scope, $element, $attrs) {
		},
		transclude: true
    };x
});

