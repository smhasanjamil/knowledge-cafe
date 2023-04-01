// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getBlogCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('bookmark', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getBlogCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('bookmark', JSON.stringify(shoppingCart));
    }
}

const getBlogCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('bookmark');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteBlogCart = () => {
    localStorage.removeItem('bookmark');
}

export {
    addToDb,
    removeFromDb,
    getBlogCart,
    deleteBlogCart
}
