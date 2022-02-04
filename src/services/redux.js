export function mapStateToProps(state) {
    return {
        firebaseReducer: state.firebase.auth,
        auth: state.auth,
        settings: state.settings,
        myBooks: state.books
    };
}