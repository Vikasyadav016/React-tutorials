const JSX = () => {
    return (
        <div>
            <div>
                <h1>JSX in React</h1>
                <p>
                    JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is used in React to describe what the UI should look like.
                </p>
                <h2>Benefits of JSX:</h2>
                <ul>
                    <li>More readable and maintainable code.</li>
                    <li>Allows for easier debugging and development.</li>
                    <li>Provides a more intuitive way to create UI components.</li>
                </ul>
            </div>
            <div>
                <p title="JSX Example">This is an example of JSX in React.</p>
                <pre>
                    <code className="code-block">
                        {`import React from 'react';
function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a JSX example.</p>
    </div>
  );
}
  
export default App;`}
                    </code>
                </pre>
                <p>
                    In this example, we are using JSX to create a simple React component that renders a heading and a paragraph. The JSX code is transpiled into regular JavaScript by tools like Babel before being executed in the browser.
                </p>
            </div>
            <div>
                <h2>JSX Syntax Rules:</h2>
                <ul>
                    <li>JSX elements must be wrapped in a single parent element.</li>
                    <li>Use camelCase for attribute names (e.g., className instead of class).</li>
                    <li>JavaScript expressions can be embedded in JSX using curly braces { }.</li>
                    <li>Self-closing tags must end with a slash (e.g., &lt;img src="image.jpg" /&gt;).</li>
                </ul>
            </div>
            <div>
                <h2>Conclusion:</h2>
                <p>
                    JSX is a powerful feature of React that allows developers to write UI components in a more declarative and readable way. By following the syntax rules and best practices, you can create efficient and maintainable React applications.
                </p>
            </div>
            <div>
                <p className="">
                    How JSX is transpiled into JavaScript:
                </p>
                <pre>
                    <code className="code-block">
                        {`// JSX code
const element = <h1>Hello, world!</h1>;

// Transpiled JavaScript code
const element = React.createElement(
  'h1',
  null,
  'Hello, world!'
);`}
                    </code>
                </pre>
                <p>
                    In this example, the JSX code is transpiled into a call to React.createElement, which creates a virtual DOM element that React can efficiently update and render to the actual DOM.
                </p>
            </div>
            <div>
                <p className="">
                    JSX allows you to write HTML-like code in your JavaScript files, making it easier to create and manage UI components in React applications. By understanding how JSX works and following best practices, you can build efficient and maintainable React applications.
                </p>
                <p>
                    For more information on JSX and its features, refer to the official React documentation: <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noopener noreferrer">Introducing JSX</a>.
                </p>
            </div>
        </div >
    );
};

export default JSX;