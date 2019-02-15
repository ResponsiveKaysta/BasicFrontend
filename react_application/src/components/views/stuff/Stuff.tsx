
import * as React from 'react';

import PageHeader from '../../viewContentParts/PageHeader';
import StateFullHello from '../../viewParts/StateFullHello';

class Stuff extends React.Component {
    public render() {
        return (

            <div>

                <PageHeader
                    headerText="some stuff text"
                    headerParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    enthusiasmLevel={3} />

                <div className="light">

                    <section className="spotlight equal">
                        <div className="image">
                            <img className="wide" src="/assets/images/spotlight_planing.png" alt="Brains and engineering" />
                        </div>
                        <div className="content">
                            
                        <StateFullHello languageName="Some TypeScript" enthusiasmLevel={3} />

                        </div>
                    </section>

                    <section>
                        <div className="grid-section">
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-md-12">

                                        <div className="pahe-header">
                                            <h2>some page-header stuff</h2>
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
                            </div>
                        </div>
                    </section>

                </div>

            </div>

        );
    }
}

export default Stuff;