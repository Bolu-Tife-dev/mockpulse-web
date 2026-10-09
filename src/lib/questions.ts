export const ROLES = [
  "Frontend",
  "Backend",
  "Full Stack",
  "Software Engineering",
] as const;

export const LEVELS = ["Intern", "Junior", "Mid"] as const;

export type Role = (typeof ROLES)[number];
export type Level = (typeof LEVELS)[number];

export interface SampleQuestion {
  topic: string;
  question: string;
}

export const EVALUATION_NOTES: Record<Role, string> = {
  Frontend:
    "Component architecture, rendering strategy, accessibility and browser internals.",
  Backend:
    "API design, data modelling, concurrency, reliability and trade-off reasoning.",
  "Full Stack":
    "End-to-end feature thinking — schema to UI, auth boundaries and deploy pipeline.",
  "Software Engineering":
    "Problem decomposition, complexity analysis, clean code and communication.",
};

export const QUESTIONS: Record<Role, Record<Level, SampleQuestion[]>> = {
  Frontend: {
    Intern: [
      {
        topic: "HTML & Semantics",
        question:
          "Walk me through how you would build an accessible pricing page. Which landmarks and ARIA attributes would you use?",
      },
      {
        topic: "CSS Layout",
        question:
          "Explain the difference between `flex` and `grid`. When would you reach for each one?",
      },
      {
        topic: "JavaScript Basics",
        question:
          "What is a closure? Give a practical example of using one in a React component.",
      },
    ],
    Junior: [
      {
        topic: "React",
        question:
          "How do `useMemo` and `useCallback` differ? How would you prove a component actually needed them?",
      },
      {
        topic: "Performance",
        question:
          "A list of 5,000 rows scrolls poorly. Walk me through how you would diagnose and fix it.",
      },
      {
        topic: "Browser",
        question:
          "Explain the critical rendering path. Where do reflows and repaints fit in?",
      },
    ],
    Mid: [
      {
        topic: "Architecture",
        question:
          "Design a front-end architecture for a dashboard used by 50k daily users with heavy real-time data.",
      },
      {
        topic: "State Management",
        question:
          "Server state vs. client state — how do you model each, and what breaks when you mix them up?",
      },
      {
        topic: "Testing",
        question:
          "What is your testing trophy for a design-system package? Which layer catches which class of bug?",
      },
    ],
  },
  Backend: {
    Intern: [
      {
        topic: "HTTP",
        question:
          "What is the difference between GET, POST and PUT? When would you return a 409?",
      },
      {
        topic: "Databases",
        question:
          "Explain primary keys vs. foreign keys. Write a query to list users with their orders.",
      },
      {
        topic: "Git & CLI",
        question:
          "Your teammate force-pushed to `main`. How do you recover your work safely?",
      },
    ],
    Junior: [
      {
        topic: "REST Design",
        question:
          "Design the endpoints for a URL shortener. How do you handle slugs that already exist?",
      },
      {
        topic: "SQL",
        question:
          "What is an index? Write a query that finds the 10 most recent posts per author efficiently.",
      },
      {
        topic: "Auth",
        question:
          "Compare session-based auth and JWTs. Where does each one fail in practice?",
      },
    ],
    Mid: [
      {
        topic: "System Design",
        question:
          "Design a rate limiter for a public API serving 10k requests/sec. Discuss algorithms and storage.",
      },
      {
        topic: "Concurrency",
        question:
          "Two services update the same inventory row. Walk me through race conditions and how you prevent them.",
      },
      {
        topic: "Reliability",
        question:
          "Your third-party payment provider times out. Design the retry and idempotency strategy.",
      },
    ],
  },
  "Full Stack": {
    Intern: [
      {
        topic: "End-to-End",
        question:
          "Add a 'contact us' form to a Next.js app. Cover the UI, the API route and basic validation.",
      },
      {
        topic: "Environment",
        question:
          "What is the difference between environment variables in the browser and on the server?",
      },
      {
        topic: "Debugging",
        question:
          "A form submission works locally but fails in production. How do you investigate?",
      },
    ],
    Junior: [
      {
        topic: "Product Feature",
        question:
          "Build a shared todo board with invite-only access. Sketch the schema, API and UI states.",
      },
      {
        topic: "Data Flow",
        question:
          "How does data flow from a Postgres row to a rendered table row in your stack? Where do you cache?",
      },
      {
        topic: "Security",
        question:
          "Name three vulnerabilities you guard against in a full-stack app and your fix for each.",
      },
    ],
    Mid: [
      {
        topic: "System Design",
        question:
          "Design a real-time collaborative document editor. Cover sync, conflict resolution and permissions.",
      },
      {
        topic: "Migration",
        question:
          "A monolith needs to extract a billing service. How do you stage the migration with zero downtime?",
      },
      {
        topic: "Observability",
        question:
          "P95 latency doubled after a deploy. What dashboards, logs and traces do you pull first?",
      },
    ],
  },
  "Software Engineering": {
    Intern: [
      {
        topic: "Algorithms",
        question:
          "Given an array of integers, return indices of two numbers that add up to a target. Analyze complexity.",
      },
      {
        topic: "Data Structures",
        question:
          "When would you use a hash map over an array? Implement an LRU cache at a high level.",
      },
      {
        topic: "Code Quality",
        question:
          "Refactor this nested conditional function into something readable. What tests would you add?",
      },
    ],
    Junior: [
      {
        topic: "Algorithms",
        question:
          "Merge two sorted linked lists. Then discuss how you would parallelize the merge.",
      },
      {
        topic: "Complexity",
        question:
          "Explain big-O to a junior dev. Why can a technically O(n²) solution win in production?",
      },
      {
        topic: "Craft",
        question:
          "How do you decide when technical debt is worth paying down now vs. later?",
      },
    ],
    Mid: [
      {
        topic: "Architecture",
        question:
          "Design a job scheduling system with retries, backoff and exactly-once semantics.",
      },
      {
        topic: "Trade-offs",
        question:
          "Compare monorepo and polyrepo for a 20-engineer org. What decides it for you?",
      },
      {
        topic: "Leadership",
        question:
          "A project's deadline slips twice. How do you re-plan and communicate upward?",
      },
    ],
  },
};
