import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should load initial state with undefined", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("should store token on login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token",
          userId: "some-userID",
        }
      )
    ).toEqual({
      token: "some-token",
      userId: "some-userID",
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
});
