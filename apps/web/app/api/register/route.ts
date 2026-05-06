import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const result = await client.create({
      _type: 'registration',
      status: 'new',
      ...body,
    })

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { success: false, error: 'Failed to save' },
      { status: 500 }
    )
  }
}