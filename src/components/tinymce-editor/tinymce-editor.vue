<template>
  <div class="tinymce-editor">
    <editor
      :id="tinymce_id"
      v-model="my_value"
      :init="init"
      :disabled="disabled"
    >
    </editor>
  </div>
</template>
<script>
//ベーシック
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
//テーマ
import 'tinymce/themes/silver/theme'
//利用するプラグイン
//icon design
import 'tinymce/icons/default'
//import プラグイン
export default {
  components: {
    Editor
  },
  props: {
    target_name: String,
    tinymce_id: {
      type: String,
      default: function() {
        return (
          'vue-tinymce-' +
          +new Date() +
          ((Math.random() * 1000).toFixed(0) + '')
        )
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    //set value for v-model
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editor: null,
      //初期化設定
      init: {
        inline: false, //インラインモード設定
        language_url: './tinymce/langs/ja.js', //langファイル
        language: 'ja', //UI言語
        height: 150, //入力欄の高さ
        skin_url: './tinymce/skins/ui/my-oxide-ui', //UIのデサント
        content_css: './tinymce/skins/content/default/myContent.css' //入力欄のデサント
      },
      my_value: this.value
    }
  },
  mounted() {
    let data_id = `[data-id="${this.tinymce_id}"]`
    this.editor = document.querySelector(data_id)
  },
  methods: {},
  watch: {
    //テキスト内容変換するため
    value(val) {
      this.my_value = val
    },
    my_value(val, oldVal) {
      console.log('my_value val', val, 'old', oldVal)
      this.$emit('input', val)
    }
  }
}
</script>
<style scoped></style>
