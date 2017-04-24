"use strict";

import CONFIG from './../config';

export const LANGUAGES = {
    en_US: {
        name: 'english',
        translators: [
            // {name: '', icon: '', link: '',},
        ],
        translations: Object.assign(...Object.values(require('./en_US.json'))),
    },
    pl_PL: {
        name: 'polski',
        translators: [
            {name: 'MichGrabowski', icon: 'twitter', link: 'https://twitter.com/MichGrabowski',},
        ],
        translations: Object.assign(...Object.values(require('./pl_PL.json'))),
    },
    ru_RU: {
        name: 'русский',
        translators: [
            {name: '/u/FixKun', icon: 'reddit-alien', link: 'https://www.reddit.com/user/FixKun',},
            {name: 'BurzZzum', icon: 'twitter', link: 'https://twitter.com/BurzZzum',},
        ],
        translations: Object.assign(...Object.values(require('./ru_RU.json'))),
    },
    hu_HU: {
        name: 'magyar',
        translators: [
            {name: '/u/skagx', icon: 'reddit-alien', link: 'https://www.reddit.com/user/skagx',},
        ],
        translations: Object.assign(...Object.values(require('./hu_HU.json'))),
    },
};

export default function (key, defaultReturn = null) {
    if (defaultReturn === null) {
        defaultReturn = `_${key}_`;
    }

    if (!LANGUAGES[CONFIG.LANGUAGE]) {
        return LANGUAGES.en_US.translations[key] || defaultReturn;
    }

    return LANGUAGES[CONFIG.LANGUAGE].translations[key] || defaultReturn;
};
