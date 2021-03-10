import MCDatepicker from '../src/js/mc-calendar';
import './style.css';

window.MCDatepicker = MCDatepicker;

const firstDatePicker = MCDatepicker.create({
	el: '#datepicker_one',
	bodyType: 'inline',
	dateFormat: 'dddd, dd mmmm yyyy',
	disableDates: [new Date(2021, 1, 12), new Date(2021, 3, 15)],
	customWeekDays: ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'],
	customMonths: [
		'Ianuarie',
		'Februarie',
		'Martie',
		'Aprilie',
		'Mai',
		'Iunie',
		'Iulie',
		'August',
		'Septembrie',
		'Octombrie',
		'Noiembrie',
		'Decembrie'
	],
	firstWeekday: 1,
	markDates: [new Date(2021, 2, 21), new Date(2021, 3, 1)]
});

firstDatePicker.onSelect((date) => console.log('this is onSelect method'));
firstDatePicker.onSelect((date) => console.log(date));

const secundDatePicker = MCDatepicker.create({
	el: '#datepicker_two',
	bodyType: 'modal',
	showCalendarDisplay: false
});
const thirdDatePicker = MCDatepicker.create({ el: '#datepicker_three', bodyType: 'permanent' });