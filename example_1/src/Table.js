import React, { Component } from 'react';

class Table extends Component {
    render() {
        const { list, pattern, onDismiss } = this.props
        return (
            <div>
                {list.filter(isSearched(pattern)).map(item => 
                    <div key={item.objectID}>
                        <span><a href={item.url}>{item.title}</a></span>
                        <span>{item.author}</span>
                        <span><button onclick={() => onDismiss(item.objectID)} type="button" text="button" /></span>
                    </div>
                ) }
            </div>
        )
    }
}

export default Table