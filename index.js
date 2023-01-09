const inputs = document.querySelectorAll(".controls input")

function handleUpdate() {
    console.log(this.value)
}

// run handleUpdate on each input. trigger when there's a value change or when the mouse moves over the element
inputs.forEach(input => input.addEventListener("change", handleUpdate))
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate))