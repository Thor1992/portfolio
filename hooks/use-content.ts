"use client"

import { useState, useEffect } from 'react';

export type WebsiteContent = {
  hero: {
    welcome: string;
    name: string;
    title: string;
    description: string;
    location: string;
  };
  portfolio: {
    projects: Array<{
      title: string;
      titleEn: string;
      category: string;
      categoryEn: string;
      image: string;
      description: string;
      descriptionEn: string;
    }>;
  };
  resume: {
    title: string;
    subtitle: string;
    description: string;
    experiences: Array<{
      company: string;
      position: string;
      period: string;
      description: string;
    }>;
    education: {
      title: string;
      school: string;
      major: string;
      period: string;
    };
  };
  contact: {
    email: string;
    phone: string;
  };
};

export function useContent() {
  const [content, setContent] = useState<WebsiteContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await import('@/data/content.json');
        setContent(response.default);
      } catch (err) {
        console.error('Failed to load content:', err);
      }
    };

    fetchContent();
  }, []);

  return { content };
}