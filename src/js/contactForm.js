document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const message = document.getElementById("message");
    const subject = document.getElementById("sub");
    const mail = document.getElementById("mail");

    if (name.value === "" || message.value === "" || mail.value === "") {
      alert("Please fill all required fields (*)");
    } else {
      alert("Thank you for submitting!");

      name.value = "";
      message.value = "";
      subject.value = "";
      mail.value = "";
    }
  });
});
