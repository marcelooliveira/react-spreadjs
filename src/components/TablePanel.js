import React from 'react';
export function TablePanel(props) {
    return (
        <div className="col-sm-12 tablePanel">
            <div className="card dashboardRow">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    {props.children}
                </div>
            </div>
        </div>
    );
}