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
		'Go to the mall to buy equipment.'

	],
	currentlyEnrolled: [],
	onSay: function(mob, roomObj, player, command) {
		if (player.isPlayer) {
			if (command.msg.toLowerCase().indexOf('yes') !== -1) {
				Cmd.say(mob, {
					msg: 'Great! Let me get you signed up. Just a second...',
					roomObj: roomObj
				});
			}
		}
	},
	onVisit: function(mob, roomObj, player, command) {
		if (player.level <= 2) {
			Cmd.say(mob, {
				msg: 'Welcome to the OASIS ' + player.displayName + '! ',
				roomObj: roomObj
			});
		}
	},
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
