function shoppingListController(){

    app.controller('shoppingListController', function() {
        $location.path("home");

    })
    }
    app.component('shoppinglist',{
        templateUrl:'app/navigation/shopping-list/shopping-list.html',
        controller: shoppingListController,
        controllerAs:'vm'
    });