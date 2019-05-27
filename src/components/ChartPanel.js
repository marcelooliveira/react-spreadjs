import React from 'react';

export class ChartPanel extends React.Component {
    render() {
        return (
            <div class="col-lg-4 col-md-6 col-sm-12 mt-1">
                <div class="card dashboardPanel">
                    <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <slot></slot>
                    </div>
                </div>
            </div>
        );
    }
}
