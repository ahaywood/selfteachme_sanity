/* eslint-disable @typescript-eslint/no-unused-vars */

// import { TagNames } from 'sitemap';

/* eslint-disable no-use-before-define */
namespace SelfTeach {
  interface Blog {
    _id?: string;
    postId?: string;
    videoId?: number;
    title?: string;
    subtitle?: string;
    video?: {
      url: string;
    };
    originallyPosted?: {
      postLocation: string;
    };
    hero?: string;
    excerpt?: string;
    published?: boolean;
    category?: BlogCategory;
    relatedPosts?: Blog[];
    blogPagination?: {
      nextPost?: Blog;
      previousPost?: Blog;
    };
    meta?: Meta;
    content?: [];
    slug?: Slug;
    postDetails?: {
      datePublished: Date;
      dateUpdated: Date;
      published: boolean;
      excerpt: string;
      category: BlogCategory;
      tags: string[];
    };
    relatedPosts?: Blog[];
    hero?: Image;
  }

  interface BlogCategory {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
    name: string;
    published: boolean;
    slug: Slug;
  }

  interface Brands {
    name: string;
    logo: Image;
  }

  interface Palette {
    _type: string;
    background: string;
    foreground: string;
    population: number;
    title: string;
  }

  interface Glossary {
    _id: string;
    name: string;
    description: [];
  }

  interface Image {
    _type: string;
    asset: {
      _createdAt: Date;
      _id: string;
      _rev: string;
      _type: string;
      _updatedAt: Date;
      assetId: string;
      creditLine: string;
      extension: string;
      metadata: {
        _type: string;
        dimensions: {
          _type: string;
          aspectRatio: number;
          height: number;
          width: number;
        };
        hasAlpha: boolean;
        isOpaque: boolean;
        lqip: string;
        palette: {
          _type: string;
          darkMuted: Palette;
          darkVibrant: Palette;
          dominant: Palette;
          lightMuted: Palette;
          lightVibrant: Palette;
          muted: Palette;
          vibrant: Palette;
        };
      };
      mimeType: string;
      originalFilename: string;
      path: string;
      sha1hash: string;
      size: number;
      source: {
        id: string;
        name: string;
        src: string;
      };
      uploadId: string;
      url: string;
    };
  }

  interface LeadMagnet {
    getForm?: string;
    heading?: string;
    content?: string;
  }

  interface Legal {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
    content: [];
    meta: Meta;
    name: string;
    slug: Slug;
  }

  interface Meta {
    seoTitle?: string;
    seoDescription?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    twitterImageAlt?: string;
  }

  interface Series {
    _id: string;
    name: string;
    slug: Slug;
    meta: Meta;
    leadMagnet: LeadMagnet;
    existingIntroVideo: Blog;
    customIntroVideo: {
      useCustomIntroVideo: boolean;
      introVideo: {
        url: string;
      };
      introContent: [];
    };
    postsAndVideos: Blog;
  }

  interface Slug {
    _type: string;
    current: string;
  }

  interface Social {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    codepen: string;
    devTo?: string;
    dribbble: string;
    facebook?: string;
    hashnode?: string;
    github: string;
    instagram: string;
    linkedin: string;
    medium?: string;
    patreon?: string;
    pinterest: string;
    soundcloud?: string;
    twitch: string;
    twitter: string;
    vimeo?: string;
    youtube: string;
  }

  interface Snippet {
    _id: string;
    name: string;
    slug: Slug;
  }

  interface Subnav {
    _id: 'string';
    name: string;
    slug: Slug;
  }
}
