import { Fragment } from "react";

import EyeTogglePasswordIcon from "@/components/Icons/EyeTogglePasswordIcon";
import EyeTogglePasswordConfirmIcon from "@/components/Icons/EyeTogglePasswordConfirmIcon";
import { Button } from "react-bootstrap";

export default function CreatePasswordForm({
  handleSubmit,
  isLoading,
  setFieldValue,
}) {
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div style={{ position: "relative" }}>
          <EyeTogglePasswordIcon left={"9.3rem"} right={null} />
          <EyeTogglePasswordConfirmIcon left={null} right={"0.7rem"} />
          <div className="mb-2 input-group">
            <input
              required
              onChange={(e) => setFieldValue("password", e.target.value)}
              type="password"
              id="password"
              name="password"
              className="form-control create-password-input"
              aria-describedby="password"
              placeholder="Password"
            />
            <input
              required
              onChange={(e) => setFieldValue("passwordConfirm", e.target.value)}
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              className="form-control create-password-input"
              aria-describedby="confirm password"
              placeholder="Confirm password"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="btn btn-primary"
          style={{ display: "flex", alignItems: "center" }}
        >
          Create
          {isLoading && (
            <div
              className="spinner-border spinner-border-sm"
              role="status"
              style={{ margin: "0 0 0 0.3rem" }}
            ></div>
          )}
        </Button>
      </form>

      <hr />
    </Fragment>
  );
}
