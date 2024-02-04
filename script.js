let bagItems = [];
onLoad();

console.log(bagItems);
function addToBag(itemId) {
    // if (bagItems.includes(itemId)) {
    //     return;
    // }
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
    console.log('Item added to bag!');
   
    let clickedButton = event.currentTarget; // 'event' is assumed to be the click event
    if (clickedButton) {
        clickedButton.innerText = 'Added';
        clickedButton.disabled = true;
    }

}

function displayBagIcon() {
    let bagItemCount = document.querySelector('.cart-count');
    if (bagItems.length > 0) {
        // console.log('I am here');
        bagItemCount.style.visibility = 'visible';
        bagItemCount.innerText = bagItems.length;
    } else {
        bagItemCount.style.visibility = 'hidden';
    }
}

// function updateCartCount(){
//     displayBagIcon();
// }


function displayItemOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement) {
        return;
    }
    let innerhtml = '';
    items.forEach(item => {
        innerhtml += `
        <div class="item-container">
          <img src="${item.image}" alt="item-image">
          <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
          <br>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
         <div class="price">
            <span class="current-price">Rs. ${item.current_price}
            </span>
            <span class="original-price">Rs. ${item.original_price}
            </span> 
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
            <button class="add-bag-btn" onclick="addToBag(${item.id});  ">Add To Bag</button>
        </div>`
    });
    itemsContainerElement.innerHTML = innerhtml;
}


// function changeButtonText() {
//     let addButton = document.querySelectorAll('.add-bag-btn');
//     addButton.textContent = 'Added'
// }



console.log(bagItems);

function onLoad() {
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemOnHomePage();
    displayBagIcon();
    // updateCartCount();
}
