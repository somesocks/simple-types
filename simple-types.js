var Types = {};

Types.TAG = "_type";

Types.getType = function(obj){
	return obj[Types.TAG];
};

Types.setType = function(obj,type){
	obj[Types.TAG] = type;
};

Types.isType = function(obj,type){
	return obj[Types.TAG] === type;
};

module.exports = Types;
