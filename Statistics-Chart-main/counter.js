
const countEl = document.getElementById('counter')

let counterDiv = document.querySelector('.counter-div')

let j
updateVisitCount()
function updateVisitCount() {
    
    fetch('https://api.countapi.xyz/update/mysite.com/vat123323/?amount=1')
    .then(res => res.json())
    .then(res => {
        countEl.innerHTML = res.value
        if(res.value += 1) {
            j = res.value
            counterDiv.style.width += `${j}em`
            counterDiv.style.transitionDuration += '1s'

            if(res.value > 10) {
                counterDiv.style.width += `${(j - 10)/4}em`
                counterDiv.style.transitionDuration += '1s'
                
            }
            else if(res.value > 20) {
                counterDiv.style.width += `${(j - 20)/4}em`
                counterDiv.style.transitionDuration += '1s'
                res.value = 0
            }
            else if(res.value > 30) {
                counterDiv.style.width += `${(j - 30)/4}em`
                counterDiv.style.transitionDuration += '1s'
            }
            else if(res.value > 40) {
                counterDiv.style.width += `${(j - 40)/4}em`
                counterDiv.style.transitionDuration += '1s'
            }
            else if(res.value > 50) {
                counterDiv.style.width += `${(j - 50)/4}em`
                counterDiv.style.transitionDuration += '1s'
            }
            else if(res.value > 60) {
                counterDiv.style.width += `${(j - 60)/4}em`
                counterDiv.style.transitionDuration += '1s'
            }
            else if(res.value > 70) {
                counterDiv.style.width += `${(j - 70)/4}em`
                counterDiv.style.transitionDuration += '1s'
            }
            else if(res.value > 80) {
                counterDiv.style.width += `${(j - 80)/4}em`
                counterDiv.style.transitionDuration += '1s'
            }
            else if(res.value > 90) {
                counterDiv.style.width += `${(j - 90)/4}em`
                counterDiv.style.transitionDuration += '1s'
            }
            else if(res.value > 100) {
                counterDiv.style.width += `${(j - 100)/4}em`
                counterDiv.style.transitionDuration += '1s'
            }
        }
    })
}


lindeDiv = document.querySelector('.line-div')
