from fastapi import FastAPI, Request
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="Example App")

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=FileResponse)
async def read_index():
    return FileResponse("static/index.html")

@app.get("/api/hello")
async def get_hello():
    return {"message": "Hello from FastAPI!"}

@app.post("/api/echo")
async def post_echo(data: dict):
    message = data.get("message", "")
    return {"echo": message}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
