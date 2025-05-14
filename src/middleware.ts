import { NextResponse,NextRequest } from "next/server";

export function middleware( req :NextRequest ) {
  console.log({req})
  const isLoggedIn = req.cookies.get("isLoggedIn")?.value === "true";
  if(!isLoggedIn){
    return NextResponse.redirect( 
      new URL ('/login',req.url)
    )
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/about','/account-settings','/contact','/create-event','/events','/interest','/interested','/tickets','/events/:paths*']
  // matcher :     "/((?!_next/static|_next/image|favicon.ico|login|logout$).*)",

}