import { revalidatePath, revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

// This route handler allows Sanity to trigger revalidation when content changes
// Secure it with a secret token to prevent unauthorized revalidation

export async function POST(request: NextRequest) {
  try {
    // Get the secret from query params
    const secret = request.nextUrl.searchParams.get("secret")

    // Check for secret to confirm this is a valid request
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 })
    }

    // Get the paths and tags to revalidate from the request body
    const body = await request.json()
    const paths = body.paths || ["/"]
    const tags = body.tags || []

    // Revalidate the specified paths
    for (const path of paths) {
      revalidatePath(path)
    }

    // Revalidate the specified tags
    for (const tag of tags) {
      revalidateTag(tag)
    }

    return NextResponse.json({
      revalidated: true,
      paths,
      tags,
      now: Date.now(),
    })
  } catch (err) {
    console.error("Error revalidating:", err)
    return NextResponse.json(
      { message: "Error revalidating", error: String(err) },
      { status: 500 }
    )
  }
}

// Alternative: GET request for simple revalidation
export async function GET(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get("secret")

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 })
    }

    // Revalidate homepage and common paths
    revalidatePath("/")
    // Revalidate projects cache tag
    revalidateTag("projects")
    
    return NextResponse.json({
      revalidated: true,
      paths: ["/"],
      tags: ["projects"],
      now: Date.now(),
    })
  } catch (err) {
    console.error("Error revalidating:", err)
    return NextResponse.json(
      { message: "Error revalidating", error: String(err) },
      { status: 500 }
    )
  }
}
