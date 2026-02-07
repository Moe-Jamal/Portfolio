import { IProject } from '../../models/project.model';

export const PROJECTS: IProject[] = [
  {
    id: '1',
    title: 'Webstdy',
    slug: 'webstdy-company-website',
    subTitle: 'Official Company Website',
    description:
      'Developed and optimized the official company website with a focus on performance, SEO, and user experience. Implemented SSR/ISR with lazy loading, dynamic sitemap/robots, complex sliders, GSAP animations, Nuxt Image optimization, caching to reduce API requests, reusable Shadcn-based design system, i18n + dark/light mode, and marketing tracking (UTM + GTM).',
    imageUrl: '/images/projects/webstdy2.png',
    scrollImage: '/images/projects/webstdy-scroll-image.png',
    primaryColor: '#01bed7',
    techStack: ['Nuxt', 'Tailwind', 'GSAP'],
    technologies: ['Shadcn', 'Pinia', 'Swiper', 'Lottie', 'Nuxt Image', 'i18n', 'Vue Query'],
    liveLink: 'https://www.webstdy.com/',
    highlight: true,
    features: [
      {
        title: 'SSR + ISR + Lazy Loading',
        description:
          'Improved performance and scalability with server rendering strategies and lazy-loaded assets.',
      },
      {
        title: 'SEO Foundations',
        description: 'Dynamic sitemap + robots.txt and clean URLs for dynamic pages.',
      },
      {
        title: 'Animations & Sliders',
        description: 'Built smooth GSAP-powered animations and custom complex sliders.',
      },
      {
        title: 'Media Optimization',
        description: 'Used Nuxt Image for responsive optimized delivery.',
      },
      {
        title: 'Caching Layer',
        description: 'Reduced API requests via query caching (Pinia-based approach).',
      },
      { title: 'Design System', description: 'Reusable UI system built with Shadcn components.' },
      { title: 'UX Enhancements', description: 'i18n multi-language + dark/light mode.' },
      { title: 'Analytics', description: 'UTM tracking + Google Tag Manager integration.' },
    ],
  },
  {
    id: '2',
    title: 'Trendify',
    slug: 'trendify-ecommerce',
    subTitle: 'E-Commerce Website',
    description:
      'Full-featured e-commerce platform with cart, wishlist, and payments (Cash on Delivery + Stripe). Includes product details routing, category pages with filtering + pagination, order tracking, and secure authentication (validation, guards, password reset, change password). Built with Angular v19 and advanced features for performance and maintainability.',
    imageUrl: '/images/projects/trendify.png',
    scrollImage: '/images/projects/trendify-scroll-image.png',
    primaryColor: '#8b5e35',
    techStack: ['Angular', 'TypeScript', 'Tailwind', 'Sass'],
    technologies: ['PrimeNG', 'RxJS', 'SwiperJS', 'Ngx Spinner', 'Stripe'],
    github: 'https://github.com/Moe-Jamal/trendify',
    demoLink: 'https://trendify-coral.vercel.app/',
    highlight: true,
    features: [
      { title: 'Shopping Core', description: 'Cart + wishlist flows with a clean UX.' },
      { title: 'Payments', description: 'Cash on Delivery + Stripe online transactions.' },
      {
        title: 'Routing & Browsing',
        description: 'Dynamic product routes, category filtering, pagination.',
      },
      { title: 'Order Tracking', description: 'Order history/tracking page for customers.' },
      {
        title: 'Auth & Security',
        description: 'Validation + guards, password reset/change password.',
      },
      {
        title: 'Angular v19 Features',
        description:
          'Services/pipes/interceptors/signals/layouts/SSR/environments and reusable components.',
      },
    ],
  },
  {
    id: '3',
    title: 'Mission',
    slug: 'mission-landing-page',
    subTitle: 'Mobile App Landing Page',
    description:
      'A fully responsive landing page for the Mission mobile app built with Nuxt 4, Tailwind, i18n, and shadcn/ui. Includes smooth animations and a clean modern UI—delivered in 3 working days.',
    imageUrl: '/images/projects/mission-landing.png',
    scrollImage: '/images/projects/mission-landing-scroll-image.png',
    primaryColor: '#009497',
    techStack: ['Vue.js', 'Nuxt', 'Tailwind'],
    technologies: ['i18n', 'shadcn/ui', 'AOS'],
    demoLink: 'https://missionksa.com',
    highlight: true,
    features: [
      { title: 'Fully Responsive', description: 'Consistent layout across mobile/tablet/desktop.' },
      { title: 'i18n', description: 'Multi-language support for broader reach.' },
      {
        title: 'Motion',
        description: 'Smooth animations to enhance storytelling and product feel.',
      },
      {
        title: 'Fast Delivery',
        description: 'Completed in 3 working days with strong attention to detail.',
      },
    ],
  },
  {
    id: '4',
    title: 'Creatsy',
    slug: 'creatsy-ecommerce',
    subTitle: 'E-Commerce Website (Under Development)',
    description:
      'E-commerce app under development using Angular v19 with scalable architecture: services, pipes, interceptors, directives, signals, guards, layouts, SSR, environments, and reusable components. Styling with SCSS + Tailwind and UI building blocks (PrimeNG), plus sliders/carousels and RxJS.',
    imageUrl: '/images/projects/creatsy.png',
    scrollImage: '/images/projects/creatsy-scroll-image.png',
    primaryColor: '#a2a2a2',
    techStack: ['Angular', 'TypeScript', 'Tailwind', 'GSAP'],
    technologies: ['PrimeNG', 'RxJS', 'SwiperJS', 'Owl Carousel', 'SSR'],
    github: 'https://github.com/Moe-Jamal/creatsy',
    demoLink: 'https://creatsy.vercel.app/#/',
    highlight: false,
    features: [
      {
        title: 'Angular Architecture',
        description:
          'Services/pipes/interceptors/signals/guards + reusable components for maintainability.',
      },
      {
        title: 'SSR Ready',
        description: 'Server-side rendering setup for performance and SEO-friendly rendering.',
      },
      {
        title: 'UI + Motion',
        description: 'PrimeNG + carousels/sliders for a modern shopping experience.',
      },
    ],
  },
  {
    id: '5',
    title: 'GameOver',
    slug: 'gameover-gaming',
    subTitle: 'Gaming Website',
    description:
      'Responsive gaming website integrating the Free-To-Game API. Shows free games with genre filtering and video previews, plus detailed game pages. Includes authentication (login/register) with guards and dark mode.',
    imageUrl: '/images/projects/gameover.png',
    videoUrl: '/images/projects/GameOver.mp4',
    primaryColor: '#0d6efd',
    techStack: ['HTML', 'TypeScript', 'Bootstrap', 'CSS'],
    technologies: ['Free-To-Game API', 'Authentication API'],
    github: 'https://github.com/Moe-Jamal/GameOver',
    demoLink: 'https://moe-jamal.github.io/GameOver/',
    highlight: false,
    features: [
      {
        title: 'API Integration',
        description: 'Consumes Free-To-Game API to list and filter games.',
      },
      {
        title: 'Game Details',
        description: 'Dedicated pages with full information and media previews.',
      },
      { title: 'Authentication', description: 'Login/register flow with guards.' },
      { title: 'Dark Mode', description: 'Theme toggle for better viewing comfort.' },
    ],
  },
  {
    id: '6',
    title: 'Weather App',
    slug: 'weather-app',
    subTitle: 'Weather Dashboard',
    description:
      'Weather app that handles large API data with city search and real-time updates. Includes AQI, sunrise/sunset, humidity, pressure, hourly forecast with wind data, a 24-hour chart visualization, and a 5-day forecast.',
    imageUrl: '/images/projects/weather-app.png',
    videoUrl: '/images/projects/Weather.mp4',
    primaryColor: '#4bc0c0',
    techStack: ['HTML', 'JavaScript', 'Bootstrap', 'CSS'],
    technologies: ['OpenWeather API', 'Chart.js'],
    github: 'https://github.com/Moe-Jamal/Weather-App',
    demoLink: 'https://moe-jamal.github.io/Weather-App/',
    highlight: false,
    features: [
      { title: 'City Search', description: 'Search weather by city with quick updates.' },
      { title: 'Daily Insights', description: 'AQI, sunrise/sunset, humidity, pressure.' },
      { title: 'Charts', description: '24-hour forecast chart for quick scanning.' },
      { title: 'Forecasting', description: 'Hourly + 5-day forecast for planning.' },
    ],
  },
  {
    id: '7',
    title: 'Simple E-Commerce With Admin Dashboard',
    slug: 'simple-ecommerce-admin-dashboard',
    subTitle: 'JavaScript E-Commerce',
    description:
      'Responsive e-commerce platform with an admin dashboard for product management. Includes persistent cart (LocalStorage), detailed product pages with image zoom, category navigation, search, sorting, and editable cart. Secure authentication with strong validation and optimized UX across devices.',
    imageUrl: '/images/projects/js-ecommerce.png',
    videoUrl: '/images/projects/Js-ecommerce.mp4',
    primaryColor: '#BBA86E',
    techStack: ['HTML', 'Bootstrap', 'JavaScript', 'CSS'],
    technologies: ['LocalStorage', 'Animate.css'],
    github: 'https://github.com/Moe-Jamal/Simple-E-Commerce',
    demoLink: '',
    highlight: false,
    features: [
      { title: 'Admin Dashboard', description: 'Manage products with add/edit/remove controls.' },
      { title: 'Persistent Cart', description: 'Cart state saved using LocalStorage.' },
      {
        title: 'Product Details',
        description: 'Detailed pages with image zoom for better browsing.',
      },
      {
        title: 'Search & Sorting',
        description: 'Quick search, category filtering, and sorting options.',
      },
      { title: 'Editable Cart', description: 'Update quantities and remove items with ease.' },
      { title: 'Authentication', description: 'Secure login with solid validation.' },
      {
        title: 'Responsive UI',
        description: 'Optimized experience across mobile, tablet, and desktop.',
      },
    ],
  },
  {
    id: '8',
    title: 'Daniels',
    slug: 'daniels-portfolio-site',
    subTitle: 'Responsive Website (Demo + GitHub)',
    description:
      'Fully responsive website with dark mode and a color picker for dynamic theme customization. Includes interactive UI sections and motion enhancements.',
    imageUrl: '/images/projects/daniels.png',
    videoUrl: '/images/projects/Daniels.mp4',
    primaryColor: '#9b5de5',
    techStack: ['HTML', 'Bootstrap', 'JavaScript', 'CSS'],
    technologies: ['MixitUp', 'AOS', 'SwiperJS'],
    github: 'https://github.com/Moe-Jamal/Daniels',
    demoLink: 'https://moe-jamal.github.io/Daniels/',
    highlight: false,
    features: [
      { title: 'Dark Mode', description: 'Theme toggle for accessibility and comfort.' },
      { title: 'Color Picker', description: 'Dynamic theme customization for personalization.' },
      { title: 'Animations', description: 'AOS + slider interactions for a more engaging UI.' },
      { title: 'Filtering', description: 'MixitUp-powered filtering for better content browsing.' },
    ],
  },
];
