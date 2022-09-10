async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    const adviceIdElement = document.querySelector('#advice-id')
    console.log(adviceIdElement)
    adviceIdElement.textContent = data.slip.id 
    const adviceElement = document.querySelector('.advice')
    adviceElement.textContent = data.slip.advice 
}

getAdvice()

const button = document.querySelector('.button')
button.addEventListener('click', getAdvice)