new Vue(
    {
        el: "#index",
        data: {
            storage: {},
            images: ['https://s3.amazonaws.com/fs.bitcoinmagazine.com/img/images/BitcoinPrice3.width-800.jpg', 'https://www.bitcoin.com/wp-content/uploads/2017/03/what-is-bitcoin-story.jpg', 'https://fortunedotcom.files.wordpress.com/2016/09/bitcoin.gif', 'http://bitcoinist.com/wp-content/uploads/2018/01/as-monero.jpg', 'https://www.financemagnates.com/wp-content/uploads/2016/12/monero-zcash3.jpg'],
            currentNumber: 0,
            timer: null
        },

        mounted: () => {
           let index = this;
            $.ajax({
                url: "/index/storage/objects.json",
                method: 'GET',
                success: (items) => {
                    index.storage = items;
                },
                error: function (error) {
                    console.log(error);
                }
            });
        },
        methods: {
            startRotation: function() {
                this.timer = setInterval(this.next, 7000);
            },

            next: function() {
                this.currentNumber += 1
            },

        },
        created () {
            this.startRotation();
        }


})