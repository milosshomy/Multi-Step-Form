/* Variables */

const symbols = "~`!@#$%^&*()_-+={[}]:;'|/?.>,<";
const numbers = "0123456789";
const words = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
const number = document.getElementById("number").value;
const submitBtnDesktop = document.querySelectorAll(".submit-desktop");
const submitBtnMobile = document.querySelectorAll(".submit-mobile");
const backBtnDesktop = document.querySelectorAll(".back-desktop");
const backBtnMobile = document.querySelectorAll(".back-mobile");
const plans = Array.from(document.querySelector(".plans").children);
const paymentBtn = document.getElementById("payment-button");
const month = document.getElementById("month");
const year = document.getElementById("year");
const arcadePrice = document.getElementById("arcade-price");
const advancedPrice = document.getElementById("advanced-price");
const proPrice = document.getElementById("pro-price");
const monthsFree = document.querySelectorAll(".months-free");
const firstStepForm = document.getElementById("first-step-form");
const secondStepForm = document.getElementById("second-step-form");
const thridStepForm = document.getElementById("third-step-form");
const fourthStepForm = document.getElementById("fourth-step-form");
const fifthStepForm = document.getElementById("fifth-step-form");
const addOns = document.querySelectorAll(".add-on input");
const addOnError = document.querySelector(".add-on-error");
const addOnsPrice = document.querySelectorAll(".add-ons-price");
const changePlan = document.getElementById("change-plan-btn");
const reviewPlan = document.getElementById("review-plan");
const reviewPrice = document.getElementById("review-price");
const addOnsReview = document.getElementById("add-ons-review");
const total = document.getElementById("total");
const result = document.getElementById("result");
let planText = "";
let pricePer = "";
let priceText = "";

/* Name Validation */

function validateName() {
  const nameInput = document.getElementById("name");
  const nameValue = nameInput.value;
  const errorNameMessage = document.querySelector(".error-name-message");

  /* Check if name input is empty */

  function emptyName() {
    if (nameValue === "") {
      nameInput.style.border = "1px solid hsl(354, 84%, 57%)";
      errorNameMessage.textContent = "Please enter your name!";
      errorNameMessage.style.color = "hsl(354, 84%, 57%)";
      return true;
    } else {
      nameInput.style.border = "1px solid green";
      errorNameMessage.textContent = "";
      return false;
    }
  }

  /* Check if name input starts or ends with symbols */

  function nameStartWithSymbol() {
    return symbols.split("").some((symbol) => {
      if (nameValue.startsWith(symbol) || nameValue.endsWith(symbol)) {
        nameInput.style.border = "1px solid hsl(354, 84%, 57%)";
        errorNameMessage.textContent = "Symbols are not allowed!";
        errorNameMessage.style.color = "hsl(354, 84%, 57%)";
        return true;
      } else {
        nameInput.style.border = "1px solid green";
        errorNameMessage.textContent = "";
        return false;
      }
    });
  }

  /* Prevent numbers */

  function preventNumbers() {
    return numbers.split("").some((number) => {
      if (nameValue.includes(number)) {
        nameInput.style.border = "1px solid hsl(354, 84%, 57%)";
        errorNameMessage.textContent = "Numbers are not allowed!";
        errorNameMessage.style.color = "hsl(354, 84%, 57%)";
        return true;
      } else {
        nameInput.style.border = "1px solid green";
        errorNameMessage.textContent = "";
        return false;
      }
    });
  }

  /* Check functions */

  function checkName() {
    if (
      emptyName() === false &&
      nameStartWithSymbol() === false &&
      preventNumbers() === false
    ) {
      return true;
    } else {
      return false;
    }
  }

  return checkName();
}

