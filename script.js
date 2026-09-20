const items=[
 ['Plain Maggie',50,'maggie'],['Double Masala Maggie',60,'maggie'],['Veggie Bonanza Maggie',80,'maggie'],
 ['Onion Pizza',140,'pizza'],['Paneer Loaded Pizza',220,'pizza'],['Paneer Tikka Burger',90,'burger'],
 ['Cheesy Veg Sandwich',90,'sandwich'],['Garlic Bread',100,'sandwich'],['Pav Bhaji',90,'sandwich'],
 ['Hot Coffee',50,'coffee'],['Cold Coffee',70,'coffee'],['Vanilla Shake',80,'shakes'],['Chocolate Shake',90,'shakes'],['Oreo Shake',100,'shakes'],
 ['Classic Waffle',60,'coffee'],['Chocolate Bowl',150,'shakes'],['Vanilla Scoop',60,'shakes']
].map(([name,price,category])=>({name,price,category}));
const menu=document.querySelector('#menu-items'),cartBox=document.querySelector('#cart-items'),count=document.querySelector('#count'),total=document.querySelector('#total');let cart=[];
const money=n=>`₹${n}`;
function render(filter='all'){menu.innerHTML=items.filter(x=>filter==='all'||x.category===filter).map(x=>`<article class="item"><div><h4>${x.name}</h4><p>Hungry Birds Cafe special • freshly prepared</p></div><div><strong class="price">${money(x.price)}</strong><br><button class="add" data-add="${x.name}">Add</button></div></article>`).join('');document.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>add(b.dataset.add));}
function add(name){const item=items.find(x=>x.name===name),found=cart.find(x=>x.name===name);found?found.qty++:cart.push({...item,qty:1});update();}
function update(){if(!cart.length)cartBox.innerHTML='<p class="empty">Add something delicious from the menu.</p>';else cartBox.innerHTML=cart.map(x=>`<div class="cart-row"><span>${x.name} × ${x.qty}</span><span>${money(x.price*x.qty)} <button class="remove" data-remove="${x.name}">Remove</button></span></div>`).join('');const qty=cart.reduce((a,x)=>a+x.qty,0),sub=cart.reduce((a,x)=>a+x.price*x.qty,0);count.textContent=`${qty} item${qty===1?'':'s'}`;total.textContent=money(sub+30);document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{cart=cart.filter(x=>x.name!==b.dataset.remove);update();});}
document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-category]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.category);});document.querySelector('[data-scroll]').onclick=()=>document.querySelector('#menu').scrollIntoView({behavior:'smooth'});document.querySelector('#checkout').onclick=()=>alert(cart.length?'Checkout is ready for the Android build.':'Please add an item first.');render();update();
