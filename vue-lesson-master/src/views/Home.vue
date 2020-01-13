<template>
  <div class="home">
    <form>
      <img alt="Vue log" src="../assets/log.png">
      <MyLabel msg="Фамилия"/>
      <my-input
        @says="data => parentHandleForm(data)"
        :placeholder="form.surname.placeholder"
        :error="form.surname.error"
        :value="form.surname.value"
      />
      <MyLabel msg="Имя"/>
      <my-input
        @say="data => parentHandleForm(data)"
        :placeholder="form.name.placeholder"
        :error="form.name.error"
        :value="form.name.value"
      />
      <MyLabel msg="Телефон"/>
      <my-tel
        @saytel="data => parentHandleForm(data)"
        :placeholder="form.phone.placeholder"
        :error="form.phone.error"
        :value="form.phone.value"
      />
      <MyLabel msg="e-mail"/>
      <my-email
        @sayemail="data => parentHandleForm(data)"
        :placeholder="form.email.placeholder"
        :error="form.email.error"
        :value="form.email.value"
      />
      <button class="submit" v-on:click="CheckForm">Оправить</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import MyLabel from '@/components/ui/my-label.vue'
import MyInput from '@/components/ui/my-input.vue'
import MyTel from '@/components/ui/my-tel.vue'
import MyEmail from '@/components/ui/my-email.vue'

export default {
    name: 'home',
    data () {
        return {
            form: {
                name: {
                    placeholder: 'Введите имя',
                    value: '',
                    validator: {
                        maxLength: 255
                    },
                    error: null
                },
                surname: {
                    placeholder: 'Введите фамилию',
                    value: '',
                    validator: {
                        maxLength: 255
                    },
                    error: null
                },
                phone: {
                    placeholder: 'Введите телефон',
                    value: '',
                    validator: {
                        maxLength: 11
                    },
                    error: null
                },
                email: {
                    placeholder: 'Введите email',
                    value: '',
                    validator: {
                        maxLength: 255
                    },
                    error: null
                }
            }
        }
    },
    components: {
        MyLabel,
        MyInput,
        MyTel,
        MyEmail
    },
    methods: {
        parentHandleForm ({ target, value }) {
            if (target === 'name') {
                const field = this.form[target]
                const validator = field.validator
                field.value = value
                if (validator.hasOwnProperty('maxLength')) {
                    if (value.length >= validator.maxLength) {
                        field.error = 'Введено слишком много символов'
                    }
                    if (value.length < validator.maxLength) {
                        field.error = ''
                    }
                    if (!value) {
                        field.error = 'Заполните поле'
                    }
                }
            }
            if (target === 'surname') {
                const field = this.form[target]
                const validator = field.validator
                field.value = value
                if (validator.hasOwnProperty('maxLength')) {
                    if (value.length >= validator.maxLength) {
                        field.error = 'Введено слишком много символов'
                    }
                    if (value.length < validator.maxLength) {
                        field.error = ''
                    }
                    if (!value) {
                        field.error = 'Заполните поле'
                    }
                }
            }
            if (target === 'phone') {
                const field = this.form[target]
                const validator = field.validator
                field.value = value
                if (validator.hasOwnProperty('maxLength')) {
                    if (value.length >= validator.maxLength) {
                        field.error = 'Введено слишком много символов'
                    }
                    if (value.length < validator.maxLength) {
                        field.error = ''
                    }
                    if (!value) {
                        field.error = 'Заполните поле'
                    }
                }
            }
            if (target === 'email') {
                const field = this.form[target]
                const validator = field.validator
                field.value = value
                if (validator.hasOwnProperty('maxLength')) {
                    if (value.length >= validator.maxLength) {
                        field.error = 'Введено слишком много символов'
                    }
                    if (value.length < validator.maxLength) {
                        field.error = ''
                    }
                    if (!value) {
                        field.error = 'Заполните поле'
                    }
                }
            }
        },
        CheckForm: function (e) {
            this.errors = []
            if (!this.form.name.value) {
                this.errors.push('Укажите имя')
                this.form.name.error = 'Укажите имя'
            }
            if (!this.form.surname.value) {
                this.errors.push('Укажите фамилию')
                this.form.surname.error = 'Укажите фамилию'
            }
            if (!this.form.phone.value) {
                this.errors.push('Укажите телефон')
                this.form.phone.error = 'Укажите телефон'
            }
            if (!this.form.email.value) {
                this.errors.push('Укажите email')
                this.form.email.error = 'Укажите email'
            }
            if (!this.errors.length) {
                return true
            }
            e.preventDefault()
        }
    }
}
</script>

<style scoped>
  button {
    color: aliceblue;
    border-radius: 1em;
    background-color: #2c3e50;
    font-size: 1.3em;
    padding: 0.7em;
    border-color: #2c3e50;
    outline: none;
  }
</style>
