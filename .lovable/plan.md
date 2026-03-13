

# Admin Dashboard for Content Management

## Overview
Build a secure admin dashboard using Supabase Auth and Database to let you log in and update homepage content (images, text, links, buttons, logo) from a protected `/admin` panel.

## Setup Required
1. **Enable Supabase** — connect the project to Supabase (Lovable Cloud preferred) for auth, database, and file storage
2. **Create admin user** — set up a Supabase Auth account with email `admin@credenceconsultingcorp.com` and password `Admin1234`
3. **Role-based access** — create a `user_roles` table to restrict dashboard access to admin users only

## Database Schema

### `site_content` table
Stores editable key-value content for the homepage:
| Column | Type | Purpose |
|--------|------|---------|
| id | uuid | Primary key |
| section_key | text (unique) | e.g. `hero_title`, `hero_subtitle`, `cta_text`, `subsidiary_1_url` |
| content_type | text | `text`, `image_url`, `url` |
| value | text | The actual content |
| updated_at | timestamp | Last modified |

### `user_roles` table
Standard role table per security guidelines (enum: admin, moderator, user).

### Storage bucket
`site-assets` bucket for uploaded images (logo, hero background, etc.)

## Pages & Components

### `/admin/login` — Login Page
- Email + password form using Supabase Auth
- Redirects to `/admin` on success

### `/admin` — Dashboard (protected)
- **Auth guard** — checks Supabase session + admin role via `has_role()` function
- **Sections** with inline editing:
  - **Hero Section**: Edit title, subtitle, CTA button text, background image upload
  - **Logo**: Upload new logo image
  - **Services**: Edit card titles and descriptions
  - **Subsidiaries**: Edit names, descriptions, and URLs
  - **CTA Banner**: Edit heading and subtext
- Each section has a Save button that updates the `site_content` table
- Image uploads go to the `site-assets` Supabase Storage bucket

### Homepage Integration
- `Index.tsx` fetches content from `site_content` table on load
- Falls back to hardcoded defaults if no database content exists (graceful degradation)

## Technical Approach
- Supabase client integration via `@supabase/supabase-js`
- RLS policies: only admin role can insert/update `site_content`; public can select
- `has_role()` security definer function to avoid RLS recursion
- React Hook Form for the admin editing forms
- Toast notifications for save success/failure

## Implementation Order
1. Enable Supabase connection
2. Create database schema (migrations for `user_roles`, `site_content`, storage bucket, RLS policies)
3. Create admin auth user and assign admin role
4. Build admin login page and auth guard
5. Build admin dashboard with section editors
6. Update homepage to fetch dynamic content from database

