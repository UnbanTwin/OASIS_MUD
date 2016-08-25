'use strict';
var Cmd = require('../src/commands').cmd,
Room = require('../src/rooms').room,
World = require('../src/world').world;

/*
	Help Wizard.
*/
module.exports = {
	exclimations: [
		'Use the teleport command to go to other planets.',
		'If you need some quick credits you can go to the the Greyhawk City outer walls and help us with our Kobold problem! '

	],
	onAlive: function(mob, roomObj) {
		var roll = World.dice.roll(1, 40);

		if (roll === 10) {
			Cmd.say(mob, {
				msg: mob.exclimations[parseInt(Math.random() * ((mob.exclimations.length)))],
				roomObj: roomObj
			});
		}
	}
};
