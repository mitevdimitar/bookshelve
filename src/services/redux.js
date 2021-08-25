export function mapStateToProps(state) {
    return {
        firebase: state.firebase.auth,
        auth: state.auth,
        settings: state.settings
    };
}