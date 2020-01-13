export default {
    name: 'my-input',
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
            this.$emit('say', { target: 'name', value: data })
            this.$emit('says', { target: 'surname', value: data })
        }
    }
}
