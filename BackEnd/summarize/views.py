from django.shortcuts import render
from django.http import JsonResponse
import requests
import os
from django.views.decorators.csrf import csrf_exempt

from  dotenv import load_dotenv
load_dotenv()


@csrf_exempt
def summarize_view(request):
    if request.method =="POST":
        import json
        body = json.loads(request.body.decode())
        text = body.get("inputs", "")
        HF_TOKEN = os.environ.get("HF_TOKEN")
        # api_url = "https://router.huggingface.co/hf-inference/models/facebook/bart-large-cnn"
        api_url = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"

        resp = requests.post(api_url,
            headers={
                "Authorization": f"Bearer {HF_TOKEN}",
                "Content-Type": "application/json"
            },
            # json={"inputs": text }
            json={
            "inputs": text,
            "parameters": {
                "max_length": 60,   
                "min_length": 15
            }}


        )
        print("HF Response:", resp.text)
        return JsonResponse(resp.json(), safe=False)
    return JsonResponse({"error": "Method not allowed"}, status=405)
