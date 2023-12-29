const fieldType = document.getElementById('fieldType');
const fieldLabel = document.getElementById('fieldLabel');
const addField = document.getElementById('addField');
const saveForm = document.getElementById('saveForm');
const formNameInput = document.getElementById('formName');
const formsContainer = document.getElementById('formsContainer');
let dynamicForm = document.createElement('form');

addField.addEventListener('click', function() {
    const type = fieldType.value;
    const label = fieldLabel.value;
    let newField;

    switch(type) {
        case 'text':
            newField = document.createElement('input');
            newField.type = 'text';
            newField.placeholder = label;
            break;
        case 'checkbox':
            newField = document.createElement('input');
            newField.type = 'checkbox';
            newField.id = label;
            const labelElement = document.createElement('label');
            labelElement.htmlFor = label;
            labelElement.textContent = label;
            dynamicForm.appendChild(labelElement);
            break;
        case 'radio':
            newField = document.createElement('input');
            newField.type = 'radio';
            newField.name = 'dynamicRadio';
            newField.id = label;
            const radioLabel = document.createElement('label');
            radioLabel.htmlFor = label;
            radioLabel.textContent = label;
            dynamicForm.appendChild(radioLabel);
            break;
    }

    dynamicForm.appendChild(newField);
    if(label === "")
    {
        alert("Please add the field");
    }
    else{
        alert("Your field in the form is added successfully");
    }
    
});

saveForm.addEventListener('click', function() {
    const formName = formNameInput.value || 'Unnamed Form';

    // Check if there are no fields in the form
    if (dynamicForm.childElementCount === 0) {
        alert('Please add at least one field to the form before saving.');
        return;
    }

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const formTitle = document.createElement('h3');
    formTitle.classList.add('form-title');
    formTitle.textContent = formName;
    formContainer.appendChild(formTitle);

    formContainer.appendChild(dynamicForm);
    formsContainer.appendChild(formContainer);
});