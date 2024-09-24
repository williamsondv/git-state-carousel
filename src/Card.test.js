import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", () => {
  const { container } = render(
    <Card
      src={TEST_IMAGES[0].src}
      caption={TEST_IMAGES[0].caption}
      currNum={1}
      totalNum={3}
    />
  );
});

it("renders test image 1", () => {
  const { container } = render(
    <Card
      src={TEST_IMAGES[0].src}
      caption={TEST_IMAGES[0].caption}
      currNum={1}
      totalNum={3}
    />
  );
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});

it("renders test image 2", () => {
  const { container } = render(
    <Card
      src={TEST_IMAGES[1].src}
      caption={TEST_IMAGES[1].caption}
      currNum={2}
      totalNum={3}
    />
  );
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
});
