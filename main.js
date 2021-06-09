//

const root = new Vue ({
    el: "#root",
    data: {
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        emails: []
    },
    methods: {},
    mounted(){
        for (let i=0; i<10; i++){
            axios
            .get(this.url)
            .then(response => {
                console.log(response);
                //this.emails = response.data.response;
                this.emails.push(response.data.response)
            })
        }
    }
})