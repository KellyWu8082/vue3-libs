import { App } from "vue";
import MyComponent from "./components/my-component.vue";

export { MyComponent }

export default {
  install(app: App): void {
    app.component('MyComponent', MyComponent)
  }
} 