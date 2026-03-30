# Rebrand: Credence Consulting Corporation → The Credence Group

The document describes a fundamental transformation of this website. It is no longer a consulting firm's site — it is now a **holding company website** for "The Credence Group" with 7 subsidiaries across real estate, lending, consulting, and media.

## Summary of Changes

The entire site identity, content, navigation, and page structure need to change to match the document.

---

## Navigation Changes

**Current:** Home | About Us | Services | Subsidiaries | FAQ | Contact Us

**New:** Home | Our Companies | Investment Philosophy | Careers | Contact | FAQ

---

## Pages

### 1. Home Page (complete rewrite)

- **Hero:** "Diversified Excellence. Unified Vision." with sub-headline about the holding company
- **About section:** "The Power of Credence" — describing the parent organization's role
- **Portfolio section:** Grid/table of 7 subsidiaries with industry focus and core mission:
  Card Format
  - Credence Real Estate (Property Acquisition)
  - Credence Realty (Real Estate Services)
  - Credence Design Build (Land Development, Design & Construction)
  - Credence Mortgages (Mortgage Financing & Private Lending)
  - Credence Capital (Private Equity)
  - Credence Consulting (Business Advisory & Strategy)
  - Credence Media (Marketing & Content)
- **"Why the Group?"** section — Credence Standard, synergy messaging
- **Footer:** Updated to "The Credence Group", description. menu links, email `inquiries@credencegroup.com`, location Calgary, AB

### 2. Our Companies Page (replaces Services + Subsidiaries)

- Individual value proposition blocks for each of the 7 subsidiaries with taglines and descriptions from the document (e.g., Credence Design Build: "From Concept to Real Assets", Credence Capital: "Wealth Through Wisdom")
- "The Credence Advantage" summary: Vertical Integration, Diverse Expertise, Efficiency

### 3. Investment Philosophy Page (new, replaces About)

- "The Credence Ecosystem" — Integrated Verticality philosophy
- Strategic Pillars: Capital Preservation, Operational Synergy, Creative Innovation
- "Why Our Structure Matters" — Market Resilience, Streamlined Execution, Unified Brand Equity
- Leadership section (placeholder template for Founder/CEO and CSO)

### 4. Careers Page (new, replaces FAQ)

- "Build Your Future Within Our Ecosystem"
- "Why Professionals Choose Credence" — Cross-Sector Mobility, Entrepreneurial Culture, The Credence Standard
- "Our Culture: Synergy, Not Silos" section
- Current Opportunities listing by subsidiary category
- Open application CTA ([careers@credencegroup.com](mailto:careers@credencegroup.com))
- Diversity & Growth commitment

### 5. Contact Page (update)

- Update email to `inquiries@credencegroup.com`
- Update location to Calgary, AB
- Update branding references to The Credence Group

### 6. Remove old pages

- Remove `/services` route (merged into Our Companies)
- Remove `/faq` route (replaced by Careers)
- Old `/about` route redirects or becomes Investment Philosophy

---

## Component Updates

### Header

- Brand name: "The Credence Group"
- Nav links: Home | Our Companies | Investment Philosophy | Careers | Contact
- Top bar email: `inquiries@credencegroup.com`

### Footer

- Brand: "The Credence Group"
- Tagline: "Integrity in Ownership. Excellence in Execution."
- Contact: `inquiries@credencegroup.com`, Calgary, AB
- Quick links updated to new nav
- "Our Services" column replaced with "Our Companies" listing the 7 subsidiaries

### No need for admin dashboard it is a website

---

## Technical Details

- **Files to create:** `src/pages/OurCompanies.tsx`, `src/pages/InvestmentPhilosophy.tsx`, `src/pages/Careers.tsx`
- **Files to heavily edit:** `src/pages/Index.tsx`, `src/pages/Contact.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/HeroBanner.tsx`, `src/pages/AdminDashboard.tsx`, `src/hooks/use-site-content.ts`
- **Files to remove/repurpose:** `src/pages/Services.tsx`, `src/pages/FAQ.tsx`, `src/pages/About.tsx`, `src/pages/Subsidiaries.tsx`
- **Routes (`App.tsx`):** Update to new page structure — `/companies`, `/philosophy`, `/careers`, `/contact`
- **Database defaults:** Update all default content keys in `use-site-content.ts` and `AdminDashboard.tsx` to reflect 7 subsidiaries and new copy