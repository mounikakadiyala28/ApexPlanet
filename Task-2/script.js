// Section visibility toggler
function showSection(section) {
    const contact = document.getElementById('contactSection');
    const todo = document.getElementById('todoSection');
  
    contact.classList.add('hidden');
    todo.classList.add('hidden');
  
    if (section === 'contact') {
      contact.classList.remove('hidden');
    } else if (section === 'todo') {
      todo.classList.remove('hidden');
    }
  }
  
  // Contact form validation
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("formError");
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (!name || !email || !message) {
      error.textContent = "All fields are required.";
      return;
    }
  
    if (!email.match(emailPattern)) {
      error.textContent = "Please enter a valid email address.";
      return;
    }
  
    error.textContent = "";
    alert("Form submitted successfully!");
    this.reset();
  });
  
  // To-Do List functionality
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => li.remove();
  
    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
  
    taskInput.value = "";
  }
  