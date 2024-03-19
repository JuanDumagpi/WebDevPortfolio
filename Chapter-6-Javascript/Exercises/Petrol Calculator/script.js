/* math time function that executes when the calculate button is pressed */
function mathtime (){
    /* variables take with getElementById refers to the tagged ids in the html */
    /* parseFloat here will make sure that the value we get from getElementById is turned into a Float value, a decimal number only */
    var cost = parseFloat(document.getElementById('cost').value);
    var liters = parseFloat(document.getElementById('liters').value);
    /* multiplies the cost and liters to get the total amount to pay */
    var total = cost * liters;

/* this shows the total variable and adds a dollar sign to it at the span with the total ID */
document.getElementById("total").innerHTML= "$" + total;
}