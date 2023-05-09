type CustomTableHeaderProps = {
  headers: TwitchClipHeadersType[]
}


function CustomTableHeader({ headers }: CustomTableHeaderProps) {
  return (
    <thead>
      <tr>
        {
          headers.map(header => (
            <td key={header.key}>{header.value}</td>
          ))
        }
      </tr>
    </thead>
  );
}

export default CustomTableHeader