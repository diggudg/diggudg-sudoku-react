import React, { Component } from "react";

export default class Grid extends Component {

    render() {
        return (
            <React.Fragment>

                <div className="row">
                    <div className="d-flex justify-content-start">
                        ...
                </div>
                    <div className="d-flex justify-content-center card border-primary mb-3 ml-3 " style={{ width: 400, height: 400 }} >
                        <div className="card-header">Header</div>
                        <div className="card-body text-primary">
                            <div>
                                {
                                    [...Array(9)].map((_, rowIndex) => {
                                        return <div className="row border-bottom">
                                            {
                                                [...Array(9)].map((_, colIndex) => {
                                                    return <div className="col border-top border-left border-right" style={{ width: 5, height: 30 }}>{colIndex + 1}</div>
                                                })
                                            }
                                        </div>

                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end">...</div>
                </div>
            </React.Fragment >
        );
    }
}