import React from 'react';

interface StructuredDataProps {
  type: 'InteriorDesigner' | 'Service' | 'Project';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
    };

    switch (type) {
      case 'InteriorDesigner':
        return {
          ...baseData,
          name: 'Urban Interiors',
          description: 'Premium interior design services for residential, commercial, and hospitality projects',
          url: 'https://urbaninteriors.com',
          logo: '/src/img/Logo 2.png',
          areaServed: data.areaServed || 'Your Service Area',
          priceRange: '$$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: data.address?.streetAddress,
            addressLocality: data.address?.city,
            addressRegion: data.address?.state,
            postalCode: data.address?.postalCode,
            addressCountry: data.address?.country
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: data.phone,
            contactType: 'customer service'
          }
        };

      case 'Service':
        return {
          ...baseData,
          name: data.name,
          description: data.description,
          provider: {
            '@type': 'InteriorDesigner',
            name: 'Urban Interiors'
          },
          areaServed: data.areaServed,
          priceRange: data.priceRange
        };

      case 'Project':
        return {
          ...baseData,
          name: data.name,
          description: data.description,
          image: data.images,
          datePublished: data.datePublished,
          author: {
            '@type': 'InteriorDesigner',
            name: 'Urban Interiors'
          }
        };

      default:
        return baseData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  );
};

export default StructuredData; 