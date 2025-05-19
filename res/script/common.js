

const game = new Game();

$(document).ready(function() {
    // 初始化页面设置
    const config = localStorageManager.getItem('config');
    for (const key in config) {
        $(`.page-settings input[name="${key}"]`).val(config[key]);
    }

    // 初始化语言选项
    const language = localStorageManager.getItem('config').language;
    const languageIndex = translator.langIndex;
    debugger
    for (const lang of languageIndex) {
        $('#config-language').append(`<option value="${lang.code}">${lang.title}</option>`);
    }
    setTimeout(() => $('#config-language').val(language), 1);
});

$(document).on('click', '#game-start', function() {
    if ($(this).hasClass('game-started')) {
        game.stop();
    } else {
        game.launchAnimation();
    }
});

$(document).on('change', '.page-settings input[type="number"]:not(:out-of-range), .page-settings input[type="text"]:not(:invalid)', function() {
    const name = $(this).attr('name');
    const value = $(this).val();
    const config = localStorageManager.getItem('config');
    config[name] = value;
    localStorageManager.setItem('config', config);
});

$(document).on('input', '#config-language', function() {
    const lang = $(this).val();
    const config = localStorageManager.getItem('config');
    config.language = lang;
    localStorageManager.setItem('config', config);
    location.reload();
});