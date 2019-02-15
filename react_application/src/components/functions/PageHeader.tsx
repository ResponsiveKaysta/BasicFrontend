
import * as React from 'react';

import IPageHeader from '../../application/interfaces/functions/IPageHeader';

function PageHeader({ headerText, headerParagraph}: IPageHeader) {
    return (
        <>
            <header className="transparent">
                <h2>{headerText}</h2>
                <p>{headerParagraph}</p>
            </header>
        </>
    );
}

export default PageHeader;
