const FeaturesofReactJs = () => {
  const features = [
    "Virtual DOM",
    "Component-Based Architecture",
    "One-Way Data Binding",
    "JSX Syntax",
    "Declarative Programming",
    "Rich Ecosystem",
    "Cross-Platform Development",
  ];

  const coreFeatureDetails = {
    "Virtual DOM":
      "React uses a virtual DOM to optimize rendering and improve performance.",
    "Component-Based Architecture":
      "React allows developers to build reusable UI components, making development more efficient.",
    "One-Way Data Binding":
      "React follows a unidirectional data flow, which helps in managing the state of the application effectively.",
    "JSX Syntax":
      "React uses JSX, a syntax extension that allows developers to write HTML-like code within JavaScript, making it easier to create UI components.",
    "Declarative Programming":
      "React enables developers to describe what the UI should look like for different states, and it takes care of updating the DOM accordingly.",
    "Rich Ecosystem":
      "React has a large ecosystem of libraries and tools that enhance its functionality and make development easier.",
    "Cross-Platform Development":
      "With React Native, developers can build mobile applications for both iOS and Android using the same codebase.",
  };
  const advanceFeatureDetails = {
    Hooks:
      "Hooks allow you to use state and other React features without writing a class.",
    "Context API":
      "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
    "React Router":
      "A collection of navigational components that compose declaratively with your application.",
    "Redux Integration":
      "React can be integrated with Redux for state management across the entire application.",
    "Server-Side Rendering (SSR)":
      "Render React components on the server for improved performance and SEO.",
    "Code Splitting":
      "Split your code into smaller chunks which can be loaded on demand.",
    "Error Boundaries":
      "Components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.",
  };
  const advanceFeatures = [
    "Hooks",
    "Context API",
    "React Router",
    "Redux Integration",
    "Server-Side Rendering (SSR)",
    "Code Splitting",
    "Error Boundaries",
    "Lazy Loading",
  ];
  return (
    <div className="main-card">
      <h1 className="title">Features of React JS</h1>
      <div className="detailscard">
        <h2 className="subtitle">Core Features</h2>
        <ul className="note">
          <li>
            <strong>Virtual DOM:</strong> React uses a virtual DOM to optimize
            rendering and improve performance.
          </li>
          <li>
            <strong>Component-Based Architecture:</strong> React allows
            developers to build reusable UI components, making development more
            efficient.
          </li>
          <li>
            <strong>One-Way Data Binding:</strong> React follows a
            unidirectional data flow, which helps in managing the state of the
            application effectively.
          </li>
          <li>
            <strong>JSX Syntax:</strong> React uses JSX, a syntax extension that
            allows developers to write HTML-like code within JavaScript, making
            it easier to create UI components.
          </li>
          <li>
            <strong>Declarative Programming:</strong> React enables developers
            to describe what the UI should look like for different states, and
            it takes care of updating the DOM accordingly.
          </li>
          <li>
            <strong>Rich Ecosystem:</strong> React has a large ecosystem of
            libraries and tools that enhance its functionality and make
            development easier.
          </li>
          <li>
            <strong>Cross-Platform Development:</strong> With React Native,
            developers can build mobile applications for both iOS and Android
            using the same codebase.
          </li>
        </ul>
        <h2 className="subtitle">Advanced Features</h2>
        <ul className="note">
          <li>
            <strong>Hooks:</strong> Hooks allow you to use state and other React
            features without writing a class.
          </li>
          <li>
            <strong>Context API:</strong> Context provides a way to pass data
            through the component tree without having to pass props down
            manually at every level.
          </li>
          <li>
            <strong>React Router:</strong> A collection of navigational
            components that compose declaratively with your application.
          </li>
          <li>
            <strong>Redux Integration:</strong> React can be integrated with
            Redux for state management across the entire application.
          </li>
          <li>
            <strong>Server-Side Rendering (SSR):</strong> Render React
            components on the server for improved performance and SEO.
          </li>
          <li>
            <strong>Code Splitting:</strong> Split your code into smaller chunks
            which can be loaded on demand.
          </li>
          <li>
            <strong>Error Boundaries:</strong> Components that catch JavaScript
            errors anywhere in their child component tree, log those errors, and
            display a fallback UI.
          </li>
        </ul>
      </div>
      <div className="note-card">
        <h2 className="subtitle">Additional Benefits</h2>
        <ul className="note">
          <li>
            <strong>Performance Optimization:</strong> React's virtual DOM and
            efficient rendering algorithms ensure optimal performance even with
            complex UIs.
          </li>
          <li>
            <strong>Developer Experience:</strong> React provides excellent
            developer tools and a great development experience with features
            like hot reloading and error boundaries.
          </li>
        </ul>
      </div>
      <div className="note">
        <div className="badge-container">
          <p className="badge-title">Core Features</p>
          {features.map((feature, index) => (
            <p key={index} className="badge">
              {feature}
            </p>
          ))}
        </div>
        <div className="badge-container">
          <p className="badge-title">Advance Features</p>
          {advanceFeatures.map((feature, index) => (
            <p key={index} className="badge">
              {feature}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesofReactJs;
