import React from 'react';

export class ChartPanel extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 mt-1">
                <div className="card dashboardPanel">
                    <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <slot></slot>
                    </div>
                </div>
            </div>
        );
    }
}
