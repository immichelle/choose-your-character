import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export class Pick extends Component {
    handleChoose = (item) => {
        this.props.onChooseItem(item)
    }
    render() {
        return (
            <div>
                <h1>
                    Choose your character
                </h1>
                {this.props.url.map(member =>
                   <div>
                   <img key={member.id} src={member.url}/>
                    <Button onClick={() => this.handleChoose(member)}>Choose</Button>
                    </div>
                    )}

            </div>
        )
    }
}

export default Pick
