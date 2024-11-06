import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://d6375cf4bbe3e163684227e0635c6d5d@o4508249341165568.ingest.de.sentry.io/4508249438617680",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
