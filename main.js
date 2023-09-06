
// navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function(m){
	m.preventDefault();
	document.querySelector(this.getAttribute("href")).scrollIntoView({
		behavior : "smooth"
	});
});
});

// mousemove img
document.addEventListener('mousemove', move);
function move(e) {
	this.querySelectorAll('.move').forEach(layer => {
		const speed = layer.getAttribute('data-speed')
		const x = (window.innerWidth - e.pageX * speed) / 120
		const y = (window.innerWidth - e.pageY * speed) / 120
		layer.style.transform = `translateX(${x}px) translateY(${y}px)`
	})
}

// jam
window.onload = function () { jam(); }
function jam() {
	var wib = document.getElementById('wib'),
		d = new Date(), h1, h2, h3, m, s;
	h1 = set(d.getHours());
	h2 = set(d.getHours()+1);
	h3 = set(d.getHours()+2);
	m = set(d.getMinutes());
	s = set(d.getSeconds());

	wib.innerHTML = h1 + ":" + m + ":" + s;
	
	var wita = document.getElementById('wita')
	wita.innerHTML = h2 + ":" + m + ":" + s;

	var wit = document.getElementById('wit')
	wit.innerHTML = h3 + ":" + m + ":" + s;

	setTimeout('jam()', 1000);
}

function set(d) {
	d = d < 10 ? '0' + d : d;
	return d;
}

