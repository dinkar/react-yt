import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchItems } from '../actions';


class Header extends Component {
    render() {
        return (
            <header>
                <div>React YouTube</div>
                <div>This is the header component.</div>
                <button onClick={this.props.onClick}>Search</button>
            </header>
        );
    }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(fetchSearchItems({searchText: 'batman'}))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);