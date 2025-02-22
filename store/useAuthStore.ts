import { defineStore } from "pinia";
import type { User } from "~/models";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null as User | null,
        isAuthenticated: false
    }),
    actions: {
        login(user: User) {
            this.user = user
            this.isAuthenticated = true
        }
    }
})