import React, { Component, Fragment } from 'react';
import './index.scss';

class Card extends React.Component {
    render(props) {
        let title = this.props.title;
        let content = this.props.content;
        return (
            <Fragment>
                <div className="title">{title}</div>
                <div className="card-content">{content}</div>
            </Fragment>
        );
    }
}

export default Card;
