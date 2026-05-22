import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ url }, next) => {
  if (url.pathname === '/building' || url.pathname === '/building/') {
    return Response.redirect(new URL('/work', url), 301);
  }

  if (url.pathname.startsWith('/building/')) {
    return Response.redirect(new URL(url.pathname.replace(/^\/building/, '/work'), url), 301);
  }

  if (url.pathname === '/writing' || url.pathname === '/writing/') {
    return Response.redirect(new URL('/thinking', url), 301);
  }

  if (url.pathname.startsWith('/writing/')) {
    return Response.redirect(new URL(url.pathname.replace(/^\/writing/, '/thinking'), url), 301);
  }

  const response = await next();

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  if (url.pathname === '/about') {
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
  } else if (url.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store');
  } else {
    response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=600, stale-while-revalidate=600');
  }
  return response;
});
