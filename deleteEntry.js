//import { AlertController } from 'ionic-angular';
/*export class MyPage {
  constructor(public alertCtrl: AlertController) {
  }*/


function deleteEntry(){
var r = confirm("Do you want to delete this entry?");
if (r == true) {
    var gparent = document.getElementById("ion-content");
    var parent = document.getElementById("FoodButtons");
	var child = document.getElementById("eggos");
	var list = document.getElementById("myList");
	parent.removeChild(child);s
}
else {}
}
