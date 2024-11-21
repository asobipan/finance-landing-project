const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const submitBtn = document.querySelector(".submit-btn");
const footerModalBtn = document.querySelector(".footer__menu__layout button");
const openModalBtn = document.querySelector(".user-menu__contact");

openModalBtn.addEventListener("click", openModal);
footerModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputs = modal.querySelectorAll("input");
  const moreInfo = modal.querySelector("textarea");
  const checkbox = modal.querySelector('input[type="checkbox"]');
  const [firstName, lastName, phoneNumber, emailAddress] = inputs;
  const body = `Hello, this is ${firstName.value} ${
    lastName.value
  } and <br> my phone number and email address are ${phoneNumber.value} and ${
    emailAddress.value
  }. <br>I would like to discuss about ${
    moreInfo.value || "nothing"
  }. Please contact me.`;

  if (
    firstName.value === "" ||
    lastName.value === "" ||
    phoneNumber.value === "" ||
    emailAddress.value === "" ||
    checkbox.checked !== true
  ) {
    alert("Invalid input values. Please re-check.");
  } else {
    Email.send({
      SecureToken: "abef4fe1-68c0-44b2-90ce-a64cf26e3db4",
      To: "sobipanarsen2@gmail.com",
      From: "sobipanarsen2@gmail.com",
      Subject: "New client",
      Body: body,
    }).then(() => {
      alert("Successfully! Please wait to our contact!");
      modal.classList.remove("open-modal");
    });
  }
});

function openModal() {
  modal.classList.add("open-modal");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open-modal");
  document.body.style.overflow = "initial";
}
