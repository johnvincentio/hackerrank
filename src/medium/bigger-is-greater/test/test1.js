

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

const input = [
	'100',
	'imllmmcslslkyoegymoa',
	'fvincndjrurfh',
	'rtglgzzqxnuflitnlyit',
	'mhtvaqofxtyrz',
	'zalqxykemvzzgaka',
	'wjjulziszbqqdcpdnhdo',
	'japjbvjlxzkgietkm',
	'jqczvgqywydkunmjw',
	'ehdegnmorgafrjxvksc',
	'tydwixlwghlmqo',
	'wddnwjneaxbwhwamr',
	'pnimbesirfbivxl',
	'mijamkzpiiniveik',
	'qxtwpdpwexuej',
	'qtcshorwyck',
	'xoojiggdcyjrupr',
	'vcjmvngcdyabcmjz',
	'xildrrhpca',
	'rrcntnbqchsfhvijh',
	'kmotatmrabtcomu',
	'bnfcejmyotvw',
	'dnppdkpywiaxddoqx',
	'tmowsxkrodmkkra',
	'jfkaehlegohwggf',
	'ttylsiegnttymtyx',
	'kyetllczuyibdkwyihrq',
	'xdhqbvlbtmmtshefjf',
	'kpdpzzohihzwgdfzgb',
	'kuywptftapaa',
	'qfqpegznnyludrv',
	'ufwogufbzaboaepslikq',
	'jfejqapjvbdcxtkry',
	'sypjbvatgidyxodd',
	'wdpfyqjcpcn',
	'baabpjckkytudr',
	'uvwurzjyzbhcqmrypraq',
	'kvtwtmqygksbim',
	'ivsjycnooeodwpt',
	'zqyxjnnitzawipqsm',
	'blmrzavodtfzyepz',
	'bmqlhqndacv',
	'phvauobwkrcfwdecsd',
	'vpygyqubqywkndhpzw',
	'yikanhdrjxw',
	'vnpblfxmvwkflqobrk',
	'pserilwzxwyorldsxksl',
	'qymbqaehnyzhfqpqprpl',
	'fcakwzuqlzglnibqmkd',
	'jkscckttaeifiksgkmxx',
	'dkbllravwnhhfjjrce',
	'imzsyrykfvjt',
	'tvogoocldlukwfcajvix',
	'cvnagtypozljpragvlj',
	'hwcmacxvmus',
	'rhrzcpprqccf',
	'clppxvwtaktchqrdif',
	'qwusnlldnolhq',
	'yitveovrja',
	'arciyxaxtvmfgquwb',
	'pzbxvxdjuuvuv',
	'nxfowilpdxwlpt',
	'swzsaynxbytytqtq',
	'qyrogefleeyt',
	'iotjgthvslvmjpcchhuf',
	'knfpyjtzfq',
	'tmtbfayantmwk',
	'asxwzygngwn',
	'rmwiwrurubt',
	'bhmpfwhgqfcqfldlhs',
	'yhbidtewpgp',
	'jwwbeuiklpodvzii',
	'anjhprmkwibe',
	'lpwhqaebmr',
	'dunecynelymcpyonjq',
	'hblfldireuivzekegit',
	'uryygzpwifrricwvge',
	'kzuhaysegaxtwqtvx',
	'kvarmrbpoxxujhvgpw',
	'hanhaggqzdpunkugzmhq',
	'gnwqwsylqeuqr',
	'qzkjbnyvclrkmdtc',
	'argsnaqbquv',
	'obbnlkoaklcx',
	'ojiilqieycsasvqosycu',
	'qhlgiwsmtxbffjsxt',
	'vvrvnmndeogyp',
	'ibeqzyeuvfzb',
	'sajpyegttujxyx',
	'zmdjphzogfldlkgbchnt',
	'tbanvjmwirxx',
	'gmdhdlmopzyvddeqyjja',
	'yxvmvedubzcpd',
	'soygdzhbckfuk',
	'gkbekyrhcwc',
	'wevzqpnqwtpfu',
	'rbobquotbysufwqjeo',
	'bpgqfwoyntuhkvwo',
	'schtabphairewhfmp',
	'rlmrahlisggguykeu',
	'fjtfrmlqvsekq'
];

describe('test 1', () => {
	it('1', () => {
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(5);
		result[0].should.equal('ba');
		result[1].should.equal('no answer');
		result[2].should.equal('hegf');
		result[3].should.equal('dhkc');
		result[4].should.equal('hcdk');
	});
});
