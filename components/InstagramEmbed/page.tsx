'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function InstagramEmbed() {
    useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process()
        }
    }, [])

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: `
        <blockquote 
          class="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/thehivecc/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:1px; max-width:540px; min-width:326px; padding:0; width:calc(100% - 2px);">
        </blockquote>
      `}} />
            <Script
                src="https://www.instagram.com/embed.js"
                strategy="lazyOnload"
            />
        </>
    )
}