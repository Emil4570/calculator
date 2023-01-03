const app = Vue.createApp({
    data() {
        return {
            message: "Очищаем историю",
            text:'',
            history:[]
        }
    },
    methods:{
        equal(){
            let text = this.text.replace('^','**')
            try{
                this.history.push(`${this.text}=${eval(text)}`)
                this.text = `${eval(text)}`
            }
            catch (e){
                alert("Ошибка синтаксиса")
                console.log(e)
                this.text=''
            }
        },
        delet(){
            this.text = this.text.slice(0,-1)
        },
        history_clear(){
            this.history = []
}
    }
}).mount('#app')

var block = document.getElementById("block");
block.scrollTop = block.scrollHeight;