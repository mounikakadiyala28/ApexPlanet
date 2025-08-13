// TO-DO APP
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
    if (taskList) {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;
            li.onclick = () => { deleteTask(index); };
            taskList.appendChild(li);
        });
    }
}

function addTask() {
    const input = document.getElementById("taskInput");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (input.value.trim() !== "") {
        tasks.push(input.value.trim());
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
        loadTasks();
    }
}

function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}
document.addEventListener("DOMContentLoaded", loadTasks);

// PRODUCTS with images
const products = [
    { 
        name: "Smartphone", 
        category: "electronics", 
        price: 500, 
        rating: 4.5, 
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop"
    },
    { 
        name: "Laptop", 
        category: "electronics", 
        price: 1000, 
        rating: 4.7, 
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop"
    },
    { 
        name: "T-Shirt", 
        category: "fashion", 
        price: 20, 
        rating: 4.2, 
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop"
    },
    { 
        name: "Shoes", 
        category: "fashion", 
        price: 50, 
        rating: 4.4, 
        img: "https://images.unsplash.com/photo-1528701800489-20be01ba07b0?w=400&auto=format&fit=crop"
    },
    { 
        name: "Headphones", 
        category: "electronics", 
        price: 80, 
        rating: 4.6, 
        img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400&auto=format&fit=crop"
    }
];



function filterProducts() {
    let category = document.getElementById("categoryFilter").value;
    let sortOption = document.getElementById("sortOption").value;
    let filtered = [...products];

    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    if (sortOption === "priceAsc") filtered.sort((a,b) => a.price - b.price);
    if (sortOption === "priceDesc") filtered.sort((a,b) => b.price - a.price);
    if (sortOption === "rating") filtered.sort((a,b) => b.rating - a.rating);

    const container = document.getElementById("productContainer");
    if (container) {
        container.innerHTML = "";
        filtered.forEach(p => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>Price: $${p.price}</p>
                <p>Rating: ⭐ ${p.rating}</p>
            `;
            container.appendChild(card);
        });
    }
}

document.addEventListener("DOMContentLoaded", filterProducts);
