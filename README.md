# 🚀 LinkedIn Auto-Apply Bot (Educational Project)

⚠️ **Disclaimer**  
This project is created **only for educational and internship demonstration purposes**.  
Automating LinkedIn actions may violate LinkedIn’s Terms of Service.  
Do **NOT** use on real LinkedIn accounts.  
Use mock data or test environments only.

---

## 📌 Project Overview

**LinkedIn Auto-Apply Bot** is a Chrome Extension + Node.js backend project that demonstrates how job application automation systems work.

It allows users to:
- Enter their skills, experience, and location
- View matching job listings
- Track applied jobs in a dashboard
- Simulate auto-apply functionality
- View match percentage using skill matching logic

---

## ✨ Features

✅ User profile form (skills, experience, location)  
✅ Job filtering based on user profile  
✅ Match percentage calculation  
✅ Mock LinkedIn job listings  
✅ Easy Apply simulation  
✅ Dashboard to track applied jobs  
✅ Modular Chrome extension architecture  
✅ Node.js backend support  

---

## 🧱 Project Structure

linkedin-auto-apply-bot/
│
├── extension/ # Chrome Extension
│ ├── manifest.json
│ ├── background.js
│ ├── content.js
│ ├── popup.html
│ ├── popup.js
│ ├── dashboard.html
│ ├── dashboard.js
│ ├── styles.css
│ └── utils/
│ ├── matcher.js
│ ├── storage.js
│ └── ocr.js
│
├── server/ # Node.js Backend
│ ├── index.js
│ ├── websocket.js
│ ├── puppeteerBot.js
│ └── db.js
│
├── mock-linkedin/
│ └── jobs.html # Mock LinkedIn Job Listings
│
├── resumes/
│ └── resume.json
│
├── package.json
└── README.md

yaml
Copy code

---

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Browser Extension:** Chrome Extension APIs
- **Backend:** Node.js, Express
- **Automation (Demo):** Puppeteer (mock usage)
- **OCR (Demo):** Tesseract.js
- **Storage:** LocalStorage
- **Version Control:** Git & GitHub

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/diptic839/linkedin-auto-apply-bot.git
cd linkedin-auto-apply-bot
2️⃣ Run Backend Server
bash
Copy code
cd server
npm install
node index.js
Server runs on:

arduino
Copy code
http://localhost:5000
3️⃣ Load Chrome Extension
Open Chrome

Go to chrome://extensions/

Enable Developer Mode

Click Load unpacked

Select the extension/ folder

4️⃣ Open Mock LinkedIn Page
Open this file in browser:

bash
Copy code
mock-linkedin/jobs.html
🧪 How It Works
User opens extension popup

Enters skills, experience, location

System calculates job match percentage

Suitable jobs are shown

Clicking Easy Apply simulates job application

Applied jobs appear in dashboard

🎯 Internship Use Case
This project demonstrates:

Automation architecture

Chrome extension development

Backend communication

Real-time UI updates

Job recommendation logic

Perfect for:

Internship tasks

College projects

Portfolio showcase

📹 Demo Video (Suggested Flow)
Explain problem statement

Show Chrome extension popup

Enter user profile details

Open mock job listings

Show job matching & apply

Show dashboard updates

👩‍💻 Author
Dipti
GitHub: https://github.com/diptic839

📄 License
This project is licensed under the MIT License.

yaml
Copy code

---

## ✅ Next Step (VERY IMPORTANT)

After adding this file, run in **Git Bash**:

```bash
git add README.md
git commit -m "Add project README"
git push -u origin main
