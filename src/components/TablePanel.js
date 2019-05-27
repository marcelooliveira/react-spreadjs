import React from 'react';
export class TablePanel extends React.Component {
    render() {
        return (
            <div className="col-sm-12 tablePanel">
              <div className="card dashboardRow">
                <div className="card-body">
                  <h5 className="card-title">{this.props.title}</h5>
                  <slot></slot>
                </div>
              </div>
            </div>
        );
    }
}