// export default function ListItem (props) {
//     return (
//         <li>
//             {props.todo}
//         </li>
//     )
// }

import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return(
        <li>{this.props.todo}</li>
        )
    }
}