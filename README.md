This repository hosts an AI-powered application designed for the multi-class classification of chest X-ray images into four categories: Normal, Viral Pneumonia, COVID-19, and Lung Opacity. The project combines Convolutional Neural Networks (CNNs) and Transfer Learning (ResNet-50) for high-performance diagnostic predictions.

📊 Dataset
Source: COVID-19 Radiography Database (Kaggle)

Classes:

Normal

Viral Pneumonia

COVID-19

Lung Opacity

Format: JPEG/PNG images (~2 GB)

🛠 Tools and Technologies
Python 3.8+, TensorFlow, Keras, OpenCV, NumPy

Flask (for backend API)

Angular (for frontend UI)

Matplotlib, Seaborn (for data visualization)

Google Colab (for training and experimentation)

🚀 Key Features
Custom-built CNN architecture for baseline model.

Transfer Learning with ResNet-50 for enhanced accuracy.

Flask-based backend API for real-time inference.

Angular frontend for user interaction and result display.

Full evaluation using Accuracy, F1-Score, Precision, Recall, and Confusion Matrix.


⚙️ How to Run the Backend (Flask API)
Navigate to the api folder:

bash
Copy
Edit
cd api
Install dependencies:

bash
Copy
Edit
pip install -r requirements.txt
Run the Flask app:

The server will start at http://localhost:5000/.
Use Postman to test the /predict endpoint.

🌐 How to Run the Frontend (Angular App)
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install Angular dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
ng serve
Access the app at http://localhost:4200/.

🧠 Notes
Use Ngrok to expose the Flask API publicly during frontend-backend integration.

Ensure that backend URL is correctly configured inside Angular's API service files.
