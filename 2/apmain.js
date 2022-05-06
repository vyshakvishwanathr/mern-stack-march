class App extends React.Component {
    render() {
      return (
        <button
          type="submit"
          onClick={() => {
            alert("clicked");
          }}
        >
          SUBMIT
        </button>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById("root"));