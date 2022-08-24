export const request = async () => fetch(
	'https://my-dev-post-back.herokuapp.com/echo',
	{
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'false'
		}
	}
)
	.then((data) => data.json()
		.then((data) => data));
