import { RESUME_PDF_BASE64 } from "@/lib/resumePdf";

const RESUME_DATA_URL = `data:application/pdf;base64,${RESUME_PDF_BASE64}`;

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-border bg-card/80 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur-xl sm:px-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
              Resume
            </p>
            <p className="mt-1 text-sm text-muted">
              Preview the resume inline or download a copy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={RESUME_DATA_URL}
              download="Dhruv-Gambhir-Resume.pdf"
              className="inline-flex items-center justify-center rounded-2xl border border-border bg-card/70 px-4 py-2 text-sm font-semibold text-foreground shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              Download
            </a>
          </div>
        </div>

        <section className="min-h-[calc(100vh-10rem)] overflow-hidden rounded-3xl border border-border bg-card/70 shadow-[var(--shadow-card)] backdrop-blur-xl">
          <iframe
            src={RESUME_DATA_URL}
            title="Dhruv Gambhir Resume"
            className="h-[calc(100vh-10rem)] w-full"
          />
        </section>
      </div>
    </main>
  );
}