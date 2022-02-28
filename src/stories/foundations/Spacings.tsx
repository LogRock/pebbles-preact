import { FunctionalComponent, h } from "preact";
import { useContext } from "preact/hooks";
import styled, { ThemeContext } from "styled-components";

const Table = styled.table`
  text-align: left;

  th,
  td {
    padding: 4px;
  }
`;

const Spacings: FunctionalComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <Table>
      <tr>
        <th>Name</th>
        <th>Size</th>
        <th>Example</th>
      </tr>
      {Object.keys(theme.spacings).map((spacing) => (
        <tr key={spacing}>
          <td>{spacing}</td>
          <td>{theme.spacings[spacing]}</td>
          <td>
            <div
              style={{
                background: theme.colors.primary["400"],
                width: theme.spacings[spacing],
                height: 20,
              }}
            />
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default Spacings;
