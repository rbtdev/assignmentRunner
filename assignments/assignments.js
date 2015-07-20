var App = {
	initialize: function () {
		var assignmentsDiv = document.getElementById('assignments');
		assignmentsDiv.setAttribute('class', 'assignments');
		var assignmentsTitleDiv = document.createElement('div');
		assignmentsTitleDiv.setAttribute('class', 'title');
		assignmentsDiv.appendChild(assignmentsTitleDiv);
		assignmentsTitleDiv.innerHTML = "These are your assignments.";
		App.runTests(assignmentsDiv);
	},

	runTests: function (assignmentsDiv) {

		var runLesson = function (lesson) {

				var runTest = function (run, caseNumber) {
					var runDiv = document.createElement('div');
					runDiv.setAttribute('class', 'run');
					runDiv.innerHTML = "Test Case #" + caseNumber + "<br>";
					var response = null;
					var html = "Passing " + run.args.toString() + "; Returned ";
					try {
						response = lesson.response.apply(this, run.args)
						runDiv.innerHTML += html + response;
					}
					catch (e) {
						runDiv.innerHTML += html + e.stack;
					}
					runDiv.innerHTML += "; Expected " + run.answer
					var correct = (lesson.checkResponse(response,run.answer));
					runDiv.innerHTML += "; ";
					if (correct) {
						runDiv.innerHTML += "Correct!";
						lesson.score ++;
					}
					else {
						runDiv.innerHTML += "Wrong!";
					}
					runDiv.innerHTML += "</br>"

					summaryDiv.innerHTML = ((lesson.score/lesson.runs.length) * 100).toFixed(2) + "%";
					responseDiv.appendChild(runDiv);	
				}

			var lessonDiv = document.createElement('div')
			lessonDiv.setAttribute('class', 'lesson');
			var titleDiv = document.createElement('div')
			titleDiv.setAttribute('class', 'title');
			var descriptionDiv = document.createElement('div')
			descriptionDiv.setAttribute('class', 'description');

			titleDiv.innerHTML = lesson.title;
			descriptionDiv.innerHTML = lesson.description;

			lessonDiv.appendChild(titleDiv);
			lessonDiv.appendChild(descriptionDiv);
			assignmentsDiv.appendChild(lessonDiv);

			if (lesson.response) {
				var responseDiv = document.createElement('div');
				responseDiv.setAttribute('class', 'response');
				var summaryDiv = document.createElement('div');
				summaryDiv.setAttribute('class', 'summary');
				lessonDiv.appendChild(responseDiv);
				lessonDiv.appendChild(summaryDiv);
				lesson.score = 0;
				lesson.runs.forEach(runTest);
			}
		}

		App.lessons.forEach(runLesson)
	},
	
	lessons: [],
	
	response: function (response) {
		var scripts = document.getElementsByTagName('script');
		var lastScript = scripts[scripts.length-1];
		var scriptName = lastScript.src;
		var lessonNumber = scriptName[scriptName.length-4]
		var lesson = parseInt(lessonNumber);
		App.lessons[lesson-1].response = response;
	}
};
window.onload = App.initialize;

