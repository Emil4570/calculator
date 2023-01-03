const app = Vue.createApp({
    data() {
        return {
            message: "Очищаем историю",
            text: '',
            history: [],
            eq: false
        }
    },
    methods:{
        equal(){
            if (this.text==='sosiska'){
                window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQhttps://www.youtube.com/watch?v=dQw4w9WgXcQ'
                this.text = ""
                return;
            }
            let text = this.text.replace('^','**')
            try{
                if(this.text === `${eval(text)}`){
                    this.text = eval(text)
                    this.eq = true
                    return
                }
                else if(this.history.reverse()[0] === `${this.text}=${eval(text)}`){
                    this.text = eval(text)
                    this.eq = true
                    return;
                }
                this.history.push(`${this.text}=${eval(text)}`)
                this.text = eval(text)
                this.eq = true
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
        },
        addVis(num){
            if (this.eq){
                this.text = num
                this.eq = false
            }
            else{
            this.text += num}
        },
        addSpec(num){
            this.eq = false
            this.text+=num
        },
        clea(){
            this.text = ""
            this.eq = false
        }
    }
}).mount('#app')

var block = document.getElementById("block");
block.scrollTop = block.scrollHeight;