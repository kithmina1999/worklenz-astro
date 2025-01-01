import asyncio
import os
from openai import AsyncOpenAI

# Replace with your OpenAI API key
# openai.api_key = "***REMOVED***"
client = AsyncOpenAI(
  api_key='***REMOVED***',  # this is also the default, it can be omitted
)

async def translate_file(input_path, output_path, source_language="English", target_language="German"):
    with open(input_path, "r", encoding="utf-8") as file:
        content = file.read()
    
    prompt = f"Translate the following JSON object from {source_language} to {target_language}:\n\n{content}"
    
    response = await client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a professional translator."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=2048,
        temperature=0.3
    )
    translated_content = response.choices[0].message.content.strip()
    
    with open(output_path, "w", encoding="utf-8") as file:
        file.write(translated_content)
    
    print(f"Translated: {input_path} -> {output_path}")

async def translate_folder(input_folder, output_folder):
    os.makedirs(output_folder, exist_ok=True)
    
    for filename in os.listdir(input_folder):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)
        
        if os.path.isfile(input_path):
            try:
                await translate_file(input_path, output_path)
            except Exception as e:
                print(f"Error translating {input_path}: {e}")
                raise  # Stop execution on error

async def main():
    input_folder = "./src/i18n/en"  # Adjust the path as needed
    output_folder = "./src/i18n/de"  # Adjust the path as needed
    
    try:
        await translate_folder(input_folder, output_folder)
    except Exception as e:
        print(f"Script terminated due to an error: {e}")

asyncio.run(main())
