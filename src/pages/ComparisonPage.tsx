import ComparisonTable from '../components/ComparisonTable'

const reactFeatures = [
  { title: 'Virtual DOM', detail: 'React uses a virtual DOM to render updates efficiently.' },
  { title: 'Component-Based', detail: 'Build reusable UI pieces with composable components.' },
  { title: 'JSX', detail: 'Write HTML-like markup inside JavaScript code.' },
  { title: 'One-way Data Flow', detail: 'State travels downward through props, making the app easier to reason about.' },
]

const angularFeatures = [
  { title: 'Two-way Binding', detail: 'Angular supports data binding between models and views directly.' },
  { title: 'Opinionated Framework', detail: 'Includes routing, forms, and dependency injection out of the box.' },
  { title: 'TypeScript First', detail: 'Angular is written in TypeScript and encourages strong typing.' },
]

const nextFeatures = [
  { title: 'File-system Routing', detail: 'Routes are created automatically from the pages directory.' },
  { title: 'Server-side Rendering', detail: 'Render pages on the server for performance and SEO.' },
  { title: 'API Routes', detail: 'Build backend endpoints alongside frontend pages.' },
  { title: 'Static Export', detail: 'Generate a fully static site for fast delivery.' },
  { title: 'Built-in Image Optimization', detail: 'Optimize images automatically with the Image component.' },
]

function ComparisonPage() {
  return (
    <div className="main-card">
      <div className="heading">Dynamic Comparison Table</div>
      <p className="text">
        Use the comparison table component to render a variable number of columns. Pass each framework’s feature list as a separate column array.
      </p>

      <section className="detailscard">
        <h2 className="title">How to use the comparison table</h2>
        <ul className="feature">
          <li className="text">Create an array of feature items for each technology.</li>
          <li className="text">Each column receives a title and a features array.</li>
          <li className="text">The table automatically aligns rows by the longest column.</li>
        </ul>
      </section>

      <ComparisonTable
        caption="React vs Angular vs Next"
        columns={[
          { title: 'React JS', features: reactFeatures },
          { title: 'Angular JS', features: angularFeatures },
          { title: 'Next.js', features: nextFeatures },
        ]}
      />

      <div className="note-card">
        <h3 className="subtitle">Notes</h3>
        <p className="text">
          The component supports n columns. Simply add more objects to the <code>columns</code> array and the table will adjust automatically.
        </p>
      </div>
    </div>
  )
}

export default ComparisonPage
