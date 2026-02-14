

# Credence Corporation Website Redesign

A corporate, professional multi-page website redesign for Credence Consulting Corporation — serving as the parent hub that links to 4+ subsidiary company websites.

---

## 🎨 Design Direction
- **Corporate & Professional** aesthetic with a clean, modern feel
- Color palette inspired by the existing orange/dark brand, refined with better typography and spacing
- Consistent header/footer across all pages with clear navigation
- Fully responsive (desktop, tablet, mobile)

---

## 📄 Pages

### 1. Home Page
- **Top bar** with phone number and email
- **Navigation** with links: Home, About Us, Services, Subsidiaries, FAQ, Contact Us
- **Hero section** with a large background image, company name, tagline ("Project Management & Project Delivery Professionals"), and CTA button
- **Services overview** — 5 cards highlighting: Credence Consulting, Program Management, Project Development, Project Management, Project Delivery, Safety & Environmental Management — each with an icon and brief description
- **Subsidiaries section** — Grid of 4+ clickable cards, each showing subsidiary name, brief description, and an external link (placeholder URLs/names for now)
- **Call-to-action banner** — "Our unique approach has helped our clients achieve Success!"
- **Footer** with contact info, quick links, and copyright

### 2. Services Page
- Hero banner with page title
- Detailed sections for each service area:
  - **Program & Project Management** — full description with bullet points
  - **Project Development** — description with service list
  - **Project Delivery** — description with delivery models (Construction Management, Design-Build, Design-Bid-Build, Engineer-Procure-Construct)
  - **Safety & Environmental Management** — description
- Bottom CTA to contact

### 3. About Us Page *(New)*
- Hero banner
- **Company overview** — who Credence Consulting Corporation is, based on existing site content
- **Mission & Values** section — professional, trust-focused messaging
- **Why Choose Us** — key differentiators (PMI-certified, multi-sector experience, client-focused approach)
- **Team/Leadership** placeholder section

### 4. FAQ Page *(New)*
- Hero banner
- Accordion-style Q&A covering common questions:
  - What services does Credence offer?
  - What industries do you serve?
  - Are your project managers certified?
  - How do I get started with Credence?
  - What is your project delivery approach?
  - How does the subsidiary structure work?

### 5. Contact Us Page
- Hero banner
- **Contact form** (static/UI only) — First Name, Last Name, Phone, Email, Message, Submit button
- **Contact details** — phone, email, location info
- **Map placeholder** or embedded map area

### 6. Subsidiaries Page *(implicit from nav)*
- Dedicated page with 4+ subsidiary cards in a grid layout
- Each card: Company logo placeholder, name, short description, "Visit Website" button (external link)
- Placeholder content for subsidiary names/descriptions

---

## 🧩 Shared Components
- **Header** — top info bar + main navigation with mobile hamburger menu
- **Footer** — contact info, navigation links, subsidiary links, copyright
- **Hero Banner** — reusable across all pages with customizable title/subtitle
- **Service Card** — icon + title + description
- **Subsidiary Card** — logo + name + description + external link button
- **FAQ Accordion** — using existing Radix accordion component

---

## 🔧 Technical Notes
- Static frontend only — no backend or database needed
- Multi-page routing via React Router (already set up)
- All content based on existing Credence Corp website text
- Placeholder images using professional stock-style placeholders

