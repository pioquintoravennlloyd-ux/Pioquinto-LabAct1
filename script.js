
const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");

const greetingButton =
    document.querySelector("#greetingButton");

const backgroundButton =
    document.querySelector("#backgroundButton");

const resetButton =
    document.querySelector("#resetButton");

const messageArea =
    document.querySelector("#messageArea");

const originalHeading =
    "Welcome to My Event-Driven Webpage!";

const originalBackgroundColor =
    "#f4f4f4";

function handleGreetingClick() {

    const enteredName = nameInput.value.trim();

    if (enteredName === "") {

        mainHeading.textContent =
            originalHeading;

        messageArea.textContent =
            "Please enter your name first.";

        console.log(
            "Greeting button clicked, but the name input is empty."
        );

        return;
    }

    mainHeading.textContent =
        `Hello, ${enteredName}!`;

    messageArea.textContent =
        `Welcome, ${enteredName}!`;

    console.log(
        `Greeting displayed for: ${enteredName}`
    );
}


function handleBackgroundClick() {

    document.body.style.backgroundColor =
        "#dceeff";

    messageArea.textContent =
        "The background color was changed.";

    console.log(
        "Background color changed."
    );
}

function handleResetClick() {

    mainHeading.textContent =
        originalHeading;

    nameInput.value = "";

    document.body.style.backgroundColor =
        originalBackgroundColor;

    messageArea.textContent = "";

    console.log(
        "The webpage was reset."
    );
}


function handleNameInput() {

    const currentText =
        nameInput.value;

    if (currentText === "") {

        messageArea.textContent = "";

    } else {

        messageArea.textContent =
            `You are typing: ${currentText}`;
    }

    console.log(
        `Current input: ${currentText}`
    );
}


function handleGreetingMouseover() {

    console.log(
        "The mouse is over the greeting button."
    );
}


function handleBackgroundMouseover() {

    console.log(
        "The mouse is over the background button."
    );
}


function handleResetMouseover() {

    console.log(
        "The mouse is over the reset button."
    );
}

greetingButton.addEventListener(
    "click",
    handleGreetingClick
);

backgroundButton.addEventListener(
    "click",
    handleBackgroundClick
);

resetButton.addEventListener(
    "click",
    handleResetClick
);

nameInput.addEventListener(
    "input",
    handleNameInput
);

greetingButton.addEventListener(
    "mouseover",
    handleGreetingMouseover
);

backgroundButton.addEventListener(
    "mouseover",
    handleBackgroundMouseover
);

resetButton.addEventListener(
    "mouseover",
    handleResetMouseover
);

console.log(
    "Basic Event-Driven Webpage loaded successfully."
);
