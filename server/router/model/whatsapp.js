'use strict';
const _0x53cdf0 = _0x5f5b;
(function (_0x3d2668, _0x28b219) {
    const _0x104606 = _0x5f5b,
        _0x1dd4b6 = _0x3d2668();
    while (!![]) {
        try {
            const _0x2cf8ee = -parseInt(_0x104606(0x145)) / 0x1 + -parseInt(_0x104606(0x132)) / 0x2 + parseInt(_0x104606(0xfe)) / 0x3 + -parseInt(_0x104606(0x121)) / 0x4 * (parseInt(_0x104606(0x102)) / 0x5) + -parseInt(_0x104606(0xff)) / 0x6 + -parseInt(_0x104606(0x139)) / 0x7 + parseInt(_0x104606(0x114)) / 0x8;
            if (_0x2cf8ee === _0x28b219) break;
            else _0x1dd4b6['push'](_0x1dd4b6['shift']());
        } catch (_0x3ff965) {
            _0x1dd4b6['push'](_0x1dd4b6['shift']());
        }
    }
}(_0x3d17, 0xe76d4));
const {
    default: makeWASocket,
    makeWALegacySocket,
    downloadContentFromMessage
} = require(_0x53cdf0(0x130)), {
    useSingleFileAuthState,
    makeInMemoryStore,
    fetchLatestBaileysVersion,
    AnyMessageContent,
    delay,
    MessageRetryMap,
    useMultiFileAuthState
} = require('@adiwajshing/baileys'), {
    DisconnectReason
} = require(_0x53cdf0(0x130)), QRCode = require(_0x53cdf0(0xf2)), lib = require(_0x53cdf0(0x11c)), fs = require('fs');
let sock = [],
    qrcode = [],
    intervalStore = [];
