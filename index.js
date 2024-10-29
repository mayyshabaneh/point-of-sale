
async function CreateCategoryCart() {
    const response = await fetch("http://192.168.1.136:8000/category/");
    
    const data = await response.json();
    const contentCat = document.getElementById("content-cat");
    let i = 1;
    for (const cat of data) {
      const contentCatCart = document.createElement("div");
      contentCatCart.className = `content-cat-cart content-cat-cart${i}`;
      contentCatCart.id = "content-cat-cart";
      contentCat.appendChild(contentCatCart);

      const contentCatCartInf = document.createElement("div");
      contentCatCartInf.className = "content-cat-cart-inf";
      contentCatCart.appendChild(contentCatCartInf);

      const span1 = document.createElement("span");
      span1.className = "content-cat-cart-inf-span1";
      span1.innerHTML = cat.name;

      const span2 = document.createElement("span");
      const data2 = await fetch(`http://192.168.1.136:8000/category/${cat.category_id}/items`);
     
      const items = await data2.json();
      const length = items.length;

      span2.className = "content-cat-cart-inf-span2";
      span2.innerHTML = length === 1 ? `${length} item` : `${length} items`;

      contentCatCartInf.appendChild(span1);
      contentCatCartInf.appendChild(span2);

      contentCatCart.addEventListener("click", () => CreateOrderCart(cat.category_id));
      i++;
    }
}

async function CreateOrderCart(id) {
    const contentOrder = document.getElementById("content-order");
    const response = await fetch(`http://192.168.1.136:8000/category/${id}/items`);
    contentOrder.innerHTML = "";
    const data = await response.json();
    for (const item of data) {
      const contentOrderCard = document.createElement("div");
      contentOrderCard.className = "content-order-cart";
      contentOrder.appendChild(contentOrderCard);

      const contentBorder = document.createElement("div");
      contentBorder.className = "content-order-border";
      contentOrderCard.appendChild(contentBorder);

      const contentOrderInf = document.createElement("div");
      contentOrderInf.className = "content-order-cart-inf";
      contentOrderCard.appendChild(contentOrderInf);

      const contOrderHead = document.createElement("div");
      contOrderHead.className = "content-order-cart-head";
      contentOrderInf.appendChild(contOrderHead);

      const spanHead = document.createElement("span");
      spanHead.innerHTML = "Orders ---- Kitchen";
      contOrderHead.appendChild(spanHead);

      const contOrderBody = document.createElement("div");
      contOrderBody.className = "content-order-cart-body";
      const spanOrderName = document.createElement("span");
      spanOrderName.className = "content-order-cart-inf-span1";
      spanOrderName.innerHTML = item.name;
      contOrderBody.appendChild(spanOrderName);

      const spanOrderPrice = document.createElement("span");
      spanOrderPrice.className = "content-order-cart-inf-span2";
      spanOrderPrice.innerHTML = `${item.price} $`;
      contOrderBody.appendChild(spanOrderPrice);
      contentOrderInf.appendChild(contOrderBody);
    }
 
}

CreateCategoryCart();
