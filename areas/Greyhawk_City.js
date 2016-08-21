//Use GreyHawk DnD campaign map as referance.
'use strict';
var Cmd = require('../src/commands').cmd,
Room = require('../src/rooms').room,
World = require('../src/world').world;

module.exports = {
	name: 'Greyhawk City',
	id: '4',
	type: 'outside',
	levels: 'All',
	description: 'A vast landscape with infinite possiblities',
	reloads: 0,
	author: 'Sam Bolton (Anorak)',
	messages: [
		{msg: '<span class=\'grey\'>A cool breeze blows through the streets of Greyhawk city.</span>'},
		{msg: '<span class=\'grey\'>The bustle of the city can be distracting. Keep an eye out for thieves.</span>'}
	],
	rooms: [
		{
			id: '1',
			title: 'Greyhawk main square',
			area: 'Greyhawk City',
			content: 'A busy hustling market square.',
			outdoors: true,
			exits: [
				{
					cmd: 'down',
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
				area: 'Incipio',
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
				behaviors: [/*{
					module: 'radghar'
				}*/]
			}],
			items : []
		}
	]
};
