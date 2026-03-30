
import fs from 'fs';
import path from 'path';

// Mocking the behavior
async function test() {
  try {
    console.log("Attempting import from pdf-parse/node...");
    // @ts-ignore
    const mod = await import('pdf-parse/node');
    console.log("Import loaded:", Object.keys(mod));
    
    if (mod.PDFParse) {
        console.log("PDFParse class found.");
        console.log("PDFParse type:", typeof mod.PDFParse);
    } else if (mod.default && mod.default.PDFParse) {
        console.log("PDFParse class found on default.");
    } else {
        console.log("PDFParse NOT found in export.");
        console.log("Exports:", mod);
    }

  } catch (e) {
    console.error("Error:", e);
  }
}

test();
