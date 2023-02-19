let Category=document.getElementById("Category");
Category.addEventListener("mouseover", ()=>{
    let banner=document.getElementById("banner-2");
    banner.style.display="block"
})
document.body.addEventListener("click", ()=>{
    let banner=document.getElementById("banner-2");
    banner.style.display="none"
})


let recommendedData=[
    {
        id:1,
        Product:"Newest Kingsmith Walkingpad R2 English Version 12km Per Hour Fitness Equipment Sport Machine Indoor Treadmill For Running - EU",
        Price:739.00,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16687/goods_img-v1/9c69a7d8377c.jpg",
        sale:"Flash Sale",
    
    },
    {
        id:2,
        Product:"Wanbo T2 MAX Projector Global Version 1080P Mini LED Portable WIFI Full HD Projector 4K 1920 x 1080P Keystone Correction For Home - EU	",
        Price:175,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16687/goods_img-v1/bd9abf3b9d7e.jpg",
        sale:"Flash Sale"
    },
    {
        id:3,
        Product:"Aspirapolvere Robot Kyvol Cybovac E30 - EU	10",
        Price:199.00,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16685/goods_img_big-v1/8ba189964e33.jpg",
        sale:"Flash Sale"
    },
    {
        id:4,
        Product:"Dere Laptop MBook M11 15.6 Inch 12GB RAM 512GB SSD Intel Celeron N5095 with Fingerprint Unlock Backlit Keyboard Windows 10 Notebook - Silver 12GB 256GB EU",
        Price:499.00,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16652/goods_img_big-v1/f6bacc190fa6.jpg",
        sale:"Flash Sale"
    },
    {
        id:5,
        Product:"Xiaomi Aqara Two-way Control Module Wireless Relay Controller 2 Channels Work with Apple Homekit Mi Home APP - White",
        Price:27.99,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16493/goods_img_big-v1/a366f0bb3c43.jpg",
        sale:"Flash Sale"
    },
    {
        id:6,
        Product:"New 4K HD Dual Lens Wifi Mini Camera 170° Wide Angle Portable Mini Camera Night Vision Home Surveillance Car Dash Cam - Black",
        Price:17.69,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16571/goods_img_big-v3/8fe9d8ae4819.jpg",
        sale:"Flash Sale"
    },
    {
        id:7,
        Product:"Original Xiaomi Mi Band 7 Pro Smart Bracelet 1.64 inch AMOLED Screen GPS Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
        Price:67.99,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16621/goods_img_big-v9/b0cd2641f96c.jpg",
        sale:"Flash Sale"
    },
    {
        id:8,
        Product:"New Xiaomi Magnetic Wireless Power Bank 5000mAh P05ZM Mi Vertical Wireless Charger For iPhone 12 13 14 Pro Mag-safe - White China",
        Price:44.52,
        Image:"https://gloimg.gbtcdn.com/soa/gb/store/6878400698325856256/16652/goods_img_big-v1/6f6b92e796e0.jpg",
        sale:"Flash Sale"
    },
    {
        id:9,
        Product:"OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
        Price:349.00,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16454/goods_img_big-v1/42405dc55cb8.jpg",
        sale:"Flash Sale"
    },
    {
        id:10,
        Product:"ENGWE EP-2 PRO 2022 Upgrade Version 750W Folding Electric Bike 12.8Ah Fat Tire 45km/h Top Speed E Bike for Mountain Snowfield Road - Orange EU",
        Price:1049.00,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16552/goods_img_big-v5/338e1a4c7edb.jpg",
        sale:"Flash Sale"
    },
    {
        id:11,
        Product:"M-855 Wireless Router Wifi 300M Signal Amplifier Extender Router Signal Amplifier for Home - Black",
        Price:14.68,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16577/goods_img_big-v1/84225c6f6906.jpg",
        sale:"Flash Sale"
    },
    {
        id:12,
        Product:"Original Xiaomi Smart Magic Cube Bluetooth 3D Dynamic Teaching Six Axis Sensor Work With Mijia APP for Science Education Toy Gif - Multi China",
        Price:19.60,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6878400698325856256/16419/goods_img_big-v1/22549f61229b.jpg",
        sale:"Flash Sale"
    },
    {
        id:13,
        Product:"A9 Mini WiFi Video Surveillance 1080p HD Infrared Night Vision Wireless Remote Monitor Mini Camera - Black - China Black",
        Price:11.90,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6901174613791928320/16502/goods_img_big-v3/31d0d9d6c843.jpg",
        sale:"Flash Sale"
    },
    {
        id:14,
        Product:"Smartphone S22 Ultra 5G Cellular 6.8 Inch 6800mAh Android 11 Global Version 16GB 512GB Smart Cell Mobile Hand Phone Telefon - CLARET-1 16 512",
        Price:129.90,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16487/goods_img_big-v1/26ff9a54dea9.jpg",
        sale:"Flash Sale"
    },
    {
        id:15,
        Product:"UMIDIGI A11S Global Version Smartphone 4GB 32GB or 64GB 5150 mAh 16MP Triple Camera 6.53inch HD+ Large Full Display - 4GB 32GB Mist Blue GERMANY",
        Price:129.58,
        Image:"https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16486/goods_img_big-v4/16b49850efc6.jpg",
        sale:"Flash Sale"
    },
    {
        id:16,
        Product:"Original External SSD 2TB 1TB 4TB Mobile Solid State Hard Drive USB 3.1 External SSD TypcC Portable Hard Drive Laptop desktop - black 10TB 2TB",
        Price:69.38,
        Image:"https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16499/goods_img_big-v5/4cf064d0afad.jpg",
        sale:"Flash Sale"
    },
    {
        id:17,
        Product:"M11 Ultra Smartphone 16GB+1TB 24+48MP Global Version Android Mobile Phone HD Camera Celular 5G Network Unlocked Cellphones - Black 8GB256GB",
        Price:120.00,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16472/goods_img_big-v4/3a6f1ce7b307.jpg",
        sale:"Flash Sale"
    },
    {
        id:18,
        Product:"WT09 Active Noise Cancelling Headphones Bluetooth 5.1 Headphones with Wireless Stereo ANC Suitable for listening to music in any noisy environment - Black China",
        Price:34.75,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6926471294045319168/16529/goods_img_big-v1/8ad475fc01f3.jpg",
        sale:"Flash Sale"
    },
    {
        id:19,
        Product:"UC28C home mobile phone with screen HD 1080P mini portable projector home conference projector - White",
        Price:38.99,
        Image:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16577/goods_img_big-v1/688df4b94eb8.jpg",
        sale:"Flash Sale"
    },
    {
        id:20,
        Product:"3Mode Waterproof 230 LED Solar Motion Sensor Lights Outdoor Sunlight Solar Powered Street Wall Lamp for Garden Decoration 14pcs - 140 LED 1 Piece China Cold Light",
        Price:19.35,
        Image:"https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16506/goods_img_big-v5/44fc1fa7df67.jpg",
        sale:"Flash Sale"
    }
]

let append=document.getElementById("append");
function displayData(data){
    append.innerHTML=null;
    let arr=[]
    data.forEach((element) => {
        let ancor=document.createElement("a");
        ancor.setAttribute("href", "../ClickPart/ClickPart.html")
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src", element.Image)
        let name=document.createElement("p");
        name.innerText=element.Product;
        let price=document.createElement("h3");
        price.innerText="$"+element.Price;
        let sale=document.createElement("span");
        sale.innerText=element.sale;
        div.append(image,name,price,sale)
        div.addEventListener("click",()=>{
            arr.push({...element,quantity:1});
            localStorage.setItem("Click", JSON.stringify(arr))
        })
        ancor.append(div)
        append.append(ancor)
    });
}
displayData(recommendedData)