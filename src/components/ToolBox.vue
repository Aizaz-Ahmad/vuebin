<template>
  <teleport to="body">
    <div class="tool-box">
      <div class="text-logo">&lt;<b>vue</b><span>bin /</span>&gt;</div>
      <div class="tool-items d-flex">
        <VueCustomTooltip
          label="Save (Ctrl + S)"
          position="is-bottom"
          abbreviation
          :active="!disableSaveOption"
        >
          <i
            class="far fa-save"
            @click="$emit('save-file')"
            :class="{ 'event-none': disableSaveOption }"
          ></i
        ></VueCustomTooltip>
        <VueCustomTooltip
          label="New (Ctrl + F)"
          position="is-bottom"
          abbreviation
          :active="!disableNewOption"
        >
          <i
            class="far fa-file-code"
            @click="$emit('new-file')"
            :class="{ 'event-none': disableNewOption }"
          ></i
        ></VueCustomTooltip>
        <VueCustomTooltip
          label="Duplicate and Edit (Ctrl + D)"
          position="is-left"
          abbreviation
          :active="!disableDuplicateOption"
        >
          <i
            class="far fa-copy"
            @click="$emit('duplicate-file')"
            :class="{ 'event-none': disableDuplicateOption }"
          ></i
        ></VueCustomTooltip>
        <VueCustomTooltip
          label="Share to Twitter (Ctrl + G)"
          position="is-left"
          abbreviation
          :active="!disableTwitterOption"
        >
          <i
            class="fab fa-twitter"
            @click="$emit('share-twitter')"
            :class="{ 'event-none': disableTwitterOption }"
          ></i
        ></VueCustomTooltip>
      </div>
    </div>
  </teleport>
</template>

<script>
  import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip';
  import { onMounted, onUnmounted } from 'vue';
  const emits = ['new-file', 'save-file', 'share-twitter', 'duplicate-file'];
  export default {
    name: 'ToolBox',
    components: {
      VueCustomTooltip,
    },
    props: {
      disableNewOption: {
        default: false,
        type: Boolean,
      },
      disableSaveOption: {
        default: false,
        type: Boolean,
      },
      disableTwitterOption: {
        default: false,
        type: Boolean,
      },
      disableDuplicateOption: {
        default: false,
        type: Boolean,
      },
    },
    emits,
    setup(props, { emit }) {
      const emitKeys = ['KeyF', 'KeyS', 'KeyG', 'KeyD'];
      /**@param {KeyboardEvent} event */
      const bindEmits = event => {
        if (event.ctrlKey) {
          let index = emitKeys.indexOf(event.code);
          if (index == -1) return;
          event.preventDefault();
          if (!Object.values(props)[index]) emit(emits[index], emits[index]);
        }
      };
      onMounted(() => {
        document.addEventListener('keydown', bindEmits);
      });
      onUnmounted(() => {
        document.removeEventListener('keydown', bindEmits);
      });
    },
  };
</script>

<style scoped>
  .event-none {
    pointer-events: none;
    color: rgba(255, 255, 255, 0.426);
  }
  .tool-box {
    width: 200px;
    position: fixed;
    top: 0;
    right: 0;
    text-align: center;
    z-index: 1;
    border-radius: 0px 0px 5px 5px;
  }

  i {
    color: rgba(255, 255, 255, 0.836);
    font-size: 20px;
    cursor: pointer;
  }
  i:hover {
    transition: color 0.2s linear;
    color: white;
  }
  .text-logo {
    font-style: italic;
    font-family: monospace;
    letter-spacing: 2px;
    font-size: 20px;
    user-select: none;
    padding: 10px 0px;
    line-height: 1;
    color: #4fc08d;
    background-color: #1e2023;
    cursor: pointer;
  }
  .text-logo:hover {
    transition: background-color 0.2s linear;
    background-color: #141618;
  }
  .text-logo span {
    color: white;
  }
  .tool-items {
    padding: 10px 30px;
    background-color: #298b5f;
    justify-content: space-between;
  }
</style>
