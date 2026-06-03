import os
import shutil

FILE_TYPES = {
    "Images": [".jpg", ".jpeg", ".png"],
    "PDFs": [".pdf"],
    "Videos": [".mp4", ".mkv"],
    "Music": [".mp3", ".wav"],
    "Python": [".py"],
}

def organize_folder(folder_path):

    if not os.path.exists(folder_path):
        print("Folder not found!")
        return

    moved_files = []

    for file in os.listdir(folder_path):

        file_path = os.path.join(folder_path, file)

        if os.path.isfile(file_path):

            extension = os.path.splitext(file)[1].lower()

            moved = False

            for folder_name, extensions in FILE_TYPES.items():

                if extension in extensions:

                    target_folder = os.path.join(
                        folder_path,
                        folder_name
                    )

                    os.makedirs(
                        target_folder,
                        exist_ok=True
                    )

                    shutil.move(
                        file_path,
                        os.path.join(
                            target_folder,
                            file
                        )
                    )

                    moved_files.append(
                        f"Moved {file} → {folder_name}"
                    )

                    moved = True

                    break

            if not moved:

                other_folder = os.path.join(
                    folder_path,
                    "Others"
                )

                os.makedirs(
                    other_folder,
                    exist_ok=True
                )

                shutil.move(
                    file_path,
                    os.path.join(
                        other_folder,
                        file
                    )
                )

                moved_files.append(
                    f"Moved {file} → Others"
                )

    print("\nSMART FILE ORGANIZER")
    print("-" * 40)

    for log in moved_files:
        print(log)

    print("\nOrganization Completed Successfully!")

if __name__ == "__main__":

    folder = input(
        "Enter Folder Path: "
    )

    organize_folder(folder)