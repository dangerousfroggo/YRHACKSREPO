from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import subprocess

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

effect_process = None

@app.get("/")
def read_root():
    return {"message": "Backend is running"}

@app.get("/start-effects")
async def start_effects(request: Request):
    query_params = dict(request.query_params)
    args = []

    for key, value in query_params.items():
        print(value)
        args.append(f"--{key}")
        args.append(value)

    try:
        subprocess.Popen(["python3", "main.py"] + args)
        return JSONResponse(content={"status": "started"}, status_code=200)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

@app.get("/stop-effects")
async def stop_effects():
    global effect_process
    if effect_process and effect_process.poll() is None:
        effect_process.terminate()
        effect_process = None
        return JSONResponse(content={"status": "stopped"}, status_code=200)
    else:
        return JSONResponse(content={"status": "not running"}, status_code=400)