/* Email Validation */

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailValue = email.value;
  const errorEmailMessage = document.querySelector(".error-email-message");

  /* Check if email input is empty */

  function emptyEmail() {
    if (emailValue === "") {
      emailInput.style.border = "1px solid hsl(354, 84%, 57%)";
      errorEmailMessage.textContent = "Please enter your email!";
      errorEmailMessage.style.color = "hsl(354, 84%, 57%)";
      return true;
    } else {
      emailInput.style.border = "1px solid green";
      errorEmailMessage.textContent = "";
      return false;
    }
  }

  /* Check if email input starts or ends  with symbols */

  function emailStartWithSymbol() {
    return symbols.split("").some((symbol) => {
      if (emailValue.startsWith(symbol) || emailValue.endsWith(symbol)) {
        emailInput.style.border = "1px solid hsl(354, 84%, 57%)";
        errorEmailMessage.textContent = "Symbols are not allowed!";
        errorEmailMessage.style.color = "hsl(354, 84%, 57%)";
        return true;
      } else {
        emailInput.style.border = "1px solid green";
        errorEmailMessage.textContent = "";
        return false;
      }
    });
  }

  /* Check if email input have @ */

  function emailHaveAt() {
    const emails = [
      "gmail",
      "outlook",
      "hotmail",
      "yahoo",
      "aol",
      "aim",
      "icloud",
      "titan",
      "protonmail",
      "pm",
      "zoho",
      "yandex",
      "gmx",
      "hubspot",
      "tutanota",
    ];

    return emails.some((email) => {
      if (emailValue.includes(email)) {
        const emailIndex = emailValue.indexOf(email);
        const atIndex = emailIndex - 1;
        if (emailValue.charAt(atIndex) === "@") {
          emailInput.style.border = "1px solid green";
          errorEmailMessage.textContent = "";
          return true;
        }
      } else {
        emailInput.style.border = "1px solid hsl(354, 84%, 57%)";
        errorEmailMessage.textContent = "Please enter your email!";
        errorEmailMessage.style.color = "hsl(354, 84%, 57%)";
        return false;
      }
    });
  }

  /* Check Functions */

  function checkEmail() {
    if (
      emptyEmail() === false &&
      emailStartWithSymbol() === false &&
      emailHaveAt() === true
    ) {
      return true;
    } else {
      return false;
    }
  }

  return checkEmail();
}

/* Number Validation */

function validateNumber() {
  const number = document.getElementById("number");
  const numberValue = number.value;
  const errorNumberMessage = document.querySelector(".error-number-message");

  /* Check if number input is empty */

  function emptyNumber() {
    if (numberValue === "") {
      number.style.border = "1px solid hsl(354, 84%, 57%)";
      errorNumberMessage.textContent = "Please enter your number!";
      errorNumberMessage.style.color = "hsl(354, 84%, 57%)";
      return true;
    } else {
      number.style.border = "1px solid green";
      errorNumberMessage.textContent = "";
      return false;
    }
  }

  /* Check if number input have symbols */

  function hasSymbols() {
    return symbols.split("").some((symbol) => {
      if (numberValue.includes(symbol)) {
        number.style.border = "1px solid hsl(354, 84%, 57%)";
        errorNumberMessage.textContent = "Symbols are not allowed!";
        errorNumberMessage.style.color = "hsl(354, 84%, 57%)";
        return true;
      } else {
        number.style.border = "1px solid green";
        errorNumberMessage.textContent = "";
        return false;
      }
    });
  }

  /* Prevent words */

  function preventWords() {
    return words.split("").some((word) => {
      if (numberValue.includes(word)) {
        number.style.border = "1px solid hsl(354, 84%, 57%)";
        errorNumberMessage.textContent = "Words are not allowed!";
        errorNumberMessage.style.color = "hsl(354, 84%, 57%)";
        return true;
      } else {
        number.style.border = "1px solid green";
        errorNumberMessage.textContent = "";
        return false;
      }
    });
  }

  /* Check Functions */

  function checkNumber() {
    if (
      emptyNumber() === false &&
      hasSymbols() === false &&
      preventWords() === false
    ) {
      return true;
    } else {
      return false;
    }
  }

  return checkNumber();
}

/* Form Validation */

function validateForm() {
  if (validateName() && validateNumber() && validateEmail()) {
    console.log("Form is valid");
    return true;
  } else {
    console.log("Form is not valid");
    return false;
  }
}

/* Email Form Submit Desktop */

submitBtnDesktop[0].addEventListener("click", () => {
  validateName();
  validateEmail();
  validateNumber();
  validateForm();
  validateEmail();

  if (validateForm()) {
    firstStepForm.style.display = "none";
    secondStepForm.style.display = "block";
  }
});

/* Email Form Submit Mobile */

submitBtnMobile[0].addEventListener("click", () => {
  validateName();
  validateEmail();
  validateNumber();
  validateForm();
  validateEmail();

  if (validateForm()) {
    firstStepForm.style.display = "none";
    secondStepForm.style.display = "block";
  }
});

/* Plan Form Submit Desktop */

submitBtnDesktop[1].addEventListener("click", () => {
  secondStepForm.style.display = "none";
  thridStepForm.style.display = "block";

  const chosenPlan = document.querySelector(".chosen");
  const indicate = document.querySelector(".indicated");

  planText = chosenPlan.children[1].firstElementChild.textContent;
  pricePer = indicate.textContent;
  priceText =
    chosenPlan.children[1].firstElementChild.nextElementSibling.textContent;
});

/* Plan Form Submit Mobile */

submitBtnMobile[1].addEventListener("click", () => {
  secondStepForm.style.display = "none";
  thridStepForm.style.display = "block";
});

/* Add-Ons Form Submit Desktop */

