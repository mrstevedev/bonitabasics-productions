"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/Footer.module.scss";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => setYear(new Date().getFullYear()), [setYear]);
  return (
    <>
      <footer className={styles.BBP__Footer}>
        <div className={`container-fluid ${styles.BBP__Footer_Container}`}>
          <div className="col-md-3">
            <Link href="https://youtube.com" title="BBPMusicLibrary | Youtube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  fill="#fff"
                />
              </svg>
            </Link>

            <Link
              href="https://spotify.com/bbpmusiclibrary"
              title="BBPMusicLibrary | Spotify"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
                  fill="#fff"
                />
              </svg>
            </Link>

            <Link
              href="https://www.instagram.com/bbpmusiclibrary"
              target="_blank"
              title="BBPMusicLibrary | Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  id="iconmonstr-instagram-11"
                  d="M12,2.163c3.2,0,3.584.012,4.85.07,3.252.148,4.771,1.691,4.919,4.919.058,1.265.069,1.645.069,4.849s-.012,3.584-.069,4.849c-.149,3.225-1.664,4.771-4.919,4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.7-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849C2.381,3.924,3.9,2.38,7.151,2.232,8.417,2.175,8.8,2.163,12,2.163ZM12,0C8.741,0,8.333.014,7.053.072,2.7.272.273,2.69.073,7.052.014,8.333,0,8.741,0,12s.014,3.668.072,4.948c.2,4.358,2.618,6.78,6.98,6.98C8.333,23.986,8.741,24,12,24s3.668-.014,4.948-.072c4.354-.2,6.782-2.618,6.979-6.98C23.986,15.668,24,15.259,24,12s-.014-3.667-.072-4.947c-.2-4.354-2.617-6.78-6.979-6.98C15.668.014,15.259,0,12,0Zm0,5.838A6.163,6.163,0,1,0,18.162,12,6.162,6.162,0,0,0,12,5.838ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.406,4.155a1.44,1.44,0,1,0,1.439,1.44A1.441,1.441,0,0,0,18.406,4.155Z"
                  fill="#fff"
                />
              </svg>
            </Link>

            <Link
              href="https://soundcloud.com/bbpmusiclibrary"
              title="BBPMusicLibrary | SoundCloud"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-2.233-2.168-3.772-4.121-2.815zm-16.879-.027c-.302-.024-.526-.03-1 .122v5.689c.446.143.636.138 1 .138v-5.949z"
                />
              </svg>
            </Link>
          </div>
          <div className="col d-flex justify-content-end">
            <p className={styles.BBP__Footer_text}>
              &copy; {year} BBP Music Library |{" "}
              <span>
                dev by{" "}
                <a
                  target="_blank"
                  className="link-blue"
                  href="https://linkedin.com/in/spolido"
                >
                  sp
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
