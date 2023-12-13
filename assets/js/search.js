const searchz = document.getElementById('searchz')
const searchc = document.getElementById('searchc')
const i1 = document.getElementById('i1')
const ss = document.getElementById('ss')



async function dd(index) {
    const res = await axios.get(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3`)
    const data = await res.data;
    db = data;
    db.map(item => {
        const boxz = document.createElement('div')
        boxz.className = 'boxz'
        boxz.innerHTML = `
        <div class='boxez'>
        <p style="color:blue">Email: ${item.email}</p>
<p style="color:red">Name: ${item.name}</p>
<p style="color:green">Password: ${item.password}</p>
</div>
        `;
        searchz.appendChild(boxz);
        console.log(searchz);
    });
   
}

ss.addEventListener('click', function search(index) {
    searchz.style.display = 'none'
    const res =  fetch('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3' + i1.value)
    const data = res.data;
    db = data;
    db.map(item => {
        const boxc = document.createElement('div')
        boxc.className = 'boxz'
        boxc.innerHTML = `
        <div class='boxez'>
        <p style="color:blue">Email: ${item.email}</p>
<p style="color:red">Name: ${item.name}</p>
<p style="color:green">Password: ${item.password}</p>
</div>
        `;
        searchc.appendChild(boxc);
        console.log(searchc);
    })

})





