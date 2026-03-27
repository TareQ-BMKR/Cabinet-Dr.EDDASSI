import React from 'react';

// Common SVG props to match Lucide's style
const commonProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export const Eye = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Menu = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const X = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const Calendar = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export const ArrowUp = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="m18 15-6-6-6 6" />
  </svg>
);

export const Award = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

export const GraduationCap = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </svg>
);

export const Activity = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

export const Microscope = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0-14 0" />
    <circle cx="14" cy="5" r="2" />
    <path d="M14 14.1V9" />
    <path d="M14 3V2" />
    <path d="M14 15a2.5 2.5 0 1 1-5 0" />
  </svg>
);

export const Phone = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MapPin = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Clock = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Facebook = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Instagram = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Linkedin = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const MessageCircle = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

export const PhoneCall = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.07 9c.28-.13.34-.41.13-.69a6.15 6.15 0 0 0-4.51-4.51c-.28-.13-.56-.07-.69.13l-.52.52c-.13.13-.13.34 0 .52a4.4 4.4 0 0 1 3.47 3.47c.13.13.34.13.52 0l.52-.44z" />
  </svg>
);

export const ChevronRight = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const MousePointer2 = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="m4 4 7.07 17 2.51-7.39L21 11.07z" />
    <path d="M13 13l6 6" />
  </svg>
);

export const Building2 = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

export const Zap = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const Layers = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

export const Scissors = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" x2="8.12" y1="4" y2="15.88" />
    <line x1="14.47" x2="20" y1="14.48" y2="20" />
    <line x1="8.12" x2="12" y1="8.12" y2="12" />
  </svg>
);

export const Shield = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

export const Users = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <circle cx="19" cy="4" r="3" />
  </svg>
);

export const MonitorCheck = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <path d="m9 10 2 2 4-4" />
    <path d="M12 17v4" />
    <path d="M8 21h8" />
  </svg>
);

export const ExternalLink = ({ size = 24, ...props }) => (
  <svg {...commonProps} width={size} height={size} {...props}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);
