from fastapi import APIRouter, Depends
from app.deps import get_current_user
from app.models import create_job, list_jobs

router = APIRouter()

@router.post("/")
def post_job(job_data: dict, user=Depends(get_current_user)):
    if user['role'] != 'employer':
        raise HTTPException(status_code=403, detail="Only employers can post jobs")
    return create_job(job_data, user['sub'])

@router.get("/")
def get_jobs():
    return list_jobs()