echoLiveSystem.registry.init([
    {
        name: 'icon',
        unique_key: 'name',
        default_data: {
            name: 'missingno',
            content: ''
        }
    }, {
        name: 'language',
        unique_key: 'lang.code_iso_639_3',
        default_data: {
            lang: {
                code_iso_639_3: 'zho-Hans',
                code_ietf: 'zh-Hans',
                title: 'missingno'
            }
        }
    }, {
        name: 'language_index',
        unique_key: 'code',
        default_data: {
            code: 'zho-Hans',
            code_ietf: 'zh-Hans',
            title: 'missingno',
            url: 'missingno.js'
        }
    }, {
        name: 'system'
    }
]);