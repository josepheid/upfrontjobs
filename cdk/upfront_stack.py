from aws_cdk import (
    Stack,
    aws_lambda as _lambda,
    aws_apigateway as apigw,
    aws_dynamodb as ddb,
    aws_cognito as cognito,
    RemovalPolicy,
    Duration
)

from constructs import Construct
import os

class UpfrontStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, **kwargs):
        super().__init__(scope, construct_id, **kwargs)

        # DynamoDB Table
        table = ddb.Table(
            self, "UpfrontTable",
            partition_key={"name": "PK", "type": ddb.AttributeType.STRING},
            sort_key={"name": "SK", "type": ddb.AttributeType.STRING},
            removal_policy=RemovalPolicy.DESTROY  # Change to RETAIN for production
        )

        # Cognito User Pool
        user_pool = cognito.UserPool(self, "UserPool",
            self_sign_up_enabled=True,
            sign_in_aliases=cognito.SignInAliases(email=True),
            standard_attributes=cognito.StandardAttributes(
                email=cognito.StandardAttribute(required=True)
            )
        )

        user_pool_client = cognito.UserPoolClient(self, "UserPoolClient",
            user_pool=user_pool,
            generate_secret=False
        )

        # Lambda function
        backend_lambda = _lambda.Function(
            self, "FastApiHandler",
            runtime=_lambda.Runtime.PYTHON_3_11,
            handler="lambda_handler.handler",
            code=_lambda.Code.from_asset("../backend"),
            environment={
                "COGNITO_REGION": self.region,
                "COGNITO_USERPOOL_ID": user_pool.user_pool_id,
                "TABLE_NAME": table.table_name,
            },
            memory_size=512,
            timeout=Duration.seconds(30),
        )

        # Permissions
        table.grant_read_write_data(backend_lambda)

        # API Gateway
        api = apigw.LambdaRestApi(
            self, "UpfrontAPI",
            handler=backend_lambda,
            proxy=True,
        )

        # Outputs
        self.api_url = api.url
        self.user_pool_id = user_pool.user_pool_id
        self.user_pool_client_id = user_pool_client.user_pool_client_id