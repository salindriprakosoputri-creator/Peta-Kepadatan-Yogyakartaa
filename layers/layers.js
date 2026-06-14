var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Yogyakarta_kotayogyakarta_kecamatan_1 = new ol.format.GeoJSON();
var features_Yogyakarta_kotayogyakarta_kecamatan_1 = format_Yogyakarta_kotayogyakarta_kecamatan_1.readFeatures(json_Yogyakarta_kotayogyakarta_kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yogyakarta_kotayogyakarta_kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yogyakarta_kotayogyakarta_kecamatan_1.addFeatures(features_Yogyakarta_kotayogyakarta_kecamatan_1);
var lyr_Yogyakarta_kotayogyakarta_kecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yogyakarta_kotayogyakarta_kecamatan_1, 
                style: style_Yogyakarta_kotayogyakarta_kecamatan_1,
                popuplayertitle: 'Yogyakarta_kota — yogyakarta_kecamatan',
                interactive: true,
    title: 'Yogyakarta_kota — yogyakarta_kecamatan<br />\
    <img src="styles/legend/Yogyakarta_kotayogyakarta_kecamatan_1_0.png" /> Rendah (8-12 per km2)<br />\
    <img src="styles/legend/Yogyakarta_kotayogyakarta_kecamatan_1_1.png" /> Sedang (12-14 per km2)<br />\
    <img src="styles/legend/Yogyakarta_kotayogyakarta_kecamatan_1_2.png" /> Tinggi (14-18 per km2)<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Yogyakarta_kotayogyakarta_kecamatan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Yogyakarta_kotayogyakarta_kecamatan_1];
lyr_Yogyakarta_kotayogyakarta_kecamatan_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'Nama Kecamatan', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'Join_No': 'Join_No', 'Join_Luas (ha)': 'Luas Wilayah (ha)', 'Join_Penduduk (ribu)': 'Jumlah Penduduk (ribu)', 'Join_Kepadatan Penduduk (per km2)': 'Kepadatan Penduduk (ribu per km2)', 'Join_Banjir': 'Join_Banjir', 'Join_Cuaca Ekstrem': 'Join_Cuaca Ekstrem', 'Join_Erupsi Gunung Api': 'Join_Erupsi Gunung Api', 'Join_Gelombang Pasang / Abrasi': 'Join_Gelombang Pasang / Abrasi', 'Join_Gelombang Pasang Dan Abrasi': 'Join_Gelombang Pasang Dan Abrasi', 'Join_Gempabumi': 'Join_Gempabumi', 'Join_Kebakaran Hutan Dan Lahan': 'Join_Kebakaran Hutan Dan Lahan', 'Join_Kekeringan': 'Join_Kekeringan', 'Join_Tanah Longsor': 'Join_Tanah Longsor', });
lyr_Yogyakarta_kotayogyakarta_kecamatan_1.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'LUAS': 'TextEdit', 'Field': 'Hidden', 'Join_No': 'Hidden', 'Join_Luas (ha)': 'TextEdit', 'Join_Penduduk (ribu)': 'TextEdit', 'Join_Kepadatan Penduduk (per km2)': 'TextEdit', 'Join_Banjir': 'Hidden', 'Join_Cuaca Ekstrem': 'Hidden', 'Join_Erupsi Gunung Api': 'Hidden', 'Join_Gelombang Pasang / Abrasi': 'Hidden', 'Join_Gelombang Pasang Dan Abrasi': 'Hidden', 'Join_Gempabumi': 'Hidden', 'Join_Kebakaran Hutan Dan Lahan': 'Hidden', 'Join_Kekeringan': 'Hidden', 'Join_Tanah Longsor': 'Hidden', });
lyr_Yogyakarta_kotayogyakarta_kecamatan_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'Join_Luas (ha)': 'inline label - always visible', 'Join_Penduduk (ribu)': 'inline label - always visible', 'Join_Kepadatan Penduduk (per km2)': 'inline label - always visible', });
lyr_Yogyakarta_kotayogyakarta_kecamatan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});