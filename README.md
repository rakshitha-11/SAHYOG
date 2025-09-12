# SAHYOG: Smart Agriculture, Helping Yield & Optimized Growth

## 🌾 Problem Statement & Relevance
Farmers face three major challenges impacting productivity and profitability:

- **Irrigation Inefficiency** → Overuse/underuse of water reduces yields & wastes resources.  
- **Crop Diseases** → Often detected too late, causing up to 40% yield losses (FAO).  
- **Lack of Transparent Market Prices** → Farmers forced to sell at 15–25% lower rates due to missing real-time data.  

### Why It Matters:
- Agriculture consumes 70% of global freshwater.
- Smarter irrigation can reduce water usage by **20–30%** without lowering yields.
- Early disease detection & fair pricing can significantly improve farmer incomes.

---

## 💡 Proposed Solution: SAHYOG
**SAHYOG** is an AI-powered, farmer-friendly platform addressing these challenges through:

1. **Crop Disease Prediction** → AI models detect early-stage crop diseases.  
2. **Smart Irrigation Advisor** → Suggests optimal watering based on weather & soil data.  
3. **Market Price Optimizer** → Provides real-time crop prices for nearby markets.  
4. **Optional Login/Signup** → Personalized farmer dashboard using Firebase.

---

## 🛠️ Technology Stack
| Component       | Technology Used                   |
|------------------|-----------------------------------|
| **Frontend**      | HTML, CSS, JavaScript, Bootstrap   |
| **Backend**       | Python (FastAPI)                  |
| **ML Models**     | TensorFlow/Keras (VGG16/ResNet50)  |
| **Authentication**| Firebase (Optional)               |
| **APIs**          | APIFarmer, OGD India APIs          |
| **Geolocation**   | Browser API for location-based data|

---

## ⚙️ System Architecture / Workflow
**Workflow:**
1. Farmer uploads crop images → AI predicts disease & suggests treatment.  
2. Weather & soil data analyzed → Smart irrigation schedule generated.  
3. Real-time APIs → Fetch & compare nearby market prices for better profits.  
