/**
 * The SMART Recommendations nav model — the ordered items the house
 * shell's header, the mobile overlay, and the footer's Explore column
 * render (one model, injected through the layout's `nav` prop,
 * TODO.public track 02). It moved into this repository when the
 * site-shell package went machinery-only (0.2.0). The shape is the
 * package's NavModel contract (@oimlsmart/site-shell/config).
 *
 * The minisite is small, and the nav stays well under the five-entry
 * ceiling: three standalone links cover the site's own routes, and
 * the site's root — the About page — rides the brand mark's homeHref
 * instead of a nav entry (a root link prefix-matches every page, so it
 * would render active everywhere). Cross-site navigation belongs to
 * the footer (the Programme column and The sites column), never the
 * top nav.
 *
 * Hrefs stay relative where they are this site's routes (served under
 * /recs on the shared front door); `origin` absolutizes them at
 * render, so the chrome's links resolve from any host (ADR-0003).
 *
 * The file is data-only: the active-path predicates ship with the
 * package's config contract, never from here — re-exporting them
 * would drag the package's TypeScript source into a plain-node load,
 * which node refuses to strip under node_modules. The same constraint
 * puts an explicit .ts extension on the one relative import (the only
 * such import in src/data): the nav completeness gate
 * (scripts/check-nav.mjs, via the shell's check-nav) loads this file
 * under plain node's type stripping, which resolves relative
 * specifiers literally — the extensionless house style would 404 it.
 */
import type { NavModel } from '@oimlsmart/site-shell/config'
import { SITE } from './site-meta.ts'

export const NAV_MODEL: NavModel = {
  // Front-door absolute at render (ADR-0003): the chrome's links
  // resolve from any origin.
  origin: SITE.url,
  items: [
    { type: 'link', label: 'Story', href: '/recs/story/', matchPrefix: '/recs/story' },
    { type: 'link', label: 'Docs', href: '/recs/docs/', matchPrefix: '/recs/docs' },
    { type: 'link', label: 'Demo', href: '/recs/demo/', matchPrefix: '/recs/demo' },
  ],
}
