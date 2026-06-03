type ServerEntry = {
  fetch: (
    request: Request,
    env: unknown,
    ctx: unknown
  ) => Promise<Response> | Response;
};

let serverEntryPromise:
  Promise<ServerEntry> | undefined;

async function getServerEntry():
  Promise<ServerEntry> {

  if (!serverEntryPromise) {

    serverEntryPromise =
      import("@tanstack/react-start/server-entry")
        .then(
          (m) =>
            (m.default ?? m) as ServerEntry
        );

  }

  return serverEntryPromise;
}

export default {

  async fetch(
    request: Request,
    env: unknown,
    ctx: unknown
  ) {

    try {

      const handler =
        await getServerEntry();

      return await handler.fetch(
        request,
        env,
        ctx
      );

    } catch (error) {

      console.error(error);

      return new Response(

        `
        <html>
          <head>
            <title>Server Error</title>
          </head>

          <body
            style="
              background:#0f172a;
              color:white;
              display:flex;
              justify-content:center;
              align-items:center;
              height:100vh;
              font-family:Arial;
            "
          >

            <div
              style="
                text-align:center;
              "
            >

              <h1>
                Something went wrong
              </h1>

              <p>
                Smart File Organizer Pro
              </p>

            </div>

          </body>

        </html>
        `,

        {

          status: 500,

          headers: {

            "content-type":
              "text/html; charset=utf-8",

          },

        }

      );

    }

  },

};