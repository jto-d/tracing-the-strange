import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import fs from 'node:fs'
import path from 'node:path'

export async function GET() {
  console.log('DATABASE_URL', process.env.DATABASE_URL)
  console.log('cwd', process.cwd())

  const dbPath = path.join(process.cwd(), 'prisma', 'dev.db')
  console.log('dbPath', dbPath)
  console.log('db exists', fs.existsSync(dbPath))

  console.log('prisma dir entries', fs.readdirSync(path.join(process.cwd(), 'prisma')))

  try {
    const [motifs, characters] = await Promise.all([
      prisma.motif.findMany({
        include: {
          characters: true,
        },
      }),
      prisma.character.findMany({
        include: {
          motif: true,
        },
      }),
    ])

    return NextResponse.json({
      motifs,
      characters,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Database dump error:', error)
    return NextResponse.json(
      { error: 'Failed to dump database' },
      { status: 500 }
    )
  }
}
