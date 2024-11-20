import React from 'react'
import { ISEOProps } from '../../global/interface/interface'
import { Helmet } from 'react-helmet';

const SEO: React.FC<ISEOProps> = ({
    title,
    description,
    keywords = '',
    image = '',
    url = window.location.href,
    author = 'Chisfis Projet',
    type = 'website'
}) => {
    return (
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
          
            <meta property="og:site_name" content="Chisfis-projet" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            {image && <meta property="og:image" content={image} />}

            <meta name="twitter:card" content="summary_large_image" />
            {image && <meta name="twitter:image" content={image} />}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
          
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEO