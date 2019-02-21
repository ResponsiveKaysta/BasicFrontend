
import * as React from 'react';

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

class SectionSomeLoremContent extends React.Component<IViewState, IStoreState> {
    
    constructor(props: IViewState, state: IStoreState) {
        super(props, state);
        this.state = { storeContext: this.props.viewContext, storeContainer: this.props.viewContainer };
    }

    public render() {

        const currentContext = 'SectionSomeLoremContent - ' + this.state.storeContext;

        return (
            <>
                <section className="light">
                        <div className="container">
                            <div className="row clearfix">
                                <div className="pahe-header">
                                    <h2>{currentContext}</h2>
                                </div>
                                <p className="lead">
                                    Pellentesque placerat commodo libero, ut tincidunt lacus volutpat vel. Phasellus nec porta sem. Donec a nisi tincidunt, ornare ligula in, pharetra purus. Nulla cursus mauris id dolor luctus eleifend. Etiam non justo eleifend, sagittis ligula non, faucibus tellus. Fusce sagittis imperdiet magna a ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat.
                                    </p>
                                <p className="paragraph">
                                    Duis eget lorem faucibus, ultrices enim eget, imperdiet lorem. Nam a rutrum odio. Donec commodo eros vel congue dapibus. Quisque pharetra justo leo, nec convallis leo suscipit vel. Fusce auctor sapien at nunc fringilla lacinia. Suspendisse id erat vel lorem mattis malesuada. Sed quam eros, ultrices id vestibulum rhoncus, tempor laoreet est. Phasellus orci nibh, consectetur in ante sit amet, maximus euismod sem.
                                    </p>
                                <p className="paragraph">
                                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc commodo laoreet turpis a ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed scelerisque nisi consequat nunc porttitor sagittis. Proin tempor venenatis quam non vehicula. Praesent interdum pulvinar dapibus. Nunc malesuada augue fermentum nunc auctor dapibus.
                                    </p>
                            </div>
                        </div>
                    </section>
            </>
        );
    }

}

export default SectionSomeLoremContent;
