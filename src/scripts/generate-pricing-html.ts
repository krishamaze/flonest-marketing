/**
 * Script: Generates pricing card HTML from PRICING_CARDS config.
 * Output goes to: build/generated-pricing.html
 */

import { PRICING_CARDS } from '../config/pricing-cards';
import { PricingCardDTO } from '../types/pricing-card';

function cardToHTML(card: PricingCardDTO): string {
  return `
    <!-- ENFORCE: See docs/modules/pricing/interfaces.md -->
    <div class="pricing-card">
        <!-- CARD CONTRACT: DO NOT MODIFY STRUCTURE -->
        <h3 class="pricing-card__title">${card.title}</h3>
        <p class="pricing-card__subtitle">${card.subtitle}</p>
        <p class="pricing-card__price">${card.price}</p>
        <ul class="pricing-card__features">
            ${card.features.map(f => `<li>${f}</li>`).join('\n            ')}
        </ul>
        <p class="pricing-card__note">${card.note}</p>
        <a href="${card.ctaHref}" class="pricing-card__cta">
            ${card.ctaText}
        </a>
    </div>
  `;
}

const output = PRICING_CARDS.map(cardToHTML).join('\n\n');

// Write final output (Node required)
import fs from 'fs';
import path from 'path';

console.log('Generating pricing HTML...');
const buildDir = path.resolve(process.cwd(), 'build');
const outputFile = path.join(buildDir, 'generated-pricing.html');

console.log(`Resolved output directory: ${buildDir}`);
console.log(`Resolved output file path: ${outputFile}`);

try {
  fs.mkdirSync(buildDir, { recursive: true });
  console.log('Build directory created/ensured.');
  fs.writeFileSync(outputFile, output, 'utf8');
  console.log(`✔ Pricing HTML generated at ${outputFile}`);
} catch (error) {
  console.error('Error during file generation:', error);
  process.exit(1);
}
