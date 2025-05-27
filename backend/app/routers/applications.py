from fastapi import APIRouter, Depends
from app.deps import get_current_user
from app.models import apply_to_job

router = APIRouter()

@router.post("/{job_id}")
def apply(job_id: str, body: dict, user=Depends(get_current_user)):
    if user['role'] != 'user':
        raise HTTPException(status_code=403, detail="Only users can apply to jobs")
    return apply_to_job(job_id, user['sub'], body.get("cover_letter", ""))