'use client';
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestIcon,
    PinterestShareButton,
    RedditIcon,
    RedditShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from 'next-share';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function ShareButton({ recipeInfo }) {
    const pageFullUrl = process.env.NEXT_PUBLIC_SITE_URI + usePathname();
    // console.log(pageFullUrl);
    const [showSocialSites, setShowSocialSites] = useState(false);

    const toggleSocialSites = () => {
        setShowSocialSites(!showSocialSites);
    };
    return (
        <div className='flex flex-col items-center'>
            <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6] main-share-button" onClick={toggleSocialSites}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M8.7 10.7l6.6 -3.4" />
                    <path d="M8.7 13.3l6.6 3.4" />
                </svg>
                <span>Share</span>
            </div>
            {showSocialSites && (
                <div className='flex space-x-2 bg-slate-200 py-2 px-3 rounded mt-2 social-sites'>
                    <FacebookShareButton
                        url={pageFullUrl} >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <PinterestShareButton
                        url={pageFullUrl} >
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>
                    <RedditShareButton
                        url={pageFullUrl} >
                        <RedditIcon size={32} round />
                    </RedditShareButton>
                    <WhatsappShareButton
                        url={pageFullUrl} >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                        url={pageFullUrl} >
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </div>
            )}
        </div>
    );
}