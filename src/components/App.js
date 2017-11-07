import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Missing from './Missing';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.getNavActions = this.getNavActions.bind(this);
        this.getNavAction = this.getNavAction.bind(this);
    }

    state = {
        sectionName: 'Home',
        activeAction: 0,
        activeComponent: <Home />
    };

    handleNavAction(action) {
        try {
            var act = this.getNavAction(action);

            if (!act) {
                act = {
                    activeAction: -1,
                    sectionName: 'Missing',
                    activeComponent: <Missing />
                }
            }

            if (this.state.sectionName === act.sectionName) {
                return;
            }

            this.setState(act);
        }
        catch(ex) {
            throw new DOMException(ex);
        }
    };

    getNavActions() {
        return [
            {
                activeAction: 0,
                sectionName: 'Home',
                activeComponent: <Home />
            },
            {
                activeAction: 1,
                sectionName: 'About',
                activeComponent: <About />
            }
        ];
    };

    getNavAction(value, useAction = true) {
        var action = null;

        if (useAction) {
            action = this.getNavActions().find(x => x.activeAction == value)
        }
        else {
            action = this.getNavActions().find(x => x.sectionName === value);
        }

        if (!action) {
            action = {
                activeAction: -1,
                sectionName: value,
                activeComponent: <Missing />
            }
        }

        return action;
    };

    componentWillMount() {
      var section = this.props.location.pathname.replace('/','');
      
      if (section == '') {
          section = 'Home';
      }

      this.setState(this.getNavAction(section, false));
    };

    render() {
        return (
            <div className="App">
                <div className="container-fluid no-padding">
                    <div className="HeaderContainer row no-margin">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                            <div className="row no-margin">
                                <div className="HeaderIconPadding h2">
                                    <span className="HeaderIcon glyphicon glyphicon-folder-open"></span>
                                    <span className="HeaderIconPadding">Test</span>

                                    <h5 className="NavLinkContainer">
                                        <Link className="NavLink" to="/Home" onClick={this.handleNavAction.bind(this, 0)}>Home</Link>
                                        <Link className="NavLink" to="/About" onClick={this.handleNavAction.bind(this, 1)}>About</Link>
                                        <Link className="NavLink" to="/Test" onClick={this.handleNavAction.bind(this, -1)}>Bad Link</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.activeComponent}

                <div className="container-fluid no-padding">
                    <div className="FooterContainer row no-margin">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                            <div className="FooterPadding row no-margin">
                                <div className="FooterContent text-center">John Greaux - 2017</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;