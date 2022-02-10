function createDogListItem(dog){
    const li = document.createElement("li");
    const dogContainer = document.querySelector(".main");
  
    li.className = "dogs-list__button";
    li.innerText = dog.name;

    li.addEventListener('click', () => { 
      const newDog = createDogCard(dog)
      dogContainer.append(newDog)
      const noDog = document.querySelector('.main__dog-section')
      noDog.remove()
      })
  
    // (1) // DONE
    //TODO: Here, add a click event listener
    //on to the li element. Inside that listener,
    //call the createDogCard method and pass
    //the dog variable as a parameter. You will
    //also need to remove any existing dog card
    //from the dogContainer
      return li
  };
  
  function createSection() {
    const section = document.createElement("section");
    section.className = "main__dog-section";
    return section;
  };
  
  const createDogCardDesc = (bio) => {
    const div = document.createElement("div");
    div.className = "main__dog-section__desc";

    const header = document.createElement('h3')
    header.innerText = 'Bio'

    const text = document.createElement('p')
    text.innerText = bio

  
    //(2) // DONE
    //TODO: Update this section to create new elements
    //for the bio header and the bio text. Add those
    //elements to the div.
    div.append(header, text);
  
    return div;
  };

  function isDogGood(dog) {
    if (dog.isGoodDog === true) {
      return 'Yes'
    }
    else return 'No'
  }
  
  function createDogCardBottomSection(dog) {
    const button = document.createElement("button");
    const text = document.createElement("p");
    const div = document.createElement("div");
  
    div.className = "main__dog-section__btn";

    const result = isDogGood(dog)

    text.innerText = 'Is naughty? ' + result

    if (dog.isGoodDog === true) {
      button.innerText = 'Bad Dog'
    }
    else {button.innerText = 'Good Dog'}
  
    // (6)
    //TODO: If the isGoodDog flag is true, set
    //the button text to "Bad Dog". If false,
    //set it to "Good Dog"
  
    div.append(text, button);
    return div;
  };
  
  const createDogCard = (dog) => {
    const section = createSection();
    const header = document.createElement("h2");
    header.innerText = dog.name;
  
    // (3) DONE
    //TODO: Update this section to create a new image
    //element and add it to the dog card. Set the source of 
    //the image to the image path on the dog object
    
    const desc = createDogCardDesc(dog.bio);
    const bottomSection = createDogCardBottomSection(dog);

    const img = document.createElement("img");
    img.setAttribute('src', dog.image)
  
    section.append(header, img, desc, bottomSection);
  
    return section;
  };
  
  function createForm() {
    const form = document.createElement("form");
  
    const nameInput = createInput("name");
    const imgInput = createInput("image", "url");
    const bioInput = createInput("bio", "textarea");
    const submitInput = createInput("submit", "submit", "Let's add a dog!");
  
    const nameLabel = createLabel("name", "Dog's name");
    const imgLabel = createLabel("image", "Dog's picture");
    const bioLabel = createLabel("bio", "Dog's bio");
  
    form.className = "form";
    submitInput.className = "form__button";
    form.addEventListener("submit", function(event){
        
        //prevent default behaviour
        event.preventDefault();

        //capture input values
        const dogNameInput = nameInput.value
        const dogImgInput = imgInput.value
        const dogBioInput = bioInput.value

        //create newDog object
        const dog = {
          id: data.length,
          name: dogNameInput,
          bio: dogBioInput,
          isGoodDog: true,
          image: dogImgInput
        }

        //push object to data array
        data.push(dog)

        //declare const as a result of the createDogListItem method
        const result = createDogListItem(dog)
        
        //select toplist item
        const addButton = document.querySelector('.dogs-list__button--add')

        //add the result of the method to the toplist *AFTER THE ADD BUTTON*
        addButton.after(result)
    })
  
    //(5)
    //TODO: Add an event listener on to the form to capture the
    //submit event. In the submit event, add a item to the
    //list of dogs at the top of the page, and add a new object
    //in to the dogs array with the data captured from the form. //DONE
  
    form.append(
      nameLabel,
      nameInput,
      imgLabel,
      imgInput,
      bioLabel,
      bioInput,
      submitInput
    );
    return form;
  };
  
  function createInput(idName, type = "text", value) {
    let input = null;
  
    if (type === "textarea") {
      input = document.createElement("textarea");
      input.setAttribute("rows", "5");
    } else {
      input = document.createElement("input");
      input.setAttribute("type", type);
    }
  
    input.setAttribute("id", idName);
    input.setAttribute("name", idName);
  
    if (value) input.setAttribute("value", value);
  
    return input;
  }
  
  function createLabel(forAttr, text) {
    const label = document.createElement("label");
    label.attributes.for = forAttr;
    label.innerText = text;
  
    return label;
  };
  
  function renderMainForm() {
    const section = createSection();
    const form = createForm();
    const h2 = document.createElement("h2");
  
    h2.innerText = "Add a new Dog";
  
    section.append(h2, form);
  
    return section;
  };
  
  function renderDogList(dogsArr) {
    const listContainer = document.querySelector(".dogs-list");
    for (const dog of dogsArr) {
      const item = createDogListItem(dog);
      listContainer.append(item);
    }
  };
  
  renderDogList(data);
  
  const formButton = document.querySelector(".dogs-list__button--add");
  const dogContainer = document.querySelector(".main");
  
  formButton.addEventListener("click", function () {
      const form = renderMainForm()
      dogContainer.append(form)
      const main = document.querySelector('.main__dog-section')
      main.remove()
  })
  
  // (4)
  //TODO: Add an event listener on to form button so that
  //when the user clicks the button, the form is displayed.
  //the renderMainForm method will return an element that
  //contains the form, so you only need to add it to the 
  //dogContainer and remove any existing children. //DONE
  