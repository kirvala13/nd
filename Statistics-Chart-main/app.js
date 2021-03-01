
let chart = document.querySelector('.chart')

let row1 = document.querySelector('.row-1')
let row2 = document.querySelector('.row-2')
let row3 = document.querySelector('.row-3')
let row4 = document.querySelector('.row-4')
let row5 = document.querySelector('.row-5')
let row6 = document.querySelector('.row-6')
let row7 = document.querySelector('.row-7')

let image = document.querySelector('.image')


chart.addEventListener('mouseover', () => {

    image.style.opacity = '85%'

    row1.style.height = '50%'
    row1.style.transitionDuration = '1s'

    //Row2
    row2.style.height = '10%'
    row2.style.transitionDuration = '1s'

    //Row3
    row3.style.height = '70%'
    row3.style.transitionDuration = '1s'

    //Row4
    row4.style.height = '30%'
    row4.style.transitionDuration = '1s'

    //Row5
    row5.style.height = '40%'
    row5.style.transitionDuration = '1s'

    //Row6
    row6.style.height = '5%'
    row6.style.transitionDuration = '1s'

    //Row7
    row7.style.height = '97%'
    row7.style.transitionDuration = '1s'
})

// Row 1
row1.addEventListener('mouseover', () => {
    row1.innerHTML = 'Views'
    row1.style.color=''
    row1.classList.add('row-style')

})
row1.addEventListener('mouseout', () => {
    row1.innerHTML = ''
})

// Row 2
row2.addEventListener('mouseover', () => {
    row2.innerHTML = 'Users'
    row2.classList.add('row-style')
})
row2.addEventListener('mouseout', () => {
    row2.innerHTML = ''
})

// Row 3
row3.addEventListener('mouseover', () => {
    row3.innerHTML = 'Registrations'
    row3.classList.add('row-style')
})
row3.addEventListener('mouseout', () => {
    row3.innerHTML = ''
})

// Row 4
row4.addEventListener('mouseover', () => {
    row4.innerHTML = 'Prognosis'
    row4.classList.add('row-style')
})
row4.addEventListener('mouseout', () => {
    row4.innerHTML = ''
})
// Row 5
row5.addEventListener('mouseover', () => {
    row5.innerHTML = 'News'
    row5.classList.add('row-style')
})
row5.addEventListener('mouseout', () => {
    row5.innerHTML = ''
})
// Row 6
row6.addEventListener('mouseover', () => {
    row6.innerHTML = 'Income'
    row6.classList.add('row-style')
})
row6.addEventListener('mouseout', () => {
    row6.innerHTML = ''
})
// Row 7
row7.addEventListener('mouseover', () => {
    row7.innerHTML = 'Loss'
    row7.classList.add('row-style')
})
row7.addEventListener('mouseout', () => {
    row7.innerHTML = ''
})




