function Total()
{
 var myForm = document.form1;

 var jumlah1 = parseInt(myForm.jumlah1.value);
 var jumlah2 = parseInt(myForm.jumlah2.value);
 var jumlah3 = parseInt(myForm.jumlah3.value);
 var jumlah4 = parseInt(myForm.jumlah4.value);

 if(myForm.jumlah1.value == "") jumlah1=0;
 if(myForm.jumlah2.value == "") jumlah2=0;
 if(myForm.jumlah3.value == "") jumlah3=0;
 if(myForm.jumlah4.value == "") jumlah4=0;

 var subTotal1 = parseInt(myForm.harga1.value)*jumlah1;
 var subTotal2 = parseInt(myForm.harga2.value)*jumlah2;
 var subTotal3 = parseInt(myForm.harga3.value)*jumlah3;
 var subTotal4 = parseInt(myForm.harga4.value)*jumlah4;

 myForm.total.value = subTotal1 + subTotal2 + subTotal3 + subTotal4;
}

function diskon()
{
 var myForm = document.form1;
 
 if(myForm.total.value < 100000){

  myForm.potongan.value = "0%";
 } else{
 	myForm.potongan.value = myForm.total.value * 0.15;
 }
}

function TotalBayar()
{
 var myForm = document.form1;

 myForm.bayar.value = parseInt(myForm.total.value) - parseInt(myForm.potongan.value);
}

function tampil()
{
 Total();
 diskon();
 TotalBayar();
}

function cancel()
{
 var myForm = document.form1;

 myForm.jumlah1.value = "";
 myForm.jumlah2.value = "";
 myForm.jumlah3.value = "";
 myForm.jumlah4.value = "";
 myForm.total.value = "";
 myForm.potongan.value = "";
 myForm.bayar.value = "";
}
