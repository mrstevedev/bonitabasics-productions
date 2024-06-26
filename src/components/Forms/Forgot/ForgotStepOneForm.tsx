"use client";
import Link from "next/link";
import { Button, Form, FormControl } from "react-bootstrap";
import styles from "@/styles/ForgotPassword.module.scss";
import { Fragment } from "react";

export default function ForgotForm({ handleSubmit, handleChange }) {
  return (
    <Fragment>
      <h1 className={styles.Lostpw__heading}>Forgot Password</h1>
      <p style={{ fontWeight: 100 }}>Enter your email to reset your password</p>
      <Form method="post" onSubmit={handleSubmit}>
        <div className="mb-2 input-group">
          <FormControl
            autoFocus
            type="email"
            id="email"
            name="email"
            aria-describedby="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="row">
          <div className="col-sm-4">
            <Button type="submit" className="btn btn-primary btn-block">
              Submit
            </Button>
          </div>
        </div>
        <div className="mt-3">
          <h2 className={styles.LostPw__signIn}>
            Back to sign in{" "}
            <Link href="/login" className={`${styles.LostPw__link} link`}>
              here
            </Link>
          </h2>
        </div>
      </Form>
    </Fragment>
  );
}
