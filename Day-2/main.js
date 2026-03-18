const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function () {
    addBtn.style.backgroundColor = "gray";
    addBtn.style.color = "white";
    addBtn.innerText = "Added";
    toastr.success('Friend added successfully!', 'Success');
});