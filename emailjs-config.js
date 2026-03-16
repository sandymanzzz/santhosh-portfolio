/**
 * EMAILJS CONFIG — Santhosh V Portfolio
 * ─────────────────────────────────────
 * NOTE: Keys are now also inlined inside index.html <head>
 * so the site works when opened locally (double-click).
 *
 * This file is only needed on Vercel/hosted deployment.
 * Both files must have the SAME keys.
 *
 * If you change a key, update it in BOTH places:
 *   1. index.html  → search "EMAILJS CONFIG" near top <script>
 *   2. This file   → below
 */
window.EMAILJS_CONFIG = {
  publicKey:         "zuvVgiiiTo0KSlDgM",
  serviceId:         "service_g0cbqcl",
  contactTemplateId: "template_l90q8jo",
  orderTemplateId:   "template_2e6gozu",
  toEmail:           "santhoshwe2007@gmail.com"
};
try {
  emailjs.init(window.EMAILJS_CONFIG.publicKey);
} catch(e) {}
