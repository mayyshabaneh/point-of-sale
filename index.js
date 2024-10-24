async function createOrderCart() {
  const response = await fetch("http://192.168.1.136:8000/category/");
  const data = await response.json();
  const contentOrderDiv = document.getElementById("content-order");

  const contentOrderCart = document.createElement("div");
  contentOrderCart.className = "content-order-cart";
  contentOrderCart.id = "content-order-cart";

  for (const cat of data) {
    const contentOrderInf = document.createElement("div");
    contentOrderInf.className = "content-order-cart-inf";
    contentOrderInf.id = "content-order-cart-inf";
    contentOrderCart.appendChild(contentOrderInf);
    const headerCart = document.createElement("div");
    headerCart.className = "content-order-cart-head";
    headerCart.id = "content-order-cart-head";
    const spanHead = document.createElement("span");
    spanHead.innerHTML = "orders---kitchen";
    headerCart.appendChild(spanHead);
    contentOrderInf.appendChild(headerCart);
    const contentCartBody = document.createElement("div");
    contentCartBody.className = "content-order-cart-body";
    contentCartBody.id = "content-order-cart-body";

    const spanName = document.createElement("span");
    spanName.className = "content-order-cart-inf-span1";
    spanName.innerHTML = cat.name;
    contentCartBody.appendChild(spanName);

    const spanPrice = document.createElement("span");
    spanPrice.className = "content-order-cart-inf-span2";
    spanPrice.innerHTML = cat.name + "$";
    contentCartBody.appendChild(spanPrice);

    contentOrderInf.appendChild(contentCartBody);
  }

  contentOrderDiv.appendChild(contentOrderCart);
}
async function CreateCategoryCart() {
  const response = await fetch("http://192.168.1.136:8000/category/");
  const data = await response.json();
  const contentCart = document.getElementById("content-cat");
  const contentCatCard = document.createElement("div");
  contentCatCard.className = "content-cat-cart-inf";
  contentCatCard.id = "content-cat-cart";

  for (const cat of data) {
    const span = document.createElement("span");
    span.className = "content-cat-cart-inf-span1";
    span.innerHTML = cat.name;
    const imgd = document.createElement("img");
    formData.append("image", imgurl);
    contentCatCard.appendChild(span);
    contentCatCard.appendChild(imgd);
    contentCart.appendChild(contentCatCard);
    console.log(imgd.src);
 
  }   
  const formData = new FormData();
    const imgurl =
      "C:/Users/IZtech-MShabaneh/Downloads/diagram-export-8-8-2024-2_23_24-PM.png";
    formData.append("img_url", imgurl);
    fetch("http://192.168.1.136:8000/category/", {
      method: "POST",
      body: formData,
    }).then(() => console.log("success"));
}

createOrderCart();
CreateCategoryCart();
