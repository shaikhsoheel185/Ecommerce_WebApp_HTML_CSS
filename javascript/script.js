/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */function add_to_cart(pid, pname, pprice)
{
    let cart =localStorage.getItem("cart");
    if (cart  == null) {
        let products=[];
        let product = {productId: pid, productNAme: pname, productQuantity:1, productPrice: pprice };
        products.push(product);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        
    }
}


