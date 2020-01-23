/**
 * Non-public global class to handle the "default" Reachability instance to global use
 */
class ReachabilityManager {
	_defaultReachability = null;
	register(_ref) {
		if (!this._defaultReachability && "_id" in _ref) {
			this._defaultReachability = _ref;
		}
	}
	unregister(_ref) {
		if (
			!!this._defaultReachability &&
			this._defaultReachability._id === _ref._id
		) {
			this._defaultReachability = null;
		}
	}
	getDefault() {
		return this._defaultReachability;
	}
}

export default new ReachabilityManager();
