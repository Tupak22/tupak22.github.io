"use strict";

var objectOffset = new THREE.Vector3();
var groundBoundingBoxMin;
var groundBoundingBoxMax;

function createGeneratedGround(scene, tmpArray, innerBorderTexture, groundTexture, innerBorderTextureBump, groundTextureBump) {

	// Vorsicht: Wird nicht ausgeführt!
	//if (false) {
	//	/*TERRAINDATAMERGE*/


	//}
	var hweSettings = {};


	var tmpArray = [];
	var tmpArrayIndices = [];
	var tmpArrayNormals = [];

   /*TERRAINDATALOAD*/


	scene.add(createGround(scene, 0, innerBorderTexture, innerBorderTextureBump, THREE.SmoothShading, true));
	hweSettings.mainMinValues = groundBoundingBoxMin;
	hweSettings.mainMaxValues = groundBoundingBoxMax;

	scene.add(createGround(scene, 1, innerBorderTexture, innerBorderTextureBump, THREE.SmoothShading, true));
	hweSettings.innerMinValues = groundBoundingBoxMin;
	hweSettings.innerMaxValues = groundBoundingBoxMax;

	scene.add(createGround(scene, 2, innerBorderTexture, innerBorderTextureBump, THREE.SmoothShading, true));
	hweSettings.outerMinValues = groundBoundingBoxMin;
	hweSettings.outerMaxValues = groundBoundingBoxMax;


	settings.mainMinValues = hweSettings.mainMinValues;
	settings.mainMaxValues = hweSettings.mainMaxValues;
	settings.innerMinValues = hweSettings.innerMinValues;
	settings.innerMaxValues = hweSettings.innerMaxValues;
	settings.outerMinValues = hweSettings.outerMinValues;
	settings.outerMaxValues = hweSettings.outerMaxValues;


	//function mergeArray(array) {
	//   var output = [];
	//   for (var i = 0; i < array.length; i++)
	//      for (var j = 0; j < array[i].length; j++)
	//         output.push(array[i][j]);
	//   return output;
	//}
}
