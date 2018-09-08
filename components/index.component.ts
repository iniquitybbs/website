// Index Component
import * as Vue from "vue/dist/vue"
import * as Vuetify from "vuetify"
Vue.use(Vuetify)

new Vue({
    el: '#index',
    data () {
        return {
            show_broadcasts: true,
            navigation: [
                {
                    title: "Index",
                    url: "/index"
                },
                {
                    title: "Platform",
                    url: "/platform"
                },
                {
                    title: "Account",
                    url: "/account"
                }
            ],
            posts: [
                {
                    title: 'Iniquity BBS 0.0.12 has been released to RubyGems!',
                    author: 'ispyhumanfly +o euphoriabbs.org',
                    content: "I’ll admit there’s been a bit of a lull since my initial creative spree with Iniquity BBS. The first few weeks were on fire, but between December and February not much action. Now, I don’t consider 0.0.12 to be a major release at all. In fact, there’s not a whole lot more to it with respect to the previous few releases. But it’s a step in the right direction. Considerable effort was placed on the build process, and, the ease of installation of Iniquity BBS on both Windows and OSX. Future releases will begin to formalize the IPM package management a bit more, as well as focus on being able to login and create accounts."
                },
                {
                    title: 'Welcome to the Iniquity BBS website.',
                    author: 'ispyhumanfly +o euphoriabbs.org',
                    content: 'Well, after a few months of development on the new Iniquity BBS software, I decided to start working up a simple website for the project. The website code is built on top of my own application framework, Avian, which is available on npmjs.org. There will be numerous updates to this website over the next few weeks.'
                }
            ]
        }
    }
})