// Single source of truth for business identity. Used across legal pages,
// schema.org markup, meta tags, footer, contact info, and the A2P brand
// registration. Keep these strings consistent everywhere. A2P reviewers
// check that the website, T&C, Privacy Policy, and campaign description
// all match exactly.

export const BUSINESS = {
  legalName: "Brez Marketing LLC",
  dba: "AI-Advertiser",
  fullName: "Brez Marketing LLC DBA AI-Advertiser",
  domain: "aiadvertiserreviews.com",
  url: "https://aiadvertiserreviews.com",
  supportEmail: "support@ai-advertiser.com",
  contactEmail: "support@ai-advertiser.com",
  phone: "+15204454823",
  phoneDisplay: "(520) 445-4823",
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
  // Legal registered address of Brez Marketing LLC (IRS CP575 / Arizona state
  // filing). Verification reviewers (Twilio Trust Hub, caller-ID analytics,
  // A2P vetting) match the website against the official registration, so this
  // must appear on the site exactly as registered. Miami Beach above stays the
  // operating/mailing address.
  registeredAddress: {
    line1: "133 W 6th St, Apt 330",
    city: "Tempe",
    state: "AZ",
    zip: "85281",
    country: "USA",
  },
  founded: "2024",
  industry: "Marketing services / brand scaling education",
  description:
    "AI-Advertiser is an AI-powered advertising platform and education company founded by Brez Scales. We build tools that automate ad creation, audience research, and campaign optimization for digital advertisers, and teach people how to use them to run profitable ad agencies for local businesses. Our software (Adlevel.ai) and training program help complete beginners launch, manage, and scale paid ad campaigns using AI agents that do the heavy lifting.",
  brief:
    "AI-Advertiser is an AI-powered advertising platform and education company founded by Brez Scales. Members get the software (Adlevel.ai) plus the training to run profitable ad agencies for local businesses.",
};

export const ADDRESS_ONE_LINE = `${BUSINESS.address.line1}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`;
export const REGISTERED_ADDRESS_ONE_LINE = `${BUSINESS.registeredAddress.line1}, ${BUSINESS.registeredAddress.city}, ${BUSINESS.registeredAddress.state} ${BUSINESS.registeredAddress.zip}`;
