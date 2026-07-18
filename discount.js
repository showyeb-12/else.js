const totalAmmount = 5000;

if(totalAmmount > 5000){
    const discount = 30;
    const discountAmmount = totalAmmount/100*discount;
    const payment = totalAmmount - discountAmmount;
    console.log(payment);
}
else if (totalAmmount > 1000){
    const discount = 10;
    const discountAmmount = totalAmmount/100*discount;
    const payment = totalAmmount - discountAmmount
    console.log('please pay')             
}
           