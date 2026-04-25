import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'wl516ou3',
  dataset: 'production',
  apiVersion: '2026-04-19',
  useCdn: true,
})