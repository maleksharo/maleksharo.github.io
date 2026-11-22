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
        text: "Delivered features across the DomeCare apps (patient, clinic and pharma) and built Mosafer, an intercity bus booking app with online payment, where I wrote the full test suite.",
      },
      {
        period: "2024 — 2025",
        role: "Team Lead & Flutter Developer",
        company: "Tessafold · Remote, Germany",
        text: "Led a team of two delivering 3+ apps to both stores. Built Cruiz, a car rental marketplace that began as two flavored apps, and Grshaen, a savings-group app with a wallet. Ran projects from planning to release and mentored junior developers.",
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
        text: "Delivered 5+ apps, among them Dr. Bob and a wholesale ordering app published under four brands from one codebase. Now rebuilding that platform as Your System, a multi-tenant app with flavors and about 1,400 automated tests.",
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
        items: ["Clean Architecture", "MVVM", "SOLID", "Bloc", "Cubit", "Dependency injection (get_it, injectable)", "auto_route", "Either / typed failures"],
      },
      {
        title: "Data & services",
        items: ["REST APIs", "Dio", "Firebase Messaging", "Crashlytics", "Analytics", "Google Maps", "Location tracking", "Secure storage", "Biometrics", "Retrofit", "Hive", "Firebase Auth", "Pusher", "Sentry"],
      },
      {
        title: "Product features",
        items: ["Payment gateways", "Real-time chat", "Push notifications", "On-device AI (SSD MobileNet, YOLOv8)", "Flutter flavors / white-label", "Localization & RTL", "Barcode & QR scanning", "Local notifications", "Deep links"],
      },
      {
        title: "Quality & delivery",
        items: ["Unit, bloc & widget tests", "mocktail", "bloc_test", "Azure Pipelines", "Codemagic", "Firebase App Distribution", "Google Play", "App Store", "Git", "Jira", "Bitbucket", "Claude", "Cursor", "Whole-app flow tests", "GitHub Actions", "GitLab"],
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
        { label: "Role", value: "Flutter Developer · feature work" },
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
        { label: "Role", value: "Flutter Developer · feature work" },
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
        { label: "Role", value: "Flutter Developer · feature work" },
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
        "I wrote the test suite: more than 1,000 unit, bloc and widget test cases in 140 files (flutter_test, mocktail, bloc_test).",
        "Azure Pipelines runs analysis and the whole test suite before any release build, then ships to Firebase App Distribution.",
        "Token in secure storage, Crashlytics and Analytics, R8-minified release builds.",
      ],
      stack: ["Flutter", "Dart", "Bloc", "auto_route", "get_it", "Dio", "dartz", "Firebase", "Secure storage", "pdfrx", "mocktail", "bloc_test"],
      badges: ["1,000+ automated tests", "Seat map checkout", "Light + dark, RTL"],
      links: [],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "dr-bob",
      type: "mobile",
      featured: true,
      name: "Dr. Bob",
      title: "Dr. *Bob*",
      nameAr: "د. بوب",
      group: "Kids · Oral hygiene",
      hook: "brush their teeth.",
      color: "#FFD700",
      splash: "#FFFFFF",
      icon: "assets/img/projects/dr-bob/icon.png",
      iconPlain: true,
      screens: [],
      tagline: "A brushing coach for children: two minutes, twice a day, and a gold coin to earn.",
      summary: [
        "Dr. Bob turns tooth-brushing into a daily game. Each child has a profile and a month drawn as a map, one stop per day. Tapping today starts a two-minute session led by a video, and the day's coin turns from silver to gold once both sessions are done.",
        "Parents manage their children from one account, set reminders and follow the month in a brushing history. A dentist's number, typed in or scanned from a QR code, loads the videos prepared for that dentist. Everything is downloaded once, so sessions also work offline, in Arabic, English and French.",
      ],
      meta: [
        { label: "Role", value: "Flutter Developer" },
        { label: "Company", value: "Your System OÜ" },
        { label: "Period", value: "2025 — 2026" },
        { label: "Platforms", value: "iOS · Android" },
      ],
      highlights: [
        { title: "A map of the month", text: "Every day is a stop on the map. Tap today to brush and watch its coin go from silver to half gold to gold." },
        { title: "Guided two-minute sessions", text: "A video leads the session, and the screen stays awake until the two minutes are up." },
        { title: "A profile for each child", text: "Parents add children with a name and an avatar under one account, or start as a guest and sign in later." },
        { title: "Brushing history", text: "The piggy bank opens the month at a glance: sessions, perfect days and partial days, synced with the account." },
        { title: "Daily reminders", text: "Up to ten reminder times per child, with a test button to check that notifications arrive." },
        { title: "The dentist's content", text: "Type the dentist's number or scan the QR code to load the videos set up for that dentist." },
      ],
      engineering: [
        "A download manager fetches the videos, coin artwork and map layouts for the chosen language and orientation, and compares file URLs on later launches to pick up changes on the server.",
        "Videos are streamed to a temporary file and checked against their expected size, so a broken download is deleted and fetched again instead of being played.",
        "The session timer follows the wall clock. Progress is stored per child on the device and merged with the server's month after each session.",
        "Reminders use alarm-clock scheduling with time zones, are registered again each time the app starts, and warn the parent when Android battery saving would block them.",
        "Firebase push feeds an in-app inbox with an unread badge, paging and delete.",
        "Portrait and landscape each have their own map layout and their own videos.",
      ],
      stack: ["Flutter", "Dart", "Cubit", "Dio", "Firebase Messaging", "Local notifications", "video_player", "mobile_scanner", "audioplayers", "easy_localization"],
      badges: ["Two minutes, twice a day", "Works offline", "Live on both stores"],
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/dr-bob/id6757376984", kind: "appstore" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.itieit.drpop", kind: "play" },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "purchasing-platform",
      type: "mobile",
      featured: true,
      name: "Shamiate",
      title: "Sham*iate*",
      nameAr: "شاميات",
      group: "White-label · B2B ordering",
      hook: "fill their shelves.",
      color: "#2AC06B",
      splash: "#005826",
      icon: "assets/img/projects/purchasing-platform/icon.png",
      screens: [],
      tagline: "A wholesale ordering app for shops, published under four brands from one codebase.",
      summary: [
        "Shamiate lets shop owners order from a wholesaler on their phone. They browse the catalogue by category or brand, scan a barcode to find a product, fill a cart and confirm the order. Invoices stay in the app, each with its PDF.",
        "The same code is also on Google Play as Souk Delices, MKS Pharma and Maison Luxury, each with its own name, colours and catalogue. It began in 2021 as a procurement and inventory tool with requests for quotation, approval workflows and web-socket chat, before it became the ordering app it is today.",
      ],
      meta: [
        { label: "Role", value: "Flutter Developer" },
        { label: "Company", value: "Your System OÜ" },
        { label: "Period", value: "2021 — 2026" },
        { label: "Platforms", value: "iOS · Android" },
      ],
      highlights: [
        { title: "Catalogue", text: "Browse products by category or brand, search by name, and open each product's photos, variants and price per box." },
        { title: "Scan to find", text: "Point the camera at a barcode to go straight to the product." },
        { title: "Cart and checkout", text: "Change quantities, see the subtotal, taxes and delivery, choose the shop to deliver to and confirm. A wishlist keeps products for later." },
        { title: "Invoices", text: "Go through past invoices and download any of them as a PDF." },
        { title: "Order preparation", text: "Warehouse staff open an order, scan each product as it is picked and confirm the preparation." },
        { title: "Business sign-up", text: "A company registers with its SIRET number, and numbers that are unknown or no longer active are refused." },
      ],
      engineering: [
        "One codebase with a git branch per brand: each branch carries its own app name, bundle ID, icon, colours and server.",
        "Feature folders, each with a repository and a Bloc or Cubit: catalogue, cart, wishlist, invoices, preparation, sign-up and settings.",
        "The interface follows the language saved on the user's account, in French, English and Arabic.",
        "Typed JSON models generated with json_serializable, and barcode scanning through mobile_scanner.",
        "Earlier generations in the same repository covered procurement: direct, solo and collaborative requests, vendor proposals, purchase orders, receiving, stock operations and multi-step approval cycles.",
        "Its successor is Your System, where build flavors replace the branches.",
      ],
      stack: ["Flutter", "Dart", "Bloc", "Cubit", "Dio", "json_serializable", "mobile_scanner", "easy_localization", "cached_network_image", "Lottie"],
      badges: ["4 brands, one codebase", "Scan to find", "On Google Play"],
      links: [
        { label: "Shamiate", url: "https://play.google.com/store/apps/details?id=com.itieit.purchasing_app", kind: "play" },
        { label: "Souk Delices", url: "https://play.google.com/store/apps/details?id=com.togetzr.soukdelices", kind: "play" },
        { label: "MKS Pharma", url: "https://play.google.com/store/apps/details?id=com.togetzr.mkspharma", kind: "play" },
        { label: "Maison Luxury", url: "https://play.google.com/store/apps/details?id=com.togetzr.maisonLuxury", kind: "play" },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "your-system",
      type: "mobile",
      featured: true,
      name: "Your System",
      title: "Your *System*",
      group: "Multi-tenant · Shop and stock",
      hook: "run a warehouse.",
      color: "#6A8DFF",
      splash: "#102250",
      icon: "assets/img/projects/your-system/icon.png",
      screens: [],
      tagline: "A wholesaler's shop and stockroom in one app, branded for each company that uses it.",
      summary: [
        "Your System is the mobile side of a business platform for wholesalers. Shops order from a catalogue and scan products straight into the cart. Stock staff use the same app to receive deliveries, count shelves, move stock between locations and prepare orders.",
        "Each company is a workspace. The app takes its colours, logo and menus from the workspace it connects to, so one codebase gives a generic app and the branded Shamiate and Souk Delices builds. It is built to take over from the earlier per-brand apps.",
      ],
      meta: [
        { label: "Role", value: "Flutter Developer" },
        { label: "Company", value: "Your System OÜ" },
        { label: "Period", value: "2026 — Present" },
        { label: "Platforms", value: "Android" },
      ],
      highlights: [
        { title: "Shop and cart", text: "Browse the catalogue as a list or a grid, order by the piece or by the box, check out, and reopen past orders with a printable summary." },
        { title: "Scan to cart", text: "Each barcode scan adds a unit or a box to the cart, like a till, or simply finds the product, depending on the workspace setting." },
        { title: "Inventory and lots", text: "Edit products, prices, pack barcodes and shelf locations, and track lots with expiry and alert dates." },
        { title: "Stock counts", text: "Scan a location, count its lines by lot or serial number, flag anomalies, and sync counts that are still waiting to be sent." },
        { title: "Receiving and transfers", text: "Receive a delivery line by line with lots and packs, or move stock from one location to another." },
        { title: "Order preparation", text: "Open an order, scan each product as it is picked and validate the preparation." },
      ],
      engineering: [
        "Three Android flavors from one codebase: the generic app, Shamiate and Souk Delices, each with its own application ID, name and signing key. The workspace is fixed at build time or typed in at login.",
        "A menu opens only when the workspace has the module and the user has the right, checked by one access policy and by guards on the routes.",
        "Clean architecture across 19 features: Retrofit clients, repositories returning Either, use cases and Cubits. A test fails the build when a feature imports another feature's internals.",
        "About 1,400 test cases in 112 files: unit, bloc and widget tests, plus whole-app flows that boot the real app against an in-memory fake API.",
        "GitHub Actions checks formatting, analysis and every test on each push, and a second workflow builds the signed app bundle.",
        "Session token in the platform keystore, crash reports to Sentry only in builds that opt in, and Arabic, English and French throughout.",
      ],
      stack: ["Flutter", "Dart", "Cubit", "auto_route", "injectable", "Retrofit", "dartz", "Hive", "Secure storage", "Sentry", "mocktail", "GitHub Actions"],
      badges: ["About 1,400 tests", "3 Android flavors", "Branding per workspace"],
      links: [],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "cruiz",
      type: "mobile",
      featured: true,
      name: "Cruiz",
      title: "Cru*iz*",
      nameAr: "كروز",
      group: "Mobility · Car rental",
      hook: "rent a car.",
      color: "#FF4747",
      splash: "#660202",
      icon: "assets/img/projects/cruiz/icon.png",
      screens: [],
      tagline: "A car rental marketplace: find a car nearby, book it, pay, and talk to its owner.",
      summary: [
        "Cruiz connects people who need a car with owners and rental agencies who have one. A renter searches by city, dates or map, filters the results, books a car with pickup or delivery and pays in the app.",
        "Hosts use the same app to list their cars, answer booking requests and follow their monthly income. Both sides verify their identity with documents, and they talk through a built-in chat.",
      ],
      meta: [
        { label: "Role", value: "Team Lead & Flutter Developer" },
        { label: "Company", value: "Tessafold" },
        { label: "Period", value: "2025 — 2026" },
        { label: "Platforms", value: "iOS · Android" },
      ],
      highlights: [
        { title: "Search three ways", text: "By city and dates, on a Google Map, or through filters for price, type, make, seats, year, fuel and gearbox." },
        { title: "Book with delivery", text: "Pick trip dates and times, choose pickup or delivery to a point on the map, and see the total before sending the request." },
        { title: "Pay in the app", text: "Once the host accepts, pay on the gateway's page inside the app and follow the booking as ongoing, upcoming or previous." },
        { title: "Chat and reviews", text: "Message the other side with text, photos and files in real time, then rate the trip." },
        { title: "List a car", text: "Hosts add photos from every side, existing damage, documents, allowed kilometres, discounts, cancellation terms and blocked dates." },
        { title: "Host dashboard", text: "Accept or decline requests, see profit month by month and keep the bank account for payouts up to date." },
      ],
      engineering: [
        "Feature-first clean architecture across 17 features: Retrofit clients, repositories returning Either, use cases and 18 Cubits, wired with get_it and injectable.",
        "It started as two flavored apps on one codebase, one for renters and one for hosts. They were later merged into a single app that switches role with the account.",
        "Real-time chat over Pusher private channels, authorised with the user's session.",
        "Payment runs in a web view that watches the gateway's redirects to tell a paid booking from a cancelled one.",
        "Sign-in by email, mobile number or Google account, Firebase push shown through local notifications, and Branch links that open a shared car in the app.",
        "A small generator script scaffolds the folders and files of each new feature.",
      ],
      stack: ["Flutter", "Dart", "Cubit", "auto_route", "injectable", "Retrofit", "dartz", "Hive", "Google Maps", "Pusher", "Firebase", "Branch"],
      badges: ["Renter and host in one app", "Real-time chat", "Arabic + English, RTL"],
      links: [],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "grshaen",
      type: "mobile",
      featured: true,
      name: "Grshaen",
      title: "Grsh*aen*",
      nameAr: "قرشين",
      group: "Fintech · Savings groups",
      hook: "save together.",
      color: "#D98F39",
      splash: "#FFFFFF",
      icon: "assets/img/projects/grshaen/icon.png",
      iconPlain: true,
      screens: [],
      tagline: "Savings circles on a phone: join a group, pay each month, receive the pot on your turn.",
      summary: [
        "Grshaen puts the savings circle on a phone: a group pays in every month and one member receives the whole amount each round. A user joins a public group or creates a private one with people from their contacts, chooses the month they want to be paid, and pays the instalments from a wallet.",
        "Because money is involved, identity is checked through Saudi Arabia's Nafath app and a member's financial standing is reviewed before a join request is approved. Points earned along the way unlock a premium account that can open public groups.",
      ],
      meta: [
        { label: "Role", value: "Team Lead & Flutter Developer" },
        { label: "Company", value: "Tessafold" },
        { label: "Period", value: "2025 — 2026" },
        { label: "Platforms", value: "iOS · Android" },
      ],
      highlights: [
        { title: "Find a group", text: "Browse the newest savings groups and filter by monthly amount, length and the nearest free payout turn." },
        { title: "Choose your turn", text: "See the total, the monthly instalment and the fees, pick the month you want to be paid and send a join request." },
        { title: "Create a group", text: "Set the amount, members and dates in two steps, give the group a picture and a colour, and invite people from your contacts." },
        { title: "Wallet", text: "Top up, pay instalments, receive the payout and ask for a withdrawal to a saved bank account, with every transaction listed." },
        { title: "Invitations and requests", text: "Accept or decline invitations, follow join and leave requests, and get a notification at each step." },
        { title: "Points and premium", text: "Earn points for joining and completing groups. Enough points unlock the right to open public groups." },
      ],
      engineering: [
        "Feature-first clean architecture: Retrofit clients, repositories returning Either, more than 40 use cases and 9 Cubits, wired with get_it and injectable.",
        "Phone sign-up with one-time codes, a session cached in Hive, and auto_route navigation across 27 routes.",
        "The Nafath step draws its waiting dial with a custom painter.",
        "Wallet top-ups hand off to the payment provider's page through a link issued by the server.",
        "Firebase push shown through local notifications, with an unread counter and a notification list.",
        "Arabic and English with right-to-left layouts.",
      ],
      stack: ["Flutter", "Dart", "Cubit", "auto_route", "injectable", "Retrofit", "dartz", "Hive", "Firebase Messaging", "flutter_contacts", "easy_localization"],
      badges: ["Nafath identity check", "In-app wallet", "Arabic + English, RTL"],
      links: [],
    },

    /* ------------------------------------------------------------------ */
    {
      id: "online-messe",
      type: "mobile",
      featured: true,
      name: "Online-Gesund Messe",
      title: "Online-Gesund *Messe*",
      group: "Events · Online health fair",
      color: "#8CC640",
      splash: "#18181A",
      icon: "assets/img/projects/online-messe/icon.png",
      iconPlain: true,
      screens: [],
      tagline: "A German online health fair: exhibitors, lectures and offers, unlocked by your ticket.",
      summary: [
        "Online-Gesund Messe is the app of an online health fair held in German. A visitor enters the order number of their ticket and the app opens the fair: exhibitors, the lecture schedule, expert interviews, free consultations and discount vouchers.",
        "What a visitor can open depends on the ticket. Basic gives access to each day's lectures for 24 hours, VIP keeps the recordings available afterwards, and VIP Pro adds audio versions of the lectures. A ticket can be upgraded inside the app.",
      ],
      meta: [
        { label: "Role", value: "Flutter Developer · maintenance" },
        { label: "Company", value: "Tessafold" },
        { label: "Period", value: "2024" },
        { label: "Platforms", value: "iOS · Android" },
      ],
      highlights: [
        { title: "Ticket check-in", text: "Enter the order number from the purchase email to verify a ticket, or upgrade later with a new one." },
        { title: "Exhibitors", text: "Browse exhibitors from A to Z, filter by industry, search with history, and open details, products, gallery and contact information." },
        { title: "Lectures", text: "Follow the schedule day by day and watch each lecture as video. VIP Pro holders can listen to the audio version." },
        { title: "Experts and consultations", text: "Watch expert interviews and ask an exhibitor for a free consultation." },
        { title: "Discounts and vouchers", text: "Collect the discount codes, free samples, vouchers and gifts offered by the exhibitors." },
        { title: "Account", text: "Sign up or continue as a guest, reset a password with a one-time code, and choose which notifications to receive." },
      ],
      engineering: [
        "Layered clean architecture (data, domain, presentation) with Retrofit, 28 use cases and 18 Blocs and Cubits, wired with get_it and injectable.",
        "auto_route navigation across more than 30 screens, with a German interface through easy_localization.",
        "Lecture video through media_kit and chewie, audio through just_audio, with content locked by ticket level.",
        "Firebase push shown through local notifications, and Firebase Analytics.",
      ],
      stack: ["Flutter", "Dart", "Bloc", "auto_route", "injectable", "Retrofit", "dartz", "Firebase", "media_kit", "just_audio", "easy_localization"],
      badges: ["Three ticket levels", "In German", "Video and audio lectures"],
      links: [],
    },

    /* ==================================================================
       MORE WORK — from the CV. Each becomes a full chapter once the
       project (code, screenshots or details) is sent: set `featured: true`
       and fill in the remaining fields.
       ================================================================== */
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
