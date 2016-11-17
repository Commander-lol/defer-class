module.exports = class Defer {
	constructor() {
		this.promise = new Promise((res, rej) => {
			this.resolve = res
			this.reject = rej
		})
	}
}
