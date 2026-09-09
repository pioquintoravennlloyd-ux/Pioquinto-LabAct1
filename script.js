// Select all required HTML elements using document.querySelector()

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


// Original page values

const originalHeading =
    "Welcome to My Event-Driven Webpage!";

const originalBackgroundColor =
    "#f4f4f4";


// =====================================
// EVENT HANDLER: Greeting Button
// =====================================

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


// =====================================
// EVENT HANDLER: Background Button
// =====================================

function handleBackgroundClick() {

    document.body.style.backgroundColor =
        "#dceeff";

    messageArea.textContent =
        "The background color was changed.";

    console.log(
        "Background color changed."
    );
}


// =====================================
// EVENT HANDLER: Reset Button
// =====================================

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


// =====================================
// EVENT HANDLER: Input Event
// =====================================

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


// =====================================
// EVENT HANDLER: Mouseover
// =====================================

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


// =====================================
// EVENT SOURCES AND EVENT LISTENERS
// =====================================

// Event Source: greetingButton
// Event: click
// Listener: addEventListener()
// Handler: handleGreetingClick

greetingButton.addEventListener(
    "click",
    handleGreetingClick
);


// Event Source: backgroundButton
// Event: click
// Handler: handleBackgroundClick

backgroundButton.addEventListener(
    "click",
    handleBackgroundClick
);


// Event Source: resetButton
// Event: click
// Handler: handleResetClick

resetButton.addEventListener(
    "click",
    handleResetClick
);


// Event Source: nameInput
// Event: input
// Handler: handleNameInput

nameInput.addEventListener(
    "input",
    handleNameInput
);


// Mouseover Events

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


// Debugging statement

console.log(
    "Basic Event-Driven Webpage loaded successfully."
);
