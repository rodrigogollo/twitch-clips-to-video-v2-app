import { FC, useState } from "react"
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

function DrawableTable() {
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
      <TableBody headers={headersList} items={items} />
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
  items: Item[]
}

function TableBody({ headers, items }: TableBodyProps): JSX.Element {
  return (
    <tbody>
      {
        items.map(item => (
          <tr key={item.id}>
            {headers.map(header => (
              <th key={`${item.id}_${header.heading}`}>
                {item[header.value as itemKeyType]}

              </th>
            ))}
          </tr>
        ))
      }
    </tbody>
  );
}



export default DrawableTable