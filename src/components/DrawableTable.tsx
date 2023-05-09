import { useState } from "react"
import './DrawableTable.css'

type Item = {
  id: number;
  name: string;
  email: string;
  phone: string;
}

type Header = {
  heading: string;
  value: string;
}

type itemKeyType = keyof Item
type clipsKeyType = keyof TwitchClip

type TwitchClip = {
  broadcaster_id: string,
  broadcaster_name: string,
  created_at: string,
  creator_id: string,
  creator_name: string,
  duration: string,
  embed_url: string,
  game_id: string,
  id: string,
  language: string,
  thumbnail_url: string,
  tle: string,
  url: string,
  video_id: string,
  view_count: number,
  vod_offset: number,
}

type DrawableTableProps = {
  clips: TwitchClip[]
}

function DrawableTable({ clips }: DrawableTableProps) {
  const [drawer, toggleDrawer] = useState(false);

  const dataList = [
    { name: 'Rodrigo', email: 'rodrigo@example.com', phone: '123456789' },
  ];

  const headersList: Header[] = [
    { heading: 'ID', value: 'id' },
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
  ];

  const items: Item[] = [
    { id: 1, name: 'rodrigo', email: 'rodrigo@gmail.com', phone: '51 1' },
    { id: 2, name: 'gabriela', email: 'gabriela@gmail.com', phone: '51 2' },
    { id: 3, name: 'jorge', email: 'jorge@gmail.com', phone: '51 3' },
    { id: 4, name: 'sirlei', email: 'sirlei@gmail.com', phone: '51 4' },
  ];

  return (
    <table>
      <TableHeader headers={headersList} />
      <TableBody headers={headersList} items={clips} />
    </table>
  );
}

type TableHeaderProps = {
  headers: Header[]
}

function TableHeader({ headers }: TableHeaderProps): JSX.Element {
  console.log('headers', headers);
  return (
    <thead>
      <tr>
        {headers.map(({ heading, value }: Header) => (
          <th key={value}>{heading}</th>
        ))}
      </tr>
    </thead>
  );
}

type TableBodyProps = {
  headers: Header[]
  items: TwitchClip[]
}

function TableBody({ headers, items }: TableBodyProps): JSX.Element {
  return (
    <tbody>
      {
        items.map(item => (
          <tr key={item.id}>
            {headers.map(header => (
              <th key={`${item.id}_${header.heading}`}>
                {item[header.value as clipsKeyType]}

              </th>
            ))}
          </tr>
        ))
      }
    </tbody>
  );
}



export default DrawableTable