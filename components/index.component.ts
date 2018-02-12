// Index Component

const Blog = new Vue(
    {
        el: "#index",
        data: {
            objects: {},
        },
        created () {

            // Retrieve All Storage Objects

            fetch("/index/storage/objects.json")
            .then(response => response.json())
            .then(json => {
                this.objects = json.objects
            })
        }
    })
