class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      result: 0,
      storage: "0" };

    this.handleNum = this.handleNum.bind(this);
    this.handleOps = this.handleOps.bind(this);
    this.handleDecimals = this.handleDecimals.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.clear = this.clear.bind(this);
    this.Parse = this.Parse.bind(this);
  }
  Parse(data) {
    return Function('"use strict";return (' + data + ')')();
  }
  handleNum(e) {
    if (this.state.input == '0') {
      this.setState({
        input: e.target.value });

    } else {
      this.setState({
        input: this.state.input + e.target.value });

    }
  }

  handleOps(e) {
    let opRegex = /[+\-\*/]/;
    let noOpSplit = this.state.input.split("");
    if (opRegex.test(noOpSplit[noOpSplit.length - 1])) {
      if (noOpSplit[noOpSplit.length - 1] == '-') {
        noOpSplit.splice(noOpSplit.length - 2, 2, e.target.value);
        this.setState({
          input: noOpSplit.join("") });

      } else if (noOpSplit[noOpSplit.length - 1] != e.target.value) {
        this.setState({
          input: this.state.input + e.target.value });

      }
    } else {
      this.setState({
        input: this.state.input + e.target.value });

    }
  }

  handleDecimals(e) {
    let opRegex = /[+\-\*/]/;
    let split = this.state.input.split(opRegex);
    for (let i in split) {
      if (split[i].indexOf(e.target.value) === -1) {
        this.setState({
          input: this.state.input + e.target.value });

      } else {
        if (split[i].indexOf(e.target.value) == 1) {
          this.setState({
            input: this.state.input },
          () => {console.log(split);});
        }
      }
    }}

  handleEquals(e) {
    let split = this.state.input.split(" ");

    if (typeof this.state.input == 'string') {

      this.setState({
        input: this.Parse(this.state.input),
        result: this.Parse(this.state.input) },
      () => {
        return (
          this.setState({
            input: this.state.input.toString() }));

      });
    };

  }
  afterEquals() {
    this.setState({
      input: this.state.input.toString() });

  }
  handleBack() {
    if (this.state.input.substring(this.state.input.length - 1) != 0 || this.state.input.length - 1 != 0) {
      if (this.state.input.substring(this.state.input.length - 1) == " ") {
        this.setState({
          input: this.state.input.slice(0, -2) });

      } else {
        this.setState({
          input: this.state.input.slice(0, -1) });

      }
    }
  }
  clear(event) {
    this.setState({
      input: "0",
      result: "0" });

  }
  render() {
    return (

      React.createElement("div", { id: "container" },

      React.createElement("div", { id: "calculator" },
      React.createElement("div", { id: "display", class: "display-bottom-text" },
      React.createElement("div", { id: "display-bottom-text" },
      this.state.input)),


      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "col-6" },
      React.createElement("button", { id: "clear", class: "btn btn-block", onClick: this.clear }, "AC")),


      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "divide", class: "btn btn-block", value: "/", onClick: this.handleOps }, "/")),


      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "backspace", class: "btn btn-block", onClick: this.handleBack }, "Back"))),



      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "seven", value: "7", class: "btn btn-block", onClick: this.handleNum }, "7")),


      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "eight", value: "8", class: "btn btn-block", onClick: this.handleNum }, "8")),


      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "nine", value: "9", class: "btn btn-block", onClick: this.handleNum }, "9")),


      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "multiply", value: "*", class: "btn btn-block", onClick: this.handleOps }, "*"))),



      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "four", value: "4", class: "btn btn-block", onClick: this.handleNum }, "4")),


      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "five", value: "5", class: "btn btn-block", onClick: this.handleNum }, "5")),


      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "six", value: "6", class: "btn btn-block", onClick: this.handleNum }, "6")),



      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "subtract", value: "-", class: "btn btn-block", onClick: this.handleOps }, "-"))),



      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "one", value: "1", class: "btn btn-block", onClick: this.handleNum }, "1")),


      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "two", value: "2", class: "btn btn-block", onClick: this.handleNum }, "2")),


      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "three", value: "3", class: "btn btn-block", onClick: this.handleNum }, "3")),


      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "add", value: "+", class: "btn btn-block", onClick: this.handleOps }, "+"))),



      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "col-6" },
      React.createElement("button", { id: "zero", value: "0", class: "btn btn-block", onClick: this.handleNum }, "0")),


      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "decimal", value: ".", class: "btn btn-block", onClick: this.handleDecimals }, ".")),


      React.createElement("div", { class: "col-3" },
      React.createElement("button", { id: "equals", value: "=", class: "btn btn-block", onClick: this.handleEquals }, "="))),


      React.createElement("div", { id: "credit" }, "by ",
      React.createElement("a", { href: "https://codepen.io/Busterfreeze/" }, "Zac L.")))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));