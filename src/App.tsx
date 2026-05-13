import { MotionConfig, motion } from "motion/react";

function IconMonitor() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function IconDatabase() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2l1.7 5.1L19 9l-5.3 1.9L12 16l-1.7-5.1L5 9l5.3-1.9L12 2z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.91c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.39-3.9-1.39-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.72 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.18 1.19a10.98 10.98 0 0 1 5.78 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.59.24 2.77.12 3.06.74.81 1.18 1.85 1.18 3.11 0 4.45-2.71 5.43-5.29 5.71.42.36.79 1.07.79 2.16v3.05c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const contactLinks = [
  { label: "GitHub", href: "https://github.com/ankitmahotla", Icon: IconGitHub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ankit-mahotla-012a73244/",
    Icon: IconLinkedIn,
  },
];

const skillAreas = [
  {
    title: "Frontend",
    accent: "#5eead4",
    Icon: IconMonitor,
    copy: "Interfaces for products, dashboards, mobile apps, and landing workflows.",
    tools: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "TailwindCSS",
      "Zustand",
    ],
  },
  {
    title: "Backend",
    accent: "#818cf8",
    Icon: IconDatabase,
    copy: "APIs, middleware, integrations, auth flows, and data models.",
    tools: [
      "Node.js",
      "Express",
      "Hono",
      "REST",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Cloud",
    accent: "#c084fc",
    Icon: IconCloud,
    copy: "Deployments, event workflows, email systems, logs, and automation.",
    tools: [
      "AWS EC2",
      "S3",
      "Lambda",
      "SES",
      "EventBridge",
      "CloudWatch",
      "GitHub Actions",
    ],
  },
  {
    title: "AI Workflows",
    accent: "#f0abfc",
    Icon: IconSpark,
    copy: "AI-assisted development, agent workflows, and product AI integrations.",
    tools: ["Amazon Bedrock", "Claude Code", "ChatGPT Codex", "Cursor"],
  },
];

const products = [
  {
    title: "Flowreset",
    featured: true,
    type: "Growthify operations system",
    description:
      "An internal operating system for Growthify that consolidated CRM workflows, lead capture, workshop scheduling, payment attribution, and lifecycle email automation — replacing 4+ disconnected tools for the entire ops team.",
    surfaces: ["CRM", "Forms", "Payments", "Emails"],
    stack: ["React", "Node.js", "MongoDB", "AWS", "Razorpay"],
    link: null,
  },
  {
    title: "Haply Mobile App",
    featured: false,
    type: "Community mobile product",
    description:
      "A React Native community app experience built around local feeds, instant messaging, community rentals, persistent auth, and an Amazon Bedrock-powered AI chatbot.",
    surfaces: ["Feed", "Messages", "Rentals", "AI Chat"],
    stack: ["React Native", "Expo", "GraphQL", "Zustand", "Amazon Bedrock"],
    link: null,
  },
];

const principles = [
  "I like turning vague problems into clear product flows.",
  "I care about systems that are easy for non-technical teams to use.",
  "I prefer practical engineering: reliable, maintainable, and useful.",
];

