let buttons = document.querySelectorAll(".btn");
let x=true;
let submitbtn=document.querySelector(".submit-btn");
let main1=document.querySelector(".main-1");
let mainsecond=document.querySelector(".main-2");
let selectedpara=document.querySelector(".selectedpara");
buttons.forEach((btn)=>{
        btn.addEventListener("click",()=>{
           buttons.forEach((bts)=>{
                bts.classList.remove("lastprop");
           });
           btn.classList.add("lastprop");
           sumbitresponse(btn);
        });
});
console.log(mainsecond);
console.log(main1);
const sumbitresponse=((btn)=>{
    let response=btn.innerText;
    console.log(response);
    submitbtn.addEventListener("click",()=>{
        main1.classList.add("hide");
        mainsecond.classList.remove("hide");
        selectedpara.innerText=`You Selected ${response} out of 5`;
    });
})