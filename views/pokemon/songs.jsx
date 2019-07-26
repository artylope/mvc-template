var React = require("react");

class Songs extends React.Component {
  render() {
    console.log(this.props);
    const songsList = this.props.songs.map((song)=>{

        var string = <div><p>{song.title}</p></div>;

        return string;
    });

    console.log(this.props.songs);
    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3>
          {/*<p>{this.props.students[0].name}</p>*/}
          <div>
            {songsList}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Songs;
