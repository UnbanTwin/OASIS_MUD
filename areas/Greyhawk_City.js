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
			title: 'Main Square | Greyhawk City',
			area: 'Greyhawk City',
			content: 'A busy hustling market square. To the NORTH you can see a residential area.',
			outdoors: true,
			exits: [
				{
					cmd: 'north',
					id: '2',
					area: 'Greyhawk_City'
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
					lightDecay: 0,
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
			title: 'Residential Area | Greyhawk City',
			area: 'Greyhawk_City',
			content: 'A calm area with some houses around. To the EAST you can see another lot of residential buildings. To the NORTH you can see the main square.',
			messages: [
				{msg:"The sound of chatter and laughter can be heard from all the houses."}

			],
			outdoors: true,
			exits: [
				{
					cmd: 'east',
					id: '3',

				},
				{
					cmd: 'north',
					id:'1',
				}

			]
		},
		{
			id: '3',
			title: 'East Residential Area | Greyhawk City  ',
			area: 'Greyhawk_City',
			content: 'A calm area with some houses around. to the SOUTH you can see the inner walls. To the WEST you can see the main residential area.',
			messages: [
				{msg:"The sound of chatter and laughter can be heard from all the houses."}

			],
			outdoors: true,
			exits: [
				{
					cmd: 'south',
					id: '4',

				},
				{
					cmd: 'west',
					id: '2',
				}
			]
		},{
			id: '4',
			title: 'Inner Walls | Greyhawk City  ',
			area: 'Greyhawk_City',
			content: 'The inner walls. To the SOUTH you can see the outer walls. To the WEST you can see a guard tower. To the NORTH you can see the east residential area',
			messages: [
				{msg:"You can just about feel the wind blowing on your face."}

			],
			outdoors: true,
			exits: [
				{
					cmd: 'north',
					id: '3',

				},
				{
					cmd: 'west',
					id: '5',

				}
			]
		},{
			id: '5',
			title: 'East Guard Tower | Greyhawk City  ',
			area: 'Greyhawk_City',
			content: 'It is a dark room, with playing cards left out on the table. It looks like this place has been abandoned quite hastily. To the EAST you see the inner walls.',
			messages: [
				{msg:"You can just about feel the wind blowing on your face."}

			],
			outdoors: true,
			exits: [
				{
					cmd: 'east',
					id: '4',

				}
			],
			items: [
				{
					name: 'Note',
					short: 'Meet me at the deep flame tavern, use this note to unlock the door.',
					long: 'A small note is on the floor here' ,
					area: 'Greyhawk_City',
					id: '1021',
					level: 1,
					itemType: 'key',
					material: 'paper',
					weight: 1,
					equipped: false,
					isKey: true,
					flags: []
				}
			]
		}
	]
};
