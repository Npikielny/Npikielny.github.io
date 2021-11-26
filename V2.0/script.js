const selector1 = document.querySelector('#selector1');
const selector2 = document.querySelector('#selector2');
const selector3 = document.querySelector('#selector3');

selector1.addEventListener('click', selector1Pressed);
selector2.addEventListener('click', selector2Pressed);
selector3.addEventListener('click', selector3Pressed);

function selector1Pressed() {
    selector1.style.backgroundColor = "white";
    selector2.style.backgroundColor = "#117bff";
    selector3.style.backgroundColor = "#117bff";
    console.log("1");
}
function selector2Pressed() {
    selector1.style.backgroundColor = "#117bff";
    selector2.style.backgroundColor = "white";
    selector3.style.backgroundColor = "#117bff";
    console.log("2");
}
function selector3Pressed() {
    selector1.style.backgroundColor = "#117bff";
    selector2.style.backgroundColor = "#117bff";
    selector3.style.backgroundColor = "white";
    console.log("3");
}

selector1Pressed();

function didScroll() {
    // let pos = document.body.scrollHeight;
    // let view = document.body;
    let pos = document.querySelectorAll('[ref="table_container"]').scrollLeft;
    console.log(pos);
    console.log("fug");
}

// document.onscroll = function() {
//   let pos = getVerticalScrollPercentage(document.body) * 3;
//   if pos == 0 {
//       selector1Pressed();
//   }
//   if pos == 1 {
//       selector2Pressed();
//   }
//   if pos == 2 || pos == 3 {
//       selector3Pressed();
//   }
// }
