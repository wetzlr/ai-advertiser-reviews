// Single source of truth for business identity. Used across legal pages,
// schema.org markup, meta tags, footer, contact info, and the A2P brand
// registration. Keep these strings consistent everywhere — A2P reviewers
// check that the website, T&C, Privacy Policy, and campaign description
// all match exactly.

export const BUSINESS = {
  legalName: "Brez Marketing LLC",
  dba: "AI-Advertiser",
  fullName: "Brez Marketing LLC DBA AI-Advertiser",
  domain: "aiadvertiserreviews.com",
  url: "https://aiadvertiserreviews.com",
  supportEmail: "support@aiadvertiserreviews.com",
  contactEmail: "hello@aiadvertiserreviews.com",
  phone: "+1 (305) 555-0142",          // TODO: swap for real Twilio/GHL number before A2P submit
  phoneDisplay: "(305) 555-0142",
  smsKeywordHelp: "HELP",
  smsKeywordStop: "STOP",
  msgFrequency: "approximately 4-8 messages per month",
  address: {
    line1: "1560 Cleveland Road",
    city: "Miami Beach",
    state: "FL",
    zip: "33141",
    country: "USA",
  },
  founded: "2024",
  industry: "Marketing services / brand scaling education",
  description:
    "AI-Advertiser is the brand-scaling program from Brez Marketing LLC. We teach entrepreneurs how to run ads for brands and stack recurring monthly revenue. This site collects verified reviews from program members.",
};

export const ADDRESS_ONE_LINE = `${BUSINESS.address.line1}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`;
