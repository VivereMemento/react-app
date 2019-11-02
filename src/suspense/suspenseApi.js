const wrapPromise = (promise) => {
	let status = 'pending';
	let result = '';
	const suspender = promise.then(
		(r) => {
			status = 'success';
			result = r;
		},
		(e) => {
			status = 'error';
			result = e;
		}
	);

	return {
		read() {
			if (status === 'pending') {
				throw suspender;
			} else if (status === 'error') {
				throw result;
			}

			return result;
		}
	};
};

const randomNumber = () => new Promise(res => setTimeout(() => res(Math.random()), 3000));
const createResource = () => ({
	num: wrapPromise(randomNumber())
});

export default createResource;
