<template>
    <div class="wrapper">
        <div class="sample">
            <transition name="slide" mode="out-in">
                <app-quest v-if="flag" :type="current.type" :title="current.title" :answers="current.answers" :key="questNum"
                    :questInd="questNum" :value="current.value" @onclicknext="getAnswer(questNum, $event)">
                </app-quest>
                <app-res v-else :questions="questions" :answers="questAnsw">
                </app-res>
            </transition>
        </div>
    </div>
</template>

<script>
import AppQuest from './components/AppQuest';
import AppRes from './components/AppRes';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            questNum: 0,
            questAnsw: [],
            flag: true
        }
    },
    created() {
        for (let i = 0; i < this.questions.length; i++) {
            this.questAnsw.push(false);
        }
    },
    methods: {
        getAnswer(index, data) {
            if (index === this.questions.length - 1) {
                this.flag = false;
                this.questAnsw[index] = data;
                return;
            }
            console.log(this.flag);
            this.questAnsw[index] = data;
            this.questNum++;
            console.log(this.questAnsw[index]);
        }
    },
    computed: {
        ...mapGetters([
            'questions'
        ]),

        current() {
            return this.questions[this.questNum];
        }
    },
    components: {
        AppQuest,
        AppRes
    }
}
</script>

<style>
#app {
    font-family: Arial;
    text-align: center;
    color: #5e5e5e;
    margin-top: 60px;
}
.slide-enter {}

.slide-enter-active {
    animation: slideIn 0.25s;
}

.slide-enter-to {}

.slide-leave {}

.slide-leave-active {
    animation: slideOut 0.25s;
}

.slide-leave-to {}

@keyframes slideIn {
    from {
        transform: translateY(50vw);
    }

    to {
        transform: translateY(0px);
    }
}

@keyframes slideOut {
    from {
        transform: translateY(0px);
    }

    to {
        transform: translateY(-50vw);
    }
}
</style>
