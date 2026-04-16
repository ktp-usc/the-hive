'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

type InstagramWindow = Window & {
    instgrm?: {
        Embeds?: {
            process: () => void;
        };
    };
};

export default function InstagramEmbed() {
    const [embedKey, setEmbedKey] = useState(0);

    useEffect(() => {
        const processEmbeds = () => {
            (window as InstagramWindow).instgrm?.Embeds?.process();
        };

        const refreshEmbed = () => {
            setEmbedKey((k) => k + 1);
            window.setTimeout(processEmbeds, 250);
        };

        const handleVisibilityChange = () => {
            if (!document.hidden) {
                refreshEmbed();
            }
        };

        const handlePageShow = () => {
            refreshEmbed();
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('pageshow', handlePageShow);

        refreshEmbed();

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, []);

    return (
        <>
            <div key={embedKey}>
                <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/thehivecc/?utm_source=ig_embed&utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '540px',
                        minWidth: '326px',
                        padding: 0,
                        width: 'calc(100% - 2px)',
                    }}
                />
            </div>

            <Script
                src="https://www.instagram.com/embed.js"
                strategy="afterInteractive"
                onLoad={() => (window as InstagramWindow).instgrm?.Embeds?.process()}
            />
        </>
    );
}