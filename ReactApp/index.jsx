class PowComponent extends React.Component {
    render() {
        return <div><h2><b>Выражение: {this.props.m}<sup>{this.props.n}</sup> = {Math.pow(this.props.m, this.props.n)}</b></h2></div>;
    }
}

class RectComponent extends React.Component
{
    render(){
        return <div style = {{width : this.props.m, height : this.props.m, backgroundColor : this.props.n}}></div>
    }

}

class Container extends React.Component
{
    render(){
       return <div>
        <PowComponent m={2} n={3} />
        <RectComponent m={"440px"} n= "#6deda0" />
        </div>
    }
}

ReactDOM.render(
    <Container/>,
    document.getElementById("power")
)