var Square = React.createClass({
  render: function() {
    var className = 'square ' + this.props.color;
    return (
      <div className={className}></div>
    );
  }
});

var SquareMaker = React.createClass({
  render: function() {
    var squares = [];
    for (var i = 0; i < this.props.squareCount; i++) {
      var color = this.state.colorMap[i];
      squares.push(<Square squareNum={i} key={i} color={color}/>);
    }
    return (
      <div className="squareContainer">
        {squares}
        <button onClick={this.onLeftClick}>Rotate Left</button>
        <button onClick={this.onRightClick}>Rotate Right</button>
      </div>
    );
  },
  getInitialState: function() {
    return {
      colorMap: ['red', 'blue', 'green', 'yellow']
    };
  },
  onLeftClick: function(e) {
    var colorMap = this.state.colorMap;
    colorMap.push(colorMap.shift());
    this.setState({
      colorMap: colorMap
    });
  },
  onRightClick: function(e) {
    var colorMap = this.state.colorMap;
    colorMap.unshift(colorMap.pop());
    this.setState({
      colorMap: colorMap
    });
  },  
});

ReactDOM.render(
  <SquareMaker squareCount={4}/>,
  document.getElementById('squares')
);