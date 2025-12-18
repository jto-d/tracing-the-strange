import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const [motifs, characters] = await Promise.all([
      prisma.motif.findMany({
        orderBy: { id: 'asc' },
        include: {
          characters: {
            orderBy: { id: 'asc' },
          },
        },
      }),
      prisma.character.findMany({
        orderBy: { id: 'asc' },
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
