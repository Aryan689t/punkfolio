import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const executablePath = fs.existsSync(CHROME_PATH) ? CHROME_PATH : EDGE_PATH;

const targets = [
  {
    id: 'kisansetu',
    url: 'https://kisaan-setu-v3.vercel.app/',
    filename: 'kisansetu.png'
  },
  {
    id: 'attendance-simulator',
    url: 'https://aryan689t.github.io/Attendence-Simulator/',
    filename: 'attendance-simulator.png'
  },
  {
    id: 'quiz-site',
    url: 'https://aryan689t.github.io/Quiz-Site/',
    filename: 'quiz-site.png'
  },
  {
    id: 'task-manager',
    url: 'https://aryan689t.github.io/Task-Manager/',
    filename: 'task-manager.png'
  },
  {
    id: 'trackyour',
    url: 'https://aryan689t.github.io/TrackYour/',
    filename: 'trackyour.png'
  }
];

const outDir = path.resolve('public', 'projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function capture() {
  console.log(`Launching browser: ${executablePath}`);
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  for (const target of targets) {
    try {
      console.log(`\nNavigating to ${target.url}...`);
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
      
      await page.goto(target.url, { waitUntil: 'networkidle2', timeout: 30000 }).catch(e => {
        console.log(`Navigation note for ${target.id}:`, e.message);
      });

      // Give dynamic UI/animations 2 seconds to settle
      await new Promise(r => setTimeout(r, 2000));

      const outputPath = path.join(outDir, target.filename);
      await page.screenshot({ path: outputPath, type: 'png' });
      console.log(`✓ Saved screenshot: ${outputPath}`);
      await page.close();
    } catch (err) {
      console.error(`✗ Failed for ${target.id}:`, err.message);
    }
  }

  await browser.close();
  console.log('\nAll screenshots captured successfully!');
}

capture();
