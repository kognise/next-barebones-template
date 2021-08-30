module.exports = {
	headers: async () => [
		{
			source: '/:anything*',
			headers: [
				{
					key: 'X-Clacks-Overhead',
					value: 'GNU Terry Pratchett'
				}
			]
		}
	]
}
