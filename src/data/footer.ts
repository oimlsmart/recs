/**
 * The SMART Recommendations footer config — the content the site
 * injects into the house shell's footer frame (TODO.public track 02).
 * The Explore column is NOT here — the footer derives it from the
 * site's nav model. The rest ports the federation footer this minisite
 * has always rendered under the shared chrome: the Programme column
 * and the legal pages live on the front door (www, this site's own
 * deployment origin — the minisite serves under /recs), The sites
 * column mirrors the federation's canonical host registry (the ONE
 * copy lives with www), and the attribution line stays
 * attribution-class. The shape is the package's FooterConfig
 * (@oimlsmart/site-shell/config).
 */
import type { FooterConfig } from '@oimlsmart/site-shell/config'
import { SITE } from './site-meta'

export const FOOTER: FooterConfig = {
  origin: SITE.url,
  description: SITE.description,
  columns: [
    {
      heading: 'Programme',
      links: [
        { label: 'About OIML SMART', href: '/about/what-is-smart' },
        { label: 'Pilot programme', href: '/pilot' },
        { label: 'Contact', href: '/about/contact' },
        { label: 'Service status', href: 'https://status.oimlsmart.org' },
        { label: 'GitHub', href: 'https://github.com/oimlsmart', external: true, icon: 'github' },
      ],
    },
  ],
  hosts: [
    { label: 'Public site', href: 'https://www.oimlsmart.org' },
    { label: 'Platform', href: 'https://platform.oimlsmart.org' },
    { label: 'Demo', href: 'https://demo.oimlsmart.org' },
    { label: 'Identity', href: 'https://id.oimlsmart.org' },
    { label: 'Status', href: 'https://status.oimlsmart.org' },
    { label: 'Primmel', href: 'https://www.primmel.org' },
    { label: 'Studio', href: 'https://www.oimlsmart.org/studio/' },
  ],
  attribution: [
    'A programme of the ',
    { label: 'International Organization of Legal Metrology', href: 'https://www.oiml.org', external: true },
    ', delivered by ',
    { label: 'Ribose', href: 'https://www.ribose.com', external: true },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
  copyright: 'Content © OIML · Code © Ribose',
}
