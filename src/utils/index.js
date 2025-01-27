export const totalPrice = () => {
    let sum = 0;
    products.forEach((product) => {
      sum += product.price;
    });

}