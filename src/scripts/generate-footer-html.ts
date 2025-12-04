/**
 * Script – Generate footer HTML based on FOOTER_DATA.
 * OUTPUT: build/generated-footer.html
 */

import { FOOTER_DATA } from '../config/footer-data';
import fs from 'fs';
import path from 'path';

function generateFooterHTML() {
  return `
<!-- BEGIN:FOOTER (AUTO-GENERATED – DO NOT EDIT MANUALLY) -->
<footer class="site-footer">
  <div class="footer-brand">
    ${FOOTER_DATA.brandName}
  </div>

  <div class="footer-legal">
    <p>GSTIN: ${FOOTER_DATA.gstin}</p>
    <p>Registered Address: ${FOOTER_DATA.registeredAddress}</p>
  </div>

  <div class="footer-nav">
    <ul>
      ${FOOTER_DATA.navLinks
        .map(link => `<li><a href="${link.href}">${link.text}</a></li>`)
        .join('\n      ')}
    </ul>
  </div>
</footer>
<!-- END:FOOTER -->
`;
}

const outputDir = path.resolve(process.cwd(), 'build');
const outputPath = path.join(outputDir, 'generated-footer.html');

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, generateFooterHTML());

console.log(`✔ Footer HTML generated at: ${outputPath}`);
