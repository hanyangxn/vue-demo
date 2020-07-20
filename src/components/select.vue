<template>
  <div>
    <Card>
      <tree-select
        :options="options"
        placeholder="请选择分类..."
        v-model="value"
      />
    </Card>
    <Card>
      {{ value }}
    </Card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TreeSelect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  name: 'select',
  components: { TreeSelect },
  data () {
    return {
      value: 0,
      options: []
    }
  },
  methods: {
    ...mapActions([
      'albumCategoryList'
    ]),

    queryCategoryList () {
      this.albumCategoryList({
        parentId: 0,
        all: 1
      }).then((res) => {
        console.log(res.fields)
        if (res.status === 1) {
          let result = []
          const children = this.getTree(res.fields)
          let obj = {}
          obj.label = '顶级分类'
          obj.id = 0
          obj.children = children
          result.push(obj)
          this.options = result
        } else {
          this.$Notice.error({
            title: '错误',
            desc: res.msg
          })
        }
      }).catch(error => {
        this.$Notice.error({
          title: '错误',
          desc: '网络连接错误'
        })
        console.log(error)
      })
    },

    getTree (tree = []) {
      let arr = []
      if (tree.length !== 0) {
        tree.forEach(item => {
          let obj = {}
          obj.label = item.categoryName
          obj.id = item.id
          if (item.child === 1) {
            obj.children = this.getTree(item.children)
          }
          arr.push(obj)
        })
      }
      return arr
    }
  },
  mounted () {
    this.queryCategoryList()
  }
}
</script>

<style scoped>

</style>
