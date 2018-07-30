import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { seo } from '../../data/seo';
import { globals } from '../../data/globals';

class DefaultHeadHelmet extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{`${seo.DEFAULT.title}`}</title>
                    <meta name="description" content={`${seo.DEFAULT.description}`} />
                    <meta name="keywords" content={`${seo.DEFAULT.keywords}`} />
                    <meta property="og:image" content={`${seo.DEFAULT.og_img}`} />
                    <meta property="og:title" content={`${seo.DEFAULT.title}`} />
                    <meta property="og:description" content={`${seo.DEFAULT.og_description}`} />
                    <meta name="twitter:card" content={`${seo.DEFAULT.twitter_card}`} />
                    <meta name="twitter:site" content={`${seo.DEFAULT.twitter_site}`} />
                    <meta name="twitter:title" content={`${seo.DEFAULT.twitter_title}`} />
                    <meta name="twitter:description" content={`${seo.DEFAULT.twitter_description}`} />
                    <meta name="twitter:image" content={`${seo.DEFAULT.twitter_image}`} />

                    <script type="application/ld+json">
                        {`{
                            "@context": "http://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "item": {
                                "@id": ${globals.url},
                                "name": ${seo.DEFAULT.title}
                                }
                            }]
                        }`}
                    </script>
                </Helmet>
            </div >
        )
    }
}

export default DefaultHeadHelmet;