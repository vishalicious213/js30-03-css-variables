const inputs = document.querySelectorAll(".controls input")

function handleUpdate() {
    const suffix = this.dataset.sizing || ""
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    // console.log(this.name, suffix)
}

// run handleUpdate on each input. trigger when there's a value change or when the mouse moves over the element
inputs.forEach(input => input.addEventListener("change", handleUpdate))
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate))