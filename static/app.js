document.addEventListener("DOMContentLoaded", function () {

const btnsDelete = document.querySelectorAll(".btnDelete");
const deleteDialog = document.querySelector("#deleteDialog");
const btnKeep = document.querySelector("#btnKeep");
const newEntry = document.querySelector("#newEntry");
const insertDialog = document.querySelector("#insertDialog");
const btnCancel = document.querySelector("#btnCancel");

btnsDelete.forEach(btnDelete => {
    btnDelete.addEventListener("click", ()=>{
        deleteDialog.showModal();
    })
});

btnKeep.addEventListener("click", () =>{
    window.location.href="index.html";
});

newEntry.addEventListener("click", () =>{
    insertDialog.showModal();
});

btnCancel.addEventListener("click", ()=>{
    window.location.href="index.html";
})

})