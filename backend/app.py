from flask import Flask, request, jsonify
import os
import shutil

app = Flask(__name__)

FILE_TYPES = {
    "Images": [".jpg", ".png", ".jpeg"],
    "PDFs": [".pdf"],
    "Videos": [".mp4"],
    "Music": [".mp3"],
    "Python": [".py"]
}

@app.route("/organize", methods=["POST"])
def organize():
    folder = request.json.get("folder")

    if not os.path.exists(folder):
        return jsonify({"error": "Folder not found"})

    counts = {}

    for file in os.listdir(folder):
        path = os.path.join(folder, file)

        if os.path.isfile(path):
            ext = os.path.splitext(file)[1].lower()

            for category, exts in FILE_TYPES.items():
                if ext in exts:
                    target = os.path.join(folder, category)

                    os.makedirs(target, exist_ok=True)

                    shutil.move(path, os.path.join(target, file))

                    counts[category] = counts.get(category, 0) + 1

    return jsonify(counts)

if __name__ == "__main__":
    app.run(debug=True)