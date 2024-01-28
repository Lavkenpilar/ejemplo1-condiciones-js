const temperatura = prompt("Ingresa la temperatura")
if (temperatura > 30) {
    console.log ("Ya está haciendo calor")

}

const button = document.querySelector ('button')
console.log (button)
button.addEventListener ("click", function (){
    value = document.querySelector ('#input').value
    if (value === 'password-secreto') {
        par = document.querySelector ('#secret-result')
        par.innerHTML = 'Felicitaciones, lo lograste'
    }
    else {
        par = document.querySelector ('#secret-result')
        par.innerHTML = 'Sigue intentando'
    }
})
