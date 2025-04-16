"use client";
import Link from "next/link";
import styles from "./issuuButton.module.css";

/**
 * Creates button that links to Issuu upload for an issue
 * @param link (string) - the URL to the Issue upload
 * @returns a button component
 */
export function IssuuButton({ link }: { link: string }) {
  return (
    <Link href={link} target="_blank">
      <div className={styles.button}>
        Check out our digital print issue &#x2192;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </Link>
  );
}

/**
 * Creates Reference (to Footnote) for in-text citations; use with Footnote component
 * @param number (number) - the footnote number
 * @returns superscript number that links to footnote
 */
export function Reference({ number }: { number: number }) {
  return (
    <sup>
      <Link
        href={`#fn${number}`}
        id={`ref${number}`}
        scroll={false}
        onClick={(e) => {
          e.preventDefault(); // Stop instant jump
          document
            .getElementById("fn1")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
          history.pushState(null, "", "#fn1"); // Update URL
        }}
        className="text-blue-700 hover:underline"
      >
        {number}
      </Link>
    </sup>
  );
}

export function Footnote({
  number,
  text,
  link,
}: {
  number: number;
  text: string;
  link?: string;
}) {
  return (
    <p>
      <sup>{number}</sup>
      {link ? (
        <Link
          href={link}
          className="text-blue-700 hover:underline"
        >{` ${text} `}</Link>
      ) : (
        ` ${text} `
      )}
      <Link
        href={`#ref${number}`}
        id={`fn${number}`}
        scroll={false}
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("ref1")
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
          history.pushState(null, "", "#ref1");
        }}
        className="text-blue-700 hover:underline"
      >
        ^
      </Link>
    </p>
  );
}
