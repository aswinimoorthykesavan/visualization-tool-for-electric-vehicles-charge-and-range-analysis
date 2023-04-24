google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() 
{
var data = new google.visualization.DataTable();
data.addColumn('string', 'From');
data.addColumn('string', 'To');
data.addColumn('number', 'Installed');
data.addRows([
[ 'Public Chargers', 'China',275000],
[ 'Public Chargers', 'U.S.A.',54500],
[ 'Public Chargers', 'Japan',29971],
[ 'Public Chargers', 'E.U.',118584],
[ 'Public Chargers', 'Korea',9304],
[ 'Public Chargers', 'Canada',7940],
[ 'Public Chargers', 'Others',30885],
[ 'China', 'Slow Chargers',163667],
[ 'China', 'Fast Chargers',111333],
[ 'U.S.A.', 'Slow Chargers',50258],
[ 'U.S.A.', 'Fast Chargers',4242],
[ 'Japan', 'Slow Chargers',22287],
[ 'Japan', 'Fast Chargers',7684],
[ 'E.U.', 'Slow Chargers',107446],
[ 'E.U.', 'Fast Chargers',11138],
[ 'Korea', 'Slow Chargers',5394],
[ 'Korea', 'Fast Chargers',3910],
[ 'Canada', 'Slow Chargers',7100],
[ 'Canada', 'Fast Chargers',840],
[ 'Others', 'Slow Chargers',25934],
[ 'Others', 'Fast Chargers',4951],
]);
// Sets chart options.
var options = {
'width': 630,
'height': 400,
};
var colors = ['#FFFFFF', '#ECECEC', '#DDDDDD', '#D4D4D4',
'#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];
var options = {
textStyle: {
    color: '#ffff99'
},
backgroundColor: 'transparent'
};
var options = {
sankey: {
node: {label: { fontName: 'Times New Roman',
fontSize: 12,
color: '#FFFFFF',
},
colors: colors
},
link: {
colorMode: 'gradient',
colors: colors
}
}
};
// Instantiates and draws the chart, passing in some options.
var chart = new
google.visualization.Sankey(document.getElementById('sankey_basic'));
chart.draw(data, options);
}
google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = new google.visualization.DataTable();
data.addColumn('string', 'From');
data.addColumn('string', 'To');
data.addColumn('number', 'Installed');
data.addRows([
[ 'Public Chargers', 'China',275000],
[ 'Public Chargers', 'U.S.A.',54500],
[ 'Public Chargers', 'Japan',29971],
[ 'Public Chargers', 'E.U.',118584],
[ 'Public Chargers', 'Korea',9304],
[ 'Public Chargers', 'Canada',7940],
[ 'Public Chargers', 'Others',30885],
[ 'China', 'Slow Chargers',163667],
[ 'China', 'Fast Chargers',111333],
[ 'U.S.A.', 'Slow Chargers',50258],
[ 'U.S.A.', 'Fast Chargers',4242],
[ 'Japan', 'Slow Chargers',22287],
[ 'Japan', 'Fast Chargers',7684],
[ 'E.U.', 'Slow Chargers',107446],
[ 'E.U.', 'Fast Chargers',11138],
[ 'Korea', 'Slow Chargers',5394],
[ 'Korea', 'Fast Chargers',3910],
[ 'Canada', 'Slow Chargers',7100],
[ 'Canada', 'Fast Chargers',840],
[ 'Others', 'Slow Chargers',25934],
[ 'Others', 'Fast Chargers',4951],
]);
// Sets chart options.
var options = {
'width': 630,
'height': 400,
};
var colors = ['#FFFFFF', '#ECECEC', '#DDDDDD', '#D4D4D4',
'#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];
var options = {
textStyle: {
color: '#ffff99'
},
backgroundColor: 'transparent'
};
var options = {
sankey: {
node: {label: { fontName: 'Styrene A',
fontSize: 14,
color: '#FFFFFF',
};
link: {
colorMode: 'gradient',
colors: colors
}
}
};
// Instantiates and draws the chart, passing in some options.
var chart = new
google.visualization.Sankey(document.getElementById('sankey_basic'));
chart.draw(data, options);
}
