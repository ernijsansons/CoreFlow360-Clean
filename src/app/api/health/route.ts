import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Basic health check without database
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '2.0.0-clean',
      environment: process.env.NODE_ENV || 'development',
      uptime: process.uptime(),
      debug: {
        hasDbUrl: !!process.env.DATABASE_URL,
        nodeEnv: process.env.NODE_ENV,
        vercel: process.env.VERCEL,
        nextPhase: process.env.NEXT_PHASE,
      }
    }
    
    // Try to import Prisma to see if it's available
    try {
      const { getPrisma } = await import('@/lib/db')
      const prisma = getPrisma()
      
      if (prisma) {
        const startTime = Date.now()
        try {
          await prisma.$queryRaw`SELECT 1`
          const responseTime = Date.now() - startTime
          healthData.status = 'healthy'
          healthData['database'] = {
            status: 'connected',
            responseTime: `${responseTime}ms`
          }
        } catch (dbError) {
          healthData['database'] = {
            status: 'error',
            error: dbError instanceof Error ? dbError.message : 'Connection failed'
          }
        }
      } else {
        healthData['database'] = {
          status: 'not_initialized',
          message: 'Prisma client is null'
        }
      }
    } catch (importError) {
      healthData['database'] = {
        status: 'import_error',
        error: importError instanceof Error ? importError.message : 'Failed to import Prisma'
      }
    }
    
    return NextResponse.json(healthData, { status: 200 })
    
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 })
  }
}

export async function HEAD(request: NextRequest) {
  try {
    const prisma = getPrisma()
    const isHealthy = !!prisma
    
    return new NextResponse(null, { 
      status: isHealthy ? 200 : 503,
      headers: {
        'X-Health-Status': isHealthy ? 'healthy' : 'unhealthy',
      }
    })
  } catch (error) {
    return new NextResponse(null, { status: 503 })
  }
}