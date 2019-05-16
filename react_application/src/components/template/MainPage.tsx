
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';
import Callback from 'src/components/core/Callback';

const PageHome = React.lazy(() => import('src/components/composition/PageHome'));
const PageStuff = React.lazy(() => import('src/components/composition/PageStuff'));
const PageArticles = React.lazy(() => import('src/components/composition/PageArticles'));

class MainPage extends React.Component<IViewState, IStoreState> {

    private component: any;

    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: this.props.viewContainer };
    }

    public async componentWillMount() {

        if (this.state.storeContext === "PageHomeContext") {
            this.component = <PageHome viewContext={this.state.storeContext} />;
        }
        else if (this.state.storeContext === "PageStuffContext") {
            this.component = <PageStuff viewContext={this.state.storeContext} />;
        }
        else if (this.state.storeContext === "PageArticlesContext") {
            this.component = <PageArticles viewContext={this.state.storeContext} />;
        }
        
        return true;
    }

    public async componentDidMount() {
        // some things to do
    }

    public render() {
        return (
            <>
                <React.Suspense fallback={<Callback />}>
                    {this.component}
                </React.Suspense>
            </>
        );
    }
}

export default MainPage;
