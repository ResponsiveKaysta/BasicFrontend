
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

const ArticleBanner = React.lazy(() => import('src/components/organism/ArticleBanner'));
const EyeCatcher = React.lazy(() => import('src/components/organism/EyeCatcher'));
const SomeLoremContent = React.lazy(() => import('src/components/organism/SectionSomeLoremContent'));
const TopSpotlight = React.lazy(() => import('src/components/organism/SectionSpotlight'));

class PageHome extends React.Component<IViewState, IStoreState> {

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: [] };
    }

    public async componentWillMount() {

        // tslint:disable-next-line: no-console
        console.log("PageHome: componentWillMount");
        return true;
    }

    public async componentDidMount() {

        // tslint:disable-next-line: no-console
        console.log("PageHome: componentDidMount");
        return true;
    }

    public render() {
        return (
            <>
                <React.Suspense fallback={<>Loading...</>}>

                    <ArticleBanner header="welcome home"
                        paragraph="some fancy text describing this page"
                        cssStyle="transparent" />

                    <div>
                        <TopSpotlight header="Spotlight"
                            paragraph="Allways use some fancy effects"
                            image="/assets/images/spotlight_planing.png"
                            cssStyle="light" />
                    </div>
                    
                    <SomeLoremContent header="Lorem Content 1" cssStyle="light" />

                    <EyeCatcher header="Eye-Catcher" paragraph="some fancy eye-catcher" cssStyle="green" />

                    <SomeLoremContent header="Lorem Content 2" cssStyle="light" />

                </React.Suspense>
            </>
        );
    }

}

export default PageHome;
