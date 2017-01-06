var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },

  // componentWillMount: function () {
  //   console.log('componentWillMount')
  // },

  componentDidMount: function () {
    // console.log('componentDidMount')
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        // console.log('PLAYERS', players)
        this.setState({
          isLoading: false,
          playerInfo: [players[0], players[1]]
        })
      }.bind(this))
    // fetch info from github and then update state
  },

  // componentWillReceiveProps: function () {
  //   console.log('componentWillReceiveProps')
  // },

  // componentWillUnmount: function () {
  //   console.log('componentWillUnmount');
  // },

  render: function() {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo}
      />
    )
  }
});

module.exports = ConfirmBattleContainer;
