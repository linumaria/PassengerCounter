//document.getElementById("count-el").innerText=5
let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count=0
function increment() {
    count=count+1
    countEl.textContent = count

    }
function save() {
    
     let temp=count + "-"
     saveEl.textContent+=temp
     countEl.textContent = 0
     count = 0

}