module.exports = function({ api, models }) {

	const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");

	//////////////////////////////////////////////////////////////////////
	//========= Push all variable from database to environment =========//
	//////////////////////////////////////////////////////////////////////
	
	const _0x1e87 = ['threadInfo', '22683KTLkxi', 'iesID', 'name', '1AsMCcG', 'getAll', 'listen', 'allCurrenc', '962WGaYsz', 'threadID', 'banned', 'allThreadI', 'ead', '221799MTQOGH', 'allUserID', 'vironment', 'threadBann', 'dateAdded', 'dEnvironme', 'ronmentUse', 'failLoadEn', 'DATABASE', 'threadData', 'reason', 'ned', '129lzvxuf', '2eeRSup', 'userID', '181969NwSlHr', 'data', '7334CzmNHm', 'loadedEnvi', 'loader', '91miWdbZ', 'userName', 'length', 'startLoadE', 'getText', '1384PUzomc', 'nvironment', 'set', 'push', 'successLoa', 'commandBan', '1357524ZFCDOT', '76940RDkaei'];

function _0xe063(_0x4b1084, _0x519465) {
    return _0xe063 = function (_0x5b6b72, _0x5ef119) {
        _0x5b6b72 = _0x5b6b72 - (-0x2446 + -0x167f + 0x1 * 0x3bdd);
        let _0x1db586 = _0x1e87[_0x5b6b72];
        return _0x1db586;
    }, _0xe063(_0x4b1084, _0x519465);
}(function (_0x3c9b79, _0x43fd42) {
    function _0x1e145a(_0x404d08, _0x2858fc) {
        return _0xe063(_0x2858fc - -0xd2, _0x404d08);
    }
    while (!![]) {
        try {
            const _0x133183 = -parseInt(_0x1e145a(0x6d, 0x58)) * -parseInt(_0x1e145a(0x64, 0x68)) + parseInt(_0x1e145a(0x42, 0x4e)) + parseInt(_0x1e145a(0x77, 0x64)) * parseInt(_0x1e145a(0x63, 0x6d)) + parseInt(_0x1e145a(0x3a, 0x4c)) * -parseInt(_0x1e145a(0x6e, 0x5f)) + -parseInt(_0x1e145a(0x41, 0x53)) * -parseInt(_0x1e145a(0x54, 0x50)) + parseInt(_0x1e145a(0x71, 0x5e)) + -parseInt(_0x1e145a(0x65, 0x61)) * parseInt(_0x1e145a(0x5a, 0x4b));
            if (_0x133183 === _0x43fd42) break;
            else _0x3c9b79['push'](_0x3c9b79['shift']());
        } catch (_0x1adc9c) {
            _0x3c9b79['push'](_0x3c9b79['shift']());
        }
    }
}(_0x1e87, -0xc3d54 + 0x439bb + 0x93222 * 0x2), async function () {
    function _0x394e82(_0x52013c, _0x5ed98e) {
        return _0xe063(_0x52013c - 0x223, _0x5ed98e);
    }
    try {
        logger(global[_0x394e82(0x34c, 0x346)](_0x394e82(0x35b, 0x36b), _0x394e82(0x34b, 0x34f) + _0x394e82(0x34e, 0x358)), _0x394e82(0x33c, 0x32f) + '');
        let _0x2c6e1d = await Threads['getAll'](),
            _0x4db02c = await Users[_0x394e82(0x35a, 0x369)]([_0x394e82(0x342, 0x32f), 'name', 'data']),
            _0x2b86c8 = await Currencies[_0x394e82(0x35a, 0x34e)](['userID']);
        for (const _0x128d04 of _0x2c6e1d) {
            const _0x15f8bd = String(_0x128d04[_0x394e82(0x35e, 0x363)]);
            global[_0x394e82(0x344, 0x358)][_0x394e82(0x360, 0x370) + 'D'][_0x394e82(0x350, 0x358)](_0x15f8bd), global[_0x394e82(0x344, 0x344)][_0x394e82(0x33d, 0x343)][_0x394e82(0x34f, 0x33c)](_0x15f8bd, _0x128d04['data'] || {}), global[_0x394e82(0x344, 0x34d)][_0x394e82(0x355, 0x35c)][_0x394e82(0x34f, 0x34c)](_0x15f8bd, _0x128d04[_0x394e82(0x355, 0x346)] || {});
            if (_0x128d04['data'] && _0x128d04[_0x394e82(0x344, 0x34e)][_0x394e82(0x35f, 0x34a)] == !![]) global[_0x394e82(0x344, 0x345)][_0x394e82(0x365, 0x362) + 'ed'][_0x394e82(0x34f, 0x340)](_0x15f8bd, {
                'reason': _0x128d04[_0x394e82(0x344, 0x331)][_0x394e82(0x33e, 0x339)] || '',
                'dateAdded': _0x128d04['data'][_0x394e82(0x366, 0x35a)] || ''
            });
            if (_0x128d04[_0x394e82(0x344, 0x355)] && _0x128d04[_0x394e82(0x344, 0x355)][_0x394e82(0x352, 0x358) + _0x394e82(0x33f, 0x32f)] && _0x128d04[_0x394e82(0x344, 0x356)]['commandBan' + _0x394e82(0x33f, 0x34c)]['length'] != -0x3 * 0x4e9 + 0x1 * 0x22a7 + -0x13ec) global[_0x394e82(0x344, 0x35a)][_0x394e82(0x352, 0x342) + 'ned'][_0x394e82(0x34f, 0x35a)](_0x15f8bd, _0x128d04['data']['commandBan' + _0x394e82(0x33f, 0x33d)]);
            if (_0x128d04[_0x394e82(0x344, 0x348)] && _0x128d04['data']['NSFW']) global['data']['threadAllo' + 'wNSFW'][_0x394e82(0x350, 0x367)](_0x15f8bd);
        }
        logger[_0x394e82(0x347, 0x335)](global[_0x394e82(0x34c, 0x349)](_0x394e82(0x35b, 0x34a), _0x394e82(0x346, 0x33c) + 'ronmentThr' + _0x394e82(0x361, 0x373)));
        for (const _0x4f51e2 of _0x4db02c) {
            const _0x1603ce = String(_0x4f51e2[_0x394e82(0x342, 0x335)]);
            global[_0x394e82(0x344, 0x348)][_0x394e82(0x363, 0x378)][_0x394e82(0x350, 0x34d)](_0x1603ce);
            if (_0x4f51e2[_0x394e82(0x358, 0x36a)] && _0x4f51e2[_0x394e82(0x358, 0x345)]['length'] != -0x2181 * -0x1 + -0x24f1 + 0x58 * 0xa) global[_0x394e82(0x344, 0x334)][_0x394e82(0x349, 0x34b)][_0x394e82(0x34f, 0x340)](_0x1603ce, _0x4f51e2[_0x394e82(0x358, 0x36f)]);
            if (_0x4f51e2[_0x394e82(0x344, 0x352)] && _0x4f51e2[_0x394e82(0x344, 0x351)][_0x394e82(0x35f, 0x363)] == 0x5ad + 0x1 * -0xd2e + -0x3e * -0x1f) global[_0x394e82(0x344, 0x356)]['userBanned'][_0x394e82(0x34f, 0x34b)](_0x1603ce, {
                'reason': _0x4f51e2['data'][_0x394e82(0x33e, 0x32b)] || '',
                'dateAdded': _0x4f51e2['data'][_0x394e82(0x366, 0x358)] || ''
            });
            if (_0x4f51e2[_0x394e82(0x344, 0x350)] && _0x4f51e2[_0x394e82(0x344, 0x341)][_0x394e82(0x352, 0x345) + 'ned'] && _0x4f51e2[_0x394e82(0x344, 0x33c)]['commandBan' + _0x394e82(0x33f, 0x350)][_0x394e82(0x34a, 0x357)] != -0xa4d + 0xc5 * -0xb + -0x4 * -0x4b1) global[_0x394e82(0x344, 0x358)]['commandBan' + 'ned'][_0x394e82(0x34f, 0x34b)](_0x1603ce, _0x4f51e2['data'][_0x394e82(0x352, 0x33f) + _0x394e82(0x33f, 0x33b)]);
        }
        for (const _0x57d4f7 of _0x2b86c8) global[_0x394e82(0x344, 0x335)][_0x394e82(0x35c, 0x358) + _0x394e82(0x357, 0x351)][_0x394e82(0x350, 0x34b)](String(_0x57d4f7[_0x394e82(0x342, 0x335)]));
        logger['loader'](global['getText'](_0x394e82(0x35b, 0x35d), _0x394e82(0x346, 0x33c) + _0x394e82(0x368, 0x37b) + 'r')), logger(global['getText']('listen', _0x394e82(0x351, 0x340) + _0x394e82(0x367, 0x36f) + 'nt'), _0x394e82(0x33c, 0x325) + '');
    } catch (_0xfda413) {
        return logger[_0x394e82(0x347, 0x335)](global[_0x394e82(0x34c, 0x33c)](_0x394e82(0x35b, 0x358), _0x394e82(0x33b, 0x329) + _0x394e82(0x364, 0x366), _0xfda413), 'error');
    }
}());
	logger(`${api.getCurrentUserID()} - » ${global.config.PREFIX} « ⊶ ${(!global.config.BOTNAME) ? "This bot was made by J-JRT" : global.config.BOTNAME}`, "THÔNG TIN BOT");
	
	///////////////////////////////////////////////
	//========= Require all handle need =========//
	//////////////////////////////////////////////

	const handleCommand = require("./handle/handleCommand")({ api, models, Users, Threads, Currencies });
	const handleCommandEvent = require("./handle/handleCommandEvent")({ api, models, Users, Threads, Currencies });
	const handleReply = require("./handle/handleReply")({ api, models, Users, Threads, Currencies });
	const handleReaction = require("./handle/handleReaction")({ api, models, Users, Threads, Currencies });
	const handleEvent = require("./handle/handleEvent")({ api, models, Users, Threads, Currencies });
	const handleCreateDatabase = require("./handle/handleCreateDatabase")({  api, Threads, Users, Currencies, models });

	logger.loader(`====== ${Date.now() - global.client.timeStart}ms ======`);

	//////////////////////////////////////////////////
	//========= Send event to handle need =========//
	/////////////////////////////////////////////////
	
	return (event) => {
		switch (event.type) {
			case "message":
			case "message_reply":
			case "message_unsend":
				handleCreateDatabase({ event });
				handleCommand({ event });
				handleReply({ event });
				handleCommandEvent({ event });

				break;
			case "event":
				handleEvent({ event });
				break;
			case "message_reaction":
				handleReaction({ event });
				break;
			default:
				break;
		}
	};
};

//THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
