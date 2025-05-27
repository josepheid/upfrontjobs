#!/usr/bin/env python3
import os

import aws_cdk as cdk

from upfront_stack import UpfrontStack

app = cdk.App()
UpfrontStack(app, "UpfrontStack")
app.synth()