const {
    setStatus
} = require(_0x53cdf0(0x126)), {
    autoReply
} = require(_0x53cdf0(0x124)), {
    formatReceipt
} = require(_0x53cdf0(0x138)), axios = require(_0x53cdf0(0x133)), MAIN_LOGGER = require(_0x53cdf0(0x11d)), logger = MAIN_LOGGER[_0x53cdf0(0x129)]({}), useStore = !process[_0x53cdf0(0x146)][_0x53cdf0(0x105)](_0x53cdf0(0x142)), msgRetryCounterMap = () => MessageRetryMap = {}, connectToWhatsApp = async (_0x5d8b03, _0x411f60 = null) => {
    const _0x34ef30 = _0x53cdf0;
    if (typeof qrcode[_0x5d8b03] !== _0x34ef30(0x111)) return _0x411f60 !== null && _0x411f60[_0x34ef30(0x11e)](_0x34ef30(0xf2), {
        'token': _0x5d8b03,
        'data': qrcode[_0x5d8b03],
        'message': _0x34ef30(0xf4)
    }), {
        'status': ![],
        'sock': sock[_0x5d8b03],
        'qrcode': qrcode[_0x5d8b03],
        'message': _0x34ef30(0xfd)
    };
    try {
        let _0x391c37 = sock[_0x5d8b03]['user']['id'][_0x34ef30(0x118)](':');
        _0x391c37 = _0x391c37[0x0] + _0x34ef30(0x147);
        const _0xd5bdf9 = await getPpUrl(_0x5d8b03, _0x391c37);
        return _0x411f60 !== null && _0x411f60['emit'](_0x34ef30(0x144), {
            'token': _0x5d8b03,
            'user': sock[_0x5d8b03][_0x34ef30(0xf7)],
            'ppUrl': _0xd5bdf9
        }), {
            'status': !![],
            'message': _0x34ef30(0x140)
        };
    } catch (_0x5e852e) {
        _0x411f60 !== null && _0x411f60['emit'](_0x34ef30(0x101), {
            'token': _0x5d8b03,
            'message': 'Try to connecting ' + _0x5d8b03
        }), console[_0x34ef30(0x12a)](_0x34ef30(0xf5) + _0x5d8b03);
    }
    const {
        state: _0x5b4d3f,
        saveCreds: _0xcd46e8
    } = await useMultiFileAuthState(_0x34ef30(0x100) + _0x5d8b03), _0x481c43 = await getChromeLates();
    console[_0x34ef30(0x12a)](_0x34ef30(0x110) + _0x481c43?. [_0x34ef30(0x10c)]?. ['versions'][0x0]?. [_0x34ef30(0x106)] + _0x34ef30(0x10e) + (_0x481c43?. ['data']?. [_0x34ef30(0x137)][_0x34ef30(0x131)] > 0x0 ? !![] : ![]));
    const {
        version: _0xb8b69,
        isLatest: _0x4e402a
    } = await fetchLatestBaileysVersion();
    return console[_0x34ef30(0x12a)](_0x34ef30(0x112) + _0xb8b69[_0x34ef30(0x107)]('.') + _0x34ef30(0x10e) + _0x4e402a), sock[_0x5d8b03] = makeWASocket({
        'version': _0xb8b69,
        'browser': [_0x34ef30(0x12e), _0x34ef30(0x103), _0x481c43?. [_0x34ef30(0x10c)]?. [_0x34ef30(0x137)][0x0]?. ['version']],
        'logger': logger,
        'printQRInTerminal': !![],
        'auth': _0x5b4d3f
    }), sock[_0x5d8b03]['ev']['on'](_0x34ef30(0x148), _0x3e9b88 => {
        autoReply(_0x3e9b88, sock[_0x5d8b03]);
    }), sock[_0x5d8b03]['ev']['on']('connection.update', async _0x551a8e => {
        const _0x1188bf = _0x34ef30,
            {
                connection: _0x2d88fd,
                qr: _0x40d980,
                lastDisconnect: _0x42dc9d
            } = _0x551a8e;
        if (_0x2d88fd === _0x1188bf(0xf9)) {
            if (_0x42dc9d[_0x1188bf(0x14d)]?. [_0x1188bf(0x10b)]?. [_0x1188bf(0x123)] !== DisconnectReason['loggedOut']) {
                if (_0x42dc9d[_0x1188bf(0x14d)]?. [_0x1188bf(0x10b)]?. [_0x1188bf(0xfb)]?. [_0x1188bf(0x101)] === _0x1188bf(0x12b)) {
                    delete qrcode[_0x5d8b03], connectToWhatsApp(_0x5d8b03, _0x411f60);
                    if (_0x411f60 != null) _0x411f60[_0x1188bf(0x11e)](_0x1188bf(0x101), {
                        'token': _0x5d8b03,
                        'message': _0x1188bf(0x13c)
                    });
                } else {
                    if (_0x42dc9d[_0x1188bf(0x14d)]?. [_0x1188bf(0x10b)]?. [_0x1188bf(0xfb)]?. ['message'] === _0x1188bf(0x113)) {
                        delete qrcode[_0x5d8b03];
                        if (_0x411f60 != null) _0x411f60['emit'](_0x1188bf(0x101), {
                            'token': _0x5d8b03,
                            'message': _0x42dc9d[_0x1188bf(0x14d)][_0x1188bf(0x10b)][_0x1188bf(0xfb)][_0x1188bf(0x101)],
                            'error': _0x42dc9d[_0x1188bf(0x14d)][_0x1188bf(0x10b)][_0x1188bf(0xfb)]['error']
                        });
                    }
                }
            } else _0x42dc9d[_0x1188bf(0x14d)]?. [_0x1188bf(0x10b)]?. ['statusCode'] === 0x191 && (setStatus(_0x5d8b03, _0x1188bf(0xfa)), console['log']('Connection closed. You are logged out.'), _0x411f60 !== null && _0x411f60[_0x1188bf(0x11e)]('message', {
                'token': _0x5d8b03,
                'message': _0x1188bf(0x10a)
            }), clearConnection(_0x5d8b03));
        }
        _0x40d980 && QRCode[_0x1188bf(0x108)](_0x40d980, function (_0x182750, _0x38dc31) {
            const _0x13c347 = _0x1188bf;
            _0x182750 && console[_0x13c347(0x12a)](_0x182750), qrcode[_0x5d8b03] = _0x38dc31, _0x411f60 !== null && _0x411f60[_0x13c347(0x11e)](_0x13c347(0xf2), {
                'token': _0x5d8b03,
                'data': _0x38dc31,
                'message': _0x13c347(0xf4)
            });
        });
        if (_0x2d88fd === _0x1188bf(0x134)) {
            setStatus(_0x5d8b03, 'Connected');
            let _0x2aaacd = sock[_0x5d8b03][_0x1188bf(0xf7)]['id']['split'](':');
            _0x2aaacd = _0x2aaacd[0x0] + '@s.whatsapp.net';
            const _0x2a1827 = await getPpUrl(_0x5d8b03, _0x2aaacd);
            _0x411f60 !== null && _0x411f60['emit'](_0x1188bf(0x144), {
                'token': _0x5d8b03,
                'user': sock[_0x5d8b03][_0x1188bf(0xf7)],
                'ppUrl': _0x2a1827
            }), delete qrcode[_0x5d8b03];
        }
    }), sock[_0x5d8b03]['ev']['on'](_0x34ef30(0x12d), _0xcd46e8), {
        'sock': sock[_0x5d8b03],
        'qrcode': qrcode[_0x5d8b03]
    };
};
async function connectWaBeforeSend(_0x35fddd) {
    const _0xe12a28 = _0x53cdf0;
    let _0x574872 = undefined,
        _0x4625e4;
    _0x4625e4 = await connectToWhatsApp(_0x35fddd), await _0x4625e4['sock']['ev']['on'](_0xe12a28(0x13a), _0x195721 => {
        const {
            connection: _0x354d40,
            qr: _0x33516a
        } = _0x195721;
        _0x354d40 === 'open' && (_0x574872 = !![]), _0x33516a && (_0x574872 = ![]);
    });
    let _0x38a757 = 0x0;
    while (typeof _0x574872 === _0xe12a28(0x111)) {
        _0x38a757++;
        if (_0x38a757 > 0x4) break;
        await new Promise(_0x2a4b16 => setTimeout(_0x2a4b16, 0x3e8));
    }
    return _0x574872;
}
const sendText = async (_0xb643e8, _0x3bd2a1, _0x126b1b) => {
    const _0xbe326c = _0x53cdf0;
    try {
        const _0x504935 = await sock[_0xb643e8][_0xbe326c(0x14c)](formatReceipt(_0x3bd2a1), {
            'text': _0x126b1b
        });
        return _0x504935;
    } catch (_0x1cd0c1) {
        return console[_0xbe326c(0x12a)](_0x1cd0c1), ![];
    }
}, sendMessage = async (_0x376f82, _0x44ecba, _0x5a5bf4) => {
    const _0x4a1cbd = _0x53cdf0;
    try {
        const _0x523010 = JSON['parse'](_0x5a5bf4);
        let _0x13f4bc = ![];
        _0x44ecba['length'] > 0xe ? (_0x44ecba = _0x44ecba + _0x4a1cbd(0x115), _0x13f4bc = !![]) : _0x13f4bc = await isExist(_0x376f82, formatReceipt(_0x44ecba));
        if (_0x13f4bc) {
            const _0x21b916 = await sock[_0x376f82][_0x4a1cbd(0x14c)](formatReceipt(_0x44ecba), JSON['parse'](_0x5a5bf4));
            return _0x21b916;
        }
        return ![];
    } catch (_0xcde9f6) {
        return console[_0x4a1cbd(0x12a)](_0xcde9f6), ![];
    }
};
function _0x3d17() {
    const _0x198639 = ['xls', '../../database/index', 'application/pdf', ' connection was estabilished', 'child', 'log', 'Stream Errored (restart required)', 'readFileSync', 'creds.update', 'SUNOR Gateway', 'get', '@adiwajshing/baileys', 'length', '3284448TUdtXz', 'axios', 'open', 'logout', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'versions', '../helper', '6870878MSMRKt', 'connection.update', 'rmSync', 'Reconnecting', ' is deleted', 'Nothing deleted', 'application/msword', 'Already connected', 'video', '--no-store', 'docx', 'connection-open', '272287hRnbEV', 'argv', '@s.whatsapp.net', 'messages.upsert', 'url', 'src/public/temp/', 'slice', 'sendMessage', 'error', 'existsSync', 'qrcode', 'send', 'Qrcode updated, please scann with your Whatsapp Device', 'Try to connecting ', 'displayText', 'user', 'Deleting session and credential', 'close', 'Disconnect', 'payload', 'groupFetchAllParticipating', 'Please scann qrcode', '1439961qHlakO', '4759482zkFHia', './credentials/', 'message', '449035ZYiFlH', 'Chrome', 'map', 'includes', 'version', 'join', 'toDataURL', 'exports', 'Connection closed. You are logged out.', 'output', 'data', 'application/mp3', ', isLatest: ', 'xlsx', 'using Chrome v', 'undefined', 'using WA v', 'QR refs attempts ended', '45471744TqkmcE', '@g.us', 'application/excel', 'entries', 'split', 'Logout Progres..', 'Please add your won role of mimetype', ' Connection failed,please scan first', '../../lib', '../../lib/pino', 'emit', 'body', 'image', '68xnViIa', 'profilePictureUrl', 'statusCode', './autoreply'];
    _0x3d17 = function () {
        return _0x198639;
    };
    return _0x3d17();
}
async function sendMedia(_0x19650e, _0x2e9ecb, _0x9d1bf6, _0x576574, _0x9f595a, _0x3bb9eb) {
    const _0x72de8e = _0x53cdf0,
        _0x3da4b5 = formatReceipt(_0x2e9ecb);
    try {
        if (_0x9d1bf6 == _0x72de8e(0x120)) var _0xf96846 = await sock[_0x19650e][_0x72de8e(0x14c)](_0x3da4b5, {
            'image': _0x576574 ? {
                'url': _0x576574
            } : fs[_0x72de8e(0x12c)]('src/public/temp/' + _0x9f595a),
            'caption': _0x3bb9eb ? _0x3bb9eb : null
        });
        else {
            if (_0x9d1bf6 == _0x72de8e(0x141)) var _0xf96846 = await sock[_0x19650e][_0x72de8e(0x14c)](_0x3da4b5, {
                'video': _0x576574 ? {
                    'url': _0x576574
                } : fs[_0x72de8e(0x12c)](_0x72de8e(0x14a) + _0x9f595a),
                'caption': _0x3bb9eb ? _0x3bb9eb : null
            });
            else {
                if (_0x9d1bf6 == 'audio') var _0xf96846 = await sock[_0x19650e]['sendMessage'](_0x3da4b5, {
                    'audio': _0x576574 ? {
                        'url': _0x576574
                    } : fs[_0x72de8e(0x12c)](_0x72de8e(0x14a) + _0x9f595a),
                    'caption': _0x3bb9eb ? _0x3bb9eb : null
                });
                else {
                    if (_0x9d1bf6 == 'pdf') var _0xf96846 = await sock[_0x19650e][_0x72de8e(0x14c)](_0x3da4b5, {
                        'document': {
                            'url': _0x576574
                        },
                        'mimetype': _0x72de8e(0x127)
                    }, {
                        'url': _0x576574
                    });
                    else {
                        if (_0x9d1bf6 == _0x72de8e(0x125)) var _0xf96846 = await sock[_0x19650e][_0x72de8e(0x14c)](_0x3da4b5, {
                            'document': {
                                'url': _0x576574
                            },
                            'mimetype': _0x72de8e(0x116)
                        }, {
                            'url': _0x576574
                        });
                        else {
                            if (_0x9d1bf6 == _0x72de8e(0x125)) var _0xf96846 = await sock[_0x19650e][_0x72de8e(0x14c)](_0x3da4b5, {
                                'document': {
                                    'url': _0x576574
                                },
                                'mimetype': _0x72de8e(0x116)
                            }, {
                                'url': _0x576574
                            });
                            else {
                                if (_0x9d1bf6 == _0x72de8e(0x10f)) var _0xf96846 = await sock[_0x19650e][_0x72de8e(0x14c)](_0x3da4b5, {
                                    'document': {
                                        'url': _0x576574
                                    },
                                    'mimetype': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                                }, {
                                    'url': _0x576574
                                });
                                else {
                                    if (_0x9d1bf6 == 'doc') var _0xf96846 = await sock[_0x19650e][_0x72de8e(0x14c)](_0x3da4b5, {
                                        'document': {
                                            'url': _0x576574
                                        },
                                        'mimetype': _0x72de8e(0x13f)
                                    }, {
                                        'url': _0x576574
                                    });
                                    else {
                                        if (_0x9d1bf6 == _0x72de8e(0x143)) var _0xf96846 = await sock[_0x19650e][_0x72de8e(0x14c)](_0x3da4b5, {
                                            'document': {
                                                'url': _0x576574
                                            },
                                            'mimetype': _0x72de8e(0x136)
                                        }, {
                                            'url': _0x576574
                                        });
                                        else {
                                            if (_0x9d1bf6 == 'zip') var _0xf96846 = await sock[_0x19650e][_0x72de8e(0x14c)](_0x3da4b5, {
                                                'document': {
                                                    'url': _0x576574
                                                },
                                                'mimetype': 'application/zip'
                                            }, {
                                                'url': _0x576574
                                            });
                                            else {
                                                if (_0x9d1bf6 == 'mp3') var _0xf96846 = await sock[_0x19650e][_0x72de8e(0x14c)](_0x3da4b5, {
                                                    'document': {
                                                        'url': _0x576574
                                                    },
                                                    'mimetype': _0x72de8e(0x10d)
                                                }, {
                                                    'url': _0x576574
                                                });
                                                else return console[_0x72de8e(0x12a)](_0x72de8e(0x11a)), ![];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return _0xf96846;
    } catch (_0x4479f1) {
        return console[_0x72de8e(0x12a)](_0x4479f1), ![];
    }
}
function _0x5f5b(_0x425622, _0x2aa1fb) {
    const _0x3d17aa = _0x3d17();
    return _0x5f5b = function (_0x5f5b5d, _0x2f1675) {
        _0x5f5b5d = _0x5f5b5d - 0xf2;
        let _0x43bf93 = _0x3d17aa[_0x5f5b5d];
        return _0x43bf93;
    }, _0x5f5b(_0x425622, _0x2aa1fb);
}
async function sendButtonMessage(_0xa1b22b, _0x1f6c22, _0x326134, _0x59b009, _0xfc5339, _0x458664) {
    const _0x2a7fed = _0x53cdf0;
    let _0x5c26ec = _0x2a7fed(0x149);
    try {
        const _0x1ddfff = _0x326134[_0x2a7fed(0x104)]((_0x5a231d, _0x2e47db) => {
            const _0x1d2770 = _0x2a7fed;
            return console[_0x1d2770(0x12a)](_0x5a231d), {
                'buttonId': _0x2e47db,
                'buttonText': {
                    'displayText': _0x5a231d[_0x1d2770(0xf6)]
                },
                'type': 0x1
            };
        });
        if (_0x458664) var _0x41d9a2 = {
            'image': _0x5c26ec == 'url' ? {
                'url': _0x458664
            } : fs[_0x2a7fed(0x12c)](_0x2a7fed(0x14a) + _0x458664),
            'caption': _0x59b009,
            'footer': _0xfc5339,
            'buttons': _0x1ddfff,
            'headerType': 0x4
        };
        else var _0x41d9a2 = {
            'text': _0x59b009,
            'footer': _0xfc5339,
            'buttons': _0x1ddfff,
            'headerType': 0x1
        };
        const _0x868344 = await sock[_0xa1b22b][_0x2a7fed(0x14c)](formatReceipt(_0x1f6c22), _0x41d9a2);
        return _0x868344;
    } catch (_0x60dc63) {
        return console['log'](_0x60dc63), ![];
    }
}
async function sendTemplateMessage(_0x411b70, _0x2c7673, _0x2cddc2, _0x273a56, _0xf9e1f1, _0x456b0e) {
    const _0x18fcbc = _0x53cdf0;
    try {
        console[_0x18fcbc(0x12a)](_0x2cddc2);
        if (_0x456b0e) var _0x752123 = {
            'caption': _0x273a56,
            'footer': _0xf9e1f1,
            'templateButtons': _0x2cddc2,
            'image': {
                'url': _0x456b0e
            }
        };
        else var _0x752123 = {
            'text': _0x273a56,
            'footer': _0xf9e1f1,
            'templateButtons': _0x2cddc2
        };
        const _0x39de6e = await sock[_0x411b70][_0x18fcbc(0x14c)](formatReceipt(_0x2c7673), _0x752123);
        return _0x39de6e;
    } catch (_0x2b6ae3) {
        return console[_0x18fcbc(0x12a)](_0x2b6ae3), ![];
    }
}
async function sendListMessage(_0x5dcccf, _0x103058, _0x12aa17, _0x2c0ff1, _0x31ec7a, _0x11ec86, _0x567c23) {
    const _0x51ff1a = _0x53cdf0;
    try {
        const _0x1e141c = {
                'text': _0x2c0ff1,
                'footer': _0x31ec7a,
                'title': _0x11ec86,
                'buttonText': _0x567c23,
                'sections': [_0x12aa17]
            },
            _0x174c8e = await sock[_0x5dcccf]['sendMessage'](formatReceipt(_0x103058), _0x1e141c);
        return _0x174c8e;
    } catch (_0x9c8798) {
        return console[_0x51ff1a(0x12a)](_0x9c8798), ![];
    }
}
async function fetchGroups(_0x28a7de) {
    const _0x23b434 = _0x53cdf0;
    try {
        let _0x24e4fc = await sock[_0x28a7de][_0x23b434(0xfc)](),
            _0x57b512 = Object[_0x23b434(0x117)](_0x24e4fc)[_0x23b434(0x14b)](0x0)[_0x23b434(0x104)](_0x538ede => _0x538ede[0x1]);
        return _0x57b512;
    } catch (_0x3fdbfb) {
        return ![];
    }
}
async function isExist(_0xb342b5, _0x5588c5) {
    const _0x55681a = _0x53cdf0;
    if (typeof sock[_0xb342b5] === _0x55681a(0x111)) {
        const _0x2bc24b = await connectWaBeforeSend(_0xb342b5);
        if (!_0x2bc24b) return ![];
    }
    try {
        if (_0x5588c5[_0x55681a(0x105)](_0x55681a(0x115))) return !![];
        else {
            const [_0x2d15f3] = await sock[_0xb342b5]['onWhatsApp'](_0x5588c5);
            return _0x2d15f3;
        }
    } catch (_0x4df1b9) {
        return ![];
    }
}
async function getPpUrl(_0x7b397f, _0x2e1753, _0x51b875) {
    const _0x26c4fb = _0x53cdf0;
    let _0x115119;
    try {
        return _0x51b875 ? _0x115119 = await sock[_0x7b397f]['profilePictureUrl'](_0x2e1753, 'image') : _0x115119 = await sock[_0x7b397f][_0x26c4fb(0x122)](_0x2e1753), _0x115119;
    } catch (_0x4426c9) {
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png';
    }
}
async function deleteCredentials(_0x5c54ee, _0x1f0c56 = null) {
    const _0x4cb3fa = _0x53cdf0;
    _0x1f0c56 !== null && _0x1f0c56[_0x4cb3fa(0x11e)](_0x4cb3fa(0x101), {
        'token': _0x5c54ee,
        'message': _0x4cb3fa(0x119)
    });
    try {
        if (typeof sock[_0x5c54ee] === _0x4cb3fa(0x111)) {
            const _0x11f88b = await connectWaBeforeSend(_0x5c54ee);
            _0x11f88b && (sock[_0x5c54ee][_0x4cb3fa(0x135)](), delete sock[_0x5c54ee]);
        } else sock[_0x5c54ee][_0x4cb3fa(0x135)](), delete sock[_0x5c54ee];
        return delete qrcode[_0x5c54ee], clearInterval(intervalStore[_0x5c54ee]), setStatus(_0x5c54ee, 'Disconnect'), _0x1f0c56 != null && (_0x1f0c56[_0x4cb3fa(0x11e)]('Unauthorized', _0x5c54ee), _0x1f0c56['emit'](_0x4cb3fa(0x101), {
            'token': _0x5c54ee,
            'message': _0x4cb3fa(0x10a)
        })), fs['existsSync'](_0x4cb3fa(0x100) + _0x5c54ee) && fs[_0x4cb3fa(0x13b)]('./credentials/' + _0x5c54ee, {
            'recursive': !![],
            'force': !![]
        }, _0x5580c4 => {
            if (_0x5580c4) console['log'](_0x5580c4);
        }), {
            'status': !![],
            'message': _0x4cb3fa(0xf8)
        };
    } catch (_0xd58e2d) {
        return console[_0x4cb3fa(0x12a)](_0xd58e2d), {
            'status': !![],
            'message': _0x4cb3fa(0x13e)
        };
    }
}
async function getChromeLates() {
    const _0x2b49a9 = _0x53cdf0,
        _0x324322 = await axios[_0x2b49a9(0x12f)]('https://versionhistory.googleapis.com/v1/chrome/platforms/linux/channels/stable/versions');
    return _0x324322;
}
function clearConnection(_0x3c7716) {
    const _0x5c878a = _0x53cdf0;
    clearInterval(intervalStore[_0x3c7716]), delete sock[_0x3c7716], delete qrcode[_0x3c7716], setStatus(_0x3c7716, _0x5c878a(0xfa)), fs['existsSync'](_0x5c878a(0x100) + _0x3c7716) && (fs[_0x5c878a(0x13b)](_0x5c878a(0x100) + _0x3c7716, {
        'recursive': !![],
        'force': !![]
    }, _0x41de93 => {
        const _0x487767 = _0x5c878a;
        if (_0x41de93) console[_0x487767(0x12a)](_0x41de93);
    }), console[_0x5c878a(0x12a)]('credentials/' + _0x3c7716 + _0x5c878a(0x13d)));
}
async function initialize(_0x3fcd0a, _0x1d5a38) {
    const _0x198e90 = _0x53cdf0,
        {
            token: _0x5bc86b
        } = _0x3fcd0a[_0x198e90(0x11f)];
    if (_0x5bc86b) {
        const _0x15041b = require('fs'),
            _0x4ee774 = './credentials/' + _0x5bc86b;
        if (_0x15041b[_0x198e90(0x14e)](_0x4ee774)) {
            if (typeof sock[_0x5bc86b] === 'undefined') {
                const _0x2b524c = await connectWaBeforeSend(_0x5bc86b);
                return _0x2b524c ? _0x1d5a38[_0x198e90(0xf3)]({
                    'status': !![],
                    'message': _0x5bc86b + _0x198e90(0x128)
                }) : _0x1d5a38['send']({
                    'status': ![],
                    'message': _0x5bc86b + ' Connection failed,please scan first'
                });
            }
            return _0x1d5a38[_0x198e90(0xf3)]({
                'status': !![],
                'message': _0x5bc86b + _0x198e90(0x128)
            });
        }
        return _0x1d5a38[_0x198e90(0xf3)]({
            'status': ![],
            'message': _0x5bc86b + _0x198e90(0x11b)
        });
    }
    return _0x1d5a38[_0x198e90(0xf3)]({
        'status': ![],
        'message': 'Wrong Parameterss'
    });
}
module[_0x53cdf0(0x109)] = {
    'connectToWhatsApp': connectToWhatsApp,
    'sendText': sendText,
    'sendMedia': sendMedia,
    'sendButtonMessage': sendButtonMessage,
    'sendTemplateMessage': sendTemplateMessage,
    'sendListMessage': sendListMessage,
    'isExist': isExist,
    'getPpUrl': getPpUrl,
    'fetchGroups': fetchGroups,
    'deleteCredentials': deleteCredentials,
    'sendMessage': sendMessage,
    'initialize': initialize,
    'connectWaBeforeSend': connectWaBeforeSend
};