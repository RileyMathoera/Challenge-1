console.log('Hello World!');

/*------------------------------FOOD--------------------------------------------*/

const labels = [
    'bread',
    'salad',
    'chicken',
    'cheese',
]

const data = {
	labels: labels,
	datasets: [{
		label: 'Food supplies',
		backgroundColor: [ 
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
		borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)'
        ],
		data: [1000, 750, 1200, 500],
	}]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

/*------------------------------FUEL--------------------------------------------*/

const labels2 = [
    'Available',
    'Used',
]

const data2 = {
	labels: labels2,
	datasets: [{
		label: 'Fuel Indicator',
		backgroundColor: [ 
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
		borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)'
        ],
		data: [2000, 500],
	}]
};

const config2 = {
    type: 'doughnut',
    data: data2,
    options: {}
};


/*-------------------------------ACTIVITY---------------------------------------------*/

const labels3 = [
    'Awake',
    'Asleep',
]

const data3 = {
	labels: labels3,
	datasets: [{
		label: 'Activity',
		backgroundColor: [ 
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
		borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)'
        ],
		data: [25, 75],
	}]
};

const config3 = {
    type: 'polarArea',
    data: data3,
    options: {}
};

/*-----------------------------------------------------------------------------------*/

const myChart = new Chart(
	document.getElementById('myChart', /*'myChart2', 'myChart3'*/),
	config
	);

    const myChart2 = new Chart(
        document.getElementById(/*'myChart',*/'myChart2', /*'myChart3'*/),
        config2
        );

    const myChart3 = new Chart(
        document.getElementById(/*'myChart','myChart2', */'myChart3'),
        config3
        );
    