/**
 * Created by wlehman on 5/25/14.
 */
angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", function ($scope, $filter, productListActiveClass, productListPageCount) {

        var selectedCategory = null;

        $scope.selectedPage = 1;

        /**
         * Paging - this is injected from the default constant of 3
         * - define it in the $scope so it can be accessed in the view
         */
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;

            /**
             * Default selected page
             * @type {number}
             */
            $scope.selectedPage = 1;
        }

        /**
         * behavior - allows the selected page to be changed
         * function to select page in the UI
         * @param newPage
         */
        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null ||
                product.category == selectedCategory;
        }

        $scope.getCategoryClass = function (category) {
            console.log("category :: " + category);
            console.log("selected category :: " + selectedCategory);
            return selectedCategory == category ? productListActiveClass : "";
        }

        /**
         * designed for use with the ng-class directive to highlight the selected page
         * @param page
         * @returns {*}
         */
        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }
    });

