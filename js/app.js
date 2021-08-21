// selectiong 8gb memory
document.getElementById("memory-8-add").addEventListener('click',function(){
    itemUpdate("memory",0);
    priceUpdate();
});
// selectiong 16gb memory

document.getElementById("memory-16-add").addEventListener('click',function(){
    itemUpdate("memory",180);
    priceUpdate();
});
// selecting 256 gb storage
document.getElementById("storage-256-add").addEventListener('click',function(event){
    itemUpdate("storage",0);
    priceUpdate();
});
// selecting 5212 gb storage
document.getElementById("storage-512-add").addEventListener('click',function(){
    itemUpdate("storage",100);
    priceUpdate();
});
// selecting 1 TB storage
document.getElementById("storage-1tb-add").addEventListener('click',function(){
    itemUpdate("storage",180);
    priceUpdate();
});

// selecting delivery for 25 aug
document.getElementById("delivery-21-add").addEventListener('click',function(){
    itemUpdate("delivery",0);
    priceUpdate();
});
// selecting delivery for 21 aug
document.getElementById("delivery-25-add").addEventListener('click',function(){
    itemUpdate("delivery",20);
    priceUpdate();
});

// updating all items cost
function itemUpdate(addtionalItem,cost){
    const costText=document.getElementById(addtionalItem + "-cost");
    costText.innerText= cost;
}

// updating totla price
function priceUpdate(){
    const bestPrice = 1299;
    const memoryCost= document.getElementById("memory-cost").innerText;
    const storageCost= document.getElementById("storage-cost").innerText;
    const deliveryCharge= document.getElementById("delivery-cost").innerText;
    const totalPriceText=document.getElementById("total-cost");
  let totalPrice =  bestPrice+  parseInt(memoryCost ) + parseInt(storageCost ) + parseInt(deliveryCharge ) ;
  totalPriceText.innerText= totalPrice;
  document.getElementById("final-total").innerText= totalPrice;
 return totalPrice;
}

// applying promo code
function promoCode(){
    promoInput= document.getElementById("promo-code");
    totalPrice= priceUpdate();
    const newTotal= totalPrice-(totalPrice*20/100).toFixed(2);
    if(promoInput.value=="stevekaku"){
        document.getElementById("final-total").innerText= newTotal;
    }
}