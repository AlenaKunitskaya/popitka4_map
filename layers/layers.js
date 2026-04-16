var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Lab1lab1_1 = new ol.format.GeoJSON();
var features_Lab1lab1_1 = format_Lab1lab1_1.readFeatures(json_Lab1lab1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lab1lab1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lab1lab1_1.addFeatures(features_Lab1lab1_1);
var lyr_Lab1lab1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lab1lab1_1, 
                style: style_Lab1lab1_1,
                popuplayertitle: 'Lab1 — lab1',
                interactive: true,
                title: '<img src="styles/legend/Lab1lab1_1.png" /> Lab1 — lab1'
            });
var format___highway_unclassified_2 = new ol.format.GeoJSON();
var features___highway_unclassified_2 = format___highway_unclassified_2.readFeatures(json___highway_unclassified_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___highway_unclassified_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___highway_unclassified_2.addFeatures(features___highway_unclassified_2);
var lyr___highway_unclassified_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___highway_unclassified_2, 
                style: style___highway_unclassified_2,
                popuplayertitle: 'Дороги-линейные — __highway_unclassified',
                interactive: true,
                title: '<img src="styles/legend/__highway_unclassified_2.png" /> Дороги-линейные — __highway_unclassified'
            });
var format____highway_unclassified_3 = new ol.format.GeoJSON();
var features____highway_unclassified_3 = format____highway_unclassified_3.readFeatures(json____highway_unclassified_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____highway_unclassified_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____highway_unclassified_3.addFeatures(features____highway_unclassified_3);
var lyr____highway_unclassified_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____highway_unclassified_3, 
                style: style____highway_unclassified_3,
                popuplayertitle: 'Дороги-точки — ___highway_unclassified',
                interactive: true,
                title: '<img src="styles/legend/___highway_unclassified_3.png" /> Дороги-точки — ___highway_unclassified'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'ДОМИКИ',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> ДОМИКИ'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Lab1lab1_1.setVisible(true);lyr___highway_unclassified_2.setVisible(true);lyr____highway_unclassified_3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Lab1lab1_1,lyr___highway_unclassified_2,lyr____highway_unclassified_3,lyr__4];
lyr_Lab1lab1_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr___highway_unclassified_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'ford': 'ford', 'depth': 'depth', 'smoothness': 'smoothness', 'surface': 'surface', 'layer': 'layer', 'lanes': 'lanes', 'foot': 'foot', 'bridge': 'bridge', 'bicycle': 'bicycle', 'access': 'access', });
lyr____highway_unclassified_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'foot': 'foot', 'bicycle': 'bicycle', 'tower:type': 'tower:type', 'power': 'power', 'material': 'material', 'barrier': 'barrier', 'access': 'access', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'addr:street': 'addr:street', 'addr:place': 'addr:place', 'building:levels': 'building:levels', 'name:ru': 'name:ru', 'voltage': 'voltage', 'substation': 'substation', 'power': 'power', 'operator': 'operator', 'location': 'location', 'gas_insulated': 'gas_insulated', 'frequency': 'frequency', 'branch': 'branch', 'name': 'name', 'shop': 'shop', 'layer': 'layer', 'address': 'address', });
lyr_Lab1lab1_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr___highway_unclassified_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'ford': '', 'depth': '', 'smoothness': '', 'surface': '', 'layer': '', 'lanes': '', 'foot': '', 'bridge': '', 'bicycle': '', 'access': '', });
lyr____highway_unclassified_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'foot': '', 'bicycle': '', 'tower:type': '', 'power': '', 'material': '', 'barrier': '', 'access': '', });
lyr__4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'addr:street': '', 'addr:place': '', 'building:levels': '', 'name:ru': '', 'voltage': '', 'substation': '', 'power': '', 'operator': '', 'location': '', 'gas_insulated': '', 'frequency': '', 'branch': '', 'name': '', 'shop': '', 'layer': '', 'address': '', });
lyr_Lab1lab1_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr___highway_unclassified_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'ford': 'no label', 'depth': 'no label', 'smoothness': 'no label', 'surface': 'no label', 'layer': 'no label', 'lanes': 'no label', 'foot': 'no label', 'bridge': 'no label', 'bicycle': 'no label', 'access': 'no label', });
lyr____highway_unclassified_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'tower:type': 'no label', 'power': 'no label', 'material': 'no label', 'barrier': 'no label', 'access': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'addr:street': 'no label', 'addr:place': 'no label', 'building:levels': 'no label', 'name:ru': 'no label', 'voltage': 'no label', 'substation': 'no label', 'power': 'no label', 'operator': 'no label', 'location': 'no label', 'gas_insulated': 'no label', 'frequency': 'no label', 'branch': 'no label', 'name': 'no label', 'shop': 'no label', 'layer': 'no label', 'address': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});