from fastapi import FastAPI
from mangum import Mangum
from app.routers import auth, jobs, applications

app = FastAPI()

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(jobs.router, prefix="/jobs", tags=["jobs"])
app.include_router(applications.router, prefix="/applications", tags=["applications"])

handler = Mangum(app)