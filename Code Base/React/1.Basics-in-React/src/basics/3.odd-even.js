import { Component } from "react";

class OddEvenComponent extends Component{
    render(){
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

        return(
            <ul>
                {
                    array.map((number) => {
                        return <li>{number} is {number % 2 == 0 ? 'even' : 'odd'}</li>
                    })
                }
            </ul>
        )
    }
}

export default OddEvenComponent