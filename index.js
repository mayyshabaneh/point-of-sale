let createCat = document.getElementById("createcat");
let createItem = document.getElementById("createItem");
let addCatDiv = document.getElementById("addCat");
let addItemDiv = document.getElementById("additem");
let formC = document.getElementById("formC");
let formI = document.getElementById("formI");
let catName = document.getElementById("Cname");
let subCat = document.getElementById("subCat");
let catId = document.getElementById("catId");
let price = document.getElementById("price");
let pcs = document.getElementById("Pcs");
let itemName = document.getElementById("ItemName");
let statuss = document.getElementById("status");
let addNew = document.getElementById("addNew");
let makeOrd = document.getElementById("makeOrd");
async function CreateCategoryCart() {
  const response = await fetch("http://192.168.1.136:8000/category/");
  const data = await response.json();
  const contentCat = document.getElementById("content-cat");
  contentCat.style.visibility = "hidden";
  let i = 1;
  const arrCat = data.map(async (cat) => {
    const contentCatCart = document.createElement("div");
    if (i <= 8) {
    } else {
      i = 1;
    }
    contentCatCart.className = `content-cat-cart content-cat-cart${i}`;
    contentCatCart.id = "content-cat-cart";
    contentCat.appendChild(contentCatCart);

    const contentCatCartInf = document.createElement("div");
    contentCatCartInf.className = "content-cat-cart-inf";
    contentCatCart.appendChild(contentCatCartInf);
    i++;
    const span1 = document.createElement("span");
    span1.className = "content-cat-cart-inf-span1";
    span1.innerHTML = cat.name;

    const span2 = document.createElement("span");

    span2.className = "content-cat-cart-inf-span2";
    console.log(cat.item_count);

    span2.innerHTML =
      length === 1 ? `${cat.item_count} item` : `${cat.item_count} items`;

    contentCatCartInf.appendChild(span1);
    contentCatCartInf.appendChild(span2);

    contentCatCart.addEventListener("click", () =>
      CreateOrderCart(cat.category_id)
    );
    return contentCatCart;
  });

  // arrCat.forEach((element) => {
  //   contentCat.appendChild(element);
  // });
  contentCat.style.visibility = "visible";
}

async function CreateOrderCart(id) {
  const contentOrder = document.getElementById("content-order");

  const response = await fetch(
    `http://192.168.1.136:8000/category/${id}/items`
  );
  contentOrder.innerHTML = "";
  const data = await response.json();

  data.forEach((item) => {
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
  });
}

async function addNewItem() {
  formI.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(formI);
    console.log(Array.from(data));
    try {
      const res = await fetch(`http://192.168.1.136:8000/item/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: itemName.value,
          pcs: pcs.value,
          price: price.value,
          category_id: catId.value,
        }),
      });
      itemName.value = "";
      pcs.value = "";
      price.value = "";
      catId.value = "";
      statuss.innerHTML = "Added new item is DONE";
      statuss.style.backgroundColor = "green";
      statuss.style.display = "block";
    } catch (error) {
      statuss.innerHTML = "Added new item is FAIL";
      statuss.style.backgroundColor = "red";
    }
  });
  createItem.addEventListener("click", () => {
    addCatDiv.style.display = "none";
    addItemDiv.style.display = "block";
  });
  formC.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("http://192.168.1.136:8000/category/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: catName.value }),
      });

      catName.value = "";
      statuss.innerHTML = "Added new Category is DONE";
      statuss.style.backgroundColor = "green";
      statuss.style.display = "block";
    } catch (error) {
      statuss.innerHTML = "Added new Category is FAIL";
      statuss.style.backgroundColor = "red";
    }
  });
  createCat.addEventListener("click", () => {
    addItemDiv.style.display = "none";
    addCatDiv.style.display = "block";
  });
}
makeOrd.addEventListener("click", CreateCategoryCart());
addNew.addEventListener("click", addNewItem());
