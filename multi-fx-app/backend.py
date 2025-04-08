from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import subprocess

app = FastAPI()

# to run: uvicorn backend:app --reload

# Allow requests from your React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Backend is running"}

@app.get("/start-distortion")
def start_distortion(distortionVolume: int = 1, distortionGain: int = 1, distortionWetDry: int = 1):
    try:
        subprocess.Popen(["python3", "main.py", str(distortionVolume), str(distortionGain), str(distortionWetDry)])
        return JSONResponse(content={"status": "started"}, status_code=200)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
    
