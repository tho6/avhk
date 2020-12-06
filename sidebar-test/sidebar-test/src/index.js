// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';
// import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';

// import Navigation from './Navigation';
import NavBar from './components/NavBar';
// import Breadcrumb from './Breadcrumb';
// import Loader from "../Loader";
// import routes from "../../../routes";
// import Aux from "../../../hoc/_Aux";
import Aux from './hoc/_Aux';
// import * as actionTypes from "../../../store/actions";

import './app.scss';

class AdminLayout extends Component {

    fullScreenExitHandler = () => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            this.props.onFullScreenExit();
        }
    };

    componentWillMount() {
        if (this.props.windowWidth > 992 && this.props.windowWidth <= 1024 && this.props.layout !== 'horizontal') {
            this.props.onComponentWillMount();
        }
    }

    mobileOutClickHandler() {
        if (this.props.windowWidth < 992 && this.props.collapseMenu) {
            this.props.onComponentWillMount();
        }
    }

    render() {

        /* full screen exit call */
        document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);

        // const menu = routes.map((route, index) => {
        //     return (route.component) ? (
        //         <Route
        //             key={index}
        //             path={route.path}
        //             exact={route.exact}
        //             name={route.name}
        //             render={props => (
        //                 <route.component {...props} />
        //             )} />
        //     ) : (null);
        // });

        return (
            <Aux>
                <Fullscreen enabled={this.props.isFullScreen}>
                    {/* <Navigation /> */}
                    <NavBar />
                    <div className="pcoded-main-container" onClick={() => this.mobileOutClickHandler}>
                        <div className="pcoded-wrapper">
                            <div className="pcoded-content">
                                <div className="pcoded-inner-content">
                                    {/* <Breadcrumb /> */}
                                    <div className="main-body">
                                        <div className="page-wrapper">
                                            {/* <Suspense fallback={<Loader/>}> */}
                                                <Switch>
                                                    {/* {menu} */}
                                                    <Redirect from="/" to={this.props.defaultPath} />
                                                </Switch>
                                            {/* </Suspense> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fullscreen>
            </Aux>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         defaultPath: state.defaultPath,
//         isFullScreen: state.isFullScreen,
//         collapseMenu: state.collapseMenu,
//         configBlock: state.configBlock,
//         layout: state.layout
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onFullScreenExit: () => dispatch({type: actionTypes.FULL_SCREEN_EXIT}),
//         onComponentWillMount: () => dispatch({type: actionTypes.COLLAPSE_MENU})
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps) (windowSize(AdminLayout));
export default AdminLayout;