/* ==========================================================================
   ALL SITE CONTENT LIVES HERE.
   To add a project, add one object to `projects` (see ADD_PROJECT_PROMPT.md).
   Nothing in index.html, style.css or app.js needs to change for new content.

   Text conventions
   - *word* inside a title, headline or statement renders as an italic accent.
   - Leave a field out (or empty) and the site simply does not show it.

   Project fields
   - id         unique, kebab-case; also the folder name in assets/img/projects/
   - type       "mobile" (phone mock-up) | "web" (browser frame) | "tool" (terminal)
   - featured   true  = full chapter on the page
                false = compact row in the "More work" list
   - hidden     true  = kept in this file but not shown anywhere
   - name       display name; `title` is the same with an optional *accent*
   - nameAr     optional Arabic name, drawn large behind the title
   - group      optional small label, e.g. the product family
   - hook       optional end of the hero sentence "I build apps that help people …"
   - color      accent colour (hex). Used for glow and highlights on a dark page,
                so pick the brand's most vivid colour. Too-dark colours are
                lightened automatically.
   - splash     phone screen background when there are no screenshots
   - icon       square app icon, 384px PNG
   - screens    screenshots; when present they replace the splash and cycle
   - tagline, summary (string or array of paragraphs)
   - meta       [{ label, value }]  role, company, period, platforms …
   - highlights [{ title, text }]   user-facing features
   - engineering [string]           "under the hood" notes
   - stack      [string]
   - badges     [string]            up to 3 short labels floating by the mock-up
   - links      [{ label, url, kind }]  kind: appstore | play | github | web
   - terminal   [{ kind, text }]    for type "tool"; kind: cmd | out | ok | dim
   ========================================================================== */

