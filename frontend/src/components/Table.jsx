// src/components/Table.jsx

function Table({ names }) {
  if (!names || !names.length) return (<p>no data</p>)
  const headings = Object.keys(names[0]);
  const values = names.map(e => Object.values(e))
  console.log('values:', values, 'names:', names)



  return (
    <table>
      <thead>
        <tr>
          {headings.map((e, i) => (
            <th key={i}>{e}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {names.map(({ _id, ...e }) => (
          <tr key={_id}>
            <td>{_id}</td>
            {
              Object.values(e).map((item, index) => (
                <td key={index}>{item}</td>
              ))
            }</tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;