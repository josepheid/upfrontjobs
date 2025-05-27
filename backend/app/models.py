import boto3
import uuid
from datetime import datetime

TABLE_NAME = "YourDynamoDBTable"
dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(TABLE_NAME)

def create_job(job_data: dict, employer_id: str):
    job_id = str(uuid.uuid4())
    item = {
        "PK": f"JOB#{job_id}",
        "SK": f"POSTEDAT#{datetime.utcnow().isoformat()}",
        "title": job_data["title"],
        "description": job_data["description"],
        "employer_id": employer_id,
    }
    table.put_item(Item=item)
    return item

def list_jobs():
    response = table.scan(FilterExpression="begins_with(PK, :job)", ExpressionAttributeValues={":job": "JOB#"})
    return response.get("Items", [])

def apply_to_job(job_id: str, user_id: str, cover_letter: str):
    app_id = str(uuid.uuid4())
    item = {
        "PK": f"APP#{app_id}",
        "SK": f"META",
        "job_id": job_id,
        "user_id": user_id,
        "cover_letter": cover_letter,
        "created_at": datetime.utcnow().isoformat()
    }
    table.put_item(Item=item)
    return item