window.PORTFOLIO = {
  profile: {
    name: "Malek Sharo",
    fullName: "Muhammad Malek Sharo",
    initials: "MS",
    role: "Flutter Developer",
    location: "Damascus, Syria",
    email: "mhd.maleksharo@gmail.com",

    headline: "I build apps that help people",
    lede:
      "Software engineer and Flutter developer. Since 2020 I have shipped 15+ apps to the App Store and Google Play, across healthcare, travel and commerce, and led small teams along the way.",

    stats: [
      { value: "15+", label: "Apps published" },
      { value: "2020", label: "Shipping Flutter since" },
      { value: "4", label: "Countries worked with" },
    ],

    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/malek-shero-21aa293a5", kind: "linkedin" },
      { label: "GitHub", url: "https://github.com/maleksharo", kind: "github" },
    ],

    statement:
      "I am a software engineer who turns *Flutter* into products people use every day: booking a doctor, buying a bus seat, running a pharmacy. I care about *clean architecture*, apps that feel native in *Arabic and English*, and releases that go out without drama.",

    capabilities: [
      {
        title: "Cross-platform apps",
        text: "Flutter and Dart for iOS and Android, from the first commit to the store listing. More than 15 apps published so far.",
      },
      {
        title: "Architecture that lasts",
        text: "Feature-first clean architecture, Bloc and Cubit, dependency injection and typed errors. Code a team can keep growing in.",
      },
      {
        title: "Leading small teams",
        text: "Team lead on two product teams: planning, code standards, mentoring junior developers and owning the release.",
      },
      {
        title: "The hard parts",
        text: "Payment gateways, real-time chat and tracking, maps, push, on-device AI, white-label builds and right-to-left layouts.",
      },
    ],

    experience: [
      {
        period: "2025 — Present",
        role: "Flutter Developer",
        company: "Ayat Group · Damascus",
        text: "Built and published the DomeCare patient and clinic apps, contributed to DomeCare Pharma, and built Mosafer, an intercity bus booking app with online payment and a full test suite.",
      },
      {
        period: "2024 — 2025",
        role: "Team Lead & Flutter Developer",
        company: "Tessafold · Remote, Germany",
        text: "Led a team of two delivering 3+ apps to both stores, including car rental apps built on Flutter flavors. Ran projects from planning to release and mentored junior developers.",
      },
      {
        period: "2022 — 2024",
        role: "Team Lead & Flutter Developer",
        company: "Joy Box · Damascus",
        text: "Led Flutter development for 75% of the company's apps. Built 6+ published apps, an on-device medicine recognition system and a pharmacy management system used by 150+ pharmacies.",
      },
      {
        period: "2021 — Present",
        role: "Freelance Flutter Developer",
        company: "Your System OÜ · Remote, France",
        text: "Delivered 5+ apps, among them Dr. Bob and a white-label purchasing platform that ships four store apps from one codebase.",
      },
      {
        period: "2020 — 2021",
        role: "Freelance Flutter Developer",
        company: "Digital Vise · Remote, Dubai",
        text: "Added 5+ major features to an existing store app and kept it updated on both stores.",
      },
      {
        period: "2021",
        role: "BSc, Information Technology Engineering",
        company: "Damascus University",
        text: "",
      },
    ],

    toolbox: [
      {
        title: "Languages & frameworks",
        items: ["Flutter", "Dart", "OOP", "Clean Code"],
      },
      {
        title: "Architecture & state",
        items: ["Clean Architecture", "MVVM", "SOLID", "Bloc", "Cubit", "Dependency injection (get_it)", "auto_route", "Either / typed failures"],
      },
      {
        title: "Data & services",
        items: ["REST APIs", "Dio", "Firebase Messaging", "Crashlytics", "Analytics", "Google Maps", "Location tracking", "Secure storage", "Biometrics"],
      },
      {
        title: "Product features",
        items: ["Payment gateways", "Real-time chat", "Push notifications", "On-device AI (SSD MobileNet, YOLOv8)", "Flutter flavors / white-label", "Localization & RTL"],
      },
      {
        title: "Quality & delivery",
        items: ["Unit, bloc & widget tests", "mocktail", "bloc_test", "Azure Pipelines", "Firebase App Distribution", "Google Play", "App Store", "Git", "Jira", "Bitbucket", "Claude", "Cursor"],
      },
    ],

    contact: {
      title: "Have an app in mind? *Let's build it.*",
      note: "I am open to Flutter roles and freelance projects. The fastest way to reach me is email.",
    },
  },

  projects: [
    /* ------------------------------------------------------------------ */
    {
      id: "domecare",
      type: "mobile",
      featured: true,
      name: "DomeCare",
      title: "Dome*Care*",
      nameAr: "دوم كير",
      group: "DomeCare platform · Patient app",
      hook: "see a doctor.",
      color: "#5B95FF",
      splash: "#065EEA",
      icon: "assets/img/projects/domecare/icon.png",
      screens: [],
      tagline: "A patient's whole health life in one app: find care, book it, keep the records.",
      summary: [
        "DomeCare is the patient side of a healthcare network. People find doctors, clinics, labs, radiology centres and pharmacies, book appointments, read their medical reports and order medicines.",
        "It also looks after the everyday part of health: medication reminders, health calculators and logs, and family members whose accounts one person manages.",
      ],
      meta: [
        { label: "Role", value: "Flutter Developer" },
        { label: "Company", value: "Ayat Group" },
        { label: "Period", value: "2025 — Present" },
        { label: "Platforms", value: "iOS · Android" },
      ],
      highlights: [
        { title: "Find care on a map", text: "Search doctors and facilities with filters, or browse a Google Map with its own marker for each kind of facility." },
        { title: "Book appointments", text: "Pick a doctor, choose a free slot on the calendar and follow the booking." },
        { title: "Medical reports", text: "Reports grouped by doctor, with diagnoses, medications, allergies, follow-ups and attached files." },
        { title: "Medicines", text: "Find a drug by voice or barcode, order it with a cart and delivery address, and set reminders for several medications at once." },
        { title: "Health calculators", text: "BMI, daily calories, water intake and pregnancy calculators, plus blood glucose and blood pressure logs with charts." },
        { title: "Family accounts", text: "Add relatives and manage their health profiles from one login." },
      ],
      engineering: [
        "Clean architecture per feature (data, domain, presentation) with use cases, Bloc and Cubit, and get_it for dependency injection.",
        "One Dio-based HTTP layer that turns timeouts, socket errors and server errors into typed failures.",
        "Phone OTP sign-in, biometrics through local_auth, Firebase push shown with local notifications.",
        "Arabic and English with full right-to-left layouts.",
        "Azure Pipelines release build: environment switch, build number bump, signed APK to Firebase App Distribution.",
      ],
      stack: ["Flutter", "Dart", "Bloc", "get_it", "Dio", "Google Maps", "Firebase", "fl_chart", "speech_to_text", "Barcode scanner", "easy_localization"],
      badges: ["Voice & barcode drug search", "Arabic + English, RTL", "Live on both stores"],
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/domecare/id6745508527", kind: "appstore" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ayatapps.domecaree.patient", kind: "play" },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "domecare-clinic",
      type: "mobile",
      featured: true,
      name: "DomeCare Clinic",
      title: "DomeCare *Clinic*",
      nameAr: "دوم كير",
      group: "DomeCare platform · Doctor app",
      hook: "run a clinic.",
      color: "#4DBBFF",
      splash: "#065EEA",
      icon: "assets/img/projects/domecare-clinic/icon.png",
      screens: [],
      tagline: "The doctor's side: appointments, patient files and prescriptions, in a pocket.",
      summary: [
        "The companion app for doctors and clinics on the DomeCare network. It runs the appointment calendar and the clinic schedule, and keeps each doctor's patient list and records close at hand.",
        "Writing a prescription becomes a search-and-tap job, with a drug database behind it and templates for the ones a doctor writes most often.",
      ],
      meta: [
        { label: "Role", value: "Flutter Developer" },
        { label: "Company", value: "Ayat Group" },
        { label: "Period", value: "2025 — Present" },
        { label: "Platforms", value: "iOS · Android" },
      ],
      highlights: [
        { title: "Appointment calendar", text: "Approve or reject requests, book a patient into a free slot, or cancel several appointments at once." },
        { title: "Clinic schedule", text: "Working hours and session length, set by the doctor." },
        { title: "Patient files", text: "Add patients who are on DomeCare or outside it, then see health info, medications and prescription history, and export records." },
        { title: "Prescriptions", text: "Create and edit prescriptions linked to a patient, and save templates for repeat cases." },
        { title: "Drug search", text: "Filter by therapeutic class, dosage form, indication or manufacturer, or scan a barcode." },
        { title: "Verified doctors", text: "Sign-up with an account type, a degree upload, certificates and specialties." },
      ],
      engineering: [
        "Clean architecture per feature, with use cases returning Either<Failure, T> and 25 Bloc and Cubit classes on top.",
        "A Dio HTTP manager maps timeouts, connection errors and HTTP status codes to typed failures.",
        "Biometrics through local_auth, Firebase push shown with local notifications.",
        "Arabic and English with full right-to-left layouts.",
        "Azure Pipelines release build to Firebase App Distribution, with the version bump pushed back to the repo.",
      ],
      stack: ["Flutter", "Dart", "Bloc", "get_it", "Dio", "dartz", "Google Maps", "Firebase", "Barcode scanner", "table_calendar", "easy_localization"],
      badges: ["Prescription templates", "Barcode drug lookup", "Live on both stores"],
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/domecare-clinic/id6743701023", kind: "appstore" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ayatapps.domecaree.business", kind: "play" },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "domecare-pharma",
      type: "mobile",
      featured: true,
      name: "DomeCare Pharma",
      title: "DomeCare *Pharma*",
      nameAr: "دوم كير",
      group: "DomeCare platform · B2B ordering",
      hook: "stock a pharmacy.",
      color: "#FCA100",
      splash: "#065EEA",
      icon: "assets/img/projects/domecare-pharma/icon.png",
      screens: [],
      tagline: "Ordering between pharmacies and drug warehouses: live when online, still working when not.",
      summary: [
        "A B2B app that connects pharmacies with drug warehouses. Pharmacies browse stock and offers, fill carts and place orders; warehouses receive those requests in real time, manage stock, publish offers and run their staff and sales representatives.",
        "Connections are not guaranteed, so the app carries an encrypted local copy of the catalogue and keeps searching and building carts offline.",
      ],
      meta: [
        { label: "Role", value: "Flutter Developer" },
        { label: "Company", value: "Ayat Group" },
        { label: "Period", value: "2025 — Present" },
        { label: "Platforms", value: "iOS · Android" },
      ],
      highlights: [
        { title: "Live order requests", text: "Warehouses get incoming orders in real time, with a time limit to accept and a lock so only one person handles each order." },
        { title: "Pharmacy ordering", text: "Browse warehouses, compare where a drug is available, fill a cart or a shared cart, check out and return orders." },
        { title: "Stock & offers", text: "Warehouses manage stock and publish discount offers step by step: items, values, expiry date." },
        { title: "Sales representatives", text: "Add and manage reps and set profit margins per product, drug or custom rule." },
        { title: "Points store", text: "Reward points with history, expiry and a store to spend them in." },
        { title: "Offline mode", text: "Download a data snapshot, then search drugs, offers and warehouses and build a cart with no connection." },
      ],
      engineering: [
        "The bundled catalogue is AES-decrypted, unzipped and imported into an encrypted SQLCipher database, then kept fresh with incremental pulls.",
        "A SignalR hub carries order lock, unlock and preview events as broadcast streams.",
        "Deep links into products, offers, warehouses, orders and notifications; home-screen quick actions that depend on the account type.",
        "Clean architecture per feature with about 170 use cases, 15 Blocs and 29 Cubits.",
        "Azure Pipelines release build to Firebase App Distribution.",
      ],
      stack: ["Flutter", "Dart", "Bloc", "SignalR", "Drift", "SQLCipher", "Dio", "Firebase", "app_links", "Google Maps", "Barcode scanner"],
      badges: ["Offline-first, encrypted", "Real-time via SignalR", "Two account types"],
      links: [],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "mosafer",
      type: "mobile",
      featured: true,
      name: "Mosafer",
      title: "Mosa*fer*",
      nameAr: "مسافر",
      group: "Travel · Bus tickets",
      hook: "catch a bus.",
      color: "#00FFB0",
      splash: "#1D243A",
      icon: "assets/img/projects/mosafer/icon.png",
      iconPlain: true,
      screens: [],
      tagline: "Intercity bus tickets: pick a seat, pay, and travel with the ticket on your phone.",
      summary: [
        "Mosafer sells bus seats between governorates. A passenger searches a route and a date, picks seats on a live seat map, adds the passengers and pays. The ticket then lives in the app, ready to share or download as a PDF.",
        "Refunds, notifications and support are handled in the app as well, in Arabic and English, in light and dark.",
      ],
      meta: [
        { label: "Role", value: "Flutter Developer" },
        { label: "Company", value: "Ayat Group" },
        { label: "Period", value: "2025 — Present" },
        { label: "Platforms", value: "iOS · Android" },
      ],
      highlights: [
        { title: "Seat map booking", text: "Three steps: seats, passengers, payment. Seats are held during checkout and released if the passenger backs out." },
        { title: "Online payment", text: "Pay through Paymera in an in-app web view or by Sham Cash with a receipt upload. Pending, failed and cancelled payments each have their own path." },
        { title: "Tickets that travel", text: "Every ticket carries a status and a barcode. Share it as an image, or download the PDF and open it inside the app." },
        { title: "Refunds", text: "Ask for a refund from the ticket, attach a receipt and follow the request to its result." },
        { title: "Fast sign-in", text: "Phone number and OTP, with the SMS code read automatically. Biometrics confirm sensitive changes." },
        { title: "Light and dark", text: "Two full themes, two languages and right-to-left layouts throughout." },
      ],
      engineering: [
        "Feature-first clean architecture across nine features: data sources, repositories, use cases, Blocs.",
        "Errors as values: one HTTP manager throws typed failures and every layer above it returns Either.",
        "auto_route navigation behind an auth guard. An expired session is handled once, even when several requests fail together.",
        "More than 1,000 unit, bloc and widget test cases in 140 files (flutter_test, mocktail, bloc_test).",
        "Azure Pipelines runs analysis and the whole test suite before any release build, then ships to Firebase App Distribution.",
        "Token in secure storage, Crashlytics and Analytics, R8-minified release builds.",
      ],
      stack: ["Flutter", "Dart", "Bloc", "auto_route", "get_it", "Dio", "dartz", "Firebase", "Secure storage", "pdfrx", "mocktail", "bloc_test"],
      badges: ["1,000+ automated tests", "Seat map checkout", "Light + dark, RTL"],
      links: [],
    },

    /* ==================================================================
       MORE WORK — from the CV. Each becomes a full chapter once the
       project (code, screenshots or details) is sent: set `featured: true`
       and fill in the remaining fields.
       ================================================================== */
    {
      id: "dr-bob",
      type: "mobile",
      featured: false,
      name: "Dr. Bob",
      hook: "brush their teeth.",
      color: "#FFC94D",
      year: "Your System OÜ",
      tagline: "A children's app that makes tooth-brushing fun.",
      summary: "Guided two-minute brushing sessions with a friendly character and rewards, in Arabic, English and French.",
      stack: ["Flutter", "Dart", "3 languages"],
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/dr-bob/id6757376984", kind: "appstore" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.itieit.drpop", kind: "play" },
      ],
    },
    {
      id: "purchasing-platform",
      type: "mobile",
      featured: false,
      name: "White-label purchasing platform",
      color: "#C79BFF",
      year: "Your System OÜ",
      tagline: "One Flutter codebase, four apps on the store.",
      summary: "A purchasing platform built with Flutter flavors and published as Maison Luxury, MKS Pharma, Souk Delices and Shamiate. Inventory, RFQs, purchase orders, approval workflows, push notifications and online chat.",
      stack: ["Flutter", "Flavors", "Push notifications", "Chat"],
      links: [
        { label: "Maison Luxury", url: "https://play.google.com/store/apps/details?id=com.togetzr.maisonLuxury", kind: "play" },
        { label: "MKS Pharma", url: "https://play.google.com/store/apps/details?id=com.togetzr.mkspharma", kind: "play" },
        { label: "Souk Delices", url: "https://play.google.com/store/apps/details?id=com.togetzr.soukdelices", kind: "play" },
        { label: "Shamiate", url: "https://play.google.com/store/apps/details?id=com.itieit.purchasing_app", kind: "play" },
      ],
    },
    {
      id: "car-rental",
      type: "mobile",
      featured: false,
      name: "Car rental apps",
      color: "#FF8F6B",
      year: "Tessafold · 2024 — 2025",
      tagline: "Car rental apps sharing one modular codebase.",
      summary: "Car rental applications built with Flutter flavors to cut duplication and keep the code modular. Led a team of two from planning to release on both stores.",
      stack: ["Flutter", "Flavors", "Team lead"],
      links: [],
    },
    {
      id: "medicine-recognition",
      type: "mobile",
      featured: false,
      name: "AI medicine recognition",
      color: "#6FE3C1",
      year: "Joy Box · 2022 — 2024",
      tagline: "Recognising medicines on the device, mostly offline.",
      summary: "An AI-based medicine recognition system using SSD MobileNet and YOLOv8, with 90% of its functionality available offline.",
      stack: ["Flutter", "SSD MobileNet", "YOLOv8", "On-device AI"],
      links: [],
    },
    {
      id: "pharmacy-management",
      type: "mobile",
      featured: false,
      name: "Pharmacy management system",
      color: "#7FB2FF",
      year: "Joy Box · 2022 — 2024",
      tagline: "Day-to-day pharmacy operations, adopted by 150+ pharmacies.",
      summary: "A pharmacy management system adopted by more than 150 pharmacies, built to make their daily operations more efficient.",
      stack: ["Flutter", "Dart"],
      links: [],
    },
  ],
};
