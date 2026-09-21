/**
 * Site metadata — the single source of truth for the values several
 * surfaces share: the deployed origin (the nav model and the footer
 * resolve relative hrefs against it), the minisite's own root on the
 * shared front door, and the canonical component-logo asset base (the
 * shell ships no asset origin, so the brand pair and the hero mark
 * take it injected — TODO.public track 02).
 */
export const SITE = {
  url: 'https://www.oimlsmart.org',
  root: '/recs/',
  title: 'SMART Recommendations',
  description:
    'OIML SMART Recommendations — the published, expert-authored executable Recommendations.',
} as const

export default SITE

/** The canonical component-logo asset base (override only for staging). */
export const COMPONENT_ASSET_BASE = `${SITE.url}/img/components`
