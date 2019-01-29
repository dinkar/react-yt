import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchItems } from '../actions';


class Header extends Component {
    render() {
        return (
            <header>
                <input type="text" value={this.props.state.searchText} onChange={this.props.onInputChange}/>
                <button onClick={this.props.onClick}>Search</button>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (e) => {
            dispatch(fetchSearchItems({searchText: e.target.value}))
        },
        onClick: (e) => {
            dispatch(fetchSearchItems({searchText: 'batman'}))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);