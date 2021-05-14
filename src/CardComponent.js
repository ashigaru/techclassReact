import React, { Component } from 'react'
import { Card } from 'antd';
import './CardComponent.css';
import classNames from 'classnames';

export default class CardComponent extends Component {

    state = {
        cards: [
            {
                title: "Item 1",
                visible: true,
                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.`,
            },
            {
                title: "Item 2",
                visible: true,
                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.`,
            },
            {
                title: "Item 3",
                visible: true,
                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.`,
            },
        ],
    };


    closeCard(index) {
        const newState = { ...this.state };
        newState.cards[index].visible = false;
        this.setState(newState);
    }

    renderCard(card, index) {
        return (
            <Card className={classNames("card", { hidden: !card.visible })} title={card.title}>
                <p>{card.content}</p>
                <button className='deleteCardButton' onClick={() => this.closeCard(index)}>
                    Delete
                    </button>
            </Card >
        );
    }

    render() {
        const { cards } = this.state;
        return <div className="container">{cards.map(this.renderCard.bind(this))}</div>;
    }
}
