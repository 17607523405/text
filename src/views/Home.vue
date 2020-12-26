<template>
    <div class="home">
        <blue :source="source" @handelAdd="handelAdd" @handelSub="handelSub"/>
        <div class="middle">
            <p>男士：{{manNum}}</p>
            <p>女士：{{womanNum}}</p>
            <p>儿童：{{childNum}}</p>
        </div>
        <div class="list">
            <div v-for="i in list">{{i}}</div>
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
                manNum: 1, womanNum: 1, childNum: 1,
                man: 'N',
                woman: 'V',
                child: 'E',
                list: ['N001', 'V002', 'E003'],
                num: 1,
                a: 1,
                b: 1,
                v: 1,
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
        mounted() {
            this.num = this.list.length
        },
        methods: {
            handelAdd(e, manNum, womanNum, childNum) {
                this.manNum = manNum
                this.womanNum = womanNum
                this.childNum = childNum
                if (e === 'man') {
                    this.a++
                    this.num++
                    let str = this.man + this.getStr(this.num)
                    console.log(str)
                    this.list.push(str)
                } else if (e === 'woman') {
                    this.b++
                    this.num++
                    let str = this.woman + this.getStr(this.num)
                    console.log(str)
                    this.list.push(str)
                } else if (e === 'child') {
                    this.v++
                    this.num++
                    let str = this.child + this.getStr(this.num)
                    console.log(str)
                    this.list.push(str)
                }
            },
            handelSub(e, manNum, womanNum, childNum) {
                this.manNum = manNum
                this.womanNum = womanNum
                this.childNum = childNum

                if (e === 'man') {
                    this.num > 0 ? this.num-- : ''
                    let str
                    str = this.man + this.getStr(this.num)
                    this.a > 0 ? this.list.splice(this.list.indexOf(str), 1) : ''
                    this.a--
                } else if (e === 'woman') {
                    this.num > 0 ? this.num-- : ''
                    let str = this.woman + this.getStr(this.num)
                    this.b > 0 ? this.list.splice(this.list.indexOf(str), 1) : ''
                    this.b--
                } else if (e === 'child') {
                    this.num > 0 ? this.num-- : ''
                    let str = this.child + this.getStr(this.num)
                    this.v > 0 ? this.list.splice(this.list.indexOf(str), 1) : ''
                    this.v--
                }
            },
            getStr(num) {
                let a = ''
                if (num > 0 && num < 10) {
                    a = "00" + num
                } else if (num <= 100) {
                    a = '0' + num
                } else {
                    a = num
                }
                return a
            },
        }
    }
</script>
<style scoped>
    * {
        box-sizing: border-box;
    }

    .home {
        width: 600px;
        height: 800px;
        border: 1px solid red;
    }

    .middle {
        height: 52px;
        display: flex;
        background-color: red;
    }

    .list {
        width: 600px;
        background-color: #42b983;
        padding: 12px;
    }

    .list > div {
        display: inline-block;
        font-size: 24px;
        padding: 12px;
    }

    .middle > p {
        display: inline-block;
        flex: 1;
    }
</style>