import os

from PIL import Image
from slugify import slugify


# input_folder = "C:\\Image\\Movies"
# output_folder = "public\\movies"
# crop_width = 165

input_folder = "C:\\Image\\Series"
output_folder = "public\\series"
crop_width = 182

crop_height = 256

os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    if filename.lower().endswith(".ico"):
        filepath: str = os.path.join(input_folder, filename)
        filename_slug: str = slugify(filename.replace(".ico", ""))

        with Image.open(filepath) as img:
            if img.size != (256, 256):
                print(f"Saltando {filename}: tamaño incorrecto {img.size}")
                continue

            img: Image.Image = img.convert("RGBA")

            left: int = (256 - crop_width) // 2
            top = 0
            right: int = left + crop_width
            bottom: int = top + crop_height

            cropped_img: Image.Image = img.crop((left, top, right, bottom))

            output_filename: str = os.path.splitext(filename_slug)[0] + ".webp"
            output_path: str = os.path.join(output_folder, output_filename)
            cropped_img.save(output_path, "WEBP", lossless=True)

            print(f"Processing... {filename} → {output_filename}")

print("Proceso completado.")
