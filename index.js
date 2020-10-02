// Checks API example
// See: https://developer.github.com/v3/checks/ to learn more

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */


module.exports = app => {
    app.on('pull_request.opened', check)

    async function check(context) {
        const https = require('https');
        const fetch = require('node-fetch');
        const headers = {
            "User-Agent": "Chinmay-KB"
        };
        const issues_api_prefix = 'https://api.github.com/repos/';
        const issues_api_suffix = '/issues?state=open'
        const pr = context.payload.pull_request;
        const repo = context.payload.repository.full_name;
        const pr_number = pr.number;
        const sender = pr.user.login;
        const semi_url = '/repos/' + pr + issues_api_suffix;
        const issues_url = issues_api_prefix + repo + issues_api_suffix;
        let flag = true;
        // var options = {
        //     hostname: 'api.github.com',
        //     port: 443,
        //     path: encodeURIComponent(semi_url),
        //     method: 'GET',
        //     headers: { 'User-Agent': 'Chinmay-KB' }
        // }

        fetch(issues_url).then((res) => res.json()).then((data) => {
            for (var i = 0; i < data.length; i++) {
                var issue = data[i];
                if (issue['assignees'] != null) {
                    if (issue['assignees'].length != 0) {
                        for (var j = 0; j < issue['assignees'].length; j++) {
                            if (issue['assignees'][j]['login'] == sender) {
                                flag = false;
                                break;
                            }

                        }
                    }
                }

            }

            const params = context.issue({ body: 'Congratulations to @' + sender + ' towards his contribution to spamtoberfest!! ' });

            if (flag) { //TODO: Change to new implementation
                context.github.issues.addLabels(context.issue({
                    labels: ['spam', 'spamtoberfest', 'invalid', 'spamprbot-reject']
                }));
                // context.github.issues.createComment(params);

            } else {
                context.github.issues.createComment(context.issue({ body: "This pull request seems genuine" }));
                context.github.issues.addLabels(context.issue({
                    labels: ['spamprbot-approved']
                }));
            }
        });
        // https.request(options, (resp) => {
        //     let data = '';
        //     resp.on('data', (chunk) => {
        //         data += chunk;
        //     });
        //     // The whole response has been received. Print out the result.
        //     resp.on('end', () => {
        //         context.log.info(data);
        //         for (var i = 0; i < data.length; i++) {
        //             var issue = data[i];
        //             if (issue['assignees'] != null) {
        //                 if (issue['assignees'].length != 0) {
        //                     for (var j = 0; j < issue['assignees'].length; j++) {
        //                         if (issue['assignees'][j]['login'] == sender) {
        //                             flag = false;
        //                             break;
        //                         }

        //                     }
        //                 }
        //             }

        //         }

        //         const params = context.issue({ body: 'Congratulations to @' + sender + ' towards his contribution to spamtoberfest!! ' });

        //         if (flag) { //TODO: Change to new implementation
        //             context.github.issues.addLabels(context.issue({
        //                 labels: ['spam', 'spamtoberfest']
        //             }));
        //             // context.github.issues.createComment(params);

        //         } else
        //             context.github.issues.createComment(context.issue({ body: "This pull request seems genuine" }));

        //     });

        // }).on("error", (err) => {
        //     console.log("Error: " + err.message);
        // });

    }

    // For more information on building apps:
    // https://probot.github.io/docs/

    // To get your app running against GitHub, see:
    // https://probot.github.io/docs/development/
}