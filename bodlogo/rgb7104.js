function lowerofFour (num1, num2, num3, num4){
    if (num1 < num2 && num1 < num3 && num1 < num4) {
        console.log(num1);
    }else if (num2 < num1 && num2 < num3 && num2 < num4) {
        console.log (num2)
    } else if (num3 < num1 && num3 < num2 && num3 < num4) {
        console.log(num3);
    } else {
        console.log(num4);
    }
}
lowerofFour (1000, 200, 30, 40)