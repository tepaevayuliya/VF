<template>
  <div class="input-container">
    <input
      type="tel"
      :value="value"
      :placeholder="placeholder"
      @input="$event => { HandleForm($event.target.value) }"
    />
    <p>{{error}}</p>
  </div>
</template>

<script>
export default {
    name: 'my-tel',
    props: {
        placeholder: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        error: {
            type: Object,
            default: null
        }
    },
    methods: {
        HandleForm (data) {
            this.$emit('saytel', { target: 'phone', value: data })
        }
    }
}
</script>

<style scoped>
input {
    color: #2c3e50;
    border-radius: 2em;
    background-color: aliceblue;
    font-size: 1.3em;
    padding: 1em;
    border-color: #2c3e50;
    outline: none;
}

p{
  color: red;
}
</style>
