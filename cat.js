const x=document.getElementById('select');
arr.forEach(value =>{
    const y=document.createElement('option');
const text=document.createTextNode(value.category);
y.appendChild(text);
y.value=value.id;
x.appendChild(y);
});
const v=Array.from(x);
/*v.forEach(opt=>{
    opt.addEventListener('click',e=>{
        const cl=e.target;
       document.getElementById('sel').classList.add('hidden');
       document.getElementById('loader').classList.remove('hidden');
        console.log(cl.value);
        fe(cl.value);
    })
})*/
start=()=>{
    document.getElementById('sel').classList.add('hidden');
    document.getElementById('loader').classList.remove('hidden');
  
     fe(x.value);
};