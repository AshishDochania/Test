

arr=[];

const number=document.querySelector("#number");
number.addEventListener("submit",function(e){
    e.preventDefault();
    const val=document.querySelector("#search");
    let noOfInputs=val.value;
    for(let i=0;i<noOfInputs;i++){
        const input=document.createElement("input");
        input.classList.add("input1");
        input.setAttribute("placeholder",'Enter number')
        const inputCont=document.querySelector(".inputs");
        inputCont.appendChild(input);
    }
    const button=document.createElement("button");
    button.classList.add("but1");
    button.innerText="Plot";
    const inputCont=document.querySelector(".inputs");
    inputCont.appendChild(button);

})
const inputs=document.querySelector(".inputs");

inputs.addEventListener("submit",function(e){
    e.preventDefault();
    e.target.querySelectorAll(".input1").forEach(element => {
        arr.push(element.value)
    });
    play();
})
function play(){
for(let i=0;i<arr.length;i++){
    const span=document.createElement("span");
    span.classList.add("bar1");

    let max=Math.max(...arr);
    let height=((arr[i]/max)*100)*5;
    span.style.height=height+"px";

    const graph=document.querySelector(".graph");
    graph.appendChild(span);
}
}