// data Array / tabel
var dataWilayah = [
	{
		'No': '	1',
		'Provinsi': 'Aceh',
		'Ibukota': 'Banda-Aceh',
		'LuasWilayah': '57956',
		'Pulau': 'Sumatera'
	},
	{
		'No': '	2',
		'Provinsi': 'Sumatera-Utara',
		'Ibukota': 'Medan',
		'LuasWilayah': '72981,23',
		'Pulau': 'Sumatera'
	},
	{
		'No': '	3',
		'Provinsi': 'Sumatera-Barat',
		'Ibukota': 'Padang',
		'LuasWilayah': '42012,89',
		'Pulau': 'Sumatera'
	},
	{
		'No': '	4',
		'Provinsi': 'Riau',
		'Ibukota': 'Pekanbaru',
		'LuasWilayah': '87023,66',
		'Pulau': 'Sumatera'
	},
	{
		'No': '	5',
		'Provinsi': 'Jambi',
		'Ibukota': 'Jambi',
		'LuasWilayah': '50058,16',
		'Pulau': 'Sumatera'
	},
	{
		'No': '	6',
		'Provinsi': 'Sumatera-Selatan',
		'Ibukota': 'Palembang',
		'LuasWilayah': '91592,43',
		'Pulau': 'Sumatera'
	},
	{
		'No': '	7',
		'Provinsi': 'Bengkulu',
		'Ibukota': 'Bengkulu',
		'LuasWilayah': '19919,33',
		'Pulau': 'Sumatera'
	},
	{
		'No': '	8',
		'Provinsi': 'Lampung',
		'Ibukota': 'Bandar-Lampung',
		'LuasWilayah': '34623,8',
		'Pulau': 'Sumatera'
	},
	{
		'No': '	9',
		'Provinsi': 'Kepulauan-Bangka-Belitung',
		'Ibukota': 'Pangkal-Pinang',
		'LuasWilayah': '16424,06',
		'Pulau': 'Sumatera'
	},
	{
		'No': '10',
		'Provinsi': 'Kepulauan-Riau',
		'Ibukota': 'Tanjung-Pinang',
		'LuasWilayah': '8201,72',
		'Pulau': 'Sumatera'
	},
	{
		'No': '11',
		'Provinsi': 'DKI-Jakarta',
		'Ibukota': 'Jakarta',
		'LuasWilayah': '664,01',
		'Pulau': 'Jawa'
	},
	{
		'No': '12',
		'Provinsi': 'Jawa-Barat',
		'Ibukota': 'Bandung',
		'LuasWilayah': '35377,76',
		'Pulau': 'Jawa'
	},
	{
		'No': '13',
		'Provinsi': 'Jawa-Tengah',
		'Ibukota': 'Semarang',
		'LuasWilayah': '32800,69',
		'Pulau': 'Jawa'
	},
	{
		'No': '14',
		'Provinsi': 'DI-Yogyakarta',
		'Ibukota': 'Yogyakarta',
		'LuasWilayah': '3133,15',
		'Pulau': 'Jawa'
	},
	{
		'No': '15',
		'Provinsi': 'Jawa-Timur',
		'Ibukota': 'Surabaya',
		'LuasWilayah': '47803,49',
		'Pulau': 'Jawa'
	},
	{
		'No': '16',
		'Provinsi': 'Banten',
		'Ibukota': 'Banten',
		'LuasWilayah': '9662,92',
		'Pulau': 'Jawa'
	},
	{
		'No': '17',
		'Provinsi': 'Bali',
		'Ibukota': 'Denpasar',
		'LuasWilayah': '5780,06',
		'Pulau': 'Kapulauan-Nusa-Tenggara'
	},
	{
		'No': '18',
		'Provinsi': 'Nusa-Tenggara-Barat',
		'Ibukota': 'Mataram',
		'LuasWilayah': '18572,32',
		'Pulau': 'Kapulauan-Nusa-Tenggara'
	},
	{
		'No': '19',
		'Provinsi': 'Nusa-Tenggara-Timur',
		'Ibukota': 'Kupang',
		'LuasWilayah': '48718,1',
		'Pulau': 'Kapulauan-Nusa-Tenggara'
	},
	{
		'No': '20',
		'Provinsi': 'Kalimantan-Barat',
		'Ibukota': 'Pontianak',
		'LuasWilayah': '147307',
		'Pulau': 'Kalimantan'
	},
	{
		'No': '21',
		'Provinsi': 'Kalimantan-Tengah',
		'Ibukota': 'Palangka-Raya',
		'LuasWilayah': '153564,5',
		'Pulau': 'Kalimantan'
	},
	{
		'No': '22',
		'Provinsi': 'Kalimantan-Selatan',
		'Ibukota': 'Banjarmasin',
		'LuasWilayah': '38744,23',
		'Pulau': 'Kalimantan'
	},
	{
		'No': '23',
		'Provinsi': 'Kalimantan-Timur',
		'Ibukota': 'Samarinda',
		'LuasWilayah': '129066,64',
		'Pulau': 'Kalimantan'
	},
	{
		'No': '24',
		'Provinsi': 'Kalimantan-Utara',
		'Ibukota': 'Tanjung-Selor',
		'LuasWilayah': '75467,7',
		'Pulau': 'Kalimantan'
	},
	{
		'No': '25',
		'Provinsi': 'Sulawesi-Utara',
		'Ibukota': 'Manado',
		'LuasWilayah': '13892,47',
		'Pulau': 'Sulawesi'
	},
	{
		'No': '26',
		'Provinsi': 'Sulawesi-Tengah',
		'Ibukota': 'Palu',
		'LuasWilayah': '61841,29',
		'Pulau': 'Sulawesi'
	},
	{
		'No': '27',
		'Provinsi': 'Sulawesi-Selatan',
		'Ibukota': 'Makassar',
		'LuasWilayah': '46717,48',
		'Pulau': 'Sulawesi'
	},
	{
		'No': '28',
		'Provinsi': 'Sulawesi-Tenggara',
		'Ibukota': 'Kendari',
		'LuasWilayah': '38067,7',
		'Pulau': 'Sulawesi'
	},
	{
		'No': '29',
		'Provinsi': 'Gorontalo',
		'Ibukota': 'Gorontalo',
		'LuasWilayah': '11257,07',
		'Pulau': 'Sulawesi'
	},
	{
		'No': '30',
		'Provinsi': 'Sulawesi-Barat',
		'Ibukota': 'Mamuju',
		'LuasWilayah': '16787,18',
		'Pulau': 'Sulawesi'
	},
	{
		'No': '31',
		'Provinsi': 'Maluku',
		'Ibukota': 'Ambon',
		'LuasWilayah': '46914,03',
		'Pulau': 'Kapulauan-Maluku'
	},
	{
		'No': '32',
		'Provinsi': 'Maluku-Utara',
		'Ibukota': 'Sofifi',
		'LuasWilayah': '31982,5',
		'Pulau': 'Kapulauan-Maluku'
	},
	{
		'No': '33',
		'Provinsi': 'Papua',
		'Ibukota': 'Jayapura',
		'LuasWilayah': '319036,05',
		'Pulau': 'Papua'
	},
	{
		'No': '34',
		'Provinsi': 'Papua-Barat',
		'Ibukota': 'Manokwari',
		'LuasWilayah': '102955,15',
		'Pulau': 'Papua'
	},
]

//TABEL SEMUA DATA (Hanya test)
// buildTable(dataWilayah)
// function buildTable(data) {
// 	var table = document.getElementById('teks')
// 	for (var i = 0; i < data.length; i++) {
// 		var row = `<tr>
//                         <td>${data[i].No}</td>
//                         <td>${data[i].Provinsi}</td>
//                         <td>${data[i].Ibukota}</td>
//                         <td>${data[i].LuasWilayah}</td>
//                         <td>${data[i].Pulau}</td>
//                   </tr>`
// 		table.innerHTML += row
// 	}
// }


