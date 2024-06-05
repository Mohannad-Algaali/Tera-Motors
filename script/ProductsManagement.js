const products = [];
const productsContainer = Document.querySelector(".products-container");

for(let i =0;i<10;i++){
    products.push(new Product(`Tyre ${i}`,'C:/Users/user/Documents/mohannad/web project/tera motors/images/nazim-zafri-7M3aFdvbSpo-unsplash.jpg'));

}

function createElements(){
    for(let n = 0; n<products.length;n++){
        
    }
}

export const productsList = products;



function Product(name,imgUrl){
    this.name = name;
    this.imgUrl = imgUrl;
}