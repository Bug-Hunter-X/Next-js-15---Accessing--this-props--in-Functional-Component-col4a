```javascript
// pages/aboutSolution.js

export default function About({ someProp }) {
  // Access props directly
  console.log(someProp);
  return (
    <div>
      <h1>About Page</h1>
      <p>Some prop value: {someProp}</p>
    </div>
  );
}
```