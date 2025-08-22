export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center lg:text-left">
          CoreFlow360 - Clean Deployment
        </h1>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            🎉 Clean Deployment Working!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Backend is ready. Ready to add v0.dev UI components.
          </p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              ✅ Next.js 15 + TypeScript
            </p>
            <p className="text-sm text-gray-500">
              ✅ Prisma + Database Connection
            </p>
            <p className="text-sm text-gray-500">
              ✅ Tailwind CSS
            </p>
            <p className="text-sm text-gray-500">
              🔄 Ready for v0.dev UI Integration
            </p>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="/api/health"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Health Check{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Test database connection and system health
          </p>
        </a>
      </div>
    </main>
  )
}