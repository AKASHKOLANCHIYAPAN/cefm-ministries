const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'styles.css');
let css = fs.readFileSync(cssFile, 'utf8');

// Global deep replaces
css = css.replace(/rgba\(255,\s*111,\s*61/g, 'rgba(212, 175, 55');
css = css.replace(/rgba\(37,\s*48,\s*36/g, 'rgba(15, 23, 42');

// 1. Root variables
css = css.replace(
    /--midnight: #253024;\s*--navy: #3E503C;\s*--deep-blue: #4b6148;\s*--royal-blue: #7F886A;\s*--gold: #FF6F3D;\s*--gold-light: #ff8c61;\s*--gold-dark: #e35525;/g,
    `--midnight: #0f172a;
  --navy: #1e293b;
  --deep-blue: #334155;
  --royal-blue: #475569;
  --gold: #D4AF37;
  --gold-light: #f3e5ab;
  --gold-dark: #b8860b;`
);

// 2. Headings
css = css.replace(
    /h1 {\n  font-size: clamp\(2\.2rem, 5vw, 3\.8rem\);\n}/g,
    `h1 {\n  font-size: clamp(2.2rem, 5vw, 3.8rem);\n  line-height: 1.3;\n}`
);

// 3. Hero badge letter-spacing
css = css.replace(
    /letter-spacing: 2\.5px;\n  text-transform: uppercase;/g,
    `letter-spacing: 4px;\n  text-transform: uppercase;`
);

// 4. Hero overlay
css = css.replace(
    /\.hero-overlay {[\s\S]*?background: linear-gradient\(180deg,[\s\S]*?\);\n}/,
    `.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,
      rgba(15, 23, 42, 0.2) 0%,
      rgba(15, 23, 42, 0.6) 50%,
      rgba(15, 23, 42, 0.9) 100%);
}`
);

// 5. Buttons (Primary)
css = css.replace(
    /padding: 14px 32px;\n  border-radius: 50px;/g,
    `padding: 14px 32px;\n  border-radius: 8px;`
);
// Prevent nav donate button from becoming 8px
css = css.replace(
    /\.nav-donate {\n  padding: 8px 18px !important;/g,
    `.nav-donate {\n  padding: 8px 18px !important;\n  border-radius: 50px !important;`
);

css = css.replace(
    /box-shadow: 0 4px 20px rgba\(212, 175, 55, 0\.25\);/,
    `box-shadow: 0 4px 14px 0 rgba(212, 175, 55, 0.39);`
);

css = css.replace(
    /box-shadow: 0 6px 30px rgba\(212, 175, 55, 0\.4\);/,
    `box-shadow: 0 6px 30px rgba(212, 175, 55, 0.6);`
);

// 6. Buttons (Secondary)
css = css.replace(
    /\.btn-outline {\n  background: transparent;\n  color: var\(--gold\);\n  border: 2px solid var\(--gold\);\n}/,
    `.btn-outline {
  background: transparent;
  color: var(--gold);
  border: 1px solid var(--gold);
  font-weight: 700;
}`
);

// 7. Navbar Glassmorphism
css = css.replace(
    /\.navbar\.scrolled {[\s\S]*?}/,
    `.navbar.scrolled {
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 70px;
}`
);

// 8. Navigation active state
css = css.replace(
    /\.nav-links a:hover,\n\.nav-links a\.active {[\s\S]*?}/,
    `.nav-links a:hover,
.nav-links a.active {
  color: var(--gold-light);
  background: transparent;
}
.nav-links a.active {
  font-weight: 800;
}`
);

css = css.replace(
    /\.nav-links a\.active::after {[\s\S]*?}/,
    `.nav-links a.active::after {
  content: '•';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--gold);
  font-size: 1.2rem;
  line-height: 0.5;
}`
);

// 9. Layout spacing: Vision Quote
css = css.replace(
    /\.vision-quote {[\s\S]*?margin: 28px 0;/g,
    `.vision-quote {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-style: italic;
  color: var(--deep-blue);
  padding: 24px;
  border-left: 3px solid var(--gold);
  margin: 60px 0;`
);

fs.writeFileSync(cssFile, css, 'utf8');
console.log('Successfully updated styles.css');
