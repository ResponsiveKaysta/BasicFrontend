
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';
import Callback from "src/components/core/Callback";

const ArticleBanner = React.lazy(() => import('src/components/organism/ArticleBanner'));
const SectionSpotlight = React.lazy(() => import('src/components/organism/SectionSpotlight'));
const ArchiveContentList = React.lazy(() => import('src/components/ArchiveContent/ArchiveContentList'));

class PageArticles extends React.Component<IViewState, IStoreState> {

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: [] };
    }

    public render() {
        return (
            <>

                <React.Suspense key={this.props.viewContext} fallback={<Callback />}>

                    <ArticleBanner header="The latest news"
                        paragraph="some fancy text describing this page"
                        cssStyle="transparent" />
                        
                    <div>
                        <SectionSpotlight header="Spotlight"
                            paragraph="Allways use some fancy effects"
                            image="/assets/images/spotlight_planing.png"
                            cssStyle="light" />
                    </div>

                    <ArchiveContentList viewContext="light" />

                </React.Suspense>
            </>
        );
    }

}

export default PageArticles;
