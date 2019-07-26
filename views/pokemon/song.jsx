var React = require("react");

class Song extends React.Component {
  render() {
    console.log(this.props);
    // const songsList = this.props.songs.map((song)=>{
    //
    //     var string = <div><p>{song.title}</p></div>;
    //
    //     return string;
    // });

    console.log(this.props.songs);
    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3>
          {/*<p>{this.props.students[0].name}</p>*/}
          <div>
            {this.props.song.id}<br/>
            {this.props.song.title}<br/>
            {this.props.song.album}<br/>
            {this.props.song.preview_link}<br/>
            {this.props.song.artist_id}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Song;
