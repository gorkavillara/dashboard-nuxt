import { useAuthStore } from "~/store/useAuthStore"

export default defineNuxtRouteMiddleware((to) => {
    return
    // si va a unas páginas que no requieren autenticación, adelante
    if (to.fullPath !== "/users" && to.fullPath !== "/posts") return

    // si no, tendrá que chequear si está autenticado
    const authorized = useAuthStore().isAuthenticated
    if (authorized) return

    return navigateTo("/login")
})