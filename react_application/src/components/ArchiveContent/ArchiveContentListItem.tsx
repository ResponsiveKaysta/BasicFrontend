
import * as React from 'react';

import IArchiveContent from 'src/application/interfaces/Archive/IArchiveContent';

function ArchiveContentListItem(props: { archiveContent: IArchiveContent; }) {
    return (
        <>
            <li>{props.archiveContent.Id} - {props.archiveContent.ContentTitle}</li>
        </>
    )
}

export default ArchiveContentListItem;
