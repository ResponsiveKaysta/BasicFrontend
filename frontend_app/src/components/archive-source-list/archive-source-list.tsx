import * as React from "react";
import ArchiveSourceListItem from "./archive-source-list-item";
import iArchiveSourceListItemProps from "./spec/iArchiveSourceListItemProps";
import iArchiveSourceProps from "./spec/iArchiveSourceListProps";

class ArchiveSourceList extends React.Component<iArchiveSourceProps> {
  public render() {
    const pageStyle = this.props.pageStyle
      ? this.props.pageStyle + " table-wrapper"
      : "light table-wrapper";

    const mappedTodos = this.props.dataContainer.map(
      (source: iArchiveSourceListItemProps) => {
        return <ArchiveSourceListItem archiveSource={source} key={source.Id} />;
      }
    );
    return this.ListContainer(mappedTodos, pageStyle);
  }

  private ListContainer(list: any, pageStyle: string) {
    return (
      <div className={pageStyle}>
        <table>
          <thead>
            <tr>
              <td>Source Id</td>
              <td>Source Name</td>
              <td>ArticleCount</td>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }
}

export default ArchiveSourceList;