// filter data array
const psumatera = dataWilayah.filter((key)=>key.Pulau == 'Sumatera')

// Tabel filter data sumatera
buildTable2(psumatera)
function buildTable2(data) {
	var table2 = document.getElementById('sumatera')
	for (var i = 0; i < data.length; i++) {
		var row = `<tr>
                        <td>${data[i].No}</td>
                        <td>${data[i].Provinsi}</td>
                        <td>${data[i].Ibukota}</td>
                        <td>${data[i].LuasWilayah}</td>
                        <td>${data[i].Pulau}</td>
                  </tr>`
		table2.innerHTML += row
	}
}

// filter data array Jawa
const pjawa = dataWilayah.filter((key)=>key.Pulau == 'Jawa')

// Tabel filter data jawa
buildTable3(pjawa)
function buildTable3(data) {
	var table3 = document.getElementById('jawa')
	for (var i = 0; i < data.length; i++) {
		var row = `<tr>
                        <td>${data[i].No}</td>
                        <td>${data[i].Provinsi}</td>
                        <td>${data[i].Ibukota}</td>
                        <td>${data[i].LuasWilayah}</td>
                        <td>${data[i].Pulau}</td>
                  </tr>`
		table3.innerHTML += row
	}
}

// filter data array
const pkalimantan = dataWilayah.filter((key)=>key.Pulau == 'Kalimantan')

// Tabel filter data kalimantan
buildTable4(pkalimantan)
function buildTable4(data) {
	var table4 = document.getElementById('kalimantan')
	for (var i = 0; i < data.length; i++) {
		var row = `<tr>
                        <td>${data[i].No}</td>
                        <td>${data[i].Provinsi}</td>
                        <td>${data[i].Ibukota}</td>
                        <td>${data[i].LuasWilayah}</td>
                        <td>${data[i].Pulau}</td>
                  </tr>`
		table4.innerHTML += row
	}
}

// filter data array
const psulawesi = dataWilayah.filter((key)=>key.Pulau == 'Sulawesi')

// Tabel filter data sulawesi
buildTable5(psulawesi)
function buildTable5(data) {
	var table5 = document.getElementById('sulawesi')
	for (var i = 0; i < data.length; i++) {
		var row = `<tr>
                        <td>${data[i].No}</td>
                        <td>${data[i].Provinsi}</td>
                        <td>${data[i].Ibukota}</td>
                        <td>${data[i].LuasWilayah}</td>
                        <td>${data[i].Pulau}</td>
                  </tr>`
		table5.innerHTML += row
	}
}

// filter data array
const pknt = dataWilayah.filter((key)=>key.Pulau == 'Kapulauan-Nusa-Tenggara')

// Tabel filter data Kepulauan-Nusa-Tenggara
buildTable6(pknt)
function buildTable6(data) {
	var table6 = document.getElementById('nusa')
	for (var i = 0; i < data.length; i++) {
		var row = `<tr>
                        <td>${data[i].No}</td>
                        <td>${data[i].Provinsi}</td>
                        <td>${data[i].Ibukota}</td>
                        <td>${data[i].LuasWilayah}</td>
                        <td>${data[i].Pulau}</td>
                  </tr>`
		table6.innerHTML += row
	}
}

// filter data array
const pkm = dataWilayah.filter((key)=>key.Pulau == 'Kapulauan-Maluku')

// Tabel filter data Kepulauan-Maluku
buildTable7(pkm)
function buildTable7(data) {
	var table7 = document.getElementById('maluku')
	for (var i = 0; i < data.length; i++) {
		var row = `<tr>
                        <td>${data[i].No}</td>
                        <td>${data[i].Provinsi}</td>
                        <td>${data[i].Ibukota}</td>
                        <td>${data[i].LuasWilayah}</td>
                        <td>${data[i].Pulau}</td>
                  </tr>`
		table7.innerHTML += row
	}
}

// filter data array
const ppapua = dataWilayah.filter((key)=>key.Pulau == 'Papua')

// Tabel filter data Kepulauan-Maluku
buildTable8(ppapua)
function buildTable8(data) {
	var table8 = document.getElementById('papua')
	for (var i = 0; i < data.length; i++) {
		var row = `<tr>
                        <td>${data[i].No}</td>
                        <td>${data[i].Provinsi}</td>
                        <td>${data[i].Ibukota}</td>
                        <td>${data[i].LuasWilayah}</td>
                        <td>${data[i].Pulau}</td>
                  </tr>`
		table8.innerHTML += row
	}
}