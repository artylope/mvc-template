var React = require("react");

class Home extends React.Component {
  render() {
    const studentsList = this.props.students.map((student)=>{

        var string = <div><p>{student.name}<br/>{student.email}<br/>{student.phone}</p></div>;

        return string;
    });

    console.log(this.props.students);
    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3>
          {/*<p>{this.props.students[0].name}</p>*/}
          <div>
            {studentsList}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;
