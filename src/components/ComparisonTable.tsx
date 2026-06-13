export type ComparisonFeature = {
  title: string
  detail?: string
}

export type ComparisonColumn = {
  title: string
  features: ComparisonFeature[]
}

export interface ComparisonTableProps {
  columns: ComparisonColumn[]
  caption?: string
  noResultsMessage?: string
}

function ComparisonTable({ columns, caption, noResultsMessage }: ComparisonTableProps) {
  if (!columns || columns.length === 0) {
    return (
      <div className="note-card">
        <p className="strongtext">No comparison columns were provided.</p>
        <p className="text">Provide at least one column array to render the comparison table.</p>
      </div>
    )
  }

  const rowCount = Math.max(...columns.map((column) => column.features.length))

  return (
    <div className="detailscard">
      {/* {caption && <p className="subtitle">{caption}</p>} */}
      <table className="difference-table">
        <caption>{caption ?? 'Comparison table'}</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.title}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowCount }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => {
                const feature = column.features[rowIndex]
                return (
                  <td key={`${column.title}-${rowIndex}`}>
                    {feature ? (
                      <div className="difference-card-show">
                        <p className="feature"><strong>{feature.title}</strong></p>
                        {feature.detail && <p className="text">{feature.detail}</p>}
                      </div>
                    ) : (
                      <p className="subtext">No feature provided</p>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable
