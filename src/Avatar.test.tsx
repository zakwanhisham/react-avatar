import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Avatar from "./Avatar";

describe("Avatar", () => {
  it("should render an img with alt text", () => {
    render(<Avatar />);
    const img = screen.getByAltText("@github-handle");
    expect(img).toBeInTheDocument();
    expect(img.tagName).toBe("IMG");
  });
});
