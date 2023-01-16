# Challenge

a challenge

## Problem
build a `<DismissableBlurb />` component similar to the one on GitHub

see: [example](./src/assets/dismissable-blurb-github.png)

## Requirements
- should render `children` components inside it
  - required
- should have an "x" in the top-right corner
  - clicking the "x" should remove the element from the DOM

## API
- should combine JSDoc + TS to provide good documentation

```tsx
<DismissableBlurb>
    <h3>Welcome to the new feed!</h3>
    <p>We're updating this to make it more interactive and useful. </p>
    <a href="https://example.com/feedback">Send feedback</a>
</DismissableBlurb>
```
