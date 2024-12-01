export function formatCurrency(priceCents){
    return (priceCents/100).toFixed(2);
}

export default formatCurrency; // so when we import this function to other file we don't need the curly bracket to surround the variable or function name (import only one)