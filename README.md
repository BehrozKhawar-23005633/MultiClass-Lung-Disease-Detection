# AI-Pneumonia-Classifier

## 📌 Project Overview
This repository contains an AI-based multi-class classification model that detects **Normal, Viral Pneumonia, COVID-19, and Lung Opacity** from chest X-ray images. The project leverages **Convolutional Neural Networks (CNNs) and Transfer Learning** to achieve high accuracy in medical image classification.

## 📊 Dataset
**Source**: COVID-19 Radiography Database ([Kaggle Link](https://www.kaggle.com/datasets/tawsifurrahman/covid19-radiography-database))
**Classes**:
  - Normal
  - Viral Pneumonia
  - COVID-19
  - Lung Opacity
- **Size**: ~2 GB, formatted in **JPEG/PNG**

## 🛠 Tech Stack
- Python 3.8+
- TensorFlow/Keras
- OpenCV & NumPy
- Flask/FastAPI (for backend API)
- Angular (for frontend UI)
- Matplotlib/Seaborn (for visualization)

## 🚀 Features
- Custom CNN Model** for X-ray classification
- Transfer Learning Implementation** (ResNet50)
- Flask API** for model inference
- Angular Frontend** for real-time predictions
- Performance Evaluation** using Accuracy, F1-score, Confusion Matrix

## 📂 Project Structure
AI-Pneumonia-Classifier ├── 📁 dataset # Folder containing X-ray images ├── 📁 models # Trained AI models ├── 📁 notebooks # Jupyter Notebooks or Google Colab for EDA and training ├── 📁 api # Backend API (Flask/FastAPI) ├── 📁 frontend # Angular frontend UI ├── 📄 README.md # Project documentation ├── 📄 requirements.txt # Dependencies ├── 📄 train_model.py # Model training script ├── 📄 inference.py # Script for model predictions
