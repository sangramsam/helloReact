import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    render() {
        let txt=this.props.txt
        return (
            <div>

                <h2>{this.props.txt}</h2>
                <b> variable props{txt}</b>
                <b> {this.props.cat}</b>
            </div>
        )
    }
}
App.propTypes={
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}
App.defaultProps={
    txt:"this is a default prop"
}
ReactDOM.render(
    <App cat={5} />,
    document.getElementById('app')
)
/*const App=() => <h1>Hello Eggheads </h1>*/
export default  App