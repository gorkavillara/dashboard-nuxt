import { mount } from "@vue/test-utils"
import { test, expect } from "vitest"
import Header from "~/components/Header.vue"

test("Renderiza correctamente los enlaces de navegación", () => {
    const wrapper = mount(Header)

    const nav = wrapper.find("nav")
    expect(nav.element.children.length).toBe(3)
})