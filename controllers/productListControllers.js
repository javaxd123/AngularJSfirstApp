angular.module("sportStore")
    .constant("productListActiveClass","btn-primary")
    .constant("productListPageCount",3)
    .controller("productListCtrl", function ($scope, $filter,productListActiveClass,productListPageCount) {

        var selectedCategory = null;
        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;



        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function(newPage){
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null || product.category == selectedCategory;
        }

        $scope.activeListClass = function(category){
            return selectedCategory == category ? productListActiveClass : "";
        }

        $scope.activePageClass = function(page){
            return $scope.selectedPage == page ? productListActiveClass : "";
        }

    });