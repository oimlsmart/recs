/**
 * The SMART Recommendations brand config — the identity values the
 * site injects into the house shell's header, mobile overlay, and
 * footer (one brand object passed to every Base mount, TODO.public
 * track 02). The logo pair reuses the component-logo assets the site
 * already renders in its hero (the canonical copies live on the front
 * door; the package ships no logos). The minisite has no sign-in, so
 * no signInHref: no sign-in link renders anywhere. The shape is the
 * package's BrandConfig (@oimlsmart/site-shell/config).
 */
import type { BrandConfig } from '@oimlsmart/site-shell/config'
import { SITE, COMPONENT_ASSET_BASE } from './site-meta'

export const BRAND: BrandConfig = {
  brandName: SITE.title,
  logoLight: `${COMPONENT_ASSET_BASE}/smart-rec-light.svg`,
  logoDark: `${COMPONENT_ASSET_BASE}/smart-rec-dark.svg`,
  homeHref: `${SITE.url}${SITE.root}`,
  themeColor: '#004996',
}
