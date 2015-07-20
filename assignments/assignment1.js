App.lessons.push({
	title: "Lesson 1",
	description: "<p>This is your first lesson.</p><p>Write a javascript function which takes two arguments (a and b) and adds them. Return the value (i.e. the sum of a and b)</p>",
	runs: [
			{
				args: [1,2],
				answer: 3
			},
			{
				args: [3,3],
				answer: 6
			},
			{
				args: [10,5],
				answer: 15
			},
			{
				args: [-10,100],
				answer: 90
			},
			{
				args: [0,-2],
				answer: -2
			},
			{
				args: [-1,76],
				answer: 75
			}
		],
	answer: function (a,b) {
		return (a+b);
	},
	correct: false,
});
