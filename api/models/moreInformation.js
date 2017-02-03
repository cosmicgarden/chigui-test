var mongoose = require('mongoose');
var extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema;
var ad_objects = require('./additionalModels.js');
var Element = require('mongoose').model('Element').schema;
var ElementVersion = require('mongoose').model('ElementVersion').schema;
var RecordVersion = require('mongoose').model('RecordVersion').schema;

var MoreInformationVersion = ElementVersion.extend ({
	moreInformation : String
},{ collection: 'MoreInformationVersion' });

module.exports = mongoose.model('MoreInformationVersion', MoreInformationVersion );