import * as Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {
        breed: String,
        age: Number,
        owner: String
    }
})
export default class Player extends Vue {
    breed: string
    age: number
    owner: string

    description: string = ""

    onClick(): void {
        window.alert(this.description);
    }

    mounted() {
        this.description = "I have a " + this.breed + 
                            ". It is " + this.age + "years old.";
    }
}
