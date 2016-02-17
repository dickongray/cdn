var app = angular.module('app', []);

app.controller('linksCtrl', function($scope){
	$scope.links = [
		{
			name: 'jQuery',
			url: 'ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
			type: 'js'
		},{
			name: 'Bootstrap',
			url: 'maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css',
			type: 'css'
		},{
			name: 'AngularJS',
			url: 'ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js',
			type: 'js'
		},{
			name: 'Lo-Dash',
			url: 'cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js',
			type: 'js'
		},{
			name: 'D3',
			url: 'cdnjs.cloudflare.com/ajax/libs/d3/3.4.12/d3.min.js',
			type: 'js'
		},{
			name: 'Font Awesome',
			url: 'maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css',
			type: 'css'
		},{
			name: 'SlidesJS',
			url: 'cdnjs.cloudflare.com/ajax/libs/slidesjs/3.0/jquery.slides.min.js',
			type: 'js'
		},{
			name: 'LocalScroll',
			url: 'cdnjs.cloudflare.com/ajax/libs/jquery-localScroll/1.3.5/jquery.localScroll.min.js',
			type: 'js'
		},{
			name: 'scrollTo',
			url: 'cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/1.4.11/jquery.scrollTo.min.js',
			type: 'js'
		},{
			name: 'Hammer.js',
			url: 'cdnjs.cloudflare.com/ajax/libs/hammer.js/1.1.3/hammer.min.js',
			type: 'js'
		},{
			name: 'Open Sans',
			url: 'fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800',
			type: 'css'
		},{
			name: 'Roboto',
			url: 'fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic',
			type: 'css'
		},{
			name: 'Poly',
			url: 'fonts.googleapis.com/css?family=Poly:400,400italic',
			type: 'css'
		},{
			name: 'Raleway',
			url: 'fonts.googleapis.com/css?family=Raleway:400,200,100,300,500,600,700,800,900',
			type: 'css'
		}
	]

	$scope.current_link = '';
	$scope.current_url = '';
	$scope.show_tag = true;
	$scope.protocol = '//';

	$scope.set_link = function(link){
		$scope.current_link = link;
		$scope.update_tag();
	}

	$scope.unfocus = function(e){
		$scope.focus = false;
	}

	$scope.update_tag = function(){

		if($scope.current_link != ''){
			if($scope.show_tag){
				if($scope.current_link.type == 'js'){
					$scope.current_url = js_html.replace('%s', $scope.protocol + $scope.current_link.url);
				}else if($scope.current_link.type == 'css'){
					$scope.current_url = css_html.replace('%s', $scope.protocol + $scope.current_link.url);
				}
			}else{
				$scope.current_url = $scope.protocol + $scope.current_link.url;
			}
			
		}
		$scope.focus = true;
	}

})

var js_html  = '<script src="%s"></script>';
var css_html = '<link rel="stylesheet" href="%s">';

app.directive('a', function() {
	return {
		restrict: 'E',
		link: function(scope, elem, attrs) {
			if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
				elem.on('click', function(e){
					e.preventDefault();
				});
			}
		}
	};
});

app.directive('syncFocusWith', function($timeout, $rootScope) {
	return {
		restrict: 'A',
		scope: {
			focusValue: "=syncFocusWith"
		},
		link: function($scope, $element, attrs) {
			$scope.$watch("focusValue", function(currentValue, previousValue) {
				if (currentValue == true && !previousValue) {
					$element[0].focus();
				} else if (currentValue === false && previousValue) {
					$element[0].blur();
				}
			})
		}
	}
});

app.directive('selectOnClick', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			element.on('click, focus', function () {
				this.select();
			});
		}
	};
});