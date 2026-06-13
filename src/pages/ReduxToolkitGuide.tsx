function ReduxToolkitGuide() {
  return (
    <div className="example-card">
      <h2>Redux Toolkit Guide</h2>
      <p>Redux Toolkit streamlines Redux setup with slices, configureStore, and built-in immutability.</p>
      <ul>
        <li>Create a <code>slice</code> with reducers and actions.</li>
        <li>Use <code>configureStore</code> to combine reducers.</li>
        <li>Read state with <code>useSelector</code> and dispatch actions with <code>useDispatch</code>.</li>
      </ul>
    </div>
  )
}

export default ReduxToolkitGuide