submitBtnDesktop[2].addEventListener("click", () => {
  addOns.forEach((addOn) => {
    if (addOn.checked) {
      thridStepForm.style.display = "none";
      fourthStepForm.style.display = "block";
      addOnError.textContent = "";
      const addOnName = addOn.nextElementSibling.children[0];
      const addOnPayment =
        addOn.parentElement.nextElementSibling.firstElementChild;

      /* Creating add-on container for end step form */

      const flexContainer = document.createElement("div");
      const paragraph = document.createElement("p");
      const span = document.createElement("span");
      flexContainer.classList.add("flex");
      flexContainer.classList.add("justify-between");
      flexContainer.classList.add("items-center");
      paragraph.classList.add("text-coolGray");
      span.classList.add("text-marineBlue");
      paragraph.textContent = addOnName.textContent;
      span.textContent = addOnPayment.textContent;
      addOnsReview.appendChild(flexContainer);
      flexContainer.appendChild(paragraph);
      flexContainer.appendChild(span);

      total.textContent = "Total" + pricePer;
      const matchPrice = priceText.match(/(\d+)/);
      const matchAddOn = addOnPayment.textContent.match(/(\d+)/);

      if (matchPrice && matchAddOn) {
        result.textContent =
          "+$" +
          (parseInt(matchPrice) + parseInt(matchAddOn)) +
          `/${pricePer.trim().substring(0, 2).toLowerCase()}`;
      }
    } else {
      addOnError.textContent = "Please select add-on!";
      addOnError.style.color = "hsl(354, 84%, 57%)";
    }
  });

  /* Updating plans for end container */

  reviewPlan.textContent = planText + ` (${pricePer.trim()})`;
  reviewPrice.textContent = priceText;
});

/* Add-Ons Form Submit Mobile */

submitBtnMobile[2].addEventListener("click", () => {
  addOns.forEach((addOn) => {
    if (addOn.checked) {
      thridStepForm.style.display = "none";
      fourthStepForm.style.display = "block";
      addOnError.textContent = "";
    } else {
      addOnError.textContent = "Please select add-on!";
      addOnError.style.color = "hsl(354, 84%, 57%)";
    }
  });
});

/* Finish Form Submit Desktop */

submitBtnDesktop[3].addEventListener("click", () => {
  fourthStepForm.style.display = "none";
  fifthStepForm.style.display = "block";
});

/* Finish Form Submit Mobile */

submitBtnMobile[3].addEventListener("click", () => {
  fourthStepForm.style.display = "none";
  fifthStepForm.style.display = "block";
});

/* Return Buttons */

/* Return Button Desktop */

backBtnDesktop[0].addEventListener("click", () => {
  secondStepForm.style.display = "none";
  firstStepForm.style.display = "block";
});

backBtnDesktop[1].addEventListener("click", () => {
  thridStepForm.style.display = "none";
  secondStepForm.style.display = "block";
});

backBtnDesktop[2].addEventListener("click", () => {
  fourthStepForm.style.display = "none";
  thridStepForm.style.display = "block";
});

/* Return Button Mobile */

backBtnMobile[0].addEventListener("click", () => {
  secondStepForm.style.display = "none";
  firstStepForm.style.display = "block";
});

backBtnMobile[1].addEventListener("click", () => {
  thridStepForm.style.display = "none";
  secondStepForm.style.display = "block";
});

backBtnMobile[2].addEventListener("click", () => {
  fourthStepForm.style.display = "none";
  thridStepForm.style.display = "block";
});

/* Changing style of chosen plan */

plans.forEach((plan) => {
  plan.addEventListener("click", () => {
    plans.forEach((plan) => {
      plan.classList.remove("chosen");
    });
    plan.classList.add("chosen");
  });
});

/* Handle payment button */

paymentBtn.addEventListener("click", () => {
  if (month.classList.contains("indicated")) {
    month.classList.remove("indicated");
    year.classList.add("indicated");
    arcadePrice.textContent = "$90/yr";
    advancedPrice.textContent = "$120/yr";
    proPrice.textContent = "$150/yr";
    monthsFree.forEach((month) => {
      month.textContent = "2 months free";
    });

    addOnsPrice[0].textContent = "+$10/yr";
    addOnsPrice[1].textContent = "+$20/yr";
    addOnsPrice[2].textContent = "+$20/yr";
  } else {
    month.classList.add("indicated");
    year.classList.remove("indicated");
    arcadePrice.textContent = "$9/mo";
    advancedPrice.textContent = "$12/mo";
    proPrice.textContent = "$15/mo";
    monthsFree.forEach((month) => {
      month.textContent = "";
    });
    addOnsPrice[0].textContent = "+$1/mo";
    addOnsPrice[1].textContent = "+$2/mo";
    addOnsPrice[2].textContent = "+$2/mo";
  }
  paymentBtn.classList.toggle("end");
});

/* Change Plan */

