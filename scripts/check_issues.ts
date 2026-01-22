

import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import { supabaseAdmin } from "../src/lib/supabaseAdmin";

async function checkIssues() {
  console.log("Checking issues table...");
  const { data, error } = await supabaseAdmin.from("issues").select("*");
  if (error) {
    console.error("Error fetching issues:", error);
  } else {
    console.log(`Found ${data.length} issues.`);
    console.log(data);
  }
}

checkIssues();
