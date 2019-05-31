import React from 'react';

export function ChartPanel(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mt-1">
            <div className="card dashboardPanel">
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                {props.children}
                </div>
            </div>
        </div>
    );
}
