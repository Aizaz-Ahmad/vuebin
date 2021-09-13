<template>
  <teleport to="body">
    <div class="tool-box">
      <div class="text-logo">&lt;<b>vue</b><span>bin /</span>&gt;</div>
      <div class="tool-items d-flex">
        <VueCustomTooltip
          label="Save (Ctrl + S)"
          position="is-bottom"
          :active="!disableSaveOption"
        >
          <i
            @click="$emit('save-file')"
            :class="{ 'event-none': disableSaveOption }"
          >
            <img src="../assets/svg/save.svg" alt="save logo" /></i
        ></VueCustomTooltip>
        <VueCustomTooltip
          label="New (Ctrl + F)"
          position="is-bottom"
          :active="!disableNewOption"
        >
          <i
            @click="$emit('new-file')"
            :class="{ 'event-none': disableNewOption }"
            ><img src="../assets/svg/post_add.svg" alt="New File logo" /></i
        ></VueCustomTooltip>
        <VueCustomTooltip
          label="Duplicate and Edit (Ctrl + D)"
          position="is-left"
          :active="!disableDuplicateOption"
        >
          <i
            @click="$emit('duplicate-file')"
            :class="{ 'event-none': disableDuplicateOption }"
          >
            <img src="../assets/svg/edit_note.svg" alt="Edit File logo" /> </i
        ></VueCustomTooltip>
        <VueCustomTooltip
          label="Prettify Code (Ctrl + P)"
          position="is-left"
          :active="!disablePrettifyOption"
        >
          <i
            @click="$emit('share-twitter')"
            :class="{ 'event-none': disablePrettifyOption }"
            ><img src="../assets/svg/auto_fix.svg" alt="Pretiffy logo" /></i
        ></VueCustomTooltip>
        <VueCustomTooltip
          label="Share to Twitter (Ctrl + G)"
          position="is-left"
          :active="!disableTwitterOption"
        >
          <i
            @click="$emit('share-twitter')"
            :class="{ 'event-none': disableTwitterOption }"
            ><img
              src="../assets/svg/twitter.svg"
              alt="twitter logo"
              width="24" /></i
        ></VueCustomTooltip>
      </div>
    </div>
  </teleport>
</template>

<script>
  import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip';
  import { onMounted, onUnmounted } from 'vue';
  const emits = [
    'new-file',
    'save-file',
    'share-twitter',
    'duplicate-file',
    'prettify-code',
  ];
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
      disablePrettifyOption: {
        default: false,
        type: Boolean,
      },
    },
    emits,
    setup(props, { emit }) {
      const emitKeys = ['KeyF', 'KeyS', 'KeyG', 'KeyD', 'KeyP'];
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
  abbr {
    cursor: pointer;
  }
  .event-none {
    pointer-events: none;
    /* color: rgba(255, 255, 255, 0.426); */
    opacity: 0.5;
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

  img {
    fill: white;
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
    padding: 10px;
    background-color: #298b5f;
    justify-content: space-between;
  }
</style>
