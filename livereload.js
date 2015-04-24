
var Reloadr = function (options) {

    this.serverPath = options.serverPath || "index.php"
    this.foldersToWatch = options.foldersToWatch
    this.pollFrequency = options.pollFrequency || 1000
    this.lastLoad = Date.now()
    this.extensions = options.extensions
    this.init();
}

Reloadr.prototype = {
    init: function () {
        var me = this;
        this.polling = setInterval(function () {

            me.poll()
        }, this.pollFrequency);

    },
    poll: function () {
        var me = this
        $.ajax({
            url: this.serverPath,
            type: 'POST',
            data: {
                foldersToWatch: this.foldersToWatch,
                extensions: this.extensions
            },
            success: function (data) {
                me.handleResponse(data)
            },
            error: function () {
                terminal.echo("An error occured please retry or send me a mail. Sorry.")
            }
        });

    },
    handleResponse: function (data) {

        if (data.last * 1000 > this.lastLoad) {
            location.reload()
            clearInterval(this.polling)
        }

    },
    reload: function () {

        location.reload();
    },
}


reload = new Reloadr({
    serverPath: '/reloadr.php',
    foldersToWatch: [
        '../src',
        './',
        '../app'
    ],
    extensions: [
        'php',
        'css',
        'html.twig',
        'yml'
    ]
});

