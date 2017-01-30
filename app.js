(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
   this.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItems();

  toBuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


function ShoppingListCheckOffService() {
  var service = this;
  var boughtItems = [];
  var boughtItem ='';

  // List of shopping items
  var items = [ {name:'cookies', quantity:10},
    {name:'chocos', quantity:20},
    {name:'sweets', quantity:12},
    {name:'pastries', quantity:23},
    {name:'corks', quantity:40},
    {name:'balls', quantity:60}];

  this.removeItem = function (itemIdex) {
    var spliced = items.splice(itemIdex, 1);
    boughtItems.push( boughtItem ={name:spliced[0].name,quantity:spliced[0].quantity} );
  };

  this.getItems = function () {
    return items;
  };

  this.getBoughtItems = function(){
    return boughtItems;
  };
}

})();
