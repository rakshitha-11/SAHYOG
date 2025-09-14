// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeButtons = document.querySelectorAll('.close');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToSignin = document.getElementById('switch-to-signin');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const uploadArea = document.getElementById('uploadArea');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const analyzeBtn = document.getElementById('analyzeBtn');
const diseaseResult = document.getElementById('diseaseResult');
const calculateBtn = document.getElementById('calculateBtn');
const irrigationResult = document.getElementById('waterResult');
const detectLocationBtn = document.getElementById('detectLocation');
const comparePricesBtn = document.getElementById('comparePricesBtn');
const priceResult = document.getElementById('priceResult');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Modal Functions
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    });
});

switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    signupModal.style.display = 'flex';
});

switchToSignin.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'none';
    loginModal.style.display = 'flex';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Image Upload Functionality
uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            previewImg.src = e.target.result;
            imagePreview.style.display = 'block';
            uploadArea.style.display = 'none';
        }
        
        reader.readAsDataURL(this.files[0]);
    }
});

// Analyze Image Button
analyzeBtn.addEventListener('click', () => {
    // Simulate analysis process
    analyzeBtn.textContent = 'Analyzing...';
    analyzeBtn.disabled = true;
    
    setTimeout(() => {
        // Simulated result
        const diseases = [
            "Healthy",
            "Tomato Blight",
            "Wheat Rust",
            "Rice Blast"
        ];
        
        const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
        
        diseaseResult.innerHTML = `
            <div class="result-success">
                <i class="fas fa-check-circle" style="color: #2ecc71; font-size: 3rem; margin-bottom: 1rem;"></i>
                <h4>Analysis Complete</h4>
                <p>Your crop is: <strong>${randomDisease}</strong></p>
            </div>
        `;
        
        if (randomDisease !== "Healthy") {
            diseaseResult.innerHTML += `
                <div class="recommendation">
                    <h4>Recommendation</h4>
                    <p>We recommend applying appropriate fungicide and improving drainage conditions.</p>
                </div>
            `;
        }
        
        analyzeBtn.textContent = 'Analyze Image';
        analyzeBtn.disabled = false;
    }, 2000);
});

// Smart Irrigation Calculation
calculateBtn.addEventListener('click', () => {
    const soilType = document.getElementById('soilType').value;
    const weather = document.getElementById('weather').value;
    const cropType = document.getElementById('cropType').value;
    
    if (!soilType || !weather || !cropType) {
        irrigationResult.innerHTML = '<p class="error">Please select all options</p>';
        return;
    }
    
    // Base water requirements (liters per plant per day)
    const baseWater = {
        wheat: 50,
        rice: 100,
        tomato: 70
    };
    
    // Soil factors
    const soilFactors = {
        sandy: 1.2,
        loamy: 1.0,
        clay: 0.8
    };
    
    // Weather factors
    const weatherFactors = {
        sunny: 1.4,
        cloudy: 1.0,
        rainy: 0.6
    };
    
    const waterNeeded = baseWater[cropType] * soilFactors[soilType] * weatherFactors[weather];
    
    irrigationResult.innerHTML = `
        <div class="water-result">
            <i class="fas fa-tint" style="color: #3498db; font-size: 3rem; margin-bottom: 1rem;"></i>
            <h4>Water Requirement</h4>
            <p>Your <strong>${cropType}</strong> crop needs approximately</p>
            <p class="water-amount">${waterNeeded.toFixed(1)} liters per plant per day</p>
            <p>based on <strong>${soilType}</strong> soil and <strong>${weather}</strong> weather conditions.</p>
        </div>
    `;
});

// Detect Location
detectLocationBtn.addEventListener('click', () => {
    const locationInput = document.getElementById('location');
    locationInput.placeholder = "Detecting location...";
    
    // Simulate location detection
    setTimeout(() => {
        const locations = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        locationInput.value = randomLocation;
        locationInput.placeholder = "Your location";
    }, 1500);
});

// Compare Market Prices
comparePricesBtn.addEventListener('click', () => {
    const cropName = document.getElementById('cropName').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;
    
    if (!cropName || !quantity || !location) {
        priceResult.innerHTML = '<p class="error">Please fill all fields</p>';
        return;
    }
    
    // Simulate API call
    priceResult.innerHTML = '<p>Fetching market prices...</p>';
    
    setTimeout(() => {
        // Generate random market data
        const markets = [
            { name: "Local Market", price: Math.floor(Math.random() * 20) + 40 },
            { name: "Nearest City", price: Math.floor(Math.random() * 20) + 45 },
            { name: "Regional Market", price: Math.floor(Math.random() * 20) + 50 }
        ];
        
        // Sort by price descending
        markets.sort((a, b) => b.price - a.price);
        
        const bestMarket = markets[0];
        const totalProfit = bestMarket.price * quantity;
        
        let tableHTML = `
            <div class="price-comparison">
                <h4>Best Option: Sell at ${bestMarket.name} for ₹${bestMarket.price}/kg</h4>
                <p>Your estimated profit for ${quantity}kg: <strong>₹${totalProfit}</strong></p>
                <table>
                    <thead>
                        <tr>
                            <th>Market</th>
                            <th>Price (₹/kg)</th>
                            <th>Total (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        markets.forEach(market => {
            tableHTML += `
                <tr>
                    <td>${market.name}</td>
                    <td>₹${market.price}</td>
                    <td>₹${market.price * quantity}</td>
                </tr>
            `;
        });
        
        tableHTML += `
                    </tbody>
                </table>
            </div>
        `;
        
        priceResult.innerHTML = tableHTML;
    }, 2000);
});

// Form Submissions (prevent default)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('This functionality would connect to a backend service in a production environment.');
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    imagePreview.style.display = 'none';
});