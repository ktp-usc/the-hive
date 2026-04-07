// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import {defineLive} from 'next-sanity/live'
import {client} from './client'

const serverToken = process.env.SANITY_API_READ_TOKEN
const browserToken = process.env.SANITY_API_VIEWER_TOKEN

export const {sanityFetch, SanityLive} = defineLive({
  client,
  // Omitting tokens falls back to published-only; `false` silences dev warnings.
  serverToken: serverToken ?? false,
  browserToken: browserToken ?? false,
})
