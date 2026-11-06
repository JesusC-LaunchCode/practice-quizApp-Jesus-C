export const questions = [
	{
		question: 'Which tag is best for the bulk of the page content?',
		options: ['<div>', '<main>', '<span>', '<label>'],
		correctIndex: 1,
	},
	{
		question: 'Which HTML element is used for the largest heading?',
		options: ['<heading>', '<h6>', '<h1>', '<head>'],
		correctIndex: 2,
	},
	{
		question: 'Which CSS property changes text color?',
		options: ['font-color', 'text-style', 'color', 'background-color'],
		correctIndex: 2,
	},
	{
		question: 'Which selector targets an element by id?',
		options: ['.name-input', '#name-input', 'name-input*', '@name-input'],
		correctIndex: 1,
	},
	{
		question: 'Which of these properties does NOT represent content inside an element?',
		options: ['innerText', 'innerHTML', 'textContent', 'innerContent'],
		correctIndex: 3,
	},
	{
		question: 'Which event is commonly used when a button is pressed?',
		options: ['hover', 'input', 'click', 'change'],
		correctIndex: 2,
	},
];

export const quizData = {
	quizTitle: 'Quiz about the DOM',
	questionList: questions,
};