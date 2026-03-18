const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function () {
    if (addBtn.innerText === "Added") {
        toastr.warning('Friend is already added!', 'Warning');
        return;
    }
    addBtn.style.backgroundColor = "gray";
    addBtn.style.color = "white";
    addBtn.innerText = "Added";
    toastr.success('Friend added successfully!', 'Success');
});