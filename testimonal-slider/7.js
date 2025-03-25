const testimonials=[
    {
        name:"Cherise G",
        photoUrl:"https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I am beyond impressed with the innovative products from apple. Their cutting-edge technology and sleek design make them a leader in the industry.I highly recommend apple to anyone looking for top-quality electronics"
    },


{
    name:"Rosetta Q",
    photoUrl:"https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"I am blown away by the innovative products that apple offers. Their cutting-edge technology and sleek design never fail to impress me. I highly recommend apple to anyone looking for top-quality electronics."
},

{
name:"Emily Johsan",
photoUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
text:"I am extremely satisfied with the products offered by apple. The innovative technology and sleek design have exceeded my expectations. I highly recommend apple to anyone looking for top-notch quality and reliability."

},
];
const imgEl=document.querySelector("img");
const textEl=document.querySelector(".text");
const usernameEl=document.querySelector(".username");
let idx=0;
updateTestimonial();

function updateTestimonial(){
const{name,photoUrl,text}=
testimonials[idx]
imgEl.src =photoUrl;
textEl.innerText =text;
usernameEl.innerText=name;
idx++;
if(idx === testimonials.length){
    idx=0;
}
setTimeout(()=>{
updateTestimonial();
},2000);
}