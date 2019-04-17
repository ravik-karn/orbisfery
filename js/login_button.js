'use strict';

const e = React.createElement;

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false};
    }

    render() {
        return e(
            'span',
            {onClick: () => this.setState({loggedIn: !this.state.loggedIn})},
            this.state.loggedIn ? 'Logout' : 'Corporate login'
        );
    }
}

const domContainer = document.querySelector('#login_button_container');
ReactDOM.render(e(LoginButton), domContainer);
