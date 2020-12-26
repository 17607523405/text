<template>
    <div class="home">
        <blue :source="source" @handelAdd="handelAdd" @handelSub="handelSub"/>
        <div class="middle">
            <p>男士：{{manNum}}</p>
            <p>女士：{{womanNum}}</p>
            <p>儿童：{{childNum}}</p>
        </div>
        <div class="counter">

        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import Blue from '../components/Blue'

    export default {
        name: 'Home',
        components: {
            Blue
        },
        data() {
            return {
                manNum: 2, womanNum: 2, childNum: 2,
                source: {
                    man: 'NO34',
                    woman: 'VO34',
                    child: 'EO34',
                    manPrice: 15,
                    womanPrice: 15,
                    childPrice: 7
                }
            }
        },
        methods: {
            handelAdd(manNum, womanNum, childNum) {
                this.manNum = manNum
                this.womanNum = womanNum
                this.childNum = childNum
            },
            handelSub(manNum, womanNum, childNum) {
                this.manNum = manNum
                this.womanNum = womanNum
                this.childNum = childNum
            }
        }
    }
</script>
<style scoped>
    * {
        box-sizing: border-box;
    }

    .home {
        width: 100%;
        height: 800px;
        border: 1px solid red;
    }

    .middle {
        height: 52px;
        display: flex;
        background-color: red;
    }

    .middle > p {
        display: inline-block;
        flex: 1;
    }
    .counter{
    height: 300px;
        background-color: #42b983;
    }
</style>