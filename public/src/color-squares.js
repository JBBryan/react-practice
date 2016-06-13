var Square = React.createClass({
  render: function() {
    var className = 'square ' + this.colorMap[this.props.squareNum];
    return (
      <div className={className}></div>
    );
  },
  colorMap: ['red', 'blue', 'green', 'yellow']
});

var SquareMaker = React.createClass({
  render: function() {
    var squares = [];
    for (var i = 0; i < this.props.squareCount; i++) {
      squares.push(<Square squareNum={i} key={i}/>);
    }
    return (
      <div className="squareContainer">{squares}</div>
    );
  }
});

ReactDOM.render(
  <SquareMaker squareCount={4}/>,
  document.getElementById('squares')
);