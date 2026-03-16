/**
 * ════════════════════════════════════════════
 *   EMAILJS CONFIGURATION — Santhosh V Portfolio
 *   Edit ONLY this file to update email settings
 * ════════════════════════════════════════════
 *
 *  WHERE TO FIND THESE:
 *  ┌─────────────────────────────────────────────────────┐
 *  │  Go to → https://emailjs.com → Log in               │
 *  │                                                     │
 *  │  PUBLIC KEY  → Account (top right) → API Keys       │
 *  │  SERVICE ID  → Email Services → your service        │
 *  │  TEMPLATE IDs → Email Templates → each template     │
 *  └─────────────────────────────────────────────────────┘
 */

const EMAILJS_CONFIG = {

  // ── Your EmailJS Public Key ──────────────────────────
  publicKey: "zuvVgiiiTo0KSlDgM",

  // ── Your Gmail Service ID ───────────────────────────
  serviceId: "service_g0cbqcl",

  // ── Contact Form Template ID ────────────────────────
  //    (messages from the contact section at the bottom)
  contactTemplateId: "template_l90q8jo",

  // ── Order Template ID ───────────────────────────────
  //    (orders placed via the Order Now buttons)
  orderTemplateId: "template_2e6gozu",

  // ── Your email address ──────────────────────────────
  toEmail: "santhoshwe2007@gmail.com"

};

// Initialise EmailJS automatically when this file loads
(function() {
  try {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log("%c✓ EmailJS ready", "color:#c8ff57;font-weight:bold");
  } catch(e) {
    console.warn("EmailJS init failed — check that the EmailJS script loaded above this file.");
  }
})();
