import Link from "next/link";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { useLocale } from "next-intl";

export default function NonAuthenticatedUser() {
  const locale = useLocale();
  return (
    <Fragment>
      <span className="nav-link" style={{ paddingLeft: 0 }}>
        Guest
      </span>
      <Link
        href={`/${locale}/login`}
        style={{ display: "flex", paddingLeft: 0 }}
      >
        <Button
          color="white"
          style={{ borderRadius: "6px", padding: "0.3rem 1.1rem" }}
        >
          <span style={{ color: "white" }}>Sign-In</span>
        </Button>
      </Link>
    </Fragment>
  );
}
