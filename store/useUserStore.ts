import { initialUsers } from "~/assets/data"
import type { User } from "~/models"

export const useUserStore = defineStore("user", {
    state: () => ({
        users: initialUsers as User[]
    }),
    actions: {
        addUser(user: Omit<User, "id">) {
            const newId = this.users.length + 1
            this.users.push({ ...user, id: newId })
        }
    }
})