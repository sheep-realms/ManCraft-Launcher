class Game {
    constructor() {
        this.config = {
            window_size: {
                width: 1280,
                height: 720
            }
        };
        this.window = undefined;
        this.timer = {
            checkWindowClose: undefined
        }
    }

    launchAnimation() {
        $('#game-start > .title').text('正在启动...');
        $('#game-start').attr('disabled', 'disabled');

        setTimeout(() => {
            $('#game-start > .title').text('游戏已启动');
            $('#game-start').removeAttr('disabled');
            $('#game-start').addClass('game-started');
            this.launch();

            setTimeout(() => {
                $('#game-start > .title').text('结束游戏');
            }, 3000);
        }, 1000);
    }

    launch() {
        const { width, height } = this.config.window_size;
        
        // 当前浏览器窗口相对于屏幕的位置
        const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

        // 当前浏览器窗口的尺寸
        const windowWidth = window.outerWidth || document.documentElement.clientWidth;
        const windowHeight = window.outerHeight || document.documentElement.clientHeight;

        // 计算新窗口的位置
        const left = dualScreenLeft + (windowWidth - width) / 2;
        const top = dualScreenTop + (windowHeight - height) / 2;

        this.window = window.open('https://classic.minecraft.net/', '_blank', `popup=true,width=${width},height=${height},top=${top},left=${left}`);

        // 处理新窗口未打开的情况
        if (this.window === null) {}

        // 监听新窗口关闭事件
        this.timer.checkWindowClose = setInterval(() => {
            if (this.window.closed) {
                clearInterval(this.timer.checkWindowClose);
                this.stop();
            }
        }, 500);
    }

    stop() {
        if (this.window === undefined) return;
        this.window.close();
        this.window = undefined;
        $('#game-start > .title').text('正在结束游戏...');
        $('#game-start').attr('disabled', 'disabled');
        $('#game-start').removeClass('game-started');

        setTimeout(() => {
            $('#game-start > .title').text('启动游戏');
            $('#game-start').removeAttr('disabled');
        }, 1000);
    }
}