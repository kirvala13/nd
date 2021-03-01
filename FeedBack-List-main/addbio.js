
let nameInput = document.querySelector('#name')
let surnameInput = document.querySelector('#surname')
let emailInput = document.querySelector('#email')
let textareaInput = document.querySelector('#textarea')






const button = document.querySelector('#btn')


let aboutMe = document.querySelector('#textarea')



let bioPlacehoder = document.querySelector('.bio-placeholder')



button.addEventListener('click', (e)=> {
    
    e.preventDefault()
    
    renderAboutChart()

    nameInput.value = ''
    surnameInput.value = ''
    emailInput.value = ''
    textareaInput.value = ''
    
})


let file = document.querySelector('#imageFile')
file.addEventListener('change', () => {
    
  const reader = new FileReader()

  reader.addEventListener('load', () => {
      localStorage.setItem('Url',reader.result)
  })


  reader.readAsDataURL(file.files[0])


})

function renderAboutChart() {

    let imageSpace = document.createElement('div')
    imageSpace.classList.add('imagePlace')


    function imageConvertion() {

        let beforeConvert = file.files[0]
        let correctUrl = URL.createObjectURL(beforeConvert)
        
        let image = document.createElement('img')
        image.classList.add('imageStyle')
        image.src = correctUrl
        
        bioPlacehoder.append(imageSpace)
        imageSpace.append(image)
    }
   
    imageConvertion()


    let placeDiv = document.createElement('div')
    placeDiv.classList.add('placeDiv')



    let namePlace = document.createElement('div')
    namePlace.classList.add('fullnamePlace')


    localStorage.setItem('nameInput', nameInput.value)



    let lastPlace = document.createElement('div')
    lastPlace.classList.add('fullnamePlace')
    
    let emailPlace = document.createElement('div')
    emailPlace.classList.add('fullnamePlace')

    let textareaPlace = document.createElement('div')
    textareaPlace.classList.add('aboutMePlace')



    placeDiv.append(namePlace)
    namePlace.textContent = `Name: `
    namePlace.append(nameInput.value)

    placeDiv.append(lastPlace)
    lastPlace.textContent = `Surname: `
    lastPlace.append(surnameInput.value)

    localStorage.setItem('surnameInput', surnameInput.value)

    placeDiv.append(emailPlace)
    emailPlace.textContent = `Email: `
    emailPlace.append(emailInput.value)

    localStorage.setItem('emailInput', emailInput.value)

    placeDiv.append(textareaPlace)
    textareaPlace.textContent = `About Me: `
    textareaPlace.append(textareaInput.value)

    localStorage.setItem('aboutMeInput', textareaInput.value)

    bioPlacehoder.append(placeDiv)

}
                    

let placeDiv = document.createElement('div')
placeDiv.classList.add('placeDiv')


saveToLocalStorage()
function saveToLocalStorage() {


    function saveImage() {
       
      const imageUrl = localStorage.getItem('Url')
    
      let newImage = document.querySelector('#imgPreview')
      newImage.src = imageUrl
      if(imageUrl) {
        newImage.style.display = 'block'
      }
   
    }
    
      saveImage()


  function saveNames() {
    let namePlace = document.createElement("div");
    namePlace.textContent = `Name : `;
    namePlace.classList.add("fullnamePlace");

    bioPlacehoder.append(placeDiv);
    placeDiv.append(namePlace);

    namePlace.append(localStorage.getItem("nameInput"));

    if (!localStorage.getItem("nameInput")) {
      placeDiv.style.display = "none";
    }
  }

  saveNames();

  function saveLastName() {
    let lastPlace = document.createElement("div");
    lastPlace.classList.add("fullnamePlace");
    lastPlace.textContent = `Surname : `;

    bioPlacehoder.append(placeDiv);
    placeDiv.append(lastPlace);
    lastPlace.append(localStorage.getItem("surnameInput"));

    if (!localStorage.getItem("surnameInput")) {
      placeDiv.style.display = "none";
    }
  }

  saveLastName();

  function saveEmail() {
    let emailPlace = document.createElement("div");
    emailPlace.classList.add("fullnamePlace");
    emailPlace.textContent = "Email : ";

    bioPlacehoder.append(placeDiv);
    placeDiv.append(emailPlace);
    emailPlace.append(localStorage.getItem("emailInput"));

    if (!localStorage.getItem("emailInput")) {
      placeDiv.style.display = "none";
    }
  }

  saveEmail();

  function saveAboutMe() {
    let textareaPlace = document.createElement("div");
    textareaPlace.classList.add("aboutMePlace");
    textareaPlace.textContent = `About Me : `;

    bioPlacehoder.append(placeDiv);
    placeDiv.append(textareaPlace);
    textareaPlace.append(localStorage.getItem("aboutMeInput"));

    if (!localStorage.getItem("aboutMeInput")) {
      placeDiv.style.display = "none";
    }
  }
  saveAboutMe();

}