# QuickPeek

QuickPeek is a simple web tool that lets freelancers (and anyone!) quickly summarize long questions or texts using AI. Just paste your question, click **"Summarize,"** and get an instant answer or summary you can copy with one click. Designed to save time on client messages, emails, or team discussions.

A tiny web-based tool that helps freelancers or writers quickly summarize any text using Hugging Face’s BART-Large-CNN model, with a React frontend and a secure Django REST backend.

---

## 🚀 Features

- **Instant Text Summarization** via Hugging Face API  
- **Simple Interface:** Type or paste your text and get a concise summary in one click  
- **Copy to Clipboard:** One-touch copy of the summary  
- **Full-stack:** React frontend + Django REST backend  

---

## 💻 Setup & Running Locally

### 1. Backend (Django)

1. **Install requirements:**
    ```
    pip install -r requirement.txt
    ```

2. **Configure the Hugging Face token:**
    - Create a `.env` file in your backend directory:
      ```
      HF_TOKEN=hf_xxxxxxxxxxxxxxxxxxxxxxxx
      ```

3. **Run the Django server:**
    ```
    python manage.py runserver
    ```
    - The backend endpoint is available at:  
      [http://localhost:8000/summarize/](http://localhost:8000/summarize/)

---

### 2. Frontend (React)

1. Navigate to your React app folder.

2. **Install dependencies:**
    ```
    npm install
    ```

3. **Start the frontend:**
    ```
    npm start
    ```
    - The app should open at [http://localhost:5173](http://localhost:5173)

---

## 🛠️ How It Works

1. User enters/pastes any chunk of text  
2. Frontend sends a POST request with the text to Django at `/summarize/`  
3. Backend safely forwards the request (with the private Hugging Face token) to the API and returns the summary  
4. The summary instantly appears on the page, ready to be copied

---

## 📸 Demo

![Demo Screenshot](https://github.com/Mohamed-Silaya/quickpeek/blob/main/Demo_image/1.png)
---

## 💡 How To Use

1. Make sure both servers are running (`python manage.py runserver` & `npm start`)
2. Paste or write any text in the input box
3. Click **“Summarize”**
4. Read & copy your concise, AI-generated summary!

---

