<template>
    <div>
        <h2>{{ title }}</h2>
        <hr/>
        <div class="quest">
            <div  v-for="(answer, index) in answers" :key="index">
                <div>
                    <input :type="type" :id="index" :value="answer" name="quest" v-model="answ">
                    <label :for="index">{{ answer }}</label>
                </div>
            </div>
            <button class="btn" @click="onClick(answ)" :disabled="flag" :style="validStyle">NEXT</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'type', 'answers', 'questInd'],
    data() {
        return {
            answ: [],
            flag: true
        }
    },
    watch: {
        answ(newValue) {
            if (newValue) {
                this.flag = false;
            }
        }
    },
    computed: {
        validStyle() {
            return this.flag ? 'cursor: not-allowed' : 'cursor: pointer'
        }
    },
    methods: {
        onClick(answ) {
            this.$emit('onclicknext', answ);
            console.log(answ);
        }
    }
}
</script>

<style scoped>
.btn {
    width: 150px;
    height: 40px;
    font-size: 16px;
    font-family: Arial;
    text-transform: uppercase;
    border-radius: 5px;
    color: white;
    background-color: rgb(249, 185, 24);
    border: none;
    margin-top: 30px;
}
.quest {
    margin: 0 auto;
}
input {
    margin-top: 25px;
}
label {
    font-size: 20px;
}
</style>