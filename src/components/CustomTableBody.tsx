
type CustomTableBodyProps = {
  headers: TwitchClipHeadersType[]
  items: TwitchClip[]
}

type clipsKeyType = keyof TwitchClip


function CustomTableBody({ headers, items }: CustomTableBodyProps) {
  return (
    <tbody>
      {
        items.map(item => (
          <tr key={item.id}>
            {headers.map(header => (
              <th key={`${item.id}_${header.key}`}>
                {item[header.value as clipsKeyType]}
              </th>
            ))}
          </tr>
        ))
      }
    </tbody>
  );
}

export default CustomTableBody
