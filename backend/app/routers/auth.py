from fastapi import APIRouter, Depends, HTTPException
from app.deps import get_current_user

router = APIRouter()

@router.get("/me")
def get_me(user=Depends(get_current_user)):
    return {"user": user}