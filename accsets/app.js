const getElmClassContentSection=$('.content__section');
const getElmClassBtnIphone=$('.btn__iphone')
const getElmClassBtnSamsung=$('.btn__samsung')
const getElmClassBtnOppo=$('.btn__oppo')
const getElmClassBtnVivo=$('.btn__vivo')
const getElmClassBtnXiaomi=$('.btn__xiaomi')
const getElmClassBtnAll=$('.btn__all');
// hàm render ra các sản phẩm :
let productHtml='';
function renderProduct(arrays){
arrays.forEach(function(productObject){
    productHtml+= 
    `
    <div class="product">
<div class="product__image">
    <img src="${productObject.image}" alt="image_mobile">
</div>
<div class="product__btn-buy ${productObject.classBtnBuy1}" >Mua ngay</div>
<div class="product__name ${productObject.classProductName}">
<h3>
  ${productObject.name}
</h3>
</div>
<div class="product__price">
    ${productObject.price}
</div>
</div>
     
    `
})
getElmClassContentSection.html(productHtml)
}

// mảng danh sách các sản phẩm
let arrayProducts = [
  {
    image: "accsets/image/iphone/iphone-12-1.jpg",
    classProductName:'iphone',
    name:'Iphone 12',
    price: '20.990.000₫'
  },
  {
    image: "accsets/image/iphone/iphone-13-pro-max-sierra-blue-2.jpg",
    classProductName: 'iphone',
    name:'Iphone 13 Pro Max',
    price: '33.990.000₫'
  },
  {
    image: "accsets/image/iphone/iphone-13-pro-sierra-blue-3.jpg",
    classProductName: 'iphone',
    name:'Iphone 13 Pro',
    price: '30.990.000₫'
  },
  {
    image: "accsets/image/iphone/iphone-12-pro-max-xanh-duong-4.jpg",
    classProductName: 'iphone',
    name:'Iphone 12 Pro Max',
    price: '31.990.000₫'
  },
  {
    image: "accsets/image/iphone/iphone-12-pro-vang-dong-5.jpg",
    classProductName: 'iphone',
    name:'Iphone 12 Pro',
    price: '28.990.000₫ '
  },
  // samsung
  {
    image:"accsets/image/Samsung/samsung-galaxy-z-fold-3-green-1.jpg",
    classProductName: 'samsung',
    name:'Samsung Galaxy Z Fold3 5G 512GB',
    price: '44.990.000₫'
  },
  {
    image:"accsets/image/Samsung/samsung-galaxy-a03s-black-2.jpg",
    classProductName: 'samsung',
    name:'Samsung Galaxy A03s',
    price: '3.690.000₫'
  },
  {
    image:"accsets/image/Samsung/samsung-galaxy-a52s-5g-mint-3.jpg",
    classProductName: 'samsung',
    name:'Samsung Galaxy A52s 5G',
    price: '10.990.000₫'
  },
  {
    image:"accsets/image/Samsung/samsung-galaxy-z-fold-2-den-4.jpg",
    classProductName: 'samsung',
    name:'Samsung Galaxy Z Fold2 5G',
    price: '44.000.000₫'
  },
  {
    image:"accsets/image/Samsung/samsung-galaxy-z-fold-3-silver-5.jpg",
    classProductName: 'samsung',
    name:'Samsung Galaxy Z Fold3 5G 256GB',
    price: '41.990.000₫'
  },
  // oppo
  {
    image:"accsets/image/oppo/oppo-reno6-z-5g-aurora-1.jpg",
    classProductName: 'oppo',
    name:'OPPO Reno6 Z 5G',
    price: '9.490.000₫'
  },
  {
    image:"accsets/image/oppo/oppo-a74-blue-2.jpg",
    classProductName: 'oppo',
    name:'OPPO A74',
    price: '6.690.000₫'
  },
  {
    image:"accsets/image/oppo/oppo-reno6-pro-blue-3.jpg",
    classProductName: 'oppo',
    name:'OPPO Reno6 Pro 5G',
    price: '18.490.000₫'
  },
  {
    image:"accsets/image/oppo/oppo-find-x3-pro-black-4.jpg",
    classProductName: 'oppo',
    name:'OPPO Find X3 Pro 5G',
    price: '23.990.000₫'
  },
  {
    image:"accsets/image/oppo/oppo-reno6-5g-5.jpg",
    classProductName: 'oppo',
    name:'OPPO Reno6 5G',
    price: '12.990.000₫'
  },
  // vivo
  {
    image:"accsets/image/Vivo/vivo-y21-white-1.jpg",
    classProductName: 'vivo',
    name:'Vivo Y21',
    price: '4.290.000₫'
  },
  {
    image:"accsets/image/Vivo/vivo-x70-pro-xanh-hong-2.jpg",
    classProductName: 'vivo',
    name:'Vivo X70 Pro 5G',
    price: '18.990.000₫'
  },
  {
    image:"accsets/image/Vivo/vivo-v21-5g-xanh-den-3.jpg",
    classProductName: 'vivo',
    name:'Vivo V21 5G',
    price: '9.490.000₫'
  },
  {
    image:"accsets/image/Vivo/Vivo-V23e-4.jpg",
    classProductName: 'vivo',
    name:'Vivo V23e',
    price: '8.490.000₫'
  },
  {
    image:"accsets/image/Vivo/vivov202021den-5.jpg",
    classProductName: 'vivo',
    name:'Vivo V20 (2021)',
    price: '7.790.000₫'
  },
// Xiaomi 
{
  image:"accsets/image/XiaoMi/xiaomi-11t-white-1.jpg",
  classProductName: 'xiaomi',
  name:'Xiaomi 11T 5G 128GB',
  price: '10.990.000₫'
},
{
  image:"accsets/image/XiaoMi/xiaomi-mi-11-xanhduong-2.jpg",
  classProductName: 'xiaomi',
  name:'Xiaomi Mi 11 5G',
  price: '19.990.000₫'
},
{
  image:"accsets/image/XiaoMi/xiaomi-11t-pro-blue-3.jpg",
  classProductName: 'xiaomi',
  name:'Xiaomi 11T Pro 5G',
  price: '14.990.000₫'
},
{
  image:"accsets/image/XiaoMi/xiaomi-mi-10t-pro-den-4.jpg",
  classProductName: 'xiaomi',
  name:'Xiaomi Mi 10T Pro 5G',
  price: '12.990.000₫'
},
{
  image:"accsets/image/XiaoMi/xiaomi-11t-grey-5.jpg",
  classProductName: 'xiaomi',
  name:'Xiaomi 11T 5G 256GB',
  price: '11.990.000₫'
},
];

for(let i=0;i<arrayProducts.length;i++){
    if(i%2==0){
        arrayProducts[i].classBtnBuy1='';
    }else{
        arrayProducts[i].classBtnBuy1='btn-buy1';
    }
}
const newArrayProducts=mixArray(arrayProducts);
renderProduct( newArrayProducts);
// hien thi danh sach dien thoai theo hang khi click:
function showMobileIphone(btn,key){
  let arrayMobile=[];
  btn.click(function(){
    reserBorderBtn();
    btn.css('border','1px solid rgb(35, 20, 243)')
    arrayMobile=arrayProducts.filter(function(object){
if(object.classProductName.trim()==key){
  return object;
}
    })
    productHtml='';
    console.log(arrayMobile)
    renderProduct(arrayMobile);
  })
}

showMobileIphone(getElmClassBtnIphone,'iphone');
showMobileIphone(getElmClassBtnSamsung,'samsung');
showMobileIphone(getElmClassBtnOppo,'oppo');
showMobileIphone(getElmClassBtnVivo,'vivo');
showMobileIphone(getElmClassBtnXiaomi,'xiaomi');
// render lai toàn bộ điện thoại;
function showMobileAll(){
  getElmClassBtnAll.click(function(){
    productHtml='';
    reserBorderBtn();
    getElmClassBtnAll.css('border','1px solid rgb(35, 20, 243)')
    renderProduct(newArrayProducts);
  })
}
showMobileAll();
// ham reset lại border tất cả các nút
function reserBorderBtn(){
  $('.btn__header').css('border','1px solid #ccc')
}
// ham hoan doi các phan tu trong mang
function mixArray(array){
for(let i=0;i<array.length;i=i+2){
  for(let j=i+2;j<array.length;j++){
  let term=array[j];
  array[j]=array[i];
  array[i]=term;
  }
  }
  return array;
}


// const getElmClassBtnProduct=$('.product')
// const getElmClassBtnBuy=$('.product__btn-buy')
// function translateBtnBuy(){
//     for(let i=0;i<arrayProducts.length;i++){
//         $(getElmClassBtnProduct[i]).mouseover(function(){
//             $(getElmClassBtnBuy[i]).css('transform','translateX(0)').css('opacity','1')
//         })
//         $(getElmClassBtnProduct[i]).mouseout(function(){
//             $(getElmClassBtnBuy[i]).css('transform','translateX(180px)').css('opacity','0')
//             setTimeout(function(){
//                 if(getElmClassBtnBuy[i].style.transform=='translateX(180px)'){
//                     console.log(getElmClassBtnBuy[i].style.transform)
//                     setTimeout(function(){
//                         $(getElmClassBtnBuy[i]).css('transform','translateX(-180px)').css('opacity','0')

//                     },600)
//         }
//         })
//     })}}
// translateBtnBuy();