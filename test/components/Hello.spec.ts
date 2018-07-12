import {shallowMount} from "@vue/test-utils";
import {expect} from "chai";

import Hello from "../../src/components/Hello.vue";

describe("Hello component", () => {
    it("メッセージを表示する", () => {
        const wrapper = shallowMount(Hello);
        expect(wrapper.text()).to.be.include("Hello, Vue");
    });
});
