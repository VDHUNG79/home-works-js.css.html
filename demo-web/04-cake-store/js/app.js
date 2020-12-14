// document.getElementById('cart-info').addEventListener('click', function () {
//     const cart = document.getElementById('cart');
//     cart.classList.toggle('show-cart');
//     console.log(cart);
// });

// show cart
(function () {
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

  cartInfo.addEventListener('click', function () {
    cart.classList.toggle('show-cart');
  });
})();

// add item to the cart
(function () {
  const cartBtn = document.querySelectorAll('.store-item-icon');

  cartBtn.forEach(function (btn) {
    btn.addEventListener('click', function (event) {

      // console.log(event.target);
      if (event.target.parentElement.classList.contains('store-item-icon')) {
        let fullPath = event.target.parentElement.previousElementSibling.src;

        let pos = fullPath.indexOf('img') + 3;
        // console.log(fullPath);

        let partPath = fullPath.slice(pos);
        // console.log(partPath);

        const item = {};
        item.img = `img-cart${partPath}`;
        // console.log(item);

        // let name = event.target.parentElement.parentElement.nextElementSibling;
        // console.log(name);

        // let name = event.target.parentElement.parentElement.nextElementSibling.children[0];
        // console.log(name);

        // let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0];
        // console.log(name);

        let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
        item.name = name;
        // console.log(name);

        let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
        // console.log(price);

        // cut the $ sign in the price - trim() is for removing all extra white spaces
        let finalPrice = price.slice(1).trim();
        item.price = finalPrice;
        // console.log(finalPrice);
        console.log(item);

        // Put content in Card
        const cartItem = document.createElement('div');
        cartItem.classList.add(
          'cart-item',
          'd-flex',
          'justify-content-between',
          'text-capitalize',
          'my-3'
        );
            cartItem.innerHTML =
            `
              <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
              <div class="item-text">
                <p id="cart-item-title" class="font-weight-bold mb-0">
                  ${item.name} 
                </p>
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price mb-0">${item.price} </span>
              </div>
              <a href="#" id="cart-item-remove" class="cart-item-remove">
                <i class="fas fa-trash"></i>
              </a>
            `;
      // select cart 
        const cart = document.getElementById('cart');
        const total = document.querySelector('.cart-total-container');

        cart.insertBefore(cartItem, total);
        alert('item added to the cart');

        // show Total in the box
        showTotals();

      }
    });
  });

  // function showTotals() {}
  function showTotals() {
    // console.log('hello');
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach(function (item) {
      // total.push(item.textContent);
      // total.push(item.textContent); show all the price as String, so have convert to number
      total.push(parseFloat(item.textContent));
    });
    // console.log(total);

    const totalMoney = total.reduce(function (total, item) {
      total += item;
      return total;
    }, 0)
    // reduce need initial value link 0
    // console.log(totalMoney);
    
    const finalMoney = totalMoney.toFixed(2);
    // is reduce number like $10.4526 to $10.45
    // console.log(totalMoney);

    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;
  }
})();