let Category = document.getElementById("Category");
Category.addEventListener("mouseover", () => {
  let banner = document.getElementById("banner-2");
  banner.style.display = "block";
});
document.body.addEventListener("click", () => {
  let banner = document.getElementById("banner-2");
  banner.style.display = "none";
});

let addData=document.getElementById("add");
let localData = JSON.parse(localStorage.getItem("favcart")) || [];
console.log(localData);
function displayData(data) {
  console.log(data);
  addData.innerHTML = null;
  data.forEach((element,index) => {

    let ancor=document.createElement("a");
    ancor.setAttribute("href", "../ClickPart/ClickPart.html")

    let div1 = document.createElement("div");
    let image=document.createElement("img");
    image.setAttribute("src", element.Image);
    let name=document.createElement("h3");
    name.setAttribute("id", "ellips")
    name.innerText=element.Product;
    let price=document.createElement("h3");
    price.setAttribute("id","price")
    price.innerText="$ "+ element.Price;
    let flash=document.createElement("span");
    flash.innerText=element.sale;
    let Delete=document.createElement("button");
    Delete.innerText="Delete"

    Delete.addEventListener("click", ()=>{
      localData.splice(index, 1);
      localStorage.setItem("favcart", JSON.stringify(localData));
      displayData(localData)
    })

    div1.append(image,name,price,flash,Delete)
    ancor.append(div1)
    addData.append(ancor)
  });
}

displayData(localData);
