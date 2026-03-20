import helmet from "helmet";

// Helmet configuration for API security
 
export const helmetConfig = helmet({
  // Disable CSP → API returns JSON, not HTML
  contentSecurityPolicy: false,

  // Enable HSTS only in production
  hsts:
    process.env.NODE_ENV === "production"
      ? {
          maxAge: 31536000,
          includeSubDomains: true,
        }
      : false,

  // Prevent clickjacking
  frameguard: {
    action: "deny",
  },

  // Hide Express technology
  hidePoweredBy: true,
});