const experience = [
  {
    company: "Growthify Media",
    role: "Lead Full Stack Developer",
    period: "2024 - Present",
    focus:
      "Flowreset: internal tools, automation, payments, and growth infrastructure.",
    bullets: [
      "Built Flowreset from scratch — consolidating leads, customers, payments, and ops into one internal platform replacing 4+ disconnected tools.",
      "Designed attribution-safe payment flows across Razorpay and Instamojo, ensuring every transaction maps back to its source campaign.",
      "Shipped embeddable lead forms, workshop scheduling, and AWS email workflows used daily by the operations team.",
    ],
    tags: ["Flowreset", "CRM", "Payments", "AWS"],
  },
  {
    company: "Haply Inc.",
    role: "Frontend Engineer",
    period: "2024 - 2025",
    focus: "Haply mobile app frontend and internal product tooling.",
    bullets: [
      "Owned major mobile product surfaces — discovery, messaging, rentals, and auth — across the full React Native app.",
      "Integrated an AI chatbot powered by Amazon Bedrock into the mobile product experience.",
      "Built and optimised GraphQL data flows, app state management, and mobile interaction polish.",
    ],
    tags: ["React Native", "Expo", "GraphQL", "Bedrock"],
  },
  {
    company: "Rise11 Technologies",
    role: "Frontend Developer Intern",
    period: "2023",
    focus: "Responsive web and mobile product interfaces.",
    bullets: [
      "Converted Figma designs into production Next.js and React Native screens with pixel-level accuracy.",
      "Integrated REST APIs and improved data loading patterns, reducing visible loading states across key product views.",
    ],
    tags: ["Next.js", "React Native", "REST APIs"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const pagePadding = "px-4 sm:px-8 lg:px-16";
const navLink =
  "rounded-md px-2.5 py-2 text-sm font-semibold text-[#8f9c96] transition hover:bg-[#151b18] hover:text-[#f6fbf8]";
const primaryButton =
  "inline-flex min-h-11 items-center justify-center rounded-[7px] border border-[#5eead4] bg-[#5eead4] px-5 text-[0.95rem] font-bold text-[#06110f] no-underline shadow-[0_14px_34px_rgba(94,234,212,0.16)] transition hover:border-[#99f6e4] hover:bg-[#99f6e4] max-sm:w-full";
const secondaryButton =
  "inline-flex min-h-11 items-center justify-center rounded-[7px] border border-[#314039] bg-[#101411] px-5 text-[0.95rem] font-bold text-[#f6fbf8] no-underline transition hover:border-[#5eead4] hover:bg-[#17211d] max-sm:w-full";
const eyebrow =
  "mb-3 text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-[#5eead4] sm:mb-3.5 sm:text-[0.78rem]";
const sectionHeading =
  "max-w-[760px] text-[clamp(1.75rem,4vw,3.3rem)] leading-[1.05] text-[#f6fbf8]";
const pill =
  "rounded-full border border-[#26322d] bg-[#0d110f] px-2.5 py-1.5 text-xs font-semibold leading-tight text-[#d7dfdb]";

function App() {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <main className="min-h-screen bg-[#080a09]">
        {/* Header */}
        <motion.header
          className={`sticky top-0 z-20 grid items-center gap-3 border-b border-[#26322d] bg-[#080a09]/90 py-4 backdrop-blur-lg sm:gap-4 lg:grid-cols-[minmax(180px,1fr)_auto_minmax(260px,1fr)] lg:gap-6 ${pagePadding}`}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a
            className="inline-flex flex-col gap-0.5 font-bold text-[#f6fbf8] no-underline"
            href="#top"
            aria-label="Ankit Mahotla home"
          >
            <span className="flex items-center gap-2">
              Ankit Mahotla
              <span className="hidden items-center gap-1.5 rounded-full border border-emerald-900/60 bg-emerald-950/40 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-400 sm:inline-flex">
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
                Open to work
              </span>
            </span>
            <small className="text-xs font-medium text-[#8f9c96]">
              Full Stack Engineer
            </small>
          </a>
          <nav
            className="hidden justify-center sm:flex"
            aria-label="Primary navigation"
          >
            <a className={navLink} href="#skills">
              Skills
            </a>
            <a className={navLink} href="#products">
              Products
            </a>
            <a className={navLink} href="#experience">
              Experience
            </a>
          </nav>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 lg:justify-end">
            {contactLinks.map((link) => (
              <a
                className="inline-flex min-h-9 w-9 items-center justify-center rounded-md text-[#8f9c96] transition hover:bg-[#151b18] hover:text-[#f6fbf8]"
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <link.Icon />
              </a>
            ))}
            <motion.a
              className="inline-flex min-h-9 items-center justify-center rounded-[7px] border border-[#314039] bg-[#121714] px-3.5 text-sm font-bold text-[#f6fbf8] no-underline transition hover:border-[#f6fbf8] hover:bg-[#f6fbf8] hover:text-[#06110f]"
              href="mailto:ankitmahotla45@gmail.com"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Email
            </motion.a>
          </div>
        </motion.header>

        {/* Hero */}
        <section
          className={`relative overflow-hidden grid gap-6 py-10 sm:gap-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16 lg:py-28 ${pagePadding}`}
          id="top"
        >
          {/* Glow blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -left-20 h-[500px] w-[700px] rounded-full bg-[#5eead4] opacity-[0.04] blur-[130px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-[#818cf8] opacity-[0.03] blur-[100px]"
          />
          {/* Dot grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(94,234,212,0.07) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              WebkitMaskImage:
                "radial-gradient(ellipse 55% 70% at 20% 40%, black 10%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 55% 70% at 20% 40%, black 10%, transparent 75%)",
            }}
          />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative"
          >
            {/* Availability badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#26322d] bg-[#101411] px-3.5 py-2"
              variants={fadeUp}
            >
              <span
                className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold text-[#8f9c96]">
                Available for product engineering work
              </span>
            </motion.div>

            <motion.p className={eyebrow} variants={fadeUp}>
              Builder, problem solver, product engineer
            </motion.p>
            <motion.h1
              className="max-w-[880px] text-[clamp(2.45rem,7vw,6.4rem)] font-black leading-[0.95] tracking-tight text-[#f6fbf8]"
              variants={fadeUp}
            >
              I build useful software from messy real-world problems.
            </motion.h1>
            <motion.p
              className="mt-5 max-w-[720px] text-[clamp(1rem,2vw,1.28rem)] leading-[1.58] text-[#a7b3ad] sm:mt-6"
              variants={fadeUp}
            >
              I work across frontend, backend, and cloud infrastructure, but the
              bigger thing I care about is making products that feel clear,
              reliable, and valuable to the people using them.
            </motion.p>
            <motion.div
              className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap"
              aria-label="Primary actions"
              variants={fadeUp}
            >
              <motion.a
                className={primaryButton}
                href="#skills"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                See skills
              </motion.a>
              <motion.a
                className={secondaryButton}
                href="/AnkitMahotla_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="relative grid gap-4 self-end">
            <motion.aside
              className="relative overflow-hidden rounded-2xl border border-[#26322d] bg-[#101411] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-6"
              aria-label="Profile summary"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
            >
              <div className="pointer-events-none absolute inset-x-8 top-8 h-28 rounded-full bg-[#5eead4]/[0.06] blur-3xl" aria-hidden="true" />
              <figure className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border border-[#26322d] bg-[#0d110f] shadow-[0_22px_70px_rgba(0,0,0,0.42)] sm:h-56 sm:w-56">
                <img
                  className="h-full w-full object-cover object-[center_28%]"
                  src="/profile.jpeg"
                  alt="Ankit Mahotla"
                  fetchPriority="high"
                />
              </figure>
              <div className="relative mt-5 text-center">
                <h2 className="text-2xl font-black tracking-tight text-[#f6fbf8]">
                  Ankit Mahotla
                </h2>
                <p className="mt-2 text-sm font-semibold text-[#5eead4]">
                  Full Stack Engineer
                </p>
                <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-[#8f9c96]">
                  Building product interfaces, APIs, automations, and AI-enabled workflows.
                </p>
              </div>
            </motion.aside>

            {/* How I think */}
            <motion.aside
              className="relative rounded-xl border border-[#26322d] bg-[#101411] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-6"
              aria-label="How Ankit thinks"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
            >
              <blockquote className="mb-5 border-l-2 border-[#5eead4] pl-4 text-[0.95rem] italic leading-relaxed text-[#f6fbf8]">
                "{principles[0]}"
              </blockquote>
              <p className={eyebrow}>How I think</p>
              <div className="grid gap-3 sm:gap-4">
                {principles.slice(1).map((principle) => (
                  <p
                    className="m-0 border-b border-[#26322d] pb-3 text-sm leading-relaxed text-[#d7dfdb] last:border-b-0 last:pb-0 sm:pb-4 sm:text-base"
                    key={principle}
                  >
                    {principle}
                  </p>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        {/* Skills */}
        <section
          className={`border-y border-[#26322d] bg-[#101411] py-10 sm:py-16 lg:py-20 ${pagePadding}`}
          id="skills"
        >
          <SectionHeading
            eyebrowText="Skills"
            title="The areas where I can move a product forward."
          />
          <motion.div
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={stagger}
          >
            {skillAreas.map((area) => (
              <motion.article
                className="rounded-lg border border-[#26322d] bg-[#121714] p-4 transition-colors hover:border-[#3a4b44] sm:p-5"
                style={{ borderTopColor: area.accent, borderTopWidth: "2px" }}
                key={area.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0d110f]"
                    style={{ color: area.accent }}
                  >
                    <area.Icon />
                  </span>
                  <h3 className="text-xl leading-tight text-[#f6fbf8] sm:text-2xl">
                    {area.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#a7b3ad] sm:text-base">
                  {area.copy}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                  {area.tools.map((tool) => (
                    <span className={pill} key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Products */}
        <section
          className={`border-b border-[#26322d] py-10 sm:py-16 lg:py-20 ${pagePadding}`}
          id="products"
        >
          <div className="mb-6 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={eyebrow}>Products</p>
              <h2 className={sectionHeading}>Systems and apps I have shaped.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#8f9c96]">
              Private product work, shown as system-level snapshots instead of screenshots.
            </p>
          </div>
          <motion.div
            className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={stagger}
          >
            {products.map((product, index) => (
              <motion.article
                className={`overflow-hidden rounded-2xl border border-[#26322d] bg-[#121714] transition-colors hover:border-[#3a4b44] ${
                  product.featured ? "lg:min-h-[430px]" : ""
                }`}
                key={product.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
              >
                <div className="grid h-full gap-5 p-5 sm:p-6 lg:grid-rows-[auto_1fr_auto]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[#5eead4]">
                        {product.type}
                      </p>
                      <h3 className="text-2xl leading-tight text-[#f6fbf8] sm:text-3xl">
                        {product.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-[#26322d] bg-[#0d110f] px-3 py-1.5 text-xs font-semibold text-[#8f9c96]">
                      0{index + 1}
                    </span>
                  </div>

                  {product.featured ? (
                    <ProductDashboardMock labels={product.surfaces} />
                  ) : (
                    <ProductPhoneMock labels={product.surfaces} />
                  )}

                  <div>
                    <p className="max-w-[680px] text-sm leading-relaxed text-[#a7b3ad] sm:text-base">
                      {product.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.stack.map((item) => (
                        <span className={pill} key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Experience */}
        <section
          className={`border-b border-[#26322d] bg-[#101411] py-10 sm:py-16 lg:py-20 ${pagePadding}`}
          id="experience"
        >
          <SectionHeading
            eyebrowText="Experience"
            title="Where I have applied these skills."
          />
          <motion.div
            className="relative grid gap-4 sm:gap-6 lg:ml-6 lg:pl-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
            variants={stagger}
          >
            <motion.span
              className="absolute left-[7px] top-5 hidden w-px origin-top rounded-full bg-gradient-to-b from-[#5eead4] via-[#5eead4]/55 to-[#26322d] lg:block"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: "calc(100% - 40px)" }}
              aria-hidden="true"
            />
            {experience.map((item, index) => (
              <motion.article
                className="relative"
                key={item.company}
                variants={fadeUp}
              >
                <motion.span
                  className="absolute -left-[2.55rem] top-6 hidden h-4 w-4 rounded-full bg-[#5eead4] shadow-[0_0_0_6px_#101411,0_0_24px_rgba(94,234,212,0.45)] lg:block"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    delay: 0.18 + index * 0.12,
                    duration: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  aria-hidden="true"
                >
                  <motion.span
                    className="absolute inset-0 rounded-full bg-[#5eead4]"
                    animate={{ scale: [1, 1.9, 1], opacity: [0.24, 0, 0.24] }}
                    transition={{
                      delay: index * 0.25,
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.span>
                <div className="overflow-hidden rounded-xl border border-[#26322d] bg-[#121714]">
                  <div className="grid gap-3 border-b border-[#26322d] bg-[#151b18] p-4 sm:gap-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-start">
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[#5eead4]">
                        {item.role}
                      </p>
                      <h3 className="text-xl leading-tight text-[#f6fbf8] sm:text-2xl">
                        {item.company}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#a7b3ad] sm:text-base">
                        {item.focus}
                      </p>
                    </div>
                    <span className="w-fit rounded-full border border-[#314039] bg-[#0d110f] px-3 py-1.5 text-sm font-bold text-[#d7dfdb]">
                      {item.period}
                    </span>
                  </div>
                  <div className="grid gap-4 p-4 sm:gap-5 sm:p-5 lg:grid-cols-[minmax(0,1fr)_260px]">
                    <ul className="grid gap-2.5 pl-5 text-sm leading-relaxed text-[#a7b3ad]">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="flex h-fit flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span className={pill} key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Education + Contact */}
        <motion.section
          className={`grid gap-8 py-10 sm:py-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(320px,1fr)] lg:gap-20 lg:py-20 ${pagePadding}`}
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className={eyebrow}>Education</p>
            <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.8rem)] leading-tight text-[#f6fbf8]">
              Thapar Institute of Engineering & Technology
            </h2>
            <p className="leading-relaxed text-[#a7b3ad]">
              B.E. Computer Science Engineering, 2019 - 2023
            </p>
          </motion.div>
          <motion.div
            className="border-t border-[#26322d] pt-7 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0"
            variants={fadeUp}
          >
            <p className={eyebrow}>Contact</p>
            <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.8rem)] leading-tight text-[#f6fbf8]">
              Let's talk.
            </h2>
            <p className="leading-relaxed text-[#a7b3ad]">
              I am open to product engineering work where thoughtful UX, solid
              APIs, and reliable systems matter.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
              <motion.a
                className={primaryButton}
                href="mailto:ankitmahotla45@gmail.com"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                ankitmahotla45@gmail.com
              </motion.a>
              <a
                className="inline-flex min-h-9 w-9 items-center justify-center rounded-md text-[#8f9c96] transition hover:bg-[#151b18] hover:text-[#f6fbf8]"
                href="https://github.com/ankitmahotla"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <IconGitHub />
              </a>
              <a
                className="inline-flex min-h-9 w-9 items-center justify-center rounded-md text-[#8f9c96] transition hover:bg-[#151b18] hover:text-[#f6fbf8]"
                href="https://www.linkedin.com/in/ankit-mahotla-012a73244/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <IconLinkedIn />
              </a>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </MotionConfig>
  );
}

function SectionHeading({
  eyebrowText,
  title,
  id,
}: {
  eyebrowText: string;
  title: string;
  id?: string;
}) {
  return (
    <motion.div
      className="mb-6 max-w-[1160px] sm:mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={stagger}
    >
      <motion.p className={eyebrow} variants={fadeUp}>
        {eyebrowText}
      </motion.p>
      <motion.h2 className={sectionHeading} id={id} variants={fadeUp}>
        {title}
      </motion.h2>
    </motion.div>
  );
}

function ProductDashboardMock({ labels }: { labels: string[] }) {
  return (
    <div className="rounded-xl border border-[#26322d] bg-[#0d110f] p-3">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ef4444]" />
        <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
        <span className="h-2 w-2 rounded-full bg-[#5eead4]" />
      </div>
      <div className="grid gap-3 sm:grid-cols-[0.75fr_1.25fr]">
        <div className="grid gap-2">
          {labels.map((label, index) => (
            <div
              className={`rounded-lg border border-[#26322d] px-3 py-2 text-xs font-semibold ${
                index === 0
                  ? "bg-[#5eead4] text-[#06110f]"
                  : "bg-[#121714] text-[#a7b3ad]"
              }`}
              key={label}
            >
              {label}
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-[#26322d] bg-[#121714] p-3">
          <div className="mb-3 h-3 w-28 rounded-full bg-[#26322d]" />
          <div className="grid gap-2">
            {[64, 88, 52, 76].map((width, index) => (
              <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-md bg-[#0d110f] p-2" key={width}>
                <span className="h-2 rounded-full bg-[#26322d]" style={{ width: `${width}%` }} />
                <span className={index === 1 ? "h-2 w-2 rounded-full bg-[#5eead4]" : "h-2 w-2 rounded-full bg-[#3a4b44]"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductPhoneMock({ labels }: { labels: string[] }) {
  return (
    <div className="mx-auto w-full max-w-[250px] rounded-[2rem] border border-[#26322d] bg-[#0d110f] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
      <div className="rounded-[1.45rem] border border-[#26322d] bg-[#121714] p-3">
        <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-[#26322d]" />
        <div className="mb-3 rounded-xl bg-[#5eead4] p-3 text-sm font-bold text-[#06110f]">
          Community feed
        </div>
        <div className="grid gap-2">
          {labels.map((label) => (
            <div className="flex items-center gap-2 rounded-lg bg-[#0d110f] p-2" key={label}>
              <span className="h-7 w-7 rounded-full bg-[#26322d]" />
              <div>
                <p className="m-0 text-xs font-semibold text-[#f6fbf8]">{label}</p>
                <p className="m-0 mt-1 h-1.5 w-20 rounded-full bg-[#26322d]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
