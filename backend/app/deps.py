from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import jwt
import requests
import os

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
COGNITO_REGION = os.getenv("COGNITO_REGION")
USERPOOL_ID = os.getenv("COGNITO_USERPOOL_ID")

JWKS_URL = f"https://cognito-idp.{COGNITO_REGION}.amazonaws.com/{USERPOOL_ID}/.well-known/jwks.json"

jwks = requests.get(JWKS_URL).json()

from jose import jwk, JWTError

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        header = jwt.get_unverified_header(token)
        key = next(k for k in jwks['keys'] if k['kid'] == header['kid'])
        public_key = jwk.construct(key)
        claims = jwt.decode(token, public_key.to_pem().decode(), algorithms=[key['alg']], audience=None)
        return {
            "sub": claims['sub'],
            "email": claims.get("email"),
            "role": claims.get("custom:role")
        }
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")