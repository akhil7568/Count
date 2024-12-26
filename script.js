
let count = 0;
let ans = document.getElementById("v")
function lower(){
 count--;
 ans.textContent = count;  
}
function reset(){
    count = 0;
    ans.textContent = count;
}
function add(){
    count++;
    ans.textContent = count;
}

