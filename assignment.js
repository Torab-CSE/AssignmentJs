//1//kilometerToMeter

var result;
function kilometerToMeter(kilo){
    if(kilo>=0){
        var result=kilo*1000;
    }
        else{
            result="Note:Distance can not be negative.Please,enter positive value of kilometer."
            }
return result;
}

var meter=kilometerToMeter(5);
console.log(meter);



//2//budgetCalculator

function budgetCalculator(watch,phone,laptop){
    if(watch>=0 && phone>=0 && laptop>=0){
        var watchCost=50*watch;
        var phoneCost=100*phone;
        var laptopCost=500*laptop;
        var total=watchCost+phoneCost+laptopCost;
    }
        else{
                total="please enter valid positive number only "
            }
  
return total;
}

var totalCost=budgetCalculator(0,2,2);
console.log(totalCost);


//3//hotelCost

function hotelCost(totalDay){
    var cost;
    var costPerDay=100;
    var secCostPerDay=80;
    var thirdCostPerDay=50;

    if(totalDay<=10){
         cost=costPerDay*totalDay;
    }
        else if(totalDay<=20){
            cost =costPerDay*10+(totalDay-10)*secCostPerDay;
        }
            else {
                 cost=costPerDay*10+secCostPerDay*10+(totalDay-20)*thirdCostPerDay;
            }
return cost;

}

var totalCost=hotelCost(11);
console.log(totalCost);



//4//megaFriend


function megaFriend(allName) {
    let container = "";
    for (let i = 0; i < allName.length; i++) {
      if (container.length < allName[i].length) {
        container = allName[i];
      }
    }
return container;
}

var allName=['jhankar', 'mahabub', 'sheikh','mujib'];
var largeName=megaFriend(allName);
console.log(largeName);




