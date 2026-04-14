import { NextResponse } from "next/server";

const SEARCH_ENGINE_URLS: Record<string, string> = {
    g: "https://www.google.com",
    b: "https://www.bing.com",
    y: "https://www.yahoo.com",
    d: "https://www.duckduckgo.com",
    e: "https://www.ecosia.org",
    r: "https://search.brave.com",
};

export function GET(request: Request) {
    // Server-side fallback for the noscript meta-refresh: detect Edge → Bing
    const ua = request.headers.get("user-agent") ?? "";
    const defaultCode = /Edg\//.test(ua) ? "b" : "g";
    const defaultUrl = SEARCH_ENGINE_URLS[defaultCode];

    const urlMapJson = JSON.stringify(SEARCH_ENGINE_URLS);
    const defaultUrlJson = JSON.stringify(defaultUrl);

    // This page serves two purposes depending on how it was reached:
    //
    // 1. Initial safe-exit click — safe-exit.tsx sets sessionStorage._hive_safe_exit
    //    before navigating here. The script pushes 10 buffer /safe-exit entries then
    //    sends the user to YouTube.
    //
    // 2. Back-button press from YouTube or a search engine — no sessionStorage flag.
    //    The script reads the search engine code from the URL hash and redirects.
    //    Each back-click burns one buffer entry, so users need 10+ deliberate
    //    back-presses through search engine pages before any hive page could appear.
    const html = `<!DOCTYPE html>
<html>
<head>
<script>
(function(){
  var urls=${urlMapJson};
  var defaultUrl=${defaultUrlJson};
  var code=sessionStorage.getItem('_hive_safe_exit');
  if(code!==null){
    sessionStorage.removeItem('_hive_safe_exit');
    for(var i=0;i<10;i++){history.pushState(null,'','/safe-exit#'+code);}
    window.location.href='https://www.youtube.com';
  } else {
    var hash=window.location.hash.slice(1);
    window.location.replace(urls[hash]||defaultUrl);
  }
})();
</script>
<noscript><meta http-equiv="refresh" content="0;url=${defaultUrl}"></noscript>
</head>
<body></body>
</html>`;

    return new NextResponse(html, {
        headers: {
            "Content-Type": "text/html",
            // no-store prevents this page from being stored in bfcache,
            // so every back-button press always re-runs the redirect script.
            "Cache-Control": "no-store",
        },
    });
}
