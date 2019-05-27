import React from 'react';
export class TablePanel extends React.Component {
    render() {
        return (
            <div class="col-sm-12 tablePanel">
              <div class="card dashboardRow">
                <div class="card-body">
                  <h5 class="card-title">{this.props.title}</h5>
                  <slot></slot>
                </div>
              </div>
            </div>
        );
    }
}