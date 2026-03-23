import fitz  # PyMuPDF
import os

PDF_PATH = r"d:\Downloads\nowaygallery.pdf"
OUTPUT_DIR = r"d:\Downloads\nowaytours-main\nowaytours-main\src\assets\gallery"

os.makedirs(OUTPUT_DIR, exist_ok=True)

doc = fitz.open(PDF_PATH)
img_count = 0

for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    for img_index, img_info in enumerate(images):
        xref = img_info[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        ext = base_image["ext"]
        # Save as jpg if possible
        if ext.lower() in ("jpeg", "jpg", "png", "webp"):
            filename = f"gallery_{img_count + 1:02d}.{ext}"
            filepath = os.path.join(OUTPUT_DIR, filename)
            with open(filepath, "wb") as f:
                f.write(image_bytes)
            img_count += 1
            print(f"Saved: {filename}")

print(f"\nTotal images extracted: {img_count}")
print(f"Saved to: {OUTPUT_DIR}")
