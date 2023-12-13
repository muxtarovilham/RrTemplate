const product = document.getElementById('product')


function get(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    product.innerHTML = ''
    cart.map((item, index) => {
        const box = document.createElement('div')
        box.className = 'box'
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <h6>${item.title}</h6>
        <button onclick="rem(${index})">Add To Cart</button>
        `
        product.append(box)
    })
    

}

function rem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    get()
}

get()
