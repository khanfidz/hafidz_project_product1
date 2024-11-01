let optioninput = document.querySelectorAll(".option input");
optioninput.forEach((input) => {
    input.addEventListener("change", function () {
        if (this.checked) {
            productImg.src = this.getAttribute("data-image");
        }
    });
});

const quantityinput = document.getElementById("quantityinput");
const stockinfo = document.getElementById("stockinfo");
const maxstock = 50;

stockinfo.innerText = `Available stock: ${maxstock}`;
quantityinput.addEventListener("input", function () {
    let value = parseInt (quantityinput.value);
    if (value < 1) {
        quantityinput.value = 1;
    }
    if(value > maxstock) {
        quantityinput.value = maxstock;
        alert(`Sorry, we have ${maxstock} items in stock!`);
    }
});