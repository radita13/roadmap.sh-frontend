document.addEventListener('DOMContentLoaded', function () {
    const inputUser = document.getElementById('inputUser')
    const countDisplay = document.getElementById('counter')
    const maxLength = 250

    inputUser.addEventListener('input', function () {
        const currentLength = inputUser.value.length
        countDisplay.textContent = `${currentLength} / ${maxLength}`

        if (currentLength >= maxLength) {
            inputUser.style.borderColor = 'red'
            inputUser.style.outlineColor = 'red'
            countDisplay.style.color = 'red'
        } else {
            inputUser.style.borderColor = ''
            inputUser.style.outlineColor = ''
            countDisplay.style.color = ''
        }
    })
})