// Sample Car Data
const cars = [
    {
        name: "Porsche 911 Carrera",
        price: "$114,000",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        specs: "3.0L H6 | 379 HP"
    },
    {
        name: "Audi R8 V10",
        price: "$158,000",
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80",
        specs: "5.2L V10 | 562 HP"
    },
    {
        name: "Mercedes AMG GT",
        price: "$118,000",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
        specs: "4.0L V8 | 523 HP"
    }
];

const carGrid = document.getElementById('carGrid');

// Function to render cars
function displayCars() {
    carGrid.innerHTML = cars.map(car => `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}" class="car-img">
            <div class="car-info">
                <h3>${car.name}</h3>
                <p style="color: #94a3b8; margin: 5px 0;">${car.specs}</p>
                <p class="car-price">${car.price}</p>
                <button class="btn-primary" style="margin-top: 1rem; width: 100%;">View Details</button>
            </div>
        </div>
    `).join('');
}

// Initialize Lucide Icons
window.onload = () => {
    displayCars();
    lucide.createIcons();
};