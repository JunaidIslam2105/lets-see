from fastapi import FastAPI
from routers import users

app = FastAPI()
app.include_router(users.router, prefix="/users")

@app.get("/")
def home():
    return {"message": "Welcome to EV Charging Visualizer"}
