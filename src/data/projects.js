export const projects = [
  {
    id: 'sdhd',
    title: 'SDHD',
    featured: true,
    tagline: 'AI Powered GitHub PR Security Reviewer',
    overview: 'A highly scalable GitHub application designed to automatically review Pull Requests for security vulnerabilities, hardcoded secrets, and logical flaws using AST parsing and Gemini AI.',
    problemStatement: 'Manual code reviews often miss subtle security vulnerabilities and secrets accidentally pushed to repositories. Existing tools are either rule-based with high false positives or too slow.',
    techStack: ['FastAPI', 'Celery', 'Redis', 'Docker', 'Azure', 'Gemini AI', 'Tree-sitter', 'Python'],
    challenges: 'Handling concurrent PR webhook events without dropping requests. Integrating abstract syntax tree (AST) parsing with LLM context windows efficiently.',
    engineeringDecisions: [
      'Implemented a Redis queue with Celery workers to handle asynchronous processing of high-volume GitHub webhooks, ensuring zero dropped events.',
      'Utilized Tree-sitter for robust AST generation to extract precise code context, significantly reducing the token payload sent to the Gemini API while increasing review accuracy.',
      'Secured the webhook endpoint using HMAC verification to prevent unauthorized payloads.'
    ],
    architecture: {
      flow: 'GitHub -> Webhook -> FastAPI -> Celery -> Static Analyzer -> Gemini -> GitHub Review'
    },
    githubLink: 'https://github.com/Vashu157/SDHD-Static-and-Dynamic-Hallucination-Detection-GitHub-App',
    demoLink: '#'
  },
  {
    id: 'blinkit-ecosystem',
    title: 'Blinkit Delivery Ecosystem',
    featured: false,
    tagline: 'Comprehensive end-to-end delivery management system',
    overview: 'A complete microservice-inspired ecosystem replicating real-time delivery logistics, featuring a Customer App, Rider App, Admin Dashboard, and a robust backend pipeline.',
    problemStatement: 'Building a synchronized system where order state transitions instantly reflect across multiple distinct client applications with high reliability.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Firebase Notifications', 'React Native', 'React'],
    challenges: 'Maintaining real-time state consistency across customer and rider apps. Handling race conditions during order acceptance.',
    engineeringDecisions: [
      'Engineered a state-machine driven order pipeline in PostgreSQL to ensure atomic transitions.',
      'Integrated Firebase Cloud Messaging (FCM) for low-latency push notifications to riders upon order creation.',
      'Designed a robust inventory management module that locks stock during the checkout flow to prevent overselling.'
    ],
    architecture: {
      flow: 'Customer App -> Node Backend (Order Pipeline) -> Postgres -> Firebase Notifications -> Rider App / Admin Dashboard'
    },
    githubLink: 'https://github.com/Vashu157/justoo-backend-refactored',
    demoLink: '#'
  },
  {
    id: 'youflex',
    title: 'YouFlex',
    featured: false,
    tagline: 'Developer Community Platform',
    overview: 'A specialized platform for developers to share insights, code snippets, and architectural discussions with rich media support.',
    problemStatement: 'Developers need a platform that natively understands code and technical discussions without sluggish load times or poor SEO.',
    techStack: ['Next.js', 'NextAuth', 'SQL', 'Cloudinary', 'Tailwind CSS'],
    challenges: 'Optimizing complex SQL queries for feed generation and pagination with millions of potential records.',
    engineeringDecisions: [
      'Leveraged Next.js Server Components for zero-bundle-size rendering and superior SEO.',
      'Implemented highly optimized SQL indexes and cursor-based pagination for the main feed, reducing query times by 80%.',
      'Integrated NextAuth with JWT for secure, stateless authentication.',
      'Offloaded heavy image and media processing to Cloudinary.'
    ],
    architecture: {
      flow: 'Next.js Client -> Server Components -> NextAuth (JWT) -> SQL Database (Indexed) / Cloudinary'
    },
    githubLink: 'https://github.com/Vashu157/youflex',
    demoLink: 'https://youflex-chi.vercel.app/'
  },
  {
id: 'capable',
    title: 'capable',
    featured: true,
    tagline: 'On-device AI assistive application for real-time spatial awareness',
    overview: 'A mobile application engineered to help visually impaired individuals perceive and navigate their physical surroundings independently using real-time computer vision and depth estimation.',
    problemStatement: 'Providing visually impaired users with reliable, low-latency environmental perception without requiring constant internet connectivity or cloud processing.',
    techStack: ['React Native', 'YOLOv8', 'TensorFlow Lite', 'OpenCV'],
    challenges: 'Balancing high-accuracy, real-time object detection and depth estimation with mobile battery constraints and processing limits.',
    engineeringDecisions: [
      'Integrated YOLOv8 directly into the mobile environment for on-device inference, eliminating network latency and ensuring offline functionality.',
      'Implemented relative depth estimation algorithms to calculate obstacle proximity, translating 2D camera feeds into actionable 3D spatial awareness.',
      'Optimized the AI pipeline to balance battery consumption with real-time processing speeds for a seamless user experience.'
    ],
    architecture: {
      flow: 'Device Camera -> On-Device ML Pipeline (YOLOv8 + Depth) -> Spatial Analysis Engine -> Audio/Haptic Feedback -> User'
    },
    githubLink: 'https://github.com/Vashu157/capable-2',
    demoLink: '#'
  }
];
