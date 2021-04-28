<template>
<div>
  <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)">
    <app-link :to="reslovePath(onlyOneChild.path)">
      <el-menu-item :index="reslovePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown': !isNest}">
        <item :icon="onlyOneChild.meta.icon || item.meta.icon" :title="onlyOneChild.meta.title"></item>
      </el-menu-item>
    </app-link>
  </template>
  <el-submenu v-else :index="reslovePath(item.path)" popper-append-to-body>
    <template slot="title">
      <item :icon="item.meta.icon" :title="item.meta.title"></item>
    </template>
    <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :is-nest="true" :base-path="reslovePath(child.path)"></sidebar-item>
  </el-submenu>
</div>
</template>
<script>
import path from 'path'
import AppLink from './Link'
import Item from './Item'
export default {
  name: 'SidebarItem',
  components: { AppLink, Item },
  props: {
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      // 如果只有一个字节点
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = {...parent, path: '', noShowingChildren: true}
        return true
      }
      return false
    },
    reslovePath(routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
<style scoped>

</style>