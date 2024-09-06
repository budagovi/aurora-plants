// next api
import { NextRequest } from "next/server";

// -=-=-=- Middleware Function -=-=-=-

const middleware = (request: NextRequest) => {
  console.log('middleware runs on ' + request.nextUrl.pathname);
}

export default middleware;

// -=-=-=- Middleware Matcher -=-=-=-

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}