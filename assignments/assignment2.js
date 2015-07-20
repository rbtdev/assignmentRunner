App.lessons.push({
	title: "Lesson 2",
	description: "This is the second lesson you will have. More details here",
	runs: [],
	checkResponse: function (response, answer) {
		this.correct = (response === answer)
	},
	correct: false,
});