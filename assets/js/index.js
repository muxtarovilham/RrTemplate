const product = document.getElementById('product')

let limit = 3
let page = 1


async function get(index) {
    const skip = (page-1)*limit
    const res = await axios.get(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4?limit=${limit}&page=${page}&skip=${skip}`)
    const data = await res.data
    db = data
    db.map(item => {
        const box = document.createElement('div')
        box.className = 'box'
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <h6>${item.title}</h6>
        <button onclick="onbir(${item.id})">Add To Cart</button>
        `
        product.append(box)
    })
page++

}

load.addEventListener('click', function (){
    get()
})

function onbir(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == index))
    localStorage.setItem('cart', JSON.stringify(cart))
}


get()

// ----------------------------------------------------------------------------------------------

const email = document.getElementById('email')
const namee = document.getElementById('name')
const pass = document.getElementById('password')
const form = document.getElementById('form1')


form.addEventListener('submit', function (e) {
    e.preventDefault()

    axios.post('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3', {
        name: namee.value,
        email: email.value,
        password: pass.value,
    })
    .then(res => {
        console.log(res.data);
    } )
})




// ----------------------------------------------------------------------------------------------





const btn = document.getElementById('btnz')
const inpp = document.getElementById('inpp')
const list = document.querySelector('.list')
const abc = document.getElementById('abc')
const abcd = document.getElementById('abcd')

function getPro () {
    abcd.style.display='none'
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3')
    .then(res => {
        db = res.data
        console.log(db);
        db.map(item => {
            const div = document.createElement('div')
            div.innerHTML = `
            <p>${item.name}</p>`
            list.appendChild(div)
        })
    })
}
getPro()

////////////////////////////////////////////////search By name

function getbyname () {
    abcd.innerHTML = ``
    abc.style.display='none'
    abcd.style.display='block'

    axios.get(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3?title=${inpp.value}`)
    .then(res => {
        db = res.data
        db.map(item => {
            const div = document.createElement('div')
            div.innerHTML = `
            <p>${item.name}</p>`
            abcd.append(div)
        })

    })
}
btn.addEventListener('click', getbyname)

function getbyname () {
    abcd.innerHTML = ``
    abc.style.display='none'
    abcd.style.display='block'

    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3')
    .then(res => {
        db = res.data
        let filteredData = db.filter(item => item.name.toLowerCase().includes(inpp.value))
        console.log(filteredData);
        filteredData.map(item => {
            const div = document.createElement('div')
            div.innerHTML = `
            <p>${item.name}</p>`
            abcd.append(div)
        })

    })
}
btn.addEventListener('click', getbyname)