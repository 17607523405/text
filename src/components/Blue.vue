<template>
    <div class="blue">
        <div class="li">
            <div>男士</div>
            <div>￥{{getManPrice}}</div>
            <div class="numAction">
                <div @click="handelSub('man')">-</div>
                <div>{{manNum}}</div>
                <div @click="handelAdd('man')">+</div>
            </div>
        </div>

        <div class="li">
            <div>女士</div>
            <div>￥{{getWomanPrice}}</div>
            <div class="numAction">
                <div @click="handelSub('woman')">-</div>
                <div>{{womanNum}}</div>
                <div @click="handelAdd('woman')">+</div>
            </div>
        </div>

        <div class="li">
            <div>儿童</div>
            <div>￥{{getChildPrice}}</div>
            <div class="numAction">
                <div @click="handelSub('child')">-</div>
                <div>{{childNum}}</div>
                <div @click="handelAdd('child')">+</div>
            </div>
        </div>
        <!--        <div>{{source}}</div>-->
    </div>
</template>

<script>
    export default {
        name: "Blue",
        props: {
            source: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                manNum: 1,
                womanNum: 1,
                childNum: 1,
            }
        },
        computed: {
            getManPrice() {
                return this.manNum * this.source.manPrice
            },
            getWomanPrice() {
                return this.womanNum * this.source.womanPrice
            },
            getChildPrice() {
                return this.childNum * this.source.childPrice
            }
        },
        methods: {
            handelSub(e) {
                if (e === 'man') {
                    this.manNum > 0 ? this.manNum-- : ''
                } else if (e === 'woman') {
                    this.womanNum > 0 ? this.womanNum-- : ''
                } else if (e === 'child') {
                    this.childNum > 0 ? this.childNum-- : ''
                }
                this.$emit('handelSub',e, this.manNum, this.womanNum,this.childNum,)
            },
            handelAdd(e) {
                if (e === 'man') {
                    this.manNum++
                } else if (e === 'woman') {
                    this.womanNum++
                } else if (e === 'child') {
                    this.childNum++
                }
                this.$emit('handelAdd', e,this.manNum, this.womanNum,this.childNum,)
            },

        }

    }
</script>

<style scoped>
    .blue {
        /*width: 600px;*/
        width: 100%;
        height: 150px;
        /*background-color: blue;*/
    }

    .li {
        display: flex;
        height: 50px;
        line-height: 50px;
        background-color: cornflowerblue;
    }

    .li > div {
        width: 180px;
    }

    .li > .numAction {
        width: 240px;
        line-height: 38px;
        font-size: 24px;
        margin: 6px;
        display: flex;
        background-color: grey;
    }

    .numAction > div {
        flex: 1;
    }
</style>