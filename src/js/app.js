var Vue = require('vue');
Vue.config.debug = true;
Vue.use(require('vue-resource'));

new Vue({
    el: '#container',
    data: {
        fullRepoName: '',
        username: '',
        repo: ''
    },
    methods: {
        changeRepo: function() {
            var splitData = this.fullRepoName.split('/');
            this.username = splitData[0];
            this.repo = splitData[1];

            console.group("Vue Data");
            console.log("fullRepoName:", this.fullRepoName);
            console.log("username:", this.username);
            console.log("repo:", this.repo);
            console.groupEnd("Vue Data");
        },

        changePath: function(path) {
            this.path = "/" + path
            this.getFiles()
        },

        goBack: function() {
            this.path = this.path.split('/').slice(0, -1).join('/');
            if (this.path === '') this.path = '/';
        
            this.getFiles();
        }
    },
    components: {
        githubFileExplorer: require('./components/github-file-explorer')
    }
});