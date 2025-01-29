<template>
  <div class="form-container">
    <Form @submit="submit" :validation-schema="schema">
      <Field name="username" placeholder="Nombre de usuario" />
      <ErrorMessage name="username" />
      <Field type="email" name="email" placeholder="Correo electrónico" />
      <ErrorMessage name="email" />
      <button type="submit">{{ $t("users.create") }}</button>
    </Form>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup"
import type { User } from "~/models";
import { useUserStore } from "~/store/useUserStore";

const { t } = useI18n()

const schema = yup.object({
    username: yup.string().required(t("users.form.username-required")).min(5, t("users.form.min-characters")),
    email: yup.string().required().email(t("users.form.email-format"))
})

const submit = (data: unknown) => {
    const user = data as User
    const addNewUser = useUserStore().addUser

    addNewUser(user)
    navigateTo("/users")
};
</script>
