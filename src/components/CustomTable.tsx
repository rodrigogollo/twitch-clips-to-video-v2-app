import CustomTableBody from "./CustomTableBody";
import CustomTableHeader from "./CustomTableHeader";
import './DrawableTable.css'

type CustomTableProps = {
  items: TwitchClip[];
  headers: TwitchClipHeadersType[];
}

function CustomTable({ headers, items }: CustomTableProps) {
  return (
    <table>
      <CustomTableHeader headers={headers} />
      <CustomTableBody headers={headers} items={items} />
    </table>
  )
}

export default CustomTable