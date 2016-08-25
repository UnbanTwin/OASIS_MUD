//Use GreyHawk DnD campaign map as referance.
//TODO: Make merchants
'use strict';
var Cmd = require('../src/commands').cmd,
Room = require('../src/rooms').room,
World = require('../src/world').world;

module.exports = {
	name: 'Greyhawk_City',
	id: '4',
	type: 'outside',
	levels: 'All',
	description: 'A vast cityscape with infinite possiblities',
	reloads: 0,
	author: 'Sam Bolton (Anorak)',
	messages: [
		{msg: '<span class=\'grey\'>A cool breeze blows through the streets of Greyhawk city.</span>'},
		{msg: '<span class=\'grey\'>The bustle of the city can be distracting. Keep an eye out for thieves.</span>'}
	],
	rooms: [
		{
			id: '1',
			title: 'Greyhawk City main square',
			area: 'Greyhawk City',
			content: 'A busy hustling market square. To the NORTH you can see a residential area.',
			outdoors: true,
			exits: [
				{
					cmd: 'north',
					id: '1',
					area: 'Midgaard'
				}
			],
			monsters: [{
				name: 'InfoBroker',
				displayName: 'Grey Hawk Info Broker',
				charClass: 'theif',
				level: 35,
				short: 'Info Broker',
				long: '<span class="yellow">Info Broker</span>, a decent looking man with washed back hair.',
				description: 'A fine looking man with wased back hair, wearing a suit',
				inName: 'InfoBroker',
				race: 'human',
				id: 10005,
				area: 'Greyhawk_City',
				weight: 195,
				diceNum: 3,
				diceSides: 10,
				diceMod: 5,
				str: 20,
				dex: 18,
				position: 'standing',
				attackType: 'punch',
				damRoll: 20,
				hitRoll: 15,
				ac: 20,
				items: [],
				trainer: true,
				behaviors: [{
					module: 'InfoBroker1'
				}]
			}],
			items : [
				{
					name: 'Torch',
					short: 'a wooden torch',
					long: 'A wooden torch rests on the ground' ,
					area: 'Greyhawk_City',
					id: '104',
					level: 1,
					itemType: 'weapon',
					material: 'wood',
					weaponType: 'club',
					diceNum: 1,
					diceSides: 2,
					diceMod: -1,
					attackType: 'smash',
					ac: -1,
					weight: 1,
					slot: 'hands',
					equipped: false,
					light: true,
					lightDecay: 10,
					flickerMsg: '',
					extinguishMsg: '',
					spawn: 3,
					flags: [],
					beforeDrop: function(item, roomObj) {
						return true;
					}
				}
			]
		},
		{
			id: '2',
			title: 'Greyhawk City residential area',
			area: 'Greyhawk City',
			content: 'A calm area with some houses around.',
			messages: [
					{msg:"The sound of chatter and laughter can be heard from all the houses."}

			],
			outdoors: true,
			exits: [
				{
					cmd: 'down',
					id: '1',
					area: 'Midgaard'
				}
			]
		}
	]
};
