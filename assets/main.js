//  Age Calculator start here
const sign_up_form = document.getElementById('sign_up_form');
const output = document.getElementById('output');
const name = document.getElementById('name')

sign_up_form.addEventListener('submit', function (e) {
    e.preventDefault()

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;
      
    if (name.value == '' || date.value == '' || time.value == '') {
        output.innerHTML = `<p class = 'alert alert-danger'>All fields are required</p>`
    } else{
        let start_time = new Date()
    let end_time = new Date(date + ' ' + time);
        
    let time_diff = Math.floor(Math.abs(end_time.getTime() - start_time.getTime()));

    let total_sec = Math.floor(time_diff / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hour = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hour / 24);
        
    let total_month = Math.floor(total_day / 30);
    let total_year = Math.floor(total_month / 12);
        
      
    let month = total_month - (total_year * 12)
    let day = total_day - (total_year * 12 * 30 ) - (month * 30)    

    
        output.innerHTML = ` <p class= 'alert alert-success'>
        Hi, ${name.value}, You are ${zero(total_year)} year, ${zero(month)} month & ${zero(day)} days old.
        
        </p> `
    }
})
//  Age Calculator end here

// - Product with LS start here
const product_list = document.getElementById('product_list');

const product = [
    {
        name: 'Cap Modern',
        price: 220,
        sale: 200,
        photo: 'https://images.unsplash.com/photo-1560774358-d727658f457c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Cap Modern',
        price: 250,
        sale: 220,
        photo: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Cap Exclusive',
        price: 350,
        sale: 290,
        photo: 'https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Cap Exclusive',
        price: 350,
        sale: 300,
        photo: 'https://images.unsplash.com/photo-1619184324666-a2912be71bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },

]

// send data from local storage
sendData('products', product)
// get data from local storage
let products = getData('products');

products.map(data => {
    product_list.innerHTML += `
    <div class="col-md-3">
            <div class="card shadow">
                <img class="card-image" src="${data.photo}" alt="">
            
                <div class="card-body">
                    <h4> ${data.name}</h4>
                    <p> <span class="regular_price text-danger mr-3">$${data.price}</span><span class="sale_price">$${data.sale}</span></p>
                    
                    <hr>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
    `
})
// - Product with LS end here

//- Team member with LS start here
const member_list = document.getElementById('member_list');

const member = [
    {
        name: 'Asraful Alam',
        skill: 'JavaScript Developer',
        location: 'Bangladesh',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwF7kWqN2SdwXHU9HmCLx50dlX0IOKt7AblQ&usqp=CAU'
    },
    {
        name: 'Jalal Sharif',
        skill: 'Python Developer',
        location: 'Bangladesh',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFG2Jg04faXxHFvxOUxF1XPMovdqhfNRnpRg&usqp=CAU'
    },
    {
        name: 'Ahmed Iqbal',
        skill: 'Java Developer',
        location: 'Bangladesh',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pGsRfXb8m7OPPfQLo9ZKkHskFzYUhehSHA&usqp=CAU'
    },
    {
        name: 'Jakir Hossain',
        skill: 'Java Developer',
        location: 'Bangladesh',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumHEiP5nXTEl1J1K9EJYn0zlYzg009rOoYA&usqp=CAU'
    },
]

// send data from local storage
sendData('members', member)
// get data from local storage
let members = getData('members');

members.map(data => {
    member_list.innerHTML += `
    <div class="col-md-4 col-lg-3">
            <div class="card shadow">
                <img class="card-image" src="${data.photo}" alt="">
            
                <div class="card-body">
                    <h4> ${data.name}</h4>
                    <p class="bg-info text-white p-1">${data.skill}</p>

                    <p> <span class="regular_price text-danger mr-3">$500</span><span class="sale_price">$350</span></p>
                    
                    <hr>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
    </div>  
    
    `
})

//- Team member with LS end here