changePlan.addEventListener("click", () => {
  const changePlanDropDown = document.getElementById("change-plan-dropdown");
  changePlanDropDown.classList.toggle("block");
});

const arcadeBtn = document.getElementById("arcade-btn");
const advancedBtn = document.getElementById("advanced-btn");
const proBtn = document.getElementById("pro-btn");

/* Change Plan Arcade Btn */

arcadeBtn.addEventListener("click", () => {
  reviewPlan.textContent = `Arcade (${pricePer})`;
  reviewPrice.textContent = `$9/${pricePer
    .toLowerCase()
    .trim()
    .substring(0, 2)}`;

  const addOnPayment = addOnsReview.firstChild.lastChild;
  const matchPrice = arcadePrice.innerHTML.match(/(\d+)/);
  const matchAddOn = addOnPayment.textContent.match(/(\d+)/);
  if (matchPrice && matchAddOn) {
    result.textContent =
      "+$" +
      (parseInt(matchPrice) + parseInt(matchAddOn)) +
      `/${pricePer.trim().substring(0, 2).toLowerCase()}`;
  }

  if (reviewPlan.textContent.includes("Yearly")) {
    reviewPrice.textContent = "$90/yr";

    const addOnPayment = addOnsReview.firstChild.lastChild;
    const matchPrice = arcadePrice.innerHTML.match(/(\d+)/);
    const matchAddOn = addOnPayment.textContent.match(/(\d+)/);
    if (matchPrice && matchAddOn) {
      result.textContent =
        "+$" +
        (parseInt(matchPrice) + parseInt(matchAddOn)) +
        `/${pricePer.trim().substring(0, 2).toLowerCase()}`;
    }
  }
});

/* Change Plan Advanced Btn */

advancedBtn.addEventListener("click", () => {
  reviewPlan.textContent = `Advanced (${pricePer})`;
  reviewPrice.textContent = `$12/${pricePer
    .toLowerCase()
    .trim()
    .substring(0, 2)}`;

  reviewPlan.textContent = `Advanced (${pricePer})`;
  reviewPrice.textContent = `$12/${pricePer
    .toLowerCase()
    .trim()
    .substring(0, 2)}`;

  const addOnPayment = addOnsReview.firstChild.lastChild;
  const matchPrice = advancedPrice.innerHTML.match(/(\d+)/);
  const matchAddOn = addOnPayment.textContent.match(/(\d+)/);
  if (matchPrice && matchAddOn) {
    result.textContent =
      "+$" +
      (parseInt(matchPrice) + parseInt(matchAddOn)) +
      `/${pricePer.trim().substring(0, 2).toLowerCase()}`;
  }

  if (reviewPlan.textContent.includes("Yearly")) {
    reviewPrice.textContent = "$120/yr";

    const addOnPayment = addOnsReview.firstChild.lastChild;
    const matchPrice = advancedPrice.innerHTML.match(/(\d+)/);
    const matchAddOn = addOnPayment.textContent.match(/(\d+)/);
    if (matchPrice && matchAddOn) {
      result.textContent =
        "+$" +
        (parseInt(matchPrice) + parseInt(matchAddOn)) +
        `/${pricePer.trim().substring(0, 2).toLowerCase()}`;
    }
  }
});

/* Change Plan Pro Btn */

proBtn.addEventListener("click", () => {
  reviewPlan.textContent = `Pro (${pricePer})`;
  reviewPrice.textContent = `$15/${pricePer
    .toLowerCase()
    .trim()
    .substring(0, 2)}`;

  reviewPlan.textContent = `Advanced (${pricePer})`;
  reviewPrice.textContent = `$15/${pricePer
    .toLowerCase()
    .trim()
    .substring(0, 2)}`;

  const addOnPayment = addOnsReview.firstChild.lastChild;
  const matchPrice = proPrice.innerHTML.match(/(\d+)/);
  const matchAddOn = addOnPayment.textContent.match(/(\d+)/);
  if (matchPrice && matchAddOn) {
    result.textContent =
      "+$" +
      (parseInt(matchPrice) + parseInt(matchAddOn)) +
      `/${pricePer.trim().substring(0, 2).toLowerCase()}`;
  }

  if (reviewPlan.textContent.includes("Yearly")) {
    reviewPrice.textContent = "$150/yr";

    const addOnPayment = addOnsReview.firstChild.lastChild;
    const matchPrice = proPrice.innerHTML.match(/(\d+)/);
    const matchAddOn = addOnPayment.textContent.match(/(\d+)/);
    if (matchPrice && matchAddOn) {
      result.textContent =
        "+$" +
        (parseInt(matchPrice) + parseInt(matchAddOn)) +
        `/${pricePer.trim().substring(0, 2).toLowerCase()}`;
    }
  }
});
