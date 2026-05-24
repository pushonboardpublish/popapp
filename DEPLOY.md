# 🚀 Cloud Deployment Guide

## Option 1: Vercel (Frontend) - FREE ⭐

### Step 1: Deploy Frontend
```bash
npm install -g vercel
cd frontend
vercel
```

### Step 2: Set Environment Variables
In Vercel dashboard:
```
REACT_APP_API_URL=https://popapp-backend.railway.app/api
```

✅ Your frontend is live at: `https://popapp.vercel.app`

---

## Option 2: Railway (Backend) - FREE ⭐

### Step 1: Create Railway Account
Go to [railway.app](https://railway.app)

### Step 2: Connect GitHub Repo
- Click "New Project"
- Select "Deploy from GitHub"
- Select `pushonboardpublish/popapp`

### Step 3: Configure
- Set root directory: `backend`
- Port: `1111`
- Environment: `NODE_ENV=production`

✅ Your backend is live at: `https://popapp-backend.railway.app`

---

## Option 3: Render (Alternative Backend) - FREE

### Step 1: Create Render Account
Go to [render.com](https://render.com)

### Step 2: Deploy
- New Web Service
- Connect GitHub
- Build command: `npm install`
- Start command: `cd backend && npm start`
- Environment: `NODE_ENV=production`

✅ Your backend is live at: `https://popapp-backend.onrender.com`

---

## 🎯 Final URLs

| Service | URL | Status |
|---------|-----|--------|
| Frontend | https://popapp.vercel.app | 🟢 Live |
| Backend (Railway) | https://popapp-backend.railway.app | 🟢 Live |
| Backend (Render) | https://popapp-backend.onrender.com | 🟢 Live |

---

## ✨ Cost Breakdown

- **Vercel Frontend**: FREE (up to 100GB/month)
- **Railway Backend**: FREE (5GB/month)
- **Total Cost**: $0 🎉

---

## 🔧 Troubleshooting

### Backend not connecting?
```bash
# Update frontend API URL in production
REACT_APP_API_URL=https://your-backend-url.com/api
```

### Port issues?
Railway automatically assigns ports. Check environment variables.

### Need custom domain?
Both Vercel and Railway support free custom domains!

---

## 🚀 Auto-Deployment

Every time you push to GitHub:
1. Vercel automatically deploys frontend
2. Railway automatically deploys backend
3. No manual work needed!

**Your PopApp is production-ready!** 🎉
