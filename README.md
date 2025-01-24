# Next.js 15 - Accessing 'this.props' in Functional Component

This repository demonstrates a common error encountered in Next.js 15 applications when attempting to access `this.props` within a functional component. Functional components in Next.js 15 do not have a `this` context like class components.  This example shows the problem and provides a solution.

## Bug

The `about.js` file attempts to access `this.props`. This will throw an error because functional components don't have a `this` context.  The error will likely be a `TypeError: Cannot read properties of undefined (reading 'props')`.

## Solution

The solution is to use props directly as arguments in the functional component, as shown in `aboutSolution.js`.