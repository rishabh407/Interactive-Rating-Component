const buttons = document.querySelectorAll(".btn");
const submitbtn=document.querySelector(".submit-btn");
const main1=document.querySelector(".main-1");
const mainsecond=document.querySelector(".main-2");
const selectedpara=document.querySelector(".selectedpara");
buttons.forEach((btn)=>{
        btn.addEventListener("click",()=>{
           buttons.forEach((bts)=>{
                bts.classList.remove("lastprop");
           });
           btn.classList.add("lastprop");
           sumbitresponse(btn);
        });
});
// console.log(mainsecond);
// console.log(main1);
const sumbitresponse=((btn)=>{
    let response=btn.innerText;
    // console.log(response);
    submitbtn.addEventListener("click",()=>{
        main1.classList.add("hide");
        mainsecond.classList.remove("hide");
        selectedpara.innerText=`You Selected ${response} out of 5`;
    });
})