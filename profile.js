document.addEventListener("DOMContentLoaded", function () {
  // Find the plus symbol elements for skill and education
  var addSkillButton = document.getElementById("addSkill");
  var addEducationButton = document.getElementById("addEducation");

  // Add a click event listener to the skill plus symbol
  addSkillButton.addEventListener("click", function () {
    handleAddElement("skill-form-container");
  });

  // Add a click event listener to the education plus symbol
  addEducationButton.addEventListener("click", function () {
    handleAddElement("edu-form-container");
  });

  function handleAddElement(containerId) {
    // Get the container associated with the plus symbol
    var container = document.getElementById(containerId);

    // Create a new input element
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "about-input";
    newInput.setAttribute("data-threshold", "50");

    // Create a new minus symbol
    var minusSymbol = document.createElement("img");
    minusSymbol.src = "icons8-minus-48.png";
    minusSymbol.className = "minus";
    minusSymbol.addEventListener("click", function () {
      // Remove the corresponding input line
      container.removeChild(newInputContainer);
    });

    // Create a new input container
    var newInputContainer = document.createElement("div");
    newInputContainer.className = "skill-input-container";
    newInputContainer.appendChild(newInput);
    newInputContainer.appendChild(minusSymbol);

    // Append the new input container to the specified container
    container.appendChild(newInputContainer);
  }
});










