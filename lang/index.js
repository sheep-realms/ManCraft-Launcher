const lang_index = {
    main: "zho-Hans",
    index: [
        {
            code: "zho-Hans",
            code_ietf: "zh-Hans",
            title: "简体中文",
            url: "zho-Hans.js"
        }, {
            code: "zho-Hant-HK",
            code_ietf: "zh-Hant-HK",
            title: "繁體中文（香港特別行政區）",
            url: "zho-Hant-HK.js"
        }, {
            code: "zho-Hant-TW",
            code_ietf: "zh-Hant-TW",
            title: "繁體中文（臺灣地區）",
            url: "zho-Hant-TW.js"
        }, {
            code: "zho-Meme",
            code_ietf: "zh-Meme",
            title: "梗体中文（天朝）",
            url: "zho-Meme.js"
        }, {
            code: "zho-Mars",
            code_ietf: "zh-Mars",
            title: "伙星☆芠",
            url: "zho-Mars.js"
        }, {
            code: "zho-Emoji",
            code_ietf: "zh-Emoji",
            title: "🤡🐘🌸",
            url: "zho-Emoji.js"
        }, {
            code: "eng",
            code_ietf: "en",
            title: "English",
            url: "eng.js"
        }
    ]
};

echoLiveSystem.registry.setRegistryValue('system', 'main_language', lang_index.main);
echoLiveSystem.registry.loadRegistry('language_index', 'code', lang_index.index);