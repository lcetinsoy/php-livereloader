var LiveReloader = function (userOptions) {

      var options = {
        serverPath: 'server-livereaload.php',
        pollFrequency: 1000,
        foldersToWatch: [
          './',
          '../src',
          '../vendor',
          '../app',

        ],
        extensions: [
          'php',
          'html.twig',
          'css',
          'yml',
          'xml'

        ]

      }

    $.merge(options, userOptions)

    this.serverPath = options.serverPath
    this.foldersToWatch = options.foldersToWatch
    this.pollFrequency = options.pollFrequency
    this.extensions = options.extensions

    this.lastLoad = Date.now()
    this.init();

}

LiveReloader.prototype = {
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
                terminal.echo("An error occured please retry.")
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


var reloader = new LiveReloader({

});
