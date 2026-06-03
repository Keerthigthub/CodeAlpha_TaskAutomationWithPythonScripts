import { useState, ChangeEvent } from "react";

import type { OrganizeState } from "@/routes/index";
export function OrganizerPanel({
  onChange,
}: {
  onChange?: (state: OrganizeState) => void;
}) {

  const [files, setFiles] = useState<File[]>([]);

  const [organized, setOrganized] =
    useState(false);

  const [imageCount, setImageCount] =
    useState(0);

  const [pdfCount, setPdfCount] =
    useState(0);

  const [videoCount, setVideoCount] =
    useState(0);

  const [musicCount, setMusicCount] =
    useState(0);

  const [pythonCount, setPythonCount] =
    useState(0);

  const [otherCount, setOtherCount] =
    useState(0);

  const [logs, setLogs] =
    useState<string[]>([]);

  // HANDLE FOLDER SELECT

  const handleFolderSelect = (
    event: ChangeEvent<HTMLInputElement>
  ) => {

    if (event.target.files) {

      const selectedFiles =
        Array.from(event.target.files);

      setFiles(selectedFiles);

      setOrganized(false);

    }

  };

  // HANDLE ORGANIZATION

  const handleOrganize = () => {

    let images = 0;

    let pdfs = 0;

    let videos = 0;

    let music = 0;

    let python = 0;

    let others = 0;

    const activityLogs: string[] = [];

    files.forEach((file) => {

      const extension =
        file.name
          .split(".")
          .pop()
          ?.toLowerCase();

      // IMAGE FILES

      if (
        extension === "jpg" ||
        extension === "jpeg" ||
        extension === "png" ||
        extension === "gif"
      ) {

        images++;

        activityLogs.push(
          `✔ Moved ${file.name} → Images`
        );

      }

      // PDF FILES

      else if (
        extension === "pdf"
      ) {

        pdfs++;

        activityLogs.push(
          `✔ Moved ${file.name} → PDFs`
        );

      }

      // VIDEO FILES

      else if (
        extension === "mp4" ||
        extension === "mkv" ||
        extension === "avi"
      ) {

        videos++;

        activityLogs.push(
          `✔ Moved ${file.name} → Videos`
        );

      }

      // MUSIC FILES

      else if (
        extension === "mp3" ||
        extension === "wav"
      ) {

        music++;

        activityLogs.push(
          `✔ Moved ${file.name} → Music`
        );

      }

      // PYTHON FILES

      else if (
        extension === "py"
      ) {

        python++;

        activityLogs.push(
          `✔ Moved ${file.name} → Python`
        );

      }

      // OTHER FILES

      else {

        others++;

        activityLogs.push(
          `✔ Moved ${file.name} → Others`
        );

      }

    });

    // UPDATE LOCAL UI

    setImageCount(images);

    setPdfCount(pdfs);

    setVideoCount(videos);

    setMusicCount(music);

    setPythonCount(python);

    setOtherCount(others);

    setLogs(activityLogs);

    setOrganized(true);

    // UPDATE ANALYTICS PAGE

    onChange?.({

      folderPath: "Selected Folder",

      counts: {

        Images: images,

        PDFs: pdfs,

        Videos: videos,

        Music: music,

        Python: python,

        Others: others,

      },

      total:
        images +
        pdfs +
        videos +
        music +
        python +
        others,

      logs: activityLogs,

      progress: 100,

      running: false,

    });

  };

  return (

    <section
      id="organize"
      className="mx-auto max-w-7xl px-4 py-16"
    >

      <div className="glass p-8">

        {/* TITLE */}

        <h2 className="text-4xl font-bold text-white">

          📂 Smart File Organizer

        </h2>

        <p className="mt-3 text-gray-400">

          Upload folders and automatically categorize files using smart automation.

        </p>

        {/* HIDDEN INPUT */}

        <input
          type="file"
          id="folderInput"
          multiple
          ref={(input) => {

            if (input) {

              input.setAttribute(
                "webkitdirectory",
                ""
              );

            }

          }}
          style={{ display: "none" }}
          onChange={handleFolderSelect}
        />

        {/* BUTTONS */}

        <div className="mt-8 flex flex-wrap gap-4">

          <button
            onClick={() =>
              document
                .getElementById("folderInput")
                ?.click()
            }
            className="btn-neon rounded-xl px-6 py-3 font-semibold"
          >

            📂 Upload Folder

          </button>

          <button
            onClick={handleOrganize}
            className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >

            🚀 Organize Files

          </button>

        </div>

        {/* FILE COUNT */}

        <div className="mt-6 text-lg text-gray-300">

          Selected Files:
          {" "}
          {files.length}

        </div>

        {/* FILE LIST */}

        <div className="mt-6 max-h-64 overflow-y-auto rounded-2xl bg-[#111827] p-5">

          {files.length > 0 ? (

            <ul className="space-y-2">

              {files.map((file, index) => (

                <li
                  key={index}
                  className="border-b border-gray-700 pb-2 text-gray-200"
                >

                  📄 {file.name}

                </li>

              ))}

            </ul>

          ) : (

            <p className="text-gray-500">

              No files selected yet.

            </p>

          )}

        </div>

        {/* STATS */}

        {organized && (

          <div className="mt-10 grid gap-4 md:grid-cols-6">

            {[
              {
                label: "Images",
                value: imageCount,
              },

              {
                label: "PDFs",
                value: pdfCount,
              },

              {
                label: "Videos",
                value: videoCount,
              },

              {
                label: "Music",
                value: musicCount,
              },

              {
                label: "Python",
                value: pythonCount,
              },

              {
                label: "Others",
                value: otherCount,
              },

            ].map((item) => (

              <div
                key={item.label}
                className="rounded-2xl bg-[#111827] p-5 text-center"
              >

                <h3 className="text-lg font-semibold text-white">

                  {item.label}

                </h3>

                <p className="mt-2 text-3xl font-bold text-emerald-400">

                  {item.value}

                </p>

              </div>

            ))}

          </div>

        )}

        {/* LOGS */}

        {organized && (

          <div className="mt-10 rounded-2xl bg-[#111827] p-6">

            <h3 className="text-2xl font-bold text-white">

              📜 Activity Logs

            </h3>

            <ul className="mt-5 space-y-2">

              {logs.map((log, index) => (

                <li
                  key={index}
                  className="text-gray-300"
                >

                  {log}

                </li>

              ))}

            </ul>

          </div>

        )}

      </div>

    </section>

